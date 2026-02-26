import React, { useState } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useLocation,
} from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import "./App.css"

const SelfDirectedLearning = React.lazy(() => import("./pages/SelfDirectedLearning"))
const LearningBenefits = React.lazy(() => import("./pages/LearningBenefits"))
const SelfDirectedLearningMethod = React.lazy(() => import("./pages/SelfDirectedLearningMethod"))
const ParentingTips = React.lazy(() => import("./pages/ParentingTips"))
const BlogList = React.lazy(() => import("./pages/BlogList"))
const BlogPost = React.lazy(() => import("./pages/BlogPost"))
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"))
const About = React.lazy(() => import("./pages/About"))
const FAQ = React.lazy(() => import("./pages/FAQ"))
const Resources = React.lazy(() => import("./pages/Resources"))
import { Container } from "./components/ui/Layout"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ui/ScrollToTop"

type NavItem = {
  path?: string;
  labelKey: string;
  subItems?: { path: string; labelKey: string }[];
}

const NAV_ITEMS: NavItem[] = [
  { path: "/", labelKey: "header.nav.intro" },
  {
    labelKey: "header.nav.info",
    subItems: [
      { path: "/benefits", labelKey: "header.nav.benefits" },
      { path: "/learning-method", labelKey: "header.nav.method" },
      { path: "/parenting-tips", labelKey: "header.nav.parenting" },
    ],
  },
  { path: "/blog", labelKey: "header.nav.blog" },
]

const LANGUAGES = ["ko", "en", "ja"] as const

