import React from "react";
import { Button } from "../../Button";

export default function Filter() {
  return (
    <section className="relative col-span-3 grid h-full bg-white py-5 lg:px-20 lg:py-12">
      <div className="hidden flex-col items-start justify-start md:flex">
        <div className="relative flex flex-col items-start justify-start gap-5">
          <p className="text-left text-base text-[#2a254b]">Product type</p>
          <div className="flex items-start justify-start gap-2.5">
            <div className="flex flex-col items-start justify-start gap-3">
              <div className="relative flex items-center justify-start gap-3">
                <div className="relative size-4 overflow-hidden rounded-sm border border-[#dcdcdc] bg-white" />
                <p className="text-left text-base text-[#2a254b]">Furniture</p>
              </div>
              <div className="relative flex items-center justify-start gap-3">
                <div className="relative size-4 overflow-hidden rounded-sm border border-[#dcdcdc] bg-white" />
                <p className="text-left text-base text-[#2a254b]">Homeware</p>
              </div>
              <div className="relative flex items-center justify-start gap-3">
                <div className="relative size-4 overflow-hidden rounded-sm border border-[#dcdcdc] bg-white" />
                <p className="text-left text-base text-[#2a254b]">Sofas</p>
              </div>
              <div className="relative flex items-center justify-start gap-3">
                <p className="text-left text-base text-[#2a254b]">Homeware</p>
              </div>
              <div className="relative flex items-center justify-start gap-3">
                <div className="relative size-4 overflow-hidden rounded-sm border border-[#dcdcdc] bg-white" />
                <p className="text-left text-base text-[#2a254b]">
                  Light fittings
                </p>
              </div>
              <div className="relative flex items-center justify-start gap-3">
                <div className="relative size-4 overflow-hidden rounded-sm border border-[#dcdcdc] bg-white" />
                <p className="text-left text-base text-[#2a254b]">
                  Accessories
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-start justify-start gap-5">
          <p className="text-left text-base text-[#2a254b]">Price</p>
          <div className="flex items-start justify-start gap-2.5">
            <div className="flex flex-col items-start justify-start gap-3">
              <div className="relative flex items-center justify-start gap-3">
                <div className="relative size-4 overflow-hidden rounded-sm border border-[#dcdcdc] bg-white" />
                <p className="text-left text-base text-[#2a254b]">0 - 100</p>
              </div>
              <div className="relative flex items-center justify-start gap-3">
                <div className="relative size-4 overflow-hidden rounded-sm border border-[#dcdcdc] bg-white" />
                <p className="text-left text-base text-[#2a254b]">101 - 250</p>
              </div>
              <div className="relative flex items-center justify-start gap-3">
                <div className="relative size-4 overflow-hidden rounded-sm border border-[#dcdcdc] bg-white" />
                <p className="text-left text-base text-[#2a254b]">250 +</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-start justify-start gap-5">
          <p className="text-left text-base text-[#2a254b]">Designer</p>
          <div className="flex items-start justify-start gap-2.5 pr-[22px]">
            <div className="flex flex-col items-start justify-start gap-3">
              <div className="relative flex items-center justify-start gap-3">
                <div className="relative size-4 overflow-hidden rounded-sm border border-[#dcdcdc] bg-white" />
                <p className="text-left text-base text-[#2a254b]">
                  Robert Smith
                </p>
              </div>
              <div className="relative flex items-center justify-start gap-3">
                <div className="relative size-4 overflow-hidden rounded-sm border border-[#dcdcdc] bg-white" />
                <p className="text-left text-base text-[#2a254b]">
                  Liam Gallagher
                </p>
              </div>
              <div className="relative flex items-center justify-start gap-3">
                <div className="relative size-4 overflow-hidden rounded-sm border border-[#dcdcdc] bg-white" />
                <p className="text-left text-base text-[#2a254b]">
                  Biggie Smalls
                </p>
              </div>
              <div className="relative flex items-center justify-start gap-3">
                <div className="relative size-4 overflow-hidden rounded-sm border border-[#dcdcdc] bg-white" />
                <p className="text-left text-base text-[#2a254b]">Thom Yorke</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-row gap-4 md:hidden">
        <Button variant={"secondary"} className="w-full">
          Filters
        </Button>
        <Button variant={"secondary"} className="w-full">
          Sorting
        </Button>
      </div>
    </section>
  );
}
