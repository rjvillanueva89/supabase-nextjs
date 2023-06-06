"use client";

import { ProductTable } from "@/components/product-table";

const Product = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-96">
        <ProductTable />
      </div>
    </div>
  );
};

export default Product;
