'use client';

import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface CartPageProps {}

const CartPage: FC<CartPageProps> = ({}) => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartProducts(storedCart);
  }, []);

  const calculateTotalPrice = (): number => {
    return cartProducts.reduce((total, product) => total + product.price, 0);
  };

  const handleCheckout = () => {
    Swal.fire('Thanks for shopping');
  };

  const handleDeleteProduct = (productId: number) => {
    const updatedCart = cartProducts.filter(
      (product) => product.id !== productId,
    );
    setCartProducts(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const displayProducts = () => {
    return cartProducts.map((product: Product) => (
      <div
        key={product.id}
        className="flex flex-col md:flex-row items-center justify-between border-b border-gray-300 p-4"
      >
        <div className="card card-side p-3 w-full md:w-2/3 bg-slate-100 shadow-xl mb-4 md:mb-0">
          <figure className="mb-4 md:mb-0 md:mr-4">
            <Image
              className="rounded-md w-full md:w-36"
              src={`${product.image}`}
              alt={`product ${product.title}`}
              width={250}
              height={200}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>Price: ${product.price}</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleDeleteProduct(product.id)}
                className="btn bg-slate-600 text-slate-100 hover:bg-slate-500"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container flex flex-col md:flex-row my-6">
      <div className="w-full md:w-3/4">
        <h1 className="text-4xl mb-6">Your Cart:</h1>
        {cartProducts.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>{displayProducts()}</div>
        )}
      </div>
      <div className="w-full md:w-1/4 mt-4 md:ml-4">
        <div className="p-4 border border-gray-300 rounded-md bg-slate-100">
          <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
          {cartProducts.length > 0 && (
            <>
              <div className="flex justify-between mb-4">
                <p className="text-xl font-semibold">Total:</p>
                <p className="text-xl">${calculateTotalPrice()}</p>
              </div>
              <button
                onClick={handleCheckout}
                className="btn btn-block bg-slate-600 text-slate-100 hover:bg-slate-500"
              >
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
