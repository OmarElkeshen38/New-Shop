import { Product } from '@/types/products';
import Image from 'next/image';
import { FC } from 'react';

interface ProductsCardProps {
    product: Product;
}

const ProductsCard: FC<ProductsCardProps> = ({ product }) => {
  return (
    <>
      <div className="card w-full rounded-md bg-base-200 p-4 shadow-xl">
        <figure>
          <Image
          className='rounded-md'
            src={`${product.image}`}
            alt={`product ${product.title}`}
            width={250}
            height={200}
          />
        </figure>
        <div className="card-body">
          <h3 className="card-title text-md">{product.title}</h3>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
