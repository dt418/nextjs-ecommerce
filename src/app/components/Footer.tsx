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
    <footer className="flex flex-col max-w-[1440px] relative overflow-hidden bg-[#2a254b] mx-auto p-4 gap-y-4 divide-y-2 divide-primary">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <ul className="flex flex-col justify-start items-start gap-3">
            <li>
              <Link
                href="#"
                className="flex-grow-0 flex-shrink-0 text-base text-left text-white"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex-grow-0 flex-shrink-0 text-sm text-left text-white"
              >
                New arrivals
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex-grow-0 flex-shrink-0 text-sm text-left text-white"
              >
                Best sellers
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex-grow-0 flex-shrink-0 text-sm text-left text-white"
              >
                Recently viewed
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex-grow-0 flex-shrink-0 text-sm text-left text-white"
              >
                Popular this week
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex-grow-0 flex-shrink-0 text-sm text-left text-white"
              >
                All products
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col justify-start items-start gap-3">
            <li>
              <Link
                href="#"
                className="flex-grow-0 flex-shrink-0 text-base text-left text-white"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex-grow-0 flex-shrink-0 text-sm text-left text-white"
              >
                Crockery
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex-grow-0 flex-shrink-0 text-sm text-left text-white"
              >
                Furniture
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex-grow-0 flex-shrink-0 text-sm text-left text-white"
              >
                Homeware
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex-grow-0 flex-shrink-0 text-sm text-left text-white"
              >
                Plant pots
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex-grow-0 flex-shrink-0 text-sm text-left text-white"
              >
                Chairs
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex-grow-0 flex-shrink-0 text-sm text-left text-white"
              >
                Crockery
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col justify-start items-start gap-3">
            <li>
              <Link
                href="#"
                className="flex-grow-0 flex-shrink-0 text-base text-left text-white"
              >
                Our company
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex-grow-0 flex-shrink-0 text-sm text-left text-white"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex-grow-0 flex-shrink-0 text-sm text-left text-white"
              >
                Vacancies
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex-grow-0 flex-shrink-0 text-sm text-left text-white"
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex-grow-0 flex-shrink-0 text-sm text-left text-white"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex-grow-0 flex-shrink-0 text-sm text-left text-white"
              >
                Returns policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-base text-left text-white">
            Join our mailing list
          </p>
          <div className="flex justify-start items-start">
            <input
              type="email"
              placeholder="your-email@example.com"
              className="p-4 bg-white/15 text-base text-left text-white w-full inline-block ring ring-inset ring-primary/15"
            />
            <button className="inline-flex flex-shrink-0 flex-grow-0 text-base text-left text-[#2a254b] cursor-pointer px-8 py-4 bg-white">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-4">
        <p className="text-sm text-left text-white">Copyright 2022 Avion LTD</p>
        <ul className="flex justify-start items-start text-white">
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
