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
    <section className="flex max-w-[1440px] relative overflow-hidden bg-[url('hero-block.webp')] bg-cover bg-no-repeat bg-center justify-end md:h-full items-center md:py-[130px] sm:pb-[50%] pb-[75%]">
      <div className="flex flex-col md:max-w-[630px] overflow-hidden bg-white/75 p-6 md:px-14 md:py-12 m-0 md:mr-[80px] gap-8">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-[32px] text-left text-[#22202e]">
            Luxury homeware for people who love timeless design quality
          </h2>
          <p className="text-lg text-left text-[#5b5676]">
            Shop the new Spring 2022 collection today
          </p>
        </div>
        <div className="inline-flex md:mt-[160px]">
          <Link
            href="/collections"
            className="text-base text-left text-[#2a254b] p-4 bg-light-grey"
          >
            View collection
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroBlock;
