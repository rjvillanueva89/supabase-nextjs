import { Database } from "@/lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const ProductTable = async () => {
  const supabase = createClientComponentClient<Database>();
  const { data: products, error } = await supabase.from("products").select();

  return (
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
  );
};
