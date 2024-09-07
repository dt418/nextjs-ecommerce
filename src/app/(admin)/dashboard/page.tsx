import Link from "next/link";

export default async function Dashboard() {
  return (
    <div className="flex w-[1440px] relative overflow-hidden bg-[url('hero-block.png')] bg-cover bg-no-repeat bg-center justify-end h-[704px] items-center self-baseline">
      <div className="flex flex-col w-[630px] h-[444px] overflow-hidden bg-white/85 px-14 py-12 justify-between mr-[80px]">
        <div className="flex flex-col justify-start left-14 top-12 gap-5">
          <p className="w-[513px] text-[32px] text-left text-[#22202e]">
            Luxury homeware for people who love timeless design quality
          </p>
          <p className="text-lg text-left text-[#5b5676]">
            Shop the new Spring 2022 collection today
          </p>
        </div>
        <div className="inline-flex">
          <Link
            href="#"
            className="text-base text-left text-[#2a254b] p-4 bg-light-grey"
          >
            View collection
          </Link>
        </div>
      </div>
    </div>
  );
}
