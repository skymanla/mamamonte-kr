import React from 'react'
import { useTranslation } from 'react-i18next'
import SEO from './SEO'
import { Card, HeroSection } from './ui/Layout'

const SelfDirectedLearning: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="leading-relaxed">
      <SEO
        title={t('intro.seo.title')}
        description={t('intro.seo.description')}
        keywords={t('intro.seo.keywords')}
        canonicalPath="/"
      />
      
      <HeroSection 
        title={t('intro.hero.title')} 
        description={t('intro.hero.description')} 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {[1, 2, 3, 4].map((num) => (
          <Card key={num} className="border-l-4 border-l-mamamonte-orange">
            <h4 className="text-xl font-bold text-mamamonte-orange mb-3">{t(`intro.card${num}.title`)}</h4>
            <p className="text-mamamonte-brown leading-relaxed">{t(`intro.card${num}.description`)}</p>
          </Card>
        ))}
      </div>

      <section className="text-center italic text-xl text-mamamonte-lightBrown py-12 border-t border-mamamonte-border">
        <p className="max-w-2xl mx-auto line-height-relaxed">
          {t('intro.quote')}
        </p>
      </section>
    </div>
  )
}

export default SelfDirectedLearning
