import ProductsCard from "@/Components/ProductsCard";
import { getProducts } from "@/utils/api";

export default async function Home() {

  const products = await getProducts();
  
  return (
    <main className="container text-center bg-white">
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-[40px]">
        <h1 className="text-5xl p-6 flex justify-center items-center tracking-widest text-slate-900 font-bold">
          Our Latest Products
        </h1>
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
