"use client";

import { Database } from "@/lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const Product = async () => {
  const supabase = createClientComponentClient<Database>();
  const { data: products, error } = await supabase.from("products").select();

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-96">
        <table className="table">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
          {products?.map((product, key) => (
            <tr key={key}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Product;
