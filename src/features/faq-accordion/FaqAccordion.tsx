import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

interface FaqItem {
  q: string
  a: string
}

interface FaqAccordionProps {
  items: FaqItem[]
}

function FaqRow({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className={`border-b border-black/[0.07] last:border-0 transition-colors ${isOpen ? 'bg-[#FFCF21]/[0.06]' : ''} rounded-2xl`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className={`font-bold text-[15px] leading-snug transition-colors ${isOpen ? 'text-[#0D0D0D]' : 'text-[#0D0D0D]/80'}`}>
          {item.q}
        </span>
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
          isOpen ? 'bg-[#FFCF21] text-[#0D0D0D]' : 'bg-black/[0.05] text-[#0D0D0D]/50'
        }`}>
          {isOpen ? <Minus size={15} /> : <Plus size={15} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-[14px] text-[#6B6B6B] leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="bg-white border border-black/[0.07] rounded-3xl overflow-hidden divide-y divide-black/[0.05]">
      {items.map((item, i) => (
        <FaqRow
          key={i}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  )
}
