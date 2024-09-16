import React from "react";
import ProductCard from "../../ProductCard";

export default function Listing() {
  return (
    <section className="col-span-9 grid py-7">
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
    </section>
  );
}
