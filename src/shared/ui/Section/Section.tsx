import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/shared/lib/animations'

interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  center?: boolean
  className?: string
}

export function SectionHeader({ label, title, subtitle, center = false, className = '' }: SectionHeaderProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={`mb-14 ${center ? 'text-center' : ''} ${className}`}
    >
      {label && (
        <motion.p variants={fadeUp} className="section-label mb-4">
          {label}
        </motion.p>
      )}
      <motion.h2 variants={fadeUp} className="section-title mb-4">
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`text-[#6B6B6B] text-lg leading-relaxed ${center ? 'max-w-xl mx-auto' : 'max-w-2xl'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}

interface AnimatedProps {
  children: React.ReactNode
  className?: string
  delay?: number
  variants?: import('framer-motion').Variants
}

export function Animated({ children, className = '', delay = 0, variants }: AnimatedProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const v = variants ?? fadeUp

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: v.hidden,
        visible: {
          ...(v.visible as object),
          transition: {
            ...((v.visible as { transition?: object })?.transition ?? {}),
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedGroup({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedItem({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  )
}
