import HeroBlock from "./components/HeroBlock";
import Features from "./components/Features";

export default async function Home() {
  return (
    <main className="m-auto max-w-[1440px]">
      <HeroBlock />
      <Features />
    </main>
  );
}
