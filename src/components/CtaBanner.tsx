"use client";

import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";

export function CtaBanner() {
  return (
    <section
      id="stores"
      className="relative overflow-hidden bg-burgundy px-5 py-20 text-center text-white md:px-8 md:py-24"
    >
      <div className="pointer-events-none absolute left-8 top-10 h-40 w-40 rounded-[40%] border-[14px] border-white/5 rotate-12" />
      <div className="pointer-events-none absolute right-10 bottom-8 h-52 w-52 rounded-[42%] border-[18px] border-white/5 -rotate-6" />

      <Reveal>
        <h2 className="font-display relative text-4xl font-semibold tracking-tight sm:text-5xl">
          Ready To Crunch?
        </h2>
        <p className="relative mx-auto mt-4 max-w-md text-white/70">
          Find CRISPO near you or stock up online — your next favorite flavor is
          one click away.
        </p>
        <div className="relative mt-8 flex justify-center">
          <Button href="/products">Shop Now</Button>
        </div>
      </Reveal>
    </section>
  );
}
