import { DataProduct } from "@/utils/useProducts";

interface Props {
  products?: DataProduct[] | null;
}

export const ProductTable = ({ products }: Props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product: any, key: number) => (
          <tr key={key}>
            <td>{product.name}</td>
            <td>{product.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
