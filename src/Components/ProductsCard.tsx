'use client';

import { Product } from '@/types/products';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface ProductsCardProps {
    product: Product;
}

const ProductsCard: FC<ProductsCardProps> = ({ product }) => {

  const addToCart = () => {
    console.log('Adding to cart:', product);
    // Get existing cart items from localStorage
    const existingCartItems = JSON.parse(localStorage.getItem('cart') || '[]');

    // Check if the product is already in the cart
    const isProductInCart = existingCartItems.some((item: Product) => item.id === product.id);

    if (!isProductInCart) {
      // Add the product to the cart
      const updatedCart = [...existingCartItems, product];

      // Update localStorage with the new cart items
      localStorage.setItem('cart', JSON.stringify(updatedCart));

      // Optionally, you can update some state or provide feedback to the user
      alert('Product added to cart!');
    } else {
      // Optionally, provide feedback that the product is already in the cart
      alert('Product is already in the cart!');
    }
  };

  return (
    <>
      <div className="card w-full rounded-md h-96 p-3 bg-slate-100 shadow-xl my-1">
        <figure>
          <Image
            className="rounded-md w-full h-full"
            src={`${product.image}`}
            alt={`product ${product.title}`}
            width={250}
            height={200}
          />
        </figure>
        <div className="py-3 px-3">
            <div className="text-left">
                <Link href={`products/${product.id}`} className="font-semibold text-left cursor-pointer">
                    {product.title}
                    <div className="badge badge-secondar text-slate-100 bg-slate-900 px-5 py-3 mx-1">
                    NEW
                    </div>
                </Link>
            </div>
          
          <div className="card-actions justify-between my-5">
            <div className="badge badge-outline">{product.rating.rate}</div>
            <div className="badge badge-outline">{product.rating.count}</div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h3 className="text-left font-semibold">${product.price}</h3>
            <button onClick={addToCart} className="btn bg-slate-600 text-slate-200 hover:bg-slate-200 hover:text-slate-900">
              <span className="text-xl">+</span>Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
