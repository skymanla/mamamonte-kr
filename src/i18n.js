import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationKo from './locales/ko/translation.json';
import translationEn from './locales/en/translation.json';
import translationJa from './locales/ja/translation.json';
const resources = {
    ko: { translation: translationKo },
    en: { translation: translationEn },
    ja: { translation: translationJa },
};
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    resources,
    fallbackLng: 'en',
    detection: {
        order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
        caches: ['localStorage', 'cookie'],
    },
    interpolation: {
        escapeValue: false,
    },
});
// Cloudflare 국가 정보를 기반으로 언어 자동 설정
const detectCountry = async () => {
    try {
        const response = await fetch('/cdn-cgi/trace');
        const text = await response.text();
        const data = text.split('\n').reduce((acc, line) => {
            const [key, value] = line.split('=');
            if (key && value)
                acc[key] = value;
            return acc;
        }, {});
        const country = data.loc; // 예: KR, JP, US 등
        let detectedLng = 'en';
        if (country === 'KR') {
            detectedLng = 'ko';
        }
        else if (country === 'JP') {
            detectedLng = 'ja';
        }
        // 이미 사용자가 수동으로 언어를 선택했는지 확인 (localStorage 등)
        const savedLng = localStorage.getItem('i18nextLng');
        if (!savedLng) {
            i18n.changeLanguage(detectedLng);
        }
    }
    catch (error) {
        console.error('Failed to detect country via Cloudflare:', error);
    }
};
detectCountry();
export default i18n;
