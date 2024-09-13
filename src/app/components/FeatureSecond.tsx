import Image from "next/image";
import React from "react";
import { Button } from "./Button";

function FeatureSecond() {
  return (
    <section className="relative grid w-full max-w-[1440px] auto-rows-fr grid-cols-1 gap-4 bg-white p-6 md:grid-cols-2 md:px-20 md:py-[60px]">
      <div className="flex h-full flex-col justify-between gap-14 bg-[#2a254b] px-16 py-12">
        <div className="flex flex-col items-start justify-start gap-3">
          <h2 className="text-left font-clash-display text-headline-two text-white">
            It started with a small idea
          </h2>
          <p className="w-full text-left text-lg text-white">
            A global brand with local beginnings, our story began in a small
            studio in South London in early 2014
          </p>
        </div>
        <div className="mt-auto">
          <Button variant="opaque">View collection</Button>
        </div>
      </div>
      <div className="h-full">
        <Image
          src={"/assets/images/features/image_block.webp"}
          width={634}
          height={478}
          className="size-full object-cover"
          alt={"Feature block"}
        />
      </div>
    </section>
  );
}

export default FeatureSecond;
