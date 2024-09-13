import HeroBlock from "./components/HeroBlock";
import Features from "./components/Features";
import ProductList from "./components/ProductList";
import FeatureSecond from "./components/FeatureSecond";
import ContactForm from "./components/ContactForm";

export default async function Home() {
  return (
    <main className="m-auto max-w-[1440px]">
      <HeroBlock />
      <Features />
      <ProductList />
      <FeatureSecond />
      <ContactForm />
    </main>
  );
}
