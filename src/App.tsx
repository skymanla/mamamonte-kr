import React, { useState } from 'react'
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
import About from './components/About'
import FAQ from './components/FAQ'
import Resources from './components/Resources'
import { Container } from './components/ui/Layout'
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setIsMenuOpen(false)
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const activeLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-full transition-colors ${
      isActive
        ? 'bg-mamamonte-orange text-white font-bold'
        : 'text-mamamonte-brown hover:bg-mamamonte-border'
    }`

  const mobileActiveLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-6 py-4 text-lg font-bold transition-all duration-200 border-l-4 ${
      isActive
        ? 'bg-mamamonte-orange/10 text-mamamonte-orange border-mamamonte-orange'
        : 'text-mamamonte-brown border-transparent hover:bg-mamamonte-border/30'
    }`

  return (
    <HelmetProvider>
      <Router>
        <Container>
          <header className="relative text-center mb-12 pb-8 border-b border-mamamonte-border/50">
            {/* Mobile Menu Button */}
            <div className="md:hidden absolute left-0 top-0 pt-1">
              <button
                onClick={toggleMenu}
                className="p-2 text-mamamonte-orange hover:bg-mamamonte-border/30 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            <div className="flex justify-end space-x-2 mb-6">
              {LANGUAGES.map((lng) => (
                <button
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 ${
                    i18n.language.startsWith(lng)
                      ? 'bg-mamamonte-orange text-white border-mamamonte-orange shadow-sm'
                      : 'text-mamamonte-lightBrown border-mamamonte-border bg-white hover:bg-mamamonte-bg'
                  }`}
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>
            <Link to="/" className="inline-block group">
              <h1 className="text-4xl font-black text-mamamonte-orange mb-3 tracking-tight group-hover:scale-105 transition-transform duration-300">
                {t('header.title')}
              </h1>
            </Link>
            <p className="text-mamamonte-lightBrown text-lg font-medium mb-8 opacity-80">{t('header.subtitle')}</p>

            <nav className="hidden md:flex justify-center flex-wrap gap-3">
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

            {/* Mobile Sidebar Overlay */}
            <div 
              className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
                isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              onClick={closeMenu}
            />

            {/* Mobile Sidebar */}
            <aside 
              className={`fixed top-0 left-0 w-[280px] h-full bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl flex flex-col ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
            >
              <div className="p-6 border-b border-mamamonte-border/30 flex justify-between items-center">
                <span className="text-xl font-black text-mamamonte-orange">{t('header.title')}</span>
                <button onClick={closeMenu} className="p-1 text-mamamonte-lightBrown hover:text-mamamonte-orange transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <nav className="flex-1 py-4">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={mobileActiveLinkClass}
                    onClick={closeMenu}
                  >
                    {t(item.labelKey)}
                  </NavLink>
                ))}
              </nav>

              <div className="p-6 bg-mamamonte-bg/50 border-t border-mamamonte-border/30">
                <p className="text-xs text-mamamonte-lightBrown font-medium mb-3 uppercase tracking-wider">{t('footer.language', 'Language')}</p>
                <div className="flex flex-wrap gap-2">
                  {LANGUAGES.map((lng) => (
                    <button
                      key={lng}
                      onClick={() => changeLanguage(lng)}
                      className={`px-3 py-1.5 text-xs font-bold rounded-md border transition-all ${
                        i18n.language.startsWith(lng)
                          ? 'bg-mamamonte-orange text-white border-mamamonte-orange'
                          : 'text-mamamonte-lightBrown border-mamamonte-border bg-white'
                      }`}
                    >
                      {lng.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </header>

          <main className="min-h-[60vh]">
            <Routes>
              <Route path="/" element={<SelfDirectedLearning />} />
              <Route path="/benefits" element={<LearningBenefits />} />
              <Route path="/learning-method" element={<SelfDirectedLearningMethod />} />
              <Route path="/parenting-tips" element={<ParentingTips />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </main>

          <Footer />
        </Container>
      </Router>
    </HelmetProvider>
  )
}

export default App
