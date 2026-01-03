import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
const LearningBenefits = () => {
    const { t } = useTranslation();
    const benefitKeys = [
        'independence',
        'critical',
        'motivation',
        'selfesteem',
        'lifelong',
        'concentration'
    ];
    const icons = {
        independence: '🌱',
        critical: '💡',
        motivation: '🚀',
        selfesteem: '✨',
        lifelong: '📚',
        concentration: '🎯'
    };
    return (_jsxs("div", { className: "leading-relaxed", children: [_jsxs(Helmet, { children: [_jsx("title", { children: t('benefits.seo.title') }), _jsx("meta", { name: "description", content: t('benefits.seo.description') }), _jsx("meta", { property: "og:title", content: t('benefits.seo.title') }), _jsx("meta", { property: "og:description", content: t('benefits.seo.description') })] }), _jsxs("section", { className: "text-center mb-12 bg-white p-8 rounded-xl shadow-sm border border-mamamonte-border", children: [_jsx("h2", { className: "text-3xl font-bold text-mamamonte-orange mb-4", children: t('benefits.hero.title') }), _jsx("p", { className: "text-mamamonte-brown max-w-2xl mx-auto", children: t('benefits.hero.description') })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: benefitKeys.map((key) => (_jsxs("div", { className: "bg-white p-6 rounded-2xl shadow-sm border border-mamamonte-border hover:shadow-md transition-shadow", children: [_jsx("div", { className: "text-4xl mb-4", children: icons[key] }), _jsx("h4", { className: "text-lg font-bold text-mamamonte-brown mb-2", children: t(`benefits.items.${key}.title`) }), _jsx("p", { className: "text-sm text-mamamonte-lightBrown leading-relaxed", children: t(`benefits.items.${key}.description`) })] }, key))) })] }));
};
export default LearningBenefits;
