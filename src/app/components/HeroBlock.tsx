import Link from "next/link";
import React from "react";

/**
 * The hero block component that displays a background image of a room interior
 * and an overlay with a title, description, and a call-to-action button.
 *
 * @returns {JSX.Element} A JSX element representing the hero block
 */
function HeroBlock() {
  return (
    <section className="relative flex max-w-[1440px] items-center justify-end overflow-hidden bg-[url('hero-block.webp')] bg-cover bg-center bg-no-repeat pb-[75%] sm:pb-[50%] md:h-full md:py-[130px]">
      <div className="m-0 flex flex-col gap-8 overflow-hidden bg-white/75 p-6 md:mr-[80px] md:max-w-[630px] md:px-14 md:py-12">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-left font-clash-display text-headline-two text-[#22202e]">
            Luxury homeware for people who love timeless design quality
          </h2>
          <p className="text-left text-lg text-[#5b5676]">
            Shop the new Spring 2022 collection today
          </p>
        </div>
        <div className="inline-flex md:mt-[160px]">
          <Link
            href="/products"
            className="bg-light-grey p-4 text-left text-base text-[#2a254b]"
          >
            View collection
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroBlock;
