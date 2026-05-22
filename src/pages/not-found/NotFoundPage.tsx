import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SeoHead } from '@/widgets/seo-head/SeoHead'


export function NotFoundPage() {
  return (
    <>
      <SeoHead title="Сторінку не знайдено | Цифра" noIndex />
      <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9]">
        <div className="container-main text-center py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-9xl font-black text-[#FFCF21] mb-6 leading-none">404</div>
            <h1 className="text-3xl font-black text-[#0A0A0A] mb-4">Сторінку не знайдено</h1>
            <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
              Але ваш пристрій ми знайдемо і відремонтуємо. Поверніться на головну.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/"
                className="bg-[#FFCF21] text-[#0A0A0A] font-bold px-8 py-4 rounded-xl hover:bg-[#E8B800] transition-colors"
              >
                На головну
              </Link>
              <Link
                to="/remont"
                className="bg-white border-2 border-[#0A0A0A] text-[#0A0A0A] font-semibold px-8 py-4 rounded-xl hover:bg-[#0A0A0A] hover:text-white transition-all"
              >
                Всі послуги
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
