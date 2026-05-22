import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Phone, Send } from 'lucide-react'
import { SERVICES } from '@/entities/service/services'
import { SITE_CONFIG } from '@/shared/config/site'

interface FormState {
  name: string
  phone: string
  service: string
  message: string
}

const inputBase =
  'w-full px-4 py-3 rounded-xl border border-black/[0.1] bg-white focus:outline-none focus:border-[#FFCF21] focus:ring-2 focus:ring-[#FFCF21]/20 transition-all text-[#0D0D0D] text-[14px] font-medium placeholder-[#BDBDBD]'

const labelBase = 'block text-[12px] font-bold text-[#6B6B6B] mb-1.5 uppercase tracking-wide'

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center text-center py-8 gap-4"
      >
        <div className="w-14 h-14 bg-[#FFCF21] rounded-2xl flex items-center justify-center">
          <CheckCircle size={28} className="text-[#0D0D0D]" />
        </div>
        <h3 className="text-[20px] font-black text-[#0D0D0D]" style={{ fontFamily: 'Unbounded, sans-serif', letterSpacing: '-0.02em' }}>
          Заявку отримано!
        </h3>
        <p className="text-[14px] text-[#6B6B6B] max-w-[240px] leading-relaxed">
          Передзвонимо протягом 10 хвилин у робочий час.
        </p>
        <a
          href={`tel:${SITE_CONFIG.phone[0]}`}
          className="flex items-center gap-2 text-[16px] font-black text-[#0D0D0D] hover:text-[#6B6B6B] transition-colors mt-1"
          style={{ fontFamily: 'Unbounded, sans-serif' }}
        >
          <Phone size={18} />
          {SITE_CONFIG.phoneDisplay[0]}
        </a>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelBase}>Ваше імʼя</label>
          <input
            type="text"
            required
            placeholder="Іван"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputBase}
          />
        </div>
        <div>
          <label className={labelBase}>Телефон *</label>
          <input
            type="tel"
            required
            placeholder="+38 (0__) ___-__-__"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputBase}
          />
        </div>
      </div>

      <div>
        <label className={labelBase}>Тип пристрою</label>
        <select
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className={inputBase + ' appearance-none cursor-pointer'}
        >
          <option value="">Оберіть пристрій...</option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.id}>
              {s.icon} {s.titleFull}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelBase}>Опис проблеми</label>
        <textarea
          rows={3}
          placeholder="Не вмикається, розбитий екран, залив водою..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={inputBase + ' resize-none'}
        />
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-[#FFCF21] text-[#0D0D0D] font-black py-4 rounded-2xl text-[14px] flex items-center justify-center gap-2.5 hover:bg-[#E8B800] transition-colors disabled:opacity-60 shadow-[0_4px_20px_rgba(255,207,33,0.3)] hover:shadow-[0_4px_24px_rgba(255,207,33,0.45)]"
        style={{ fontFamily: 'Unbounded, sans-serif', letterSpacing: '-0.01em' }}
      >
        {loading ? (
          <span className="animate-pulse">Відправляємо...</span>
        ) : (
          <>
            <Send size={17} />
            Отримати безкоштовну діагностику
          </>
        )}
      </motion.button>

      <p className="text-[11px] text-center text-[#BDBDBD] font-medium">
        Передзвонимо за 10 хвилин у робочий час · Без спаму
      </p>
    </form>
  )
}
