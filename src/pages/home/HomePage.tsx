import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Phone, MapPin, Star, ChevronRight, Clock, Shield, CheckCircle, Award, Wrench, ExternalLink } from 'lucide-react'
import { SeoHead } from '@/widgets/seo-head/SeoHead'
import { ContactForm } from '@/features/contact-form/ContactForm'
import { ReviewSlider } from '@/features/review-slider/ReviewSlider'
import { FaqAccordion } from '@/features/faq-accordion/FaqAccordion'
import { SectionHeader, AnimatedGroup, AnimatedItem, Animated } from '@/shared/ui/Section/Section'
import { SERVICES } from '@/entities/service/services'
import { SITE_CONFIG } from '@/shared/config/site'
import { buildLocalBusinessSchema } from '@/shared/lib/seo'
import { slideLeft, slideRight} from '@/shared/lib/animations'

/* ── Animated stat counter ─────────────────────────────────── */
function StatCounter({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <div className="text-[2.6rem] md:text-[3.2rem] font-black leading-none text-white mb-1.5" style={{ fontFamily: 'Unbounded, sans-serif', letterSpacing: '-0.03em' }}>
        {value.toLocaleString('uk-UA')}{suffix}
      </div>
      <div className="text-[12px] text-white/45 font-semibold tracking-wide uppercase">{label}</div>
    </motion.div>
  )
}

/* ── Hero particle dots (decorative) ───────────────────────── */
function HeroDots() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#FFCF21]"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
            opacity: 0.25 + (i % 3) * 0.15,
          }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
        />
      ))}
    </div>
  )
}

