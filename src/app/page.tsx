import HeroBlock from "./components/HeroBlock";
import Features from "./components/Features";
import ProductList from "./components/ProductList";

export default async function Home() {
  return (
    <main className="m-auto max-w-[1440px]">
      <HeroBlock />
      <Features />
      <ProductList />
    </main>
  );
}
