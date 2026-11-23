import { CtaBanner } from "@/components/CtaBanner";
import { FlavorStory } from "@/components/FlavorStory";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProductGrid } from "@/components/ProductGrid";
import { Testimonials } from "@/components/Testimonials";
import { WhyChoose } from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChoose />
        <FlavorStory />
        <ProductGrid />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
