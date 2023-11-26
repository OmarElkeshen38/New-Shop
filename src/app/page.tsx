import ProductsCard from "@/Components/ProductsCard";
import { getProducts } from "@/utils/api";

export default async function Home() {

  const products = await getProducts();
  console.log(products);
  
  
  return (
    <main className="container text-center bg-cyan-500">
      <div className="">
        <h1 className="text-3xl py-10 text-cyan-950 font-bold">
          Latest Products
        </h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 mt-7">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
