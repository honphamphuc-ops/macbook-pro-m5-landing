import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Specs } from "@/components/Specs";
import { FadeInSection } from "@/components/ui/FadeInSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-text-heading">
      <Navbar />
      <main>
        <FadeInSection>
          <Hero />
        </FadeInSection>
        <FadeInSection>
          <Features />
        </FadeInSection>
        <FadeInSection>
          <Specs />
        </FadeInSection>
        <FadeInSection>
          <NewsletterForm />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
}
