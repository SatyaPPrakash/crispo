import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { RecipeGrid } from "@/components/recipes/RecipeGrid";

export const metadata = {
  title: "Recipes — CRISPO",
  description:
    "Crunchy recipes to make with CRISPO crisps — nachos, crusted chicken, party bowls and more.",
};

export default function Recipes() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden bg-cream px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-24">
          <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-pink/30 blur-3xl" />
          <div className="relative mx-auto max-w-4xl text-center">
            <Reveal>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-burgundy sm:text-5xl">
                Crunchy recipes
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                Tasty ways to enjoy CRISPO beyond the bag — from quick snacks
                to crowd-pleasing plates.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-cream px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <RecipeGrid />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
