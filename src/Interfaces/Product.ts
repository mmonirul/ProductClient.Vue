export interface IProduct {
  productId: number;
  name: string;
  price?: number;
  description: string;
  memory: number;
  color: string;
  category: string;
  brand: string;
  defaultImageUrl: string;
  subscriptionId?: number;
  tag: string;
}
export interface IProductImage {
  id: number;
  name: string;
  productId: number;
  url: string;
  colorId: number;
}
export interface IProductColor {
  id: number;
  name: string;
  productId: number;
  url: string;
}
export interface ISubscriptionOption {
  id: number;
  name: string;
  price: number;
  description: string;
}
