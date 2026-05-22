import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const HomePage = lazy(() =>
  import('@/pages/home/HomePage').then((m) => ({ default: m.HomePage }))
)
const RepairPage = lazy(() =>
  import('@/pages/repair/RepairPage').then((m) => ({ default: m.RepairPage }))
)
const RepairItemPage = lazy(() =>
  import('@/pages/repair/RepairItemPage').then((m) => ({ default: m.RepairItemPage }))
)
const AboutPage = lazy(() =>
  import('@/pages/about/AboutPage').then((m) => ({ default: m.AboutPage }))
)
const ReviewsPage = lazy(() =>
  import('@/pages/reviews/ReviewsPage').then((m) => ({ default: m.ReviewsPage }))
)
const BlogPage = lazy(() =>
  import('@/pages/blog/BlogPage').then((m) => ({ default: m.BlogPage }))
)
const ContactsPage = lazy(() =>
  import('@/pages/contacts/ContactsPage').then((m) => ({ default: m.ContactsPage }))
)
const NotFoundPage = lazy(() =>
  import('@/pages/not-found/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
)

function PageSkeleton() {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      <div className="h-20 bg-gray-100" />
      <div className="container-main py-16">
        <div className="h-12 bg-gray-100 rounded-2xl w-2/3 mb-6" />
        <div className="h-6 bg-gray-50 rounded-xl w-1/2 mb-4" />
        <div className="h-6 bg-gray-50 rounded-xl w-1/3" />
      </div>
    </div>
  )
}

export function AppRouter() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/remont" element={<RepairPage />} />
        <Route path="/remont/:serviceId" element={<RepairItemPage />} />
        <Route path="/remont/:serviceId/" element={<RepairItemPage />} />
        <Route path="/pro-nas" element={<AboutPage />} />
        <Route path="/pro-nas/" element={<AboutPage />} />
        <Route path="/vidhuky" element={<ReviewsPage />} />
        <Route path="/vidhuky/" element={<ReviewsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/" element={<BlogPage />} />
        <Route path="/kontakty" element={<ContactsPage />} />
        <Route path="/kontakty/" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}
