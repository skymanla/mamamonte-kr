import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import './App.css'

import SelfDirectedLearning from './components/SelfDirectedLearning'
import LearningBenefits from './components/LearningBenefits'
import SelfDirectedLearningMethod from './components/SelfDirectedLearningMethod'
import ParentingTips from './components/ParentingTips'
import BlogList from './components/BlogList'
import BlogPost from './components/BlogPost'
import PrivacyPolicy from './components/PrivacyPolicy'
import Footer from './components/Footer'

const NAV_ITEMS = [
  { path: '/', labelKey: 'header.nav.intro' },
  { path: '/benefits', labelKey: 'header.nav.benefits' },
  { path: '/learning-method', labelKey: 'header.nav.method' },
  { path: '/parenting-tips', labelKey: 'header.nav.parenting' },
  { path: '/blog', labelKey: 'header.nav.blog' },
]

const LANGUAGES = ['ko', 'en', 'ja'] as const

const App: React.FC = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  const activeLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-full transition-colors ${
      isActive
        ? 'bg-mamamonte-orange text-white font-bold'
        : 'text-mamamonte-brown hover:bg-mamamonte-border'
    }`

  return (
    <HelmetProvider>
      <Router>
        <div className="max-w-4xl mx-auto p-8">
          <header className="text-center mb-8 pb-4 border-b-2 border-mamamonte-border">
            <div className="flex justify-end space-x-2 mb-4">
              {LANGUAGES.map((lng) => (
                <button
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  className={`px-2 py-1 text-xs rounded border transition-colors ${
                    i18n.language.startsWith(lng)
                      ? 'bg-mamamonte-orange text-white border-mamamonte-orange'
                      : 'text-mamamonte-lightBrown border-mamamonte-border hover:bg-mamamonte-border'
                  }`}
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>
            <Link to="/">
              <h1 className="text-3xl font-bold text-mamamonte-orange mb-2 hover:opacity-80 transition-opacity">
                {t('header.title')}
              </h1>
            </Link>
            <p className="text-mamamonte-lightBrown mb-6">{t('header.subtitle')}</p>

            <nav className="flex justify-center flex-wrap gap-2 sm:space-x-4">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={activeLinkClass}
                >
                  {t(item.labelKey)}
                </NavLink>
              ))}
            </nav>
          </header>

          <main>
            <Routes>
              <Route path="/" element={<SelfDirectedLearning />} />
              <Route path="/benefits" element={<LearningBenefits />} />
              <Route path="/learning-method" element={<SelfDirectedLearningMethod />} />
              <Route path="/parenting-tips" element={<ParentingTips />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
