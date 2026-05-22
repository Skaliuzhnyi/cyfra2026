import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { REVIEWS } from '@/entities/review/reviews'

export function ReviewSlider() {
  const [active, setActive] = useState(0)
  const [dir, setDir] = useState(1)
  const [paused, setPaused] = useState(false)
  const total = REVIEWS.length
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = useCallback(
    (idx: number, direction: number) => {
      setDir(direction)
      setActive((idx + total) % total)
    },
    [total]
  )

  const next = useCallback(() => go(active + 1, 1), [active, go])
  const prev = useCallback(() => go(active - 1, -1), [active, go])

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(next, 5000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [paused, next])

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
    exit: (d: number) => ({ opacity: 0, x: d * -60, transition: { duration: 0.3 } }),
  }

  const review = REVIEWS[active]

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Main card */}
      <div className="relative overflow-hidden rounded-3xl bg-white/[0.07] border border-white/[0.1] min-h-[240px] flex flex-col">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={active}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="p-8 md:p-10 flex flex-col h-full"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={16} fill="#FFCF21" stroke="#FFCF21" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-white/80 text-[16px] md:text-[17px] leading-relaxed mb-6 flex-1">
              "{review.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FFCF21] flex items-center justify-center font-bold text-[#0D0D0D] text-[13px]">
                {review.name[0]}
              </div>
              <div>
                <p className="font-bold text-white text-[14px]">{review.name}</p>
                <p className="text-white/40 text-[12px]">{review.service}</p>
              </div>
              <div className="ml-auto text-white/30 text-[12px]">
                {new Date(review.date).toLocaleDateString('uk-UA', { month: 'long', year: 'numeric' })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-between mt-6">
        {/* Dots */}
        <div className="flex gap-2">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > active ? 1 : -1)}
              className={`transition-all duration-300 rounded-full ${
                i === active
                  ? 'w-7 h-2 bg-[#FFCF21]'
                  : 'w-2 h-2 bg-white/25 hover:bg-white/50'
              }`}
              aria-label={`Відгук ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-xl bg-white/[0.07] hover:bg-white/[0.14] border border-white/[0.1] flex items-center justify-center transition-all text-white/60 hover:text-white"
            aria-label="Попередній"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-xl bg-white/[0.07] hover:bg-white/[0.14] border border-white/[0.1] flex items-center justify-center transition-all text-white/60 hover:text-white"
            aria-label="Наступний"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-[2px] bg-white/10 rounded-full overflow-hidden">
        {!paused && (
          <motion.div
            key={active}
            className="h-full bg-[#FFCF21]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 5, ease: 'linear' }}
          />
        )}
      </div>
    </div>
  )
}
