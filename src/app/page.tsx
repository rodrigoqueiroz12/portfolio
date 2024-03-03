import { AppContainer } from '@/_components/_containers/app-container'
import { AppHeroSection } from '@/_components/_sections/app-hero-section'
import { AppInformationSection } from '@/_components/_sections/app-information-section'
import { SectionDivider } from '@/_components/section-divider'

export default function Home() {
  return (
    <main className="min-h-screen pb-32 pt-12">
      <AppContainer>
        <AppHeroSection />

        <SectionDivider />

        <AppInformationSection />
      </AppContainer>
    </main>
  )
}
