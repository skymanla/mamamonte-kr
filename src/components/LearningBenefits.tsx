import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const LearningBenefits: React.FC = () => {
  const { t } = useTranslation();

  const benefitKeys = [
    'independence',
    'critical',
    'motivation',
    'selfesteem',
    'lifelong',
    'concentration'
  ];

  const icons: { [key: string]: string } = {
    independence: '🌱',
    critical: '💡',
    motivation: '🚀',
    selfesteem: '✨',
    lifelong: '📚',
    concentration: '🎯'
  };

  return (
    <div className="leading-relaxed">
      <Helmet>
        <title>{t('benefits.seo.title')}</title>
        <meta name="description" content={t('benefits.seo.description')} />
        <meta property="og:title" content={t('benefits.seo.title')} />
        <meta property="og:description" content={t('benefits.seo.description')} />
      </Helmet>
      <section className="text-center mb-12 bg-white p-8 rounded-xl shadow-sm border border-mamamonte-border">
        <h2 className="text-3xl font-bold text-mamamonte-orange mb-4">{t('benefits.hero.title')}</h2>
        <p className="text-mamamonte-brown max-w-2xl mx-auto">
          {t('benefits.hero.description')}
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefitKeys.map((key) => (
          <div key={key} className="bg-white p-6 rounded-2xl shadow-sm border border-mamamonte-border hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">{icons[key]}</div>
            <h4 className="text-lg font-bold text-mamamonte-brown mb-2">{t(`benefits.items.${key}.title`)}</h4>
            <p className="text-sm text-mamamonte-lightBrown leading-relaxed">
              {t(`benefits.items.${key}.description`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningBenefits;
