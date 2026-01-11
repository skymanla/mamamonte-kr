import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <footer className="mt-16 text-center text-sm text-mamamonte-lightBrown border-t border-mamamonte-border pt-8">
      <p>{t('footer.copy')}</p>
    </footer>
  )
}

export default Footer
