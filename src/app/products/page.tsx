"use client";

import { ProductForm } from "@/components/product-form";
import { ProductTable } from "@/components/product-table";
import { Database } from "@/lib/database.types";
import useToggle from "@/utils/useToggle";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

export type ProductData = {
  id: string;
  name: string;
  description: string | null;
  create_by: string | null;
  created_at: string;
};

const Product = () => {
  const supabase = createClientComponentClient<Database>();
  const [products, setProducts] = useState<ProductData[] | null>();
  const { state: isFormOpen, open: openForm, close: closeForm } = useToggle();

  const getProducts = async () => {
    const { data, error } = await supabase.from("products").select();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, [isFormOpen]);

  return (
    <div className="w-96">
      <div className="mb-4 text-right">
        {isFormOpen ? (
          <button className="btn" onClick={closeForm}>
            Back
          </button>
        ) : (
          <button className="btn" onClick={openForm}>
            New
          </button>
        )}
      </div>
      {isFormOpen ? (
        <ProductForm onSubmit={closeForm} />
      ) : (
        <ProductTable products={products} />
      )}
    </div>
  );
};

export default Product;
