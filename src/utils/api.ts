import { ProductDataWrapper } from "@/types/products";

const BASE_URL = 'https://fakestoreapi.com';

const handleResponse = async <T>(res: Response) => {
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();
  return data as T;
};

export const getProducts = async (): Promise<ProductDataWrapper> => {
    const url = `${BASE_URL}/products`;
    const res = await fetch(url);
    return handleResponse<ProductDataWrapper>(res);
}


export const detailProduct = async (productId: string): Promise<ProductDataWrapper> => {
  const url = `${BASE_URL}/products/${productId}`;
  const res = await fetch(url);
  return handleResponse<ProductDataWrapper>(res);
};