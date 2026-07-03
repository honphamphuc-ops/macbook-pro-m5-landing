import dynamic from "next/dynamic";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { FadeInSection } from "@/components/ui/FadeInSection";

const Features = dynamic(
  () => import("@/components/Features").then((mod) => mod.Features)
);
const Specs = dynamic(
  () => import("@/components/Specs").then((mod) => mod.Specs)
);
const NewsletterForm = dynamic(
  () => import("@/components/NewsletterForm").then((mod) => mod.NewsletterForm)
);


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
