import ProductsCard from "@/Components/ProductsCard";
import { getProducts } from "@/utils/api";

export default async function Home() {

  const products = await getProducts();
  console.log(products);
  
  
  return (
    <main className="container text-center bg-cyan-500">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 py-[40px]">
        <h1 className="text-5xl p-6 flex justify-center items-center tracking-widest text-cyan-950 font-bold">
          Our Latest Products
        </h1>
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
