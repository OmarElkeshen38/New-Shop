import { Product } from '@/types/products';
import Image from 'next/image';
import { FC } from 'react';

interface ProductsCardProps {
    product: Product;
}

const ProductsCard: FC<ProductsCardProps> = ({ product }) => {
  return (
    <>
      {/* <div className="card w-full rounded-md p-4 h-96 bg-cyan-300 shadow-xl my-1">
        <figure>
          <Image
            className="rounded-md w-full h-full"
            src={`${product.image}`}
            alt={`product ${product.title}`}
            width={250}
            height={200}
          />
        </figure>
        <div className="mt-5 text-left">
          <h2 className="card-titl font-semibold text-md">{product.title}</h2>
          <h3 className="mt-2">${product.price}</h3>
        </div>
      </div> */}

      <div className="card w-full rounded-md p-4 h-96 bg-cyan-300 shadow-xl my-1">
        <figure>
          <Image
            className="rounded-md w-full h-full"
            src={`${product.image}`}
            alt={`product ${product.title}`}
            width={250}
            height={200}
          />
        </figure>
        <div className="card-bod py-2">
          <h2 className="font-semibold text-left cursor-pointer">
            {product.title}
            <div className="badge badge-secondar text-cyan-100 bg-cyan-900 px-5 py-3 mx-1">
              NEW
            </div>
          </h2>
          <div className="card-actions justify-between my-3">
            <div className="badge badge-outline">{product.rating.rate}</div>
            <div className="badge badge-outline">{product.rating.count}</div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h3 className="text-left font-semibold">${product.price}</h3>
            <button className="btn bg-cyan-900 text-cyan-200 hover:bg-cyan-200 hover:text-cyan-900">
              <span className="text-xl">+</span>Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