export function HomePage() {
  const schema = buildLocalBusinessSchema()

  const steps = [
    { num: '01', title: 'Приносите пристрій', desc: 'Без черги і без запису. Вул. Княжий Затон, 11 — 5 хв від метро Осокорки.' },
    { num: '02', title: 'Безкоштовна діагностика', desc: 'Майстер визначає причину несправності за 30–60 хв. Без оплати і зобовʼязань.' },
    { num: '03', title: 'Погоджуєте ціну', desc: 'Озвучуємо точну вартість до початку роботи. Починаємо тільки після вашого ОК.' },
    { num: '04', title: 'Забираєте справний пристрій', desc: 'Більшість ремонтів — 1–2 дні. Видаємо гарантійний талон.' },
  ]

  const advantages = [
    { icon: Clock, title: 'Ремонт за 1–2 дні', desc: 'Без телефону або ноутбука сучасна людина не може нормально працювати — розуміємо це.' },
    { icon: MapPin, title: 'Біля метро Осокорки', desc: 'Вул. Княжий Затон, 11 — зручно з Лівого берега і від метро Позняки.' },
    { icon: Shield, title: 'Гарантія 90 днів', desc: 'Якщо проблема повернеться — усуваємо безкоштовно. Без зайвих питань.' },
    { icon: CheckCircle, title: 'Діагностика безкоштовна', desc: 'Ви нічого не платите, поки не отримаєте точну ціну і не погодите ремонт.' },
    { icon: Award, title: 'Фіксована ціна', desc: 'Вартість погоджується до початку роботи. Жодних доплат у процесі.' },
    { icon: Wrench, title: 'Оригінальні запчастини', desc: 'Тільки оригінальні або сертифіковані аналоги від перевірених постачальників.' },
  ]

  const faqs = [
    { q: 'Скільки коштує діагностика?', a: 'Діагностика безкоштовна. Ви нічого не платите, якщо вирішуєте не ремонтувати.' },
    { q: 'Як швидко відремонтуєте?', a: 'Більшість ремонтів — 1–2 дні. Складні випадки (заміна матриці ТВ, мікроконтролерний ремонт) — 3–5 днів.' },
    { q: 'Чи є гарантія на ремонт?', a: 'Так, 90 днів на всі роботи. Якщо поломка повернеться з тієї ж причини — ремонтуємо безкоштовно.' },
    { q: 'Чи можна здати пристрій без запису?', a: 'Так, приймаємо без попереднього запису у робочий час. Черг зазвичай немає.' },
    { q: 'Чи ремонтуєте після заливання водою?', a: 'Так, це один з найчастіших ремонтів. Головне — принести якомога швидше і не вмикати пристрій після заливання.' },
    { q: 'Яка різниця між оригінальними та аналоговими запчастинами?', a: 'Оригінальні — від виробника пристрою, найнадійніші. Аналоги — сертифіковані копії за нижчою ціною. Завжди пропонуємо вибір і пояснюємо різницю.' },
  ]

  return (
    <>
      <SeoHead canonical={SITE_CONFIG.url} schema={schema} />

      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative pt-[120px] md:pt-[140px] pb-[80px] md:pb-[100px] bg-white overflow-hidden">
        <HeroDots />

        {/* Background accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFCF21]/[0.07] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" aria-hidden />

        <div className="container-main relative">
          <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-12 xl:gap-16 items-start">
            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-[#FFCF21]/[0.15] text-[#0D0D0D] px-4 py-2 rounded-full text-[12px] font-bold mb-7 tracking-wide uppercase"
              >
                <Star size={13} fill="#FFCF21" stroke="#FFCF21" />
                Сервісний центр з 2014 · 18 000+ ремонтів
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="text-[2.6rem] md:text-[3.4rem] xl:text-[4rem] font-black leading-[1.08] text-[#0D0D0D] mb-6"
                style={{ fontFamily: 'Unbounded, sans-serif', letterSpacing: '-0.03em' }}
              >
                Ремонт<br />
                телефонів,{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">ноутбуків</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-1 left-0 right-0 h-3 bg-[#FFCF21] -z-0 origin-left rounded-sm"
                  />
                </span>
                <br />і телевізорів
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[17px] text-[#6B6B6B] mb-8 leading-relaxed max-w-lg"
              >
                Безкоштовна діагностика. Результат за 1–2 дні.<br />
                Гарантія 90 днів. Без передоплати.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 mb-8"
              >
                <a
                  href="#contact"
                  className="bg-[#FFCF21] text-[#0D0D0D] font-bold px-7 py-3.5 rounded-2xl text-[15px] text-center hover:bg-[#E8B800] transition-colors shadow-[0_4px_20px_rgba(255,207,33,0.35)] hover:shadow-[0_4px_24px_rgba(255,207,33,0.5)]"
                >
                  Залишити заявку
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone[0]}`}
                  className="flex items-center justify-center gap-2.5 border-2 border-[#0D0D0D] text-[#0D0D0D] font-bold px-7 py-3.5 rounded-2xl text-[15px] hover:bg-[#0D0D0D] hover:text-white transition-all"
                >
                  <Phone size={17} />
                  {SITE_CONFIG.phoneDisplay[0]}
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex flex-wrap gap-5"
              >
                {['✓ Без передоплати', '✓ Гарантія 90 днів', '✓ Оригінальні запчастини'].map((t) => (
                  <span key={t} className="text-[13px] font-semibold text-[#6B6B6B]">{t}</span>
                ))}
              </motion.div>
            </div>

            {/* Right — contact form card */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#F6F5F2] rounded-3xl p-8 border border-black/[0.05]"
            >
              <p className="section-label mb-2">Безкоштовно</p>
              <h2 className="text-[22px] font-black mb-1.5 text-[#0D0D0D]" style={{ fontFamily: 'Unbounded, sans-serif', letterSpacing: '-0.02em' }}>
                Залишити заявку
              </h2>
              <p className="text-[13px] text-[#9A9A9A] mb-6">Передзвонимо за 10 хвилин</p>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#0D0D0D] py-14">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <StatCounter value={18000} suffix="+" label="пристроїв відремонтовано" />
            <StatCounter value={10} suffix=" років" label="на ринку Києва" />
            <StatCounter value={90} suffix=" днів" label="гарантія на роботи" />
            <StatCounter value={4.9} suffix="★" label="середня оцінка Google" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SERVICES
      ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeader
            label="Напрямки"
            title="Що ремонтуємо"
            subtitle="Оберіть тип вашого пристрою — перейдете на сторінку з деталями, цінами та FAQ."
          />

          <AnimatedGroup className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SERVICES.map((service) => (
              <AnimatedItem key={service.id}>
                <Link
                  to={service.slug}
                  className="group flex flex-col bg-white border border-black/[0.07] hover:border-[#FFCF21] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-2xl p-5 gap-3 transition-all duration-300"
                >
                  <span className="text-[2.2rem] leading-none">{service.icon}</span>
                  <div>
                    <h3 className="font-black text-[14px] text-[#0D0D0D] mb-0.5 leading-tight" style={{ fontFamily: 'Unbounded, sans-serif', letterSpacing: '-0.01em' }}>
                      {service.titleFull}
                    </h3>
                    <p className="text-[12px] text-[#9A9A9A] leading-snug">{service.description}</p>
                  </div>
                  <div className="mt-auto pt-3 border-t border-black/[0.05] flex items-center justify-between">
                    <span className="text-[12px] font-bold text-[#0D0D0D]">від {service.priceFrom} грн</span>
                    <ChevronRight size={14} className="text-[#C4C4C4] group-hover:text-[#0D0D0D] group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              </AnimatedItem>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[#F6F5F2]">
        <div className="container-main">
          <SectionHeader
            label="Процес"
            title="Як ми працюємо"
            subtitle="Чотири кроки — від дзвінка до готового пристрою"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <Animated key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 h-full relative overflow-hidden border border-black/[0.05]">
                  <div
                    className="absolute -top-2 -right-2 text-[5.5rem] font-black leading-none select-none pointer-events-none"
                    style={{ fontFamily: 'Unbounded, sans-serif', color: 'rgba(0,0,0,0.04)' }}
                  >
                    {step.num}
                  </div>
                  <div className="relative">
                    <div className="w-9 h-9 bg-[#FFCF21] rounded-xl flex items-center justify-center font-black text-[#0D0D0D] text-[13px] mb-4" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                      {i + 1}
                    </div>
                    <h3 className="font-black text-[15px] text-[#0D0D0D] mb-2 leading-tight" style={{ fontFamily: 'Unbounded, sans-serif', letterSpacing: '-0.01em' }}>
                      {step.title}
                    </h3>
                    <p className="text-[13px] text-[#6B6B6B] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHY US
      ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Animated variants={slideLeft}>
              <p className="section-label mb-4">Переваги</p>
              <h2 className="section-title mb-5">
                Десять років<br />репутації —<br />не маркетинг
              </h2>
              <p className="text-[16px] text-[#6B6B6B] leading-relaxed mb-8">
                Клієнти повертаються і приводять знайомих. Ось чому нам довіряють ремонт щодня.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#FFCF21] text-[#0D0D0D] font-bold px-6 py-3.5 rounded-2xl text-[14px] hover:bg-[#E8B800] transition-colors"
              >
                Залишити заявку <ChevronRight size={16} />
              </a>
            </Animated>

            <AnimatedGroup className="grid sm:grid-cols-2 gap-4">
              {advantages.map((adv, i) => (
                <AnimatedItem key={i}>
                  <div className="flex gap-4 p-5 rounded-2xl bg-[#F6F5F2] border border-black/[0.04] hover:border-[#FFCF21]/50 transition-colors">
                    <div className="w-10 h-10 bg-[#FFCF21]/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <adv.icon size={19} className="text-[#0D0D0D]" />
                    </div>
                    <div>
                      <h3 className="font-black text-[13px] text-[#0D0D0D] mb-1 leading-tight" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                        {adv.title}
                      </h3>
                      <p className="text-[12px] text-[#9A9A9A] leading-relaxed">{adv.desc}</p>
                    </div>
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedGroup>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          REVIEWS SLIDER
      ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[#0D0D0D]">
        <div className="container-main">
          <div className="grid lg:grid-cols-[1fr_520px] gap-14 items-start">
            <Animated variants={slideLeft}>
              <p className="section-label text-white/35 mb-4">Відгуки</p>
              <h2 className="section-title text-white mb-5">
                Що кажуть<br />клієнти
              </h2>
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFCF21" stroke="#FFCF21" />
                ))}
                <span className="text-white/50 text-[14px] ml-1 font-semibold">4.9 · 312 відгуків</span>
              </div>
              <a
                href="https://g.page/cyfra-service"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/50 hover:text-white transition-colors border border-white/[0.1] px-4 py-2 rounded-xl hover:border-white/30"
              >
                Всі відгуки на Google Maps
                <ExternalLink size={13} />
              </a>
            </Animated>

            <Animated variants={slideRight}>
              <ReviewSlider />
            </Animated>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[#F6F5F2]">
        <div className="container-main">
          <div className="grid lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-14 items-start">
            <Animated variants={slideLeft}>
              <p className="section-label mb-4">Питання</p>
              <h2 className="section-title mb-5">
                Питання<br />і відповіді
              </h2>
              <p className="text-[15px] text-[#6B6B6B] leading-relaxed mb-8">
                Не знайшли відповідь? Зателефонуйте — відповімо за хвилину.
              </p>
              <a
                href={`tel:${SITE_CONFIG.phone[0]}`}
                className="inline-flex items-center gap-2.5 font-bold text-[15px] text-[#0D0D0D] hover:text-[#FFCF21] transition-colors"
              >
                <Phone size={18} />
                {SITE_CONFIG.phoneDisplay[0]}
              </a>
            </Animated>

            <Animated variants={slideRight}>
              <FaqAccordion items={faqs} />
            </Animated>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════ */}
      <section id="contact" className="section-padding bg-[#FFCF21]">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">
            <Animated variants={slideLeft}>
              <p className="section-label text-[#0D0D0D]/50 mb-4">Заявка</p>
              <h2 className="section-title mb-5">
                Ваш пристрій<br />зламався?<br />Ми полагодимо.
              </h2>
              <p className="text-[16px] text-[#0D0D0D]/65 mb-8 leading-relaxed">
                Залиште номер — передзвонимо за 10 хвилин.<br />
                Або зателефонуйте прямо зараз:
              </p>
              <div className="space-y-3 mb-8">
                {SITE_CONFIG.phone.map((p, i) => (
                  <a key={p} href={`tel:${p}`} className="flex items-center gap-3 text-[18px] font-black text-[#0D0D0D] hover:text-[#0D0D0D]/60 transition-colors" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                    <Phone size={20} />
                    {SITE_CONFIG.phoneDisplay[i]}
                  </a>
                ))}
              </div>
              <div className="flex items-start gap-3 text-[13px] text-[#0D0D0D]/55 font-medium">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#0D0D0D]/80">{SITE_CONFIG.address}</span><br />
                  Пн–Пт: 10:00–20:00 · Сб: 11:00–18:00
                </div>
              </div>
            </Animated>

            <Animated variants={slideRight}>
              <div className="bg-white rounded-3xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
                <h3 className="text-[20px] font-black mb-1 text-[#0D0D0D]" style={{ fontFamily: 'Unbounded, sans-serif', letterSpacing: '-0.02em' }}>
                  Безкоштовна діагностика
                </h3>
                <p className="text-[13px] text-[#9A9A9A] mb-6">Передзвонимо за 10 хвилин</p>
                <ContactForm />
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MAP
      ═══════════════════════════════════════════════════════ */}
      <Animated>
        <section className="section-padding bg-white">
          <div className="container-main">
            <SectionHeader
              label="Адреса"
              title="Як нас знайти"
              subtitle="вул. Княжий Затон, 11 · 5 хв від метро Осокорки"
            />
            <div className="rounded-3xl overflow-hidden h-[300px] md:h-[420px] border border-black/[0.06]">
              <iframe
                title="Розташування сервісного центру Цифра"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.0!2d30.641!3d50.402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCyfra+Service!5e0!3m2!1suk!2sua!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </Animated>
    </>
  )
}
