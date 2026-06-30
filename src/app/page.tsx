import { HeroSection } from '@/components/home/hero-section'
import { BenefitsSection } from '@/components/home/benefits-section'
import { ServicesSection } from '@/components/home/services-section'
import { HowItWorksSection } from '@/components/home/how-it-works-section'
import { PricingPreview } from '@/components/home/pricing-preview'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { CoverageSection } from '@/components/home/coverage-section'
import { FAQSection } from '@/components/home/faq-section'
import { CTASection } from '@/components/home/cta-section'
import { generateFAQSchema } from '@/lib/seo'
import { FAQ_DATA } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(FAQ_DATA)),
        }}
      />
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <HowItWorksSection />
      <PricingPreview />
      <TestimonialsSection />
      <CoverageSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
