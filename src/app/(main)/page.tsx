"use client";

import { useQuery } from "@tanstack/react-query";

import { getProducts } from "~/lib/queries";
import { ProductList } from "./_components/product-list";

export default function HomePage() {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await getProducts();
      return data;
    },
  });

  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="relative overflow-hidden px-1 pb-10 pt-8 md:pt-16">
          {products && <ProductList products={products} />}
        </div>
      </div>
    </div>
  );
}
