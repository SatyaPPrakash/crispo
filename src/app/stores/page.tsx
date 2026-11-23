import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { StoreLocator } from "@/components/stores/StoreLocator";

export const metadata = {
  title: "Where to Buy — CRISPO",
  description:
    "Find CRISPO crisps at a store near you or order online from our retail partners.",
};

export default function Stores() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden bg-cream px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-24">
          <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-mustard/35 blur-3xl" />
          <div className="relative mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-burgundy sm:text-5xl">
                Find your nearest crunch
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                CRISPO is on shelves nationwide. Search by city or store name.
              </p>
            </Reveal>
          </div>
        </section>

        <StoreLocator />
      </main>
      <Footer />
    </>
  );
}
