export interface IProduct {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
  discount: number;
  quantity: number;
}

export interface ICollection {
  id: number;
  title: string;
  image: string;
}
