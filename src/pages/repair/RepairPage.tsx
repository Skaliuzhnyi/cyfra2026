import {Link} from 'react-router-dom'
import {ChevronRight, Phone} from 'lucide-react'
import {SeoHead} from '@/widgets/seo-head/SeoHead'
import {
  Animated,
  AnimatedGroup,
  AnimatedItem,
  SectionHeader
} from '@/shared/ui/Section/Section'
import {SERVICES} from '@/entities/service/services'
import {SITE_CONFIG} from '@/shared/config/site'
import {buildBreadcrumbSchema} from '@/shared/lib/seo'

export function RepairPage() {
  const schema = buildBreadcrumbSchema([
    {name: 'Головна', url: SITE_CONFIG.url},
    {name: 'Ремонт техніки', url: `${SITE_CONFIG.url}/remont/`},
  ])

  return (
    <>
      <SeoHead
        title="Ремонт техніки у Києві — телефони, ноутбуки, телевізори | Цифра"
        description="Сервісний центр Цифра: ремонт телефонів, ноутбуків, телевізорів, планшетів та ігрових консолей у Києві. Безкоштовна діагностика. Гарантія 90 днів."
        canonical={`${SITE_CONFIG.url}/remont/`}
        schema={schema}
      />

      {/* Breadcrumb */}
      <div className="pt-[88px] border-b border-black/[0.05] bg-white">
        <div className="container-main py-4">
          <nav className="flex items-center gap-2 text-[12px] text-[#9A9A9A]">
            <Link
              to="/"
              className="hover:text-[#0D0D0D] transition-colors font-medium"
            >Головна</Link>
            <ChevronRight size={12} />
            <span className="text-[#0D0D0D] font-semibold">Ремонт техніки</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <Animated>
            <div className="max-w-2xl mb-14">
              <p className="section-label mb-4">Послуги</p>
              <h1 className="section-title mb-5">
                Ремонт будь-якої<br />техніки у Києві
              </h1>
              <p className="text-[17px] text-[#6B6B6B] mb-8 leading-relaxed">
                Безкоштовна діагностика · Ремонт за 1–2 дні · Гарантія 90 днів
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#services"
                  className="bg-[#FFCF21] text-[#0D0D0D] font-bold px-6 py-3.5 rounded-2xl text-[14px] hover:bg-[#E8B800] transition-colors"
                >
                  Обрати пристрій
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone[0]}`}
                  className="flex items-center gap-2 border-2 border-[#0D0D0D] font-bold px-6 py-3.5 rounded-2xl text-[14px] hover:bg-[#0D0D0D] hover:text-white transition-all"
                >
                  <Phone size={17} />{SITE_CONFIG.phoneDisplay[0]}
                </a>
              </div>
            </div>
          </Animated>

          <SectionHeader
            label="Оберіть пристрій"
            title="Тип техніки"
          />

          <div id="services">

            <AnimatedGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.map((service) => (
                <AnimatedItem key={service.id}>
                  <Link
                    to={service.slug}
                    className="group flex flex-col bg-white border border-black/[0.07] hover:border-[#FFCF21] hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] rounded-3xl p-7 transition-all duration-300 h-full"
                  >
                    <div className="text-[3rem] mb-5 leading-none">{service.icon}</div>
                    <h2
                      className="font-black text-[17px] text-[#0D0D0D] mb-2 leading-tight"
                      style={{
                        fontFamily: 'Unbounded, sans-serif',
                        letterSpacing: '-0.02em'
                      }}
                    >
                      {service.titleFull}
                    </h2>
                    <p className="text-[13px] text-[#9A9A9A] leading-relaxed mb-6 flex-1">{service.description}</p>
                    <div className="grid grid-cols-3 gap-2 mb-5">
                      {[
                        {val: `від ${service.priceFrom} грн`, lbl: 'вартість'},
                        {
                          val: `${service.daysMin}–${service.daysMax} дні`,
                          lbl: 'термін'
                        },
                        {val: `${service.warrantyDays} днів`, lbl: 'гарантія'},
                      ].map(({val, lbl}) => (
                        <div
                          key={lbl}
                          className="bg-[#F6F5F2] rounded-xl p-3 text-center"
                        >
                          <div
                            className="font-black text-[11px] text-[#0D0D0D] leading-tight"
                            style={{fontFamily: 'Unbounded, sans-serif'}}
                          >{val}</div>
                          <div className="text-[10px] text-[#BDBDBD] mt-0.5">{lbl}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-[#0D0D0D] font-bold text-[13px] group-hover:gap-3 transition-all">
                      Детальніше <ChevronRight
                      size={15}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                    </div>
                  </Link>
                </AnimatedItem>
              ))}
            </AnimatedGroup>
          </div>
        </div>
      </section>
    </>
  )
}
