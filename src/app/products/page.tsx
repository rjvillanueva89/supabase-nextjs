import ClientProviders from "@/components/Auth/client-providers";
import { ProductTable } from "@/components/product-table";

const Product = () => {
  return (
    <ClientProviders>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="w-96">
          <ProductTable />
        </div>
      </div>
    </ClientProviders>
  );
};

export default Product;
