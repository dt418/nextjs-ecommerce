import React from "react";
import FeatureCard from "./FeatureCard";
import IconDelivery from "@/app/assets/icons/delivery.svg";
import IconCheckmarkOutline from "@/app/assets/icons/checkmark--outline.svg";
import IconPurchase from "@/app/assets/icons/purchase.svg";
import IconSprout from "@/app/assets/icons/sprout.svg";

/**
 * A section component that displays a list of features of the brand.
 *
 * @return {React.ReactElement} A section element containing a list of features.
 */
function Features() {
  return (
    <section className="flex flex-col w-full max-w-[1440px] relative bg-white p-6 md:p-20 gap-9">
      <h3 className="block text-center text-2xl text-[#2a254b]">
        What makes our brand different
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <li className="grid">
          <FeatureCard
            icon={<IconDelivery className="size-6" />}
            title="Next day as standard"
            description="Order before 3pm and get your order the next day as standard"
          />
        </li>
        <li className="grid">
          <FeatureCard
            icon={<IconCheckmarkOutline className="size-6" />}
            title="Made by true artisans"
            description="Handmade crafted goods made with real passion and craftmanship"
          />
        </li>
        <li className="grid">
          <FeatureCard
            icon={<IconPurchase className="size-6" />}
            title="Unbeatable prices"
            description="For our materials and quality you won’t find better prices anywhere"
          />
        </li>
        <li className="grid">
          <FeatureCard
            icon={<IconSprout className="size-6" />}
            title="Recycled packaging"
            description="We use 100% recycled to ensure our footprint is more manageable"
          />
        </li>
      </ul>
    </section>
  );
}

export default Features;
