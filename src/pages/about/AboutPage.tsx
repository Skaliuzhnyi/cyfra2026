import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Award, Users, Clock, MapPin } from 'lucide-react'
import { SeoHead } from '@/widgets/seo-head/SeoHead'
import { SITE_CONFIG } from '@/shared/config/site'
import { buildLocalBusinessSchema } from '@/shared/lib/seo'

export function AboutPage() {
  const schema = buildLocalBusinessSchema()

  const milestones = [
    { year: '2014', text: 'Відкриття сервісного центру на Осокорках. Перший ремонт — телефон Nokia.' },
    { year: '2016', text: 'Розширення напрямків: додали ремонт ноутбуків та планшетів.' },
    { year: '2018', text: 'Перші 5 000 відремонтованих пристроїв. Запуск ремонту телевізорів.' },
    { year: '2020', text: 'Перехід на оригінальні запчастини для iPhone та Samsung Galaxy.' },
    { year: '2022', text: 'Розширення команди — тепер 4 кваліфіковані майстри.' },
    { year: '2024', text: '18 000+ відновлених пристроїв. Рейтинг 4.9★ на Google Maps.' },
  ]

  const team = [
    { name: 'Олег', role: 'Старший майстер', spec: 'iPhone, Samsung · 8 років досвіду' },
    { name: 'Дмитро', role: 'Майстер по ноутбуках', spec: 'MacBook, Lenovo, HP · 6 років' },
    { name: 'Сергій', role: 'Майстер по телевізорах', spec: 'Samsung, LG, Sony · 7 років' },
    { name: 'Іван', role: 'Універсальний майстер', spec: 'Консолі, навушники · 4 роки' },
  ]

  return (
    <>
      <SeoHead
        title="Про сервісний центр Цифра — 10 років, 18 000+ ремонтів | Київ"
        description="Сервісний центр Цифра працює з 2014 року. Відновили 18 000+ пристроїв. Команда досвідчених майстрів. Вул. Княжий Затон, 11, Київ."
        canonical={`${SITE_CONFIG.url}/pro-nas/`}
        schema={schema}
      />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-[#F9F9F9]">
        <div className="container-main">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#0A0A0A] transition-colors">Головна</Link>
            <ChevronRight size={14} />
            <span className="text-[#0A0A0A] font-medium">Про нас</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="section-padding bg-[#F9F9F9]">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl font-black text-[#0A0A0A] leading-tight mb-6">
                Десять років<br />
                <span className="text-[#FFCF21] [-webkit-text-stroke:2px_#0A0A0A]">одного ремонту</span><br />
                за раз
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ми не обіцяємо золотих гір. Ми просто добре ремонтуємо техніку — швидко, чесно і з гарантією. З 2014 року.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, val: '18 000+', label: 'пристроїв відновлено' },
                  { icon: Clock, val: '10 років', label: 'на ринку Києва' },
                  { icon: Users, val: '4 майстри', label: 'кваліфікованих спеціалісти' },
                  { icon: MapPin, val: 'Осокорки', label: 'зручне розташування' },
                ].map((s, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#FFCF21]/20 rounded-xl flex items-center justify-center">
                      <s.icon size={20} className="text-[#0A0A0A]" />
                    </div>
                    <div>
                      <div className="font-black text-[#0A0A0A]">{s.val}</div>
                      <div className="text-xs text-gray-500">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-[#0A0A0A] rounded-3xl p-8 text-white"
            >
              <h2 className="text-2xl font-black mb-6">Наші принципи</h2>
              {[
                { n: '01', t: 'Чесна ціна до початку', d: 'Ніколи не беремося за ремонт, поки клієнт не схвалив вартість. Без здивувань в кінці.' },
                { n: '02', t: 'Безкоштовна діагностика', d: 'Якщо вирішили не ремонтувати — нічого не платите. Жодних умов.' },
                { n: '03', t: 'Оригінальні запчастини', d: 'Не економимо на деталях. Пристрій повинен служити, а не повертатися через тиждень.' },
                { n: '04', t: 'Гарантія 90 днів', d: 'Якщо поломка повернеться — безкоштовно виправимо. Слово майстра.' },
              ].map((p) => (
                <div key={p.n} className="flex gap-4 mb-5 last:mb-0">
                  <div className="text-[#FFCF21] font-black text-sm shrink-0 pt-0.5">{p.n}</div>
                  <div>
                    <div className="font-bold text-white mb-1">{p.t}</div>
                    <div className="text-gray-400 text-sm leading-relaxed">{p.d}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-main">
          <h2 className="text-3xl font-black text-[#0A0A0A] mb-10">Наша історія</h2>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-8 items-start"
                >
                  <div className="shrink-0 w-24 md:w-32 text-right">
                    <span className="inline-block bg-[#FFCF21] text-[#0A0A0A] font-black px-3 py-1 rounded-lg text-sm">
                      {m.year}
                    </span>
                  </div>
                  <div className="hidden md:block w-4 h-4 rounded-full bg-[#0A0A0A] border-4 border-white shadow mt-0.5 shrink-0 relative z-10" />
                  <p className="text-gray-600 leading-relaxed pt-0.5">{m.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-[#F9F9F9]">
        <div className="container-main">
          <h2 className="text-3xl font-black text-[#0A0A0A] mb-10">Наші майстри</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-[#FFCF21] rounded-2xl flex items-center justify-center text-2xl font-black text-[#0A0A0A] mx-auto mb-4">
                  {member.name[0]}
                </div>
                <h3 className="font-bold text-[#0A0A0A] text-lg">{member.name}</h3>
                <div className="text-[#0A0A0A]/60 font-medium text-sm mb-2">{member.role}</div>
                <div className="text-gray-400 text-xs leading-relaxed">{member.spec}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-[#0A0A0A] mb-6">Де нас знайти</h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex gap-3">
                  <MapPin size={20} className="text-[#0A0A0A] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#0A0A0A]">Адреса</div>
                    <div>{SITE_CONFIG.address}</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock size={20} className="text-[#0A0A0A] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#0A0A0A]">Графік роботи</div>
                    <div>Понеділок–П'ятниця: 10:00–20:00</div>
                    <div>Субота: 11:00–18:00</div>
                    <div className="text-gray-400 text-sm mt-1">Неділя — вихідний</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href={SITE_CONFIG.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FFCF21] text-[#0A0A0A] font-bold px-5 py-3 rounded-xl hover:bg-[#E8B800] transition-colors text-sm"
                >
                  Відкрити на Google Maps
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone[0]}`}
                  className="flex items-center gap-2 border-2 border-[#0A0A0A] font-semibold px-5 py-3 rounded-xl hover:bg-[#0A0A0A] hover:text-white transition-all text-sm"
                >
                  Зателефонувати
                </a>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden h-72 bg-gray-100">
              <iframe
                title="Карта розташування Цифра"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.0!2d30.641!3d50.402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQ3lmcmE!5e0!3m2!1suk!2sua"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
