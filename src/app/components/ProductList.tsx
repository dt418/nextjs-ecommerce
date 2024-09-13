import React from "react";
import ProductCard from "./ProductCard";
import { Button } from "./Button";

function ProductList() {
  return (
    <section className="relative flex w-full max-w-[1440px] flex-col gap-4 overflow-hidden px-6 md:gap-12 md:px-20 md:pb-10 md:pt-7">
      <h3 className="block text-center font-clash-display text-headline-three text-[#2a254b]">
        New products
      </h3>
      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
        <li>
          <ProductCard
            imageSrc="/assets/images/products/product_card_1.webp"
            alt="The Dandy chair image"
            title="The Dandy chair"
            price={250}
          />
        </li>
        <li>
          <ProductCard
            imageSrc="/assets/images/products/product_card_2.webp"
            alt="Rustic Vase Set image"
            title="Rustic Vase Set"
            price={115}
          />
        </li>
        <li>
          <ProductCard
            imageSrc="/assets/images/products/product_card_3.webp"
            alt="The Silky Vase image"
            title="The Silky Vase"
            price={125}
          />
        </li>
        <li>
          <ProductCard
            imageSrc="/assets/images/products/product_card_4.webp"
            alt="The Lucy Lamp image"
            title="The Lucy Lamp"
            price={399}
          />
        </li>
      </ul>
      <div className="block text-center">
        <Button variant={"secondary"}>View collection</Button>
      </div>
    </section>
  );
}

export default ProductList;
