import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import './App.css'

const SelfDirectedLearning = lazy(() => import('./components/SelfDirectedLearning'))
const LearningBenefits = lazy(() => import('./components/LearningBenefits'))

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <HelmetProvider>
      <Router>
        <div className="max-w-4xl mx-auto p-8">
          <header className="text-center mb-8 pb-4 border-b-2 border-mamamonte-border">
            <div className="flex justify-end space-x-2 mb-4">
              {['ko', 'en', 'ja'].map((lng) => (
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
            
            <nav className="flex justify-center space-x-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `px-4 py-2 rounded-full transition-colors ${
                    isActive 
                      ? 'bg-mamamonte-orange text-white font-bold' 
                      : 'text-mamamonte-brown hover:bg-mamamonte-border'
                  }`
                }
              >
                {t('header.nav.intro')}
              </NavLink>
              <NavLink 
                to="/benefits" 
                className={({ isActive }) => 
                  `px-4 py-2 rounded-full transition-colors ${
                    isActive 
                      ? 'bg-mamamonte-orange text-white font-bold' 
                      : 'text-mamamonte-brown hover:bg-mamamonte-border'
                  }`
                }
              >
                {t('header.nav.benefits')}
              </NavLink>
            </nav>
          </header>

          <main>
            <Suspense fallback={<div className="text-center py-10 text-mamamonte-lightBrown">{t('common.loading', 'Loading...')}</div>}>
              <Routes>
                <Route path="/" element={<SelfDirectedLearning />} />
                <Route path="/benefits" element={<LearningBenefits />} />
              </Routes>
            </Suspense>
          </main>

          <footer className="mt-16 text-center text-sm text-mamamonte-lightBrown border-t border-mamamonte-border pt-8">
            <p>{t('footer.copy')}</p>
          </footer>
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
