import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, ChevronRight, ExternalLink } from 'lucide-react'
import { SeoHead } from '@/widgets/seo-head/SeoHead'
import { REVIEWS } from '@/entities/review/reviews'
import { SITE_CONFIG } from '@/shared/config/site'

export function ReviewsPage() {
  const schemaReviews = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.fullName,
    url: SITE_CONFIG.url,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: String(REVIEWS.length),
      bestRating: '5',
    },
    review: REVIEWS.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewRating: { '@type': 'Rating', ratingValue: String(r.rating), bestRating: '5' },
      reviewBody: r.text,
      datePublished: r.date,
    })),
  }

  return (
    <>
      <SeoHead
        title="Відгуки клієнтів сервісного центру Цифра | Київ"
        description="Реальні відгуки клієнтів сервісного центру Цифра. Рейтинг 4.9★. Понад 300 відгуків на Google Maps. Ремонт телефонів, ноутбуків, телевізорів у Києві."
        canonical={`${SITE_CONFIG.url}/vidhuky/`}
        schema={schemaReviews}
      />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-[#F9F9F9]">
        <div className="container-main">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#0A0A0A] transition-colors">Головна</Link>
            <ChevronRight size={14} />
            <span className="text-[#0A0A0A] font-medium">Відгуки</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="section-padding bg-[#F9F9F9]">
        <div className="container-main text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-[#0A0A0A] mb-6"
          >
            Що кажуть клієнти
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={28} fill="#FFCF21" stroke="#FFCF21" />
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-black text-[#0A0A0A] mb-2"
          >
            4.9 / 5
          </motion.p>
          <p className="text-gray-500">На основі 312 відгуків</p>
          <motion.a
            href="https://share.google/5seVJUi6jDBsRyDX5"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0A] bg-white px-4 py-2 rounded-xl border border-gray-200 hover:border-[#FFCF21] transition-colors"
          >
            Всі відгуки на Google Maps
            <ExternalLink size={14} />
          </motion.a>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#FFCF21" stroke="#FFCF21" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-5 text-sm">"{review.text}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div>
                    <div className="font-bold text-[#0A0A0A] text-sm">{review.name}</div>
                    <div className="text-xs text-gray-400">{review.service}</div>
                  </div>
                  <div className="text-xs text-gray-400">
                    {new Date(review.date).toLocaleDateString('uk-UA', { month: 'long', year: 'numeric' })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#FFCF21]">
        <div className="container-main text-center">
          <h2 className="text-3xl font-black text-[#0A0A0A] mb-4">
            Станьте наступним задоволеним клієнтом
          </h2>
          <p className="text-[#0A0A0A]/70 mb-6">Безкоштовна діагностика · Ремонт за 1–2 дні · Гарантія 90 днів</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/#contact"
              className="bg-[#0A0A0A] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#262626] transition-colors"
            >
              Залишити заявку
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone[0]}`}
              className="flex items-center gap-2 bg-white text-[#0A0A0A] font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors"
            >
              {SITE_CONFIG.phoneDisplay[0]}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
