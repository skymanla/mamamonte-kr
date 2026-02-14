import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => (
  <div className={`max-w-4xl mx-auto p-6 md:p-8 ${className}`}>
    {children}
  </div>
)

interface CardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => (
  <div className={`
    bg-white p-6 rounded-2xl border border-mamamonte-border shadow-sm
    ${hoverEffect ? 'hover:shadow-md hover:-translate-y-1 transition-all duration-300' : ''}
    ${className}
  `}>
    {children}
  </div>
)

interface HeroSectionProps {
  title: string
  description: string
  className?: string
}

export const HeroSection: React.FC<HeroSectionProps> = ({ title, description, className = '' }) => (
  <section className={`text-center mb-12 bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-mamamonte-border shadow-sm ${className}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-mamamonte-orange mb-4 tracking-tight">{title}</h2>
    <p className="text-mamamonte-brown max-w-2xl mx-auto text-lg leading-relaxed">
      {description}
    </p>
  </section>
)
