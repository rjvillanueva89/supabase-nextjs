import { ProductData } from "@/app/products/page";
import useToggle from "@/utils/useToggle";
import { IconPencilSquare, IconXmark } from "./Icons/Outline";
import { ProductForm } from "./product-form";

interface Props {
  products?: ProductData[] | null;
}

export const ProductTable = ({ products }: Props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product, key) => (
          <Row product={product} key={key} />
        ))}
      </tbody>
    </table>
  );
};

interface RowProps {
  product: ProductData;
}

const Row = ({ product }: RowProps) => {
  const { state: isEditOpen, open: openEdit, close: closeEdit } = useToggle();

  return (
    <>
      <tr>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>
          {isEditOpen ? (
            <button type="button" className="btn btn-ghost" onClick={closeEdit}>
              <IconXmark />
            </button>
          ) : (
            <button type="button" className="btn btn-ghost" onClick={openEdit}>
              <IconPencilSquare />
            </button>
          )}
        </td>
      </tr>
      {isEditOpen && (
        <tr>
          <td colSpan={3}>
            <ProductForm product={product} onSubmit={closeEdit} />
          </td>
        </tr>
      )}
    </>
  );
};
