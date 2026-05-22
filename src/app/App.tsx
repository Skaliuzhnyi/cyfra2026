import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from '@/widgets/header/Header'
import { Footer } from '@/widgets/footer/Footer'
import { AppRouter } from './router'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

// Floating messenger buttons
function MessengerButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://t.me/+380958880422"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#2AABEE] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Написати в Telegram"
        title="Telegram"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      </a>
      <a
        href="viber://add?number=380958880422"
        className="w-14 h-14 bg-[#7360F2] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Написати в Viber"
        title="Viber"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.4 0C7.463 0 3.893 1.4 1.357 3.837.023 5.08-.303 7.29.297 9.243c.593 1.948 2.03 3.523 3.923 4.357l.003.001c.006.004.015.008.022.011.204.085.41.156.62.213v4.308l.003.009c.038.37.263.694.598.861.334.166.728.148 1.046-.048l3.18-1.902c.59.065 1.186.098 1.786.098 3.937 0 7.507-1.4 10.043-3.837 1.334-1.243 1.66-3.453 1.06-5.406-.594-1.948-2.03-3.523-3.923-4.357-.01-.003-.018-.008-.028-.011A12.76 12.76 0 0 0 11.4 0zm.1 1.8c2.97 0 5.753.948 7.834 2.667 1.52 1.26 2.55 2.926 2.55 4.735 0 1.809-.93 3.475-2.45 4.735-2.081 1.719-4.864 2.667-7.834 2.667-.62 0-1.234-.04-1.84-.118l-.38-.05-2.47 1.478v-3.24l-.47-.142c-1.608-.478-2.886-1.618-3.455-3.103-.58-1.516-.334-3.182.626-4.227C5.747 3.748 8.43 1.8 11.5 1.8zm.1 2.4c-.828 0-1.5.672-1.5 1.5v.6c0 1.897.858 3.603 2.229 4.829.2.18.51.163.688-.037l.763-.85c.178-.199.161-.509-.038-.687-.997-.893-1.642-2.145-1.642-3.555v-.6c0-.828-.672-1.2-1.5-1.2z" />
        </svg>
      </a>
    </div>
  )
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <AppRouter />
      </main>
      <Footer />
      <MessengerButtons />
    </div>
  )
}
