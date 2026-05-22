import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Send, ChevronRight } from 'lucide-react'
import { SeoHead } from '@/widgets/seo-head/SeoHead'
import { ContactForm } from '@/features/contact-form/ContactForm'
import { SITE_CONFIG } from '@/shared/config/site'

export function ContactsPage() {
  return (
    <>
      <SeoHead
        title="Контакти сервісного центру Цифра | Київ, Осокорки"
        description="Сервісний центр Цифра: вул. Княжий Затон, 11, Київ. Метро Осокорки. Телефони: +38 067 888 04 22. Пн–Пт: 10:00–20:00, Сб: 11:00–18:00."
        canonical={`${SITE_CONFIG.url}/kontakty/`}
      />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-[#F9F9F9]">
        <div className="container-main">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#0A0A0A] transition-colors">Головна</Link>
            <ChevronRight size={14} />
            <span className="text-[#0A0A0A] font-medium">Контакти</span>
          </nav>
        </div>
      </div>

      <section className="section-padding bg-[#F9F9F9]">
        <div className="container-main">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-[#0A0A0A] mb-12"
          >
            Контакти
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              {/* Phone */}
              <div className="bg-white rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#FFCF21]/20 rounded-xl flex items-center justify-center">
                    <Phone size={20} className="text-[#0A0A0A]" />
                  </div>
                  <h2 className="font-bold text-[#0A0A0A] text-lg">Телефони</h2>
                </div>
                <div className="space-y-3">
                  {SITE_CONFIG.phone.map((p, i) => (
                    <a
                      key={p}
                      href={`tel:${p}`}
                      className="block text-xl font-bold text-[#0A0A0A] hover:text-[#FFCF21] transition-colors"
                    >
                      {SITE_CONFIG.phoneDisplay[i]}
                    </a>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  <a
                    href={SITE_CONFIG.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#2AABEE] text-white font-semibold px-4 py-2 rounded-xl text-sm hover:opacity-90 transition-opacity"
                  >
                    <Send size={16} />
                    Telegram
                  </a>
                  <a
                    href={SITE_CONFIG.viber}
                    className="flex items-center gap-2 bg-[#7360F2] text-white font-semibold px-4 py-2 rounded-xl text-sm hover:opacity-90 transition-opacity"
                  >
                    Viber
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#FFCF21]/20 rounded-xl flex items-center justify-center">
                    <MapPin size={20} className="text-[#0A0A0A]" />
                  </div>
                  <h2 className="font-bold text-[#0A0A0A] text-lg">Адреса</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-1 font-medium">{SITE_CONFIG.address}</p>
                <p className="text-gray-500 text-sm mb-4">
                  Пішки від метро Осокорки (5 хв) та Позняки (10 хв).<br />
                  Поруч з проспектом Петра Григоренка та вул. Анни Ахматової.
                </p>
                <a
                  href={SITE_CONFIG.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0A] underline underline-offset-2 hover:no-underline"
                >
                  Відкрити на Google Maps
                  <ChevronRight size={14} />
                </a>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#FFCF21]/20 rounded-xl flex items-center justify-center">
                    <Clock size={20} className="text-[#0A0A0A]" />
                  </div>
                  <h2 className="font-bold text-[#0A0A0A] text-lg">Графік роботи</h2>
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    { day: 'Понеділок – П\'ятниця', hours: '10:00 – 20:00' },
                    { day: 'Субота', hours: '11:00 – 18:00' },
                    { day: 'Неділя', hours: 'Вихідний' },
                  ].map((row) => (
                    <div key={row.day} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                      <span className="text-gray-600">{row.day}</span>
                      <span className={`font-semibold ${row.hours === 'Вихідний' ? 'text-gray-400' : 'text-[#0A0A0A]'}`}>
                        {row.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl p-8 border border-gray-100 sticky top-24">
                <h2 className="text-2xl font-black text-[#0A0A0A] mb-2">Залишити заявку</h2>
                <p className="text-gray-500 text-sm mb-6">
                  Передзвонимо протягом 10 хвилин у робочий час
                </p>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="h-80 bg-gray-100">
        <iframe
          title="Карта: як доїхати до сервісного центру Цифра"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.0!2d30.641!3d50.402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCyfra!5e0!3m2!1suk!2sua"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  )
}