const AppContent: React.FC = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setIsMenuOpen(false)
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }
  const toggleDropdown = (labelKey: string) => {
    if (activeDropdown === labelKey) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(labelKey)
    }
  }

  const activeLinkClass = ({ isActive }: { isActive: boolean }) =>
    `inline-flex items-center justify-center px-4 py-2 rounded-full transition-colors ${
      isActive
        ? "bg-mamamonte-orange text-white font-bold"
        : "text-mamamonte-brown hover:bg-mamamonte-border"
    }`

  const mobileActiveLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-6 py-4 text-lg font-bold transition-all duration-200 border-l-4 ${
      isActive
        ? "bg-mamamonte-orange/10 text-mamamonte-orange border-mamamonte-orange"
        : "text-mamamonte-brown border-transparent hover:bg-mamamonte-border/30"
    }`

  return (
    <Container>
          <header className="relative text-center mb-12 pb-8 border-b border-mamamonte-border/50">
            {/* Mobile Menu Button */}
            <div className={`md:hidden fixed left-3 top-3 z-[60] transition-colors duration-200 rounded-lg backdrop-blur-md ${isMenuOpen ? 'bg-transparent' : 'bg-white/90 shadow-sm border border-mamamonte-border/40'}`}>
              <button
                onClick={toggleMenu}
                className="p-2 text-mamamonte-orange hover:bg-mamamonte-border/30 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
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
                      ? "bg-mamamonte-orange text-white border-mamamonte-orange shadow-sm"
                      : "text-mamamonte-lightBrown border-mamamonte-border bg-white hover:bg-mamamonte-bg"
                  }`}
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>
            <Link to="/" className="inline-block group">
              <h1 className="text-4xl font-black text-mamamonte-orange mb-3 tracking-tight group-hover:scale-105 transition-transform duration-300">
                {t("header.title")}
              </h1>
            </Link>
            <p className="text-mamamonte-lightBrown text-lg font-medium mb-8 opacity-80">
              {t("header.subtitle")}
            </p>

            <nav className="hidden md:flex justify-center items-center flex-wrap gap-3">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.labelKey}
                  className="relative group"
                  onMouseEnter={() =>
                    item.subItems && setActiveDropdown(item.labelKey)
                  }
                  onMouseLeave={() => item.subItems && setActiveDropdown(null)}
                >
                  {item.path ? (
                    <NavLink to={item.path} className={activeLinkClass}>
                      {t(item.labelKey)}
                    </NavLink>
                  ) : (
                    <button
                      className={
                        activeLinkClass({ isActive: item.subItems?.some(sub => location.pathname === sub.path) || false }) + " gap-1"
                      }
                    >
                      {t(item.labelKey)}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}

                  {/* Desktop Dropdown */}
                  {item.subItems && (
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-xl shadow-lg border border-mamamonte-border/50 py-2 z-[60] transition-all duration-200 origin-top ${activeDropdown === item.labelKey ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}
                    >
                      {item.subItems.map((subItem) => (
                        <NavLink
                          key={subItem.path}
                          to={subItem.path}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm transition-colors ${isActive ? "text-mamamonte-orange font-bold bg-mamamonte-orange/5" : "text-mamamonte-brown hover:bg-mamamonte-bg hover:text-mamamonte-orange"}`
                          }
                        >
                          {t(subItem.labelKey)}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Sidebar Overlay */}
            <div
              className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
                isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              onClick={closeMenu}
            />

            {/* Mobile Sidebar */}
            <aside
              className={`fixed top-0 left-0 w-[280px] h-full bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl flex flex-col ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="p-6 border-b border-mamamonte-border/30 flex justify-between items-center">
                <span className="text-xl font-black text-mamamonte-orange">
                  {t("header.title")}
                </span>
                <button
                  onClick={closeMenu}
                  className="p-1 text-mamamonte-lightBrown hover:text-mamamonte-orange transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <nav className="flex-1 py-4 overflow-y-auto">
                {NAV_ITEMS.map((item) => (
                  <div key={item.labelKey}>
                    {item.path ? (
                      <NavLink
                        to={item.path}
                        className={mobileActiveLinkClass}
                        onClick={closeMenu}
                      >
                        {t(item.labelKey)}
                      </NavLink>
                    ) : (
                      <div className={`border-l-4 ${item.subItems?.some(sub => location.pathname === sub.path) ? "border-mamamonte-orange" : "border-transparent"}`}>
                        <button
                          onClick={() => toggleDropdown(item.labelKey)}
                          className={`w-full text-left px-6 py-4 text-lg font-bold transition-all duration-200 flex justify-between items-center ${item.subItems?.some(sub => location.pathname === sub.path) ? "text-mamamonte-orange bg-mamamonte-orange/10" : "text-mamamonte-brown hover:bg-mamamonte-border/30"}`}
                        >
                          {t(item.labelKey)}
                          <svg
                            className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === item.labelKey ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {/* Mobile Submenu Accordion */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ${activeDropdown === item.labelKey ? "max-h-60" : "max-h-0"}`}
                        >
                          <div className="bg-mamamonte-bg/30 py-2">
                            {item.subItems?.map((subItem) => (
                              <NavLink
                                key={subItem.path}
                                to={subItem.path}
                                className={({ isActive }) =>
                                  `block px-8 py-3 text-base transition-colors ${isActive ? "text-mamamonte-orange font-bold" : "text-mamamonte-lightBrown hover:text-mamamonte-orange"}`
                                }
                                onClick={closeMenu}
                              >
                                {t(subItem.labelKey)}
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="p-6 bg-mamamonte-bg/50 border-t border-mamamonte-border/30">
                <p className="text-xs text-mamamonte-lightBrown font-medium mb-3 uppercase tracking-wider">
                  {t("footer.language", "Language")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {LANGUAGES.map((lng) => (
                    <button
                      key={lng}
                      onClick={() => changeLanguage(lng)}
                      className={`px-3 py-1.5 text-xs font-bold rounded-md border transition-all ${
                        i18n.language.startsWith(lng)
                          ? "bg-mamamonte-orange text-white border-mamamonte-orange"
                          : "text-mamamonte-lightBrown border-mamamonte-border bg-white"
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
            <React.Suspense fallback={<div className="flex justify-center items-center min-h-[60vh] text-mamamonte-orange font-bold">로딩 중...</div>}>
              <Routes>
                <Route path="/" element={<SelfDirectedLearning />} />
                <Route path="/benefits" element={<LearningBenefits />} />
                <Route
                  path="/learning-method"
                  element={<SelfDirectedLearningMethod />}
                />
                <Route path="/parenting-tips" element={<ParentingTips />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
              </Routes>
            </React.Suspense>
          </main>

          <Footer />
        </Container>
  )
}

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
        <ScrollToTop />
      </Router>
    </HelmetProvider>
  )
}

export default App
