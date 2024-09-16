import React from "react";

export default function PageHeader() {
  return (
    <section className="relative flex h-[209px] max-w-[1440px] flex-col items-center justify-end overflow-hidden bg-[url('assets/images/products/page_header.webp')] bg-cover bg-center bg-no-repeat pb-9 pl-20 md:items-start">
      <p className="inline-block text-left text-4xl text-white">All products</p>
    </section>
  );
}
