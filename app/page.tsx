import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { VisionSection } from "@/components/vision-section"
import { QuoteBanner } from "@/components/quote-banner"
import { CoursesSection } from "@/components/courses-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <VisionSection />
        <QuoteBanner />
        <CoursesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
