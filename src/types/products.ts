export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number,
    count: number,
  },
}


export interface ProductDataWrapper {
    results: any;
    map(arg0: (product: any) => import("react").JSX.Element): import("react").ReactNode;
    products: Product[];
}