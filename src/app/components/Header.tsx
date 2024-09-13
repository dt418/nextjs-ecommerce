import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import IconUserAvartar from "@/app/assets/icons/user--avatar.svg";
import IconShoppingCard from "@/app/assets/icons/shopping--cart.svg";
import IconSearch from "@/app/assets/icons/search.svg";

export default function Header() {
  return (
    <nav className="relative m-auto flex max-w-[1440px] flex-col items-center justify-center gap-4 overflow-hidden bg-white p-4 font-satoshi">
      <div className="flex w-full flex-row items-center justify-between gap-2 py-4 md:border-b">
        <LoginLink title="Login">
          <IconUserAvartar />
        </LoginLink>
        <Link href={"/"} title="Home">
          <h1>Avion</h1>
        </Link>
        <div className="inline-flex gap-2">
          <IconShoppingCard />
          <IconSearch />
        </div>
      </div>
      <ul className="hidden items-start justify-start gap-11 md:flex">
        <li>
          <Link
            href={"#"}
            className="shrink-0 grow-0 text-left text-base text-[#726e8d]"
          >
            Plant pots
          </Link>
        </li>
        <li>
          <Link
            href={"#"}
            className="shrink-0 grow-0 text-left text-base text-[#726e8d]"
          >
            Ceramics
          </Link>
        </li>
        <li>
          <Link
            href={"#"}
            className="shrink-0 grow-0 text-left text-base text-[#726e8d]"
          >
            Tables
          </Link>
        </li>
        <li>
          <Link
            href={"#"}
            className="shrink-0 grow-0 text-left text-base text-[#726e8d]"
          >
            Chairs
          </Link>
        </li>
        <li>
          <Link
            href={"#"}
            className="shrink-0 grow-0 text-left text-base text-[#726e8d]"
          >
            Crockery
          </Link>
        </li>
        <li>
          <Link
            href={"#"}
            className="shrink-0 grow-0 text-left text-base text-[#726e8d]"
          >
            Tableware
          </Link>
        </li>
        <li>
          <Link
            href={"#"}
            className="shrink-0 grow-0 text-left text-base text-[#726e8d]"
          >
            Cutlery
          </Link>
        </li>
      </ul>
    </nav>
  );
}
