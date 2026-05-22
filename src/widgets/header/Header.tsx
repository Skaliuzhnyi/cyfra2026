import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { SITE_CONFIG } from '@/shared/config/site'
import { SERVICES } from '@/entities/service/services'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/96 backdrop-blur-md border-b border-black/[0.06] shadow-[0_2px_20px_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-[68px] md:h-[76px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 bg-[#FFCF21] rounded-xl flex items-center justify-center font-black text-[#0D0D0D] text-base leading-none" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                Ц
              </div>
              <span className="font-bold text-[17px] text-[#0D0D0D] tracking-tight" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                Цифра
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-[14px] font-600 text-[#0D0D0D]/70 hover:text-[#0D0D0D] hover:bg-black/[0.04] transition-all">
                  Ремонт
                  <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-60 bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-black/[0.06] py-2 z-50 overflow-hidden"
                    >
                      {SERVICES.map((s) => (
                        <Link
                          key={s.id}
                          to={s.slug}
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#F6F5F2] transition-colors text-[13px] font-medium text-[#0D0D0D]"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="text-[18px] w-6 text-center">{s.icon}</span>
                          {s.titleFull}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {[
                { to: '/pro-nas', label: 'Про нас' },
                { to: '/vidhuky', label: 'Відгуки' },
                { to: '/blog', label: 'Блог' },
                { to: '/kontakty', label: 'Контакти' },
              ].map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl text-[14px] font-semibold transition-all ${
                      isActive
                        ? 'text-[#0D0D0D] bg-black/[0.05]'
                        : 'text-[#0D0D0D]/65 hover:text-[#0D0D0D] hover:bg-black/[0.04]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right: phone + CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.phone[0]}`}
                className="flex items-center gap-2 text-[13px] font-semibold text-[#0D0D0D]/70 hover:text-[#0D0D0D] transition-colors"
              >
                <Phone size={14} />
                {SITE_CONFIG.phoneDisplay[0]}
              </a>
              <Link
                to="/#contact"
                className="bg-[#FFCF21] text-[#0D0D0D] font-bold px-5 py-2.5 rounded-xl text-[13px] hover:bg-[#E8B800] transition-colors shadow-[0_2px_8px_rgba(255,207,33,0.4)]"
              >
                Залишити заявку
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-black/[0.05] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Меню"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm bg-white shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-[68px] border-b border-black/[0.06]">
                <span className="font-black text-[17px]" style={{ fontFamily: 'Unbounded, sans-serif' }}>Цифра</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-[#F6F5F2] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-4">
                <div className="mb-2">
                  <p className="section-label px-3 mb-2">Ремонт</p>
                  {SERVICES.map((s) => (
                    <Link
                      key={s.id}
                      to={s.slug}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#F6F5F2] transition-colors text-[14px] font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="text-xl">{s.icon}</span>
                      {s.titleFull}
                    </Link>
                  ))}
                </div>

                <div className="border-t border-black/[0.06] my-3" />

                {[
                  { to: '/pro-nas', label: 'Про нас' },
                  { to: '/vidhuky', label: 'Відгуки' },
                  { to: '/blog', label: 'Блог' },
                  { to: '/kontakty', label: 'Контакти' },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block px-3 py-3 rounded-xl font-semibold text-[15px] hover:bg-[#F6F5F2] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="px-4 pb-8 pt-4 border-t border-black/[0.06] space-y-3">
                {SITE_CONFIG.phone.map((p, i) => (
                  <a
                    key={p}
                    href={`tel:${p}`}
                    className="flex items-center gap-3 text-[15px] font-bold text-[#0D0D0D]"
                  >
                    <Phone size={18} className="text-[#9A9A9A]" />
                    {SITE_CONFIG.phoneDisplay[i]}
                  </a>
                ))}
                <Link
                  to="/#contact"
                  className="block w-full bg-[#FFCF21] text-[#0D0D0D] font-bold py-3.5 rounded-xl text-center text-[15px] mt-4"
                  onClick={() => setMobileOpen(false)}
                >
                  Залишити заявку
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
