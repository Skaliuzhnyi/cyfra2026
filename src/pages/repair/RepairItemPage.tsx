import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Phone, CheckCircle, Clock, Shield } from 'lucide-react'
import { SeoHead } from '@/widgets/seo-head/SeoHead'
import { ContactForm } from '@/features/contact-form/ContactForm'
import { FaqAccordion } from '@/features/faq-accordion/FaqAccordion'
import { SectionHeader, AnimatedGroup, AnimatedItem, Animated } from '@/shared/ui/Section/Section'
import { SERVICES } from '@/entities/service/services'
import { SITE_CONFIG } from '@/shared/config/site'
import { buildServiceSchema, buildBreadcrumbSchema } from '@/shared/lib/seo'
import { slideLeft, slideRight } from '@/shared/lib/animations'

export function RepairItemPage() {
  const { serviceId } = useParams<{ serviceId: string }>()
  const service = SERVICES.find((s) => s.id === serviceId)
  if (!service) return <Navigate to="/remont" replace />

  const schemas = [
    buildServiceSchema(service.titleFull, service.seoDescription, `${SITE_CONFIG.url}${service.slug}`),
    buildBreadcrumbSchema([
      { name: 'Головна', url: SITE_CONFIG.url },
      { name: 'Ремонт', url: `${SITE_CONFIG.url}/remont/` },
      { name: service.titleFull, url: `${SITE_CONFIG.url}${service.slug}` },
    ]),
  ]

  return (
    <>
      <SeoHead
        title={service.seoTitle}
        description={service.seoDescription}
        canonical={`${SITE_CONFIG.url}${service.slug}`}
        schema={schemas}
      />

      {/* Breadcrumb */}
      <div className="pt-[88px] border-b border-black/[0.05] bg-white">
        <div className="container-main py-4">
          <nav className="flex items-center gap-2 text-[12px] text-[#9A9A9A]">
            <Link to="/" className="hover:text-[#0D0D0D] transition-colors font-medium">Головна</Link>
            <ChevronRight size={12} />
            <Link to="/remont" className="hover:text-[#0D0D0D] transition-colors font-medium">Ремонт</Link>
            <ChevronRight size={12} />
            <span className="text-[#0D0D0D] font-semibold">{service.titleFull}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="section-padding bg-[#F6F5F2]">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
            <Animated variants={slideLeft}>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2.5 bg-[#FFCF21]/20 px-4 py-2 rounded-full text-[12px] font-bold text-[#0D0D0D] mb-5 uppercase tracking-wide"
              >
                <span className="text-[18px]">{service.icon}</span>
                Сервісний центр Цифра
              </motion.div>

              <h1 className="section-title mb-4">
                {service.titleFull}<br />у Києві
              </h1>
              <p className="text-[16px] text-[#6B6B6B] mb-8 leading-relaxed">{service.description}</p>

              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { val: `від ${service.priceFrom} грн`, lbl: 'вартість' },
                  { val: `${service.daysMin}–${service.daysMax} дні`, lbl: 'термін' },
                  { val: `${service.warrantyDays} днів`, lbl: 'гарантія' },
                ].map(({ val, lbl }) => (
                  <div key={lbl} className="bg-white rounded-2xl p-4 text-center border border-black/[0.05]">
                    <div className="font-black text-[13px] text-[#0D0D0D] leading-tight mb-0.5" style={{ fontFamily: 'Unbounded, sans-serif' }}>{val}</div>
                    <div className="text-[11px] text-[#BDBDBD]">{lbl}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <a href="#contact" className="bg-[#FFCF21] text-[#0D0D0D] font-bold px-6 py-3.5 rounded-2xl text-[14px] hover:bg-[#E8B800] transition-colors">
                  Залишити заявку
                </a>
                <a href={`tel:${SITE_CONFIG.phone[0]}`} className="flex items-center gap-2 border-2 border-[#0D0D0D] font-bold px-6 py-3.5 rounded-2xl text-[14px] hover:bg-[#0D0D0D] hover:text-white transition-all">
                  <Phone size={17} />Зателефонувати
                </a>
              </div>
            </Animated>

            <Animated variants={slideRight}>
              <div className="bg-white rounded-3xl p-8 border border-black/[0.05]">
                <p className="section-label mb-2">Безкоштовно</p>
                <h2 className="text-[20px] font-black mb-1.5 text-[#0D0D0D]" style={{ fontFamily: 'Unbounded, sans-serif', letterSpacing: '-0.02em' }}>
                  Безкоштовна діагностика
                </h2>
                <p className="text-[13px] text-[#9A9A9A] mb-6">Передзвонимо за 10 хвилин</p>
                <ContactForm />
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeader label="Роботи" title={`Що входить в ${service.titleFull.toLowerCase()}`} />
          <AnimatedGroup className="grid md:grid-cols-2 gap-3">
            {service.features.map((f, i) => (
              <AnimatedItem key={i}>
                <div className="flex items-center gap-3 p-4 bg-[#F6F5F2] rounded-2xl border border-black/[0.04]">
                  <CheckCircle size={18} className="text-[#0D0D0D] shrink-0" />
                  <span className="font-semibold text-[14px] text-[#0D0D0D]">{f}</span>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* Guarantee strip */}
      <section className="py-10 bg-[#FFCF21]">
        <div className="container-main">
          <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
            {[
              { icon: Clock, text: `Ремонт за ${service.daysMin}–${service.daysMax} дні` },
              { icon: Shield, text: `Гарантія ${service.warrantyDays} днів` },
              { icon: CheckCircle, text: 'Безкоштовна діагностика' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex flex-col items-center gap-2">
                <Icon size={22} className="text-[#0D0D0D]" />
                <div className="font-black text-[12px] md:text-[14px] text-[#0D0D0D] leading-tight" style={{ fontFamily: 'Unbounded, sans-serif' }}>{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[#F6F5F2]">
        <div className="container-main">
          <div className="grid lg:grid-cols-[380px_1fr] gap-14 items-start">
            <Animated variants={slideLeft}>
              <p className="section-label mb-4">FAQ</p>
              <h2 className="section-title mb-4">Часті питання</h2>
              <p className="text-[15px] text-[#6B6B6B] leading-relaxed">
                Не знайшли відповідь? Зателефонуйте — відповімо за хвилину.
              </p>
            </Animated>
            <Animated variants={slideRight}>
              <FaqAccordion items={service.faq} />
            </Animated>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="section-padding bg-[#0D0D0D]">
        <div className="container-main max-w-2xl mx-auto text-center">
          <Animated>
            <p className="section-label text-white/30 mb-4">Заявка</p>
            <h2 className="section-title text-white mb-4">
              Потрібен {service.titleFull.toLowerCase()}?
            </h2>
            <p className="text-[#6B6B6B] mb-8 text-[15px]">Залиште заявку — передзвонимо за 10 хвилин</p>
            <div className="bg-white rounded-3xl p-8">
              <ContactForm />
            </div>
          </Animated>
        </div>
      </section>

      {/* Other services */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <h2 className="text-[18px] font-black text-[#0D0D0D] mb-5" style={{ fontFamily: 'Unbounded, sans-serif', letterSpacing: '-0.01em' }}>
            Інші послуги
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {SERVICES.filter((s) => s.id !== service.id).map((s) => (
              <Link
                key={s.id}
                to={s.slug}
                className="flex items-center gap-2 bg-[#F6F5F2] hover:bg-[#FFCF21] px-4 py-2.5 rounded-xl text-[13px] font-bold text-[#0D0D0D] transition-colors border border-black/[0.05] hover:border-[#FFCF21]"
              >
                <span>{s.icon}</span>{s.titleFull}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
