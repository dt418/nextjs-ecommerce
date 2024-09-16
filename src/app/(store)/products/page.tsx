import Filter from "@/app/components/store/products/Filter";
import Listing from "@/app/components/store/products/Listing";
import PageHeader from "@/app/components/store/products/PageHeader";

export default function ProductPage() {
  return (
    <main className="m-auto max-w-[1440px]">
      <PageHeader />
      <div className="grid grid-cols-1 px-6 md:grid-cols-12">
        <Filter />
        <Listing />
      </div>
    </main>
  );
}
