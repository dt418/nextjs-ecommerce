import Link from "next/link";
import React from "react";

import LogoFacebook from "@/app/assets/icons/logo--facebook.svg";
import LogoInstagram from "@/app/assets/icons/logo--instagram.svg";
import LogoLinkedIn from "@/app/assets/icons/logo--linkedin.svg";
import LogoPinterest from "@/app/assets/icons/logo--pinterest.svg";
import LogoSkype from "@/app/assets/icons/logo--skype.svg";
import LogoTwitter from "@/app/assets/icons/logo--twitter.svg";

export default function Footer() {
  return (
    <footer className="relative mx-auto flex max-w-[1440px] flex-col gap-y-4 divide-y-2 divide-primary overflow-hidden bg-[#2a254b] p-4">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <ul className="flex flex-col items-start justify-start gap-3">
            <li>
              <Link
                href="#"
                className="shrink-0 grow-0 text-left text-base text-white"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="shrink-0 grow-0 text-left text-sm text-white"
              >
                New arrivals
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="shrink-0 grow-0 text-left text-sm text-white"
              >
                Best sellers
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="shrink-0 grow-0 text-left text-sm text-white"
              >
                Recently viewed
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="shrink-0 grow-0 text-left text-sm text-white"
              >
                Popular this week
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="shrink-0 grow-0 text-left text-sm text-white"
              >
                All products
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col items-start justify-start gap-3">
            <li>
              <Link
                href="#"
                className="shrink-0 grow-0 text-left text-base text-white"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="shrink-0 grow-0 text-left text-sm text-white"
              >
                Crockery
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="shrink-0 grow-0 text-left text-sm text-white"
              >
                Furniture
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="shrink-0 grow-0 text-left text-sm text-white"
              >
                Homeware
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="shrink-0 grow-0 text-left text-sm text-white"
              >
                Plant pots
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="shrink-0 grow-0 text-left text-sm text-white"
              >
                Chairs
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="shrink-0 grow-0 text-left text-sm text-white"
              >
                Crockery
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col items-start justify-start gap-3">
            <li>
              <Link
                href="#"
                className="shrink-0 grow-0 text-left text-base text-white"
              >
                Our company
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="shrink-0 grow-0 text-left text-sm text-white"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="shrink-0 grow-0 text-left text-sm text-white"
              >
                Vacancies
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="shrink-0 grow-0 text-left text-sm text-white"
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="shrink-0 grow-0 text-left text-sm text-white"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="shrink-0 grow-0 text-left text-sm text-white"
              >
                Returns policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-left text-base text-white">
            Join our mailing list
          </p>
          <div className="flex items-start justify-start">
            <input
              type="email"
              placeholder="your-email@example.com"
              className="inline-block w-full bg-white/15 p-4 text-left text-base text-white ring ring-inset ring-primary/15"
            />
            <button className="inline-flex shrink-0 grow-0 cursor-pointer bg-white px-8 py-4 text-left text-base text-[#2a254b]">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-4">
        <p className="text-left text-sm text-white">Copyright 2022 Avion LTD</p>
        <ul className="flex items-start justify-start text-white">
          <li>
            <Link href="#">
              <LogoLinkedIn className="size-6" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <LogoFacebook className="size-6" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <LogoInstagram className="size-6" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <LogoSkype className="size-6" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <LogoTwitter className="size-6" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <LogoPinterest className="size-6" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
