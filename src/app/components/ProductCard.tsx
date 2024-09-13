import Image from "next/image";

type ProductCardProps = {
  imageSrc: string;
  alt: string;
  title: string;
  price: number;
};
/**
 * The product card component is used to display a product title, price and an image.
 * It is typically used in a grid or list of products.
 *
 * @param {{ imageSrc: string, alt: string, title: string, price: number }} props
 * - The props for this component
 * @returns {JSX.Element} A JSX element representing the product card
 * @example
 * <ProductCard
 *   imageSrc="https://example.com/product-image.jpg"
 *   alt="Product Image"
 *   title="Product Title"
 *   price="399.99"
 * />
 */
export default function ProductCard({
  imageSrc,
  alt,
  title,
  price,
}: ProductCardProps): JSX.Element {
  return (
    <article className="group relative flex max-h-full flex-col items-start justify-start gap-6 overflow-hidden transition-transform duration-500 ease-in-out will-change-transform">
      {/* Wrap the image with a div that applies group-hover */}
      <div className="overflow-hidden">
        <Image
          alt={alt}
          src={imageSrc}
          width={610}
          height={750}
          className="aspect-[610/750] h-auto w-full object-cover transition-transform duration-500 ease-in-out will-change-transform group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        {/* Display the product title */}
        <h4 className="text-left text-headline-four text-dark-primary">
          {title}
        </h4>
        {/* Display the product price */}
        <p className="text-left text-body-large text-dark-primary">{price}</p>
      </div>
    </article>
  );
}
