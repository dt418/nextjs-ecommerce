import React from "react";
import ProductCard from "./ProductCard";
import { Button } from "./Button";

function ProductList() {
  return (
    <section className="relative flex w-full max-w-[1440px] flex-col gap-4 overflow-hidden px-6 md:px-20 md:pb-80 md:pt-7">
      <h3 className="block text-center font-clash-display text-2xl text-[#2a254b]">
        New products
      </h3>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <li>
          <ProductCard
            imageSrc="/assets/images/products/product_card_1.webp"
            alt="Product card 1 image"
            title="The Dandy chair"
            price={399.99}
          />
        </li>
        <li>
          <ProductCard
            imageSrc="/assets/images/products/product_card_2.webp"
            alt="Product card 1 image"
            title="The Dandy chair"
            price={399.99}
          />
        </li>
        <li>
          <ProductCard
            imageSrc="/assets/images/products/product_card_3.webp"
            alt="Product card 1 image"
            title="The Dandy chair"
            price={399.99}
          />
        </li>
        <li>
          <ProductCard
            imageSrc="/assets/images/products/product_card_4.webp"
            alt="Product card 1 image"
            title="The Dandy chair"
            price={399.99}
          />
        </li>
      </ul>
      <div className="block text-center">
        <Button variant={"secondary"}>View all</Button>
      </div>
    </section>
  );
}

export default ProductList;
