import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Clock, ArrowRight } from 'lucide-react'
import { SeoHead } from '@/widgets/seo-head/SeoHead'
import { AnimatedGroup, AnimatedItem, Animated } from '@/shared/ui/Section/Section'
import { SITE_CONFIG } from '@/shared/config/site'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: number
  category: string
  emoji: string
}

const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'chomu-iphone-ne-zariadzhayetsya',
    title: 'Чому iPhone не заряджається: 7 причин і що робити',
    excerpt: 'Розбираємо найпоширеніші причини, чому iPhone перестав заряджатися — від засміченого розʼєму до несправного контролера заряду.',
    date: '2024-12-10',
    readTime: 5,
    category: 'Телефони',
    emoji: '📱',
  },
  {
    slug: 'noutbuk-pereghrivayetsya-chystka',
    title: 'Ноутбук перегрівається: коли пора на чистку',
    excerpt: 'Температура вище 90°C, вентилятор гуде як реактивний двигун? Пояснюємо, чому це відбувається і чим загрожує.',
    date: '2024-11-28',
    readTime: 4,
    category: 'Ноутбуки',
    emoji: '💻',
  },
  {
    slug: 'shcho-robyty-yakshcho-zalyl-telefon',
    title: 'Залили телефон водою: покрокова інструкція',
    excerpt: 'Перші 10 хвилин після заливання — критичні. Що робити і чого категорично не можна, щоб врятувати пристрій.',
    date: '2024-11-15',
    readTime: 3,
    category: 'Телефони',
    emoji: '💧',
  },
  {
    slug: 'skilky-sluzhyt-akumulyator-iphone',
    title: 'Скільки служить акумулятор iPhone і коли його міняти',
    excerpt: 'Apple рекомендує заміну при ємності нижче 80%. Розповідаємо, як перевірити стан батареї і скільки це коштує.',
    date: '2024-10-30',
    readTime: 4,
    category: 'Телефони',
    emoji: '🔋',
  },
  {
    slug: 'samsung-tv-ne-vmykayetsya',
    title: 'Samsung Smart TV не вмикається: причини і рішення',
    excerpt: 'Телевізор не реагує на пульт або кнопку? Перевірте ці 5 причин перед тим, як везти в сервіс.',
    date: '2024-10-12',
    readTime: 5,
    category: 'Телевізори',
    emoji: '📺',
  },
  {
    slug: 'ps5-pereghrivayetsya-termopasta',
    title: 'PS5 перегрівається: заміна термопасти своїми руками vs сервіс',
    excerpt: 'Чи варто ризикувати гарантією і лізти в консоль самому? Або краще довірити майстру? Чесна відповідь.',
    date: '2024-09-25',
    readTime: 6,
    category: 'Консолі',
    emoji: '🎮',
  },
]

