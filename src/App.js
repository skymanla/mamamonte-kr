import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import './App.css';
const SelfDirectedLearning = lazy(() => import('./components/SelfDirectedLearning'));
const LearningBenefits = lazy(() => import('./components/LearningBenefits'));
const App = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (_jsx(HelmetProvider, { children: _jsx(Router, { children: _jsxs("div", { className: "max-w-4xl mx-auto p-8", children: [_jsxs("header", { className: "text-center mb-8 pb-4 border-b-2 border-mamamonte-border", children: [_jsx("div", { className: "flex justify-end space-x-2 mb-4", children: ['ko', 'en', 'ja'].map((lng) => (_jsx("button", { onClick: () => changeLanguage(lng), className: `px-2 py-1 text-xs rounded border transition-colors ${i18n.language.startsWith(lng)
                                        ? 'bg-mamamonte-orange text-white border-mamamonte-orange'
                                        : 'text-mamamonte-lightBrown border-mamamonte-border hover:bg-mamamonte-border'}`, children: lng.toUpperCase() }, lng))) }), _jsx(Link, { to: "/", children: _jsx("h1", { className: "text-3xl font-bold text-mamamonte-orange mb-2 hover:opacity-80 transition-opacity", children: t('header.title') }) }), _jsx("p", { className: "text-mamamonte-lightBrown mb-6", children: t('header.subtitle') }), _jsxs("nav", { className: "flex justify-center space-x-4", children: [_jsx(NavLink, { to: "/", className: ({ isActive }) => `px-4 py-2 rounded-full transition-colors ${isActive
                                            ? 'bg-mamamonte-orange text-white font-bold'
                                            : 'text-mamamonte-brown hover:bg-mamamonte-border'}`, children: t('header.nav.intro') }), _jsx(NavLink, { to: "/benefits", className: ({ isActive }) => `px-4 py-2 rounded-full transition-colors ${isActive
                                            ? 'bg-mamamonte-orange text-white font-bold'
                                            : 'text-mamamonte-brown hover:bg-mamamonte-border'}`, children: t('header.nav.benefits') })] })] }), _jsx("main", { children: _jsx(Suspense, { fallback: _jsx("div", { className: "text-center py-10 text-mamamonte-lightBrown", children: t('common.loading', 'Loading...') }), children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(SelfDirectedLearning, {}) }), _jsx(Route, { path: "/benefits", element: _jsx(LearningBenefits, {}) })] }) }) }), _jsx("footer", { className: "mt-16 text-center text-sm text-mamamonte-lightBrown border-t border-mamamonte-border pt-8", children: _jsx("p", { children: t('footer.copy') }) })] }) }) }));
};
export default App;
