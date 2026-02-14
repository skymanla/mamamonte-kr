import React from 'react'
import { useTranslation } from 'react-i18next'
import SEO from './SEO'
import { Card, HeroSection } from './ui/Layout'

const LearningBenefits: React.FC = () => {
  const { t } = useTranslation()

  const benefitKeys = [
    'independence',
    'critical',
    'motivation',
    'selfesteem',
    'lifelong',
    'concentration'
  ]

  const icons: { [key: string]: string } = {
    independence: '🌱',
    critical: '💡',
    motivation: '🚀',
    selfesteem: '✨',
    lifelong: '📚',
    concentration: '🎯'
  }

  return (
    <div className="leading-relaxed">
      <SEO
        title={t('benefits.seo.title')}
        description={t('benefits.seo.description')}
        keywords={t('benefits.seo.keywords')}
        canonicalPath="/benefits"
      />
      
      <HeroSection 
        title={t('benefits.hero.title')} 
        description={t('benefits.hero.description')} 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefitKeys.map((key) => (
          <Card key={key} className="flex flex-col items-center text-center">
            <div className="text-5xl mb-6 bg-mamamonte-bg p-4 rounded-full">{icons[key]}</div>
            <h4 className="text-xl font-bold text-mamamonte-brown mb-3">{t(`benefits.items.${key}.title`)}</h4>
            <p className="text-mamamonte-lightBrown leading-relaxed">
              {t(`benefits.items.${key}.description`)}
            </p>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default LearningBenefits
