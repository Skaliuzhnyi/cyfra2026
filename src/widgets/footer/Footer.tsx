import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock, Send } from 'lucide-react'
import { SITE_CONFIG } from '@/shared/config/site'
import { SERVICES } from '@/entities/service/services'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0D0D0D] text-white">
      {/* Top CTA strip */}
      <div className="border-b border-white/[0.07]">
        <div className="container-main py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="section-label text-white/40 mb-2">Є питання?</p>
              <h3 className="text-2xl md:text-3xl font-black text-white leading-tight" style={{ fontFamily: 'Unbounded, sans-serif', letterSpacing: '-0.02em' }}>
                Безкоштовна діагностика
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`tel:${SITE_CONFIG.phone[0]}`}
                className="flex items-center gap-2.5 bg-white/[0.07] hover:bg-white/[0.12] text-white font-semibold px-5 py-3 rounded-xl text-[14px] transition-colors border border-white/[0.1]"
              >
                <Phone size={16} />
                {SITE_CONFIG.phoneDisplay[0]}
              </a>
              <Link
                to="/#contact"
                className="bg-[#FFCF21] text-[#0D0D0D] font-bold px-6 py-3 rounded-xl text-[14px] hover:bg-[#E8B800] transition-colors text-center"
              >
                Залишити заявку
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container-main py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-[#FFCF21] rounded-xl flex items-center justify-center font-black text-[#0D0D0D] text-base" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                Ц
              </div>
              <span className="font-bold text-[17px]" style={{ fontFamily: 'Unbounded, sans-serif' }}>Цифра</span>
            </div>
            <p className="text-[13px] text-white/45 leading-relaxed mb-6">
              Сервісний центр в Києві з 2014&nbsp;року.<br />
              Відновили 18&nbsp;000+ пристроїв.
            </p>
            <div className="flex gap-2">
              <a
                href={SITE_CONFIG.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/[0.07] rounded-xl flex items-center justify-center hover:bg-[#FFCF21] hover:text-[#0D0D0D] transition-all text-[13px] font-bold text-white/60 border border-white/[0.08]"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/[0.07] rounded-xl flex items-center justify-center hover:bg-[#FFCF21] hover:text-[#0D0D0D] transition-all text-[11px] font-bold text-white/60 border border-white/[0.08]"
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                href={SITE_CONFIG.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/[0.07] rounded-xl flex items-center justify-center hover:bg-[#FFCF21] hover:text-[#0D0D0D] transition-all text-white/60 border border-white/[0.08]"
                aria-label="Telegram"
              >
                <Send size={15} />
              </a>
            </div>
          </div>

          {/* Services col */}
          <div>
            <p className="section-label text-white/35 mb-5">Послуги</p>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to={s.slug}
                    className="flex items-center gap-2 text-[13px] text-white/55 hover:text-[#FFCF21] transition-colors font-medium"
                  >
                    <span className="text-[15px]">{s.icon}</span>
                    {s.titleFull}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company col */}
          <div>
            <p className="section-label text-white/35 mb-5">Компанія</p>
            <ul className="space-y-2.5">
              {[
                { to: '/pro-nas', label: 'Про нас' },
                { to: '/vidhuky', label: 'Відгуки' },
                { to: '/blog', label: 'Блог' },
                { to: '/kontakty', label: 'Контакти' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[13px] text-white/55 hover:text-[#FFCF21] transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts col */}
          <div>
            <p className="section-label text-white/35 mb-5">Контакти</p>
            <div className="space-y-3.5">
              <div className="space-y-1.5">
                {SITE_CONFIG.phone.map((p, i) => (
                  <a
                    key={p}
                    href={`tel:${p}`}
                    className="flex items-center gap-2.5 text-[13px] text-white/55 hover:text-[#FFCF21] transition-colors font-medium"
                  >
                    <Phone size={13} className="shrink-0 text-white/30" />
                    {SITE_CONFIG.phoneDisplay[i]}
                  </a>
                ))}
              </div>
              <a
                href={SITE_CONFIG.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-[13px] text-white/55 hover:text-[#FFCF21] transition-colors font-medium"
              >
                <MapPin size={13} className="shrink-0 mt-0.5 text-white/30" />
                {SITE_CONFIG.addressShort}, Київ
              </a>
              <div className="flex items-start gap-2.5 text-[13px] text-white/40 font-medium">
                <Clock size={13} className="shrink-0 mt-0.5 text-white/20" />
                <span>
                  Пн–Пт: 10:00–20:00<br />
                  Сб: 11:00–18:00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.07]">
        <div className="container-main py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/30">© 2014–{year} Сервісний центр Цифра</p>
          <p className="text-[12px] text-white/25">Київ · вул. Княжий Затон, 11 · метро Осокорки</p>
        </div>
      </div>
    </footer>
  )
}