const CATEGORIES = ['Всі', ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))]

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Всі')

  const filtered = activeCategory === 'Всі'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === activeCategory)

  const featured = BLOG_POSTS[0]
  const rest = filtered.filter((p) => p.slug !== featured.slug)

  return (
    <>
      <SeoHead
        title="Блог про ремонт техніки — поради майстрів | Цифра"
        description="Корисні статті про ремонт телефонів, ноутбуків і телевізорів від майстрів сервісного центру Цифра. Поради, інструкції, відповіді на питання."
        canonical={`${SITE_CONFIG.url}/blog/`}
      />

      {/* Breadcrumb */}
      <div className="pt-[88px] pb-0 bg-white border-b border-black/[0.05]">
        <div className="container-main py-4">
          <nav className="flex items-center gap-2 text-[12px] text-[#9A9A9A]">
            <Link to="/" className="hover:text-[#0D0D0D] transition-colors font-medium">Головна</Link>
            <ChevronRight size={12} />
            <span className="text-[#0D0D0D] font-semibold">Блог</span>
          </nav>
        </div>
      </div>

      {/* Hero + featured post */}
      <section className="bg-white pt-14 pb-0">
        <div className="container-main">
          <Animated>
            <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-12">
              <div>
                <p className="section-label mb-4">Блог</p>
                <h1 className="section-title">
                  Поради<br />від майстрів
                </h1>
              </div>
              <p className="text-[15px] text-[#9A9A9A] max-w-xs leading-relaxed">
                Розбираємо реальні поломки і відповідаємо на питання, які нам ставлять щодня.
              </p>
            </div>
          </Animated>

          {/* Featured */}
          <Animated>
            <Link
              to={`/blog/${featured.slug}`}
              className="group block bg-[#0D0D0D] rounded-3xl p-8 md:p-12 mb-14 hover:scale-[1.005] transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFCF21]/10 to-transparent pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[2.5rem]">{featured.emoji}</span>
                  <span className="inline-block bg-[#FFCF21]/20 text-[#FFCF21] text-[11px] font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                    {featured.category}
                  </span>
                  <span className="text-white/30 text-[12px] ml-auto flex items-center gap-1.5">
                    <Clock size={12} />
                    {featured.readTime} хв
                  </span>
                </div>
                <h2 className="text-[1.6rem] md:text-[2rem] font-black text-white leading-tight mb-4 max-w-2xl" style={{ fontFamily: 'Unbounded, sans-serif', letterSpacing: '-0.02em' }}>
                  {featured.title}
                </h2>
                <p className="text-white/55 text-[15px] leading-relaxed mb-8 max-w-xl">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-2 text-[#FFCF21] font-bold text-[14px] group-hover:gap-3 transition-all">
                  Читати далі <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </Animated>
        </div>
      </section>

      {/* Category filter */}
      <section className="bg-white pb-4 sticky top-[68px] md:top-[76px] z-20 border-b border-black/[0.05] backdrop-blur-sm bg-white/95">
        <div className="container-main py-3">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-0.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-2 rounded-xl text-[13px] font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#0D0D0D] text-white'
                    : 'bg-[#F6F5F2] text-[#6B6B6B] hover:bg-black/[0.07]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <AnimatedGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCategory === 'Всі' ? rest : filtered).map((post) => (
              <AnimatedItem key={post.slug}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white border border-black/[0.07] hover:border-[#FFCF21] hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] rounded-2xl overflow-hidden transition-all duration-300 h-full"
                >
                  {/* Coloured top accent */}
                  <div className="h-1.5 bg-gradient-to-r from-[#FFCF21] to-[#FFCF21]/30" />

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[2rem]">{post.emoji}</span>
                      <span className="inline-block bg-[#F6F5F2] text-[#0D0D0D] text-[11px] font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                        {post.category}
                      </span>
                    </div>

                    <h2 className="font-black text-[15px] text-[#0D0D0D] leading-tight mb-3 group-hover:text-[#0D0D0D] flex-1" style={{ fontFamily: 'Unbounded, sans-serif', letterSpacing: '-0.01em' }}>
                      {post.title}
                    </h2>

                    <p className="text-[13px] text-[#9A9A9A] leading-relaxed mb-5">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-black/[0.05] mt-auto">
                      <time dateTime={post.date} className="text-[12px] text-[#BDBDBD] font-medium">
                        {new Date(post.date).toLocaleDateString('uk-UA', { day: 'numeric', month: 'long' })}
                      </time>
                      <span className="flex items-center gap-1.5 text-[12px] text-[#BDBDBD] font-medium">
                        <Clock size={11} />
                        {post.readTime} хв
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedItem>
            ))}
          </AnimatedGroup>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 text-[#9A9A9A] text-[15px]"
            >
              Статей у цій категорії ще немає.
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#F6F5F2]">
        <div className="container-main">
          <Animated>
            <div className="bg-[#0D0D0D] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <p className="section-label text-white/30 mb-3">Є питання?</p>
                <h3 className="text-[1.6rem] md:text-[2rem] font-black text-white leading-tight" style={{ fontFamily: 'Unbounded, sans-serif', letterSpacing: '-0.02em' }}>
                  Краще запитайте<br />у майстра
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href={`tel:${SITE_CONFIG.phone[0]}`}
                  className="flex items-center gap-2.5 bg-white/[0.08] hover:bg-white/[0.14] text-white font-bold px-6 py-3.5 rounded-2xl text-[14px] transition-colors border border-white/[0.1]"
                >
                  <ChevronRight size={16} className="text-[#FFCF21]" />
                  {SITE_CONFIG.phoneDisplay[0]}
                </a>
                <Link
                  to="/#contact"
                  className="bg-[#FFCF21] text-[#0D0D0D] font-bold px-6 py-3.5 rounded-2xl text-[14px] text-center hover:bg-[#E8B800] transition-colors"
                >
                  Залишити заявку
                </Link>
              </div>
            </div>
          </Animated>
        </div>
      </section>
    </>
  )
}
