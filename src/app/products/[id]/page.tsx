'use client';

import LoadingBars from '@/Components/LoadingBars';
import { detailProduct } from '@/utils/api';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

interface ProductDetailsProps {
  params: {
    id: string;
  };
}

const ProductDetail: FC<ProductDetailsProps> = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await detailProduct(id);
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    fetchProduct();
  }, [id]);

  const addToCart = () => {
    const existingCartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const isProductInCart = existingCartItems.some(
      (item: { id: any }) => item.id === product.id,
    );

    if (!isProductInCart) {
      const updatedCart = [...existingCartItems, product];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Product added successfully!',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Product already exists!',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="container flex flex-col gap-4 items-center">
      {product ? (
        <div className="rounded-md grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:card-side bg-slate-100 p-8 max-w-5xl my-10 shadow-xl">
          <figure className="max-w-sm lg:col-span-1 xl:col-span-2">
            <Image
              className="rounded-md w-full"
              src={`${product.image}`}
              alt={`product ${product.title}`}
              width={250}
              height={200}
            />
          </figure>
          <div className="card-body lg:col-span-1 xl:col-span-1">
            <h2 className="card-title text-2xl">{product.title}</h2>
            <p className="my-4">{product.description}</p>
            <h3 className="text-xl">
              <span className="me-2 text-xl font-semibold">Category: </span>
              {product.category}
            </h3>
            <h3 className="text-xl">
              <span className="me-2 text-xl font-semibold">Price: </span> $
              {product.price}
            </h3>
            <div className="card-actions justify-end">
              <button
                onClick={addToCart}
                className="btn bg-slate-600 text-slate-200 hover:bg-slate-200 hover:text-slate-900"
              >
                <span className="text-xl">+</span>Add To Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <LoadingBars />
      )}
    </div>
  );
};

export default ProductDetail;