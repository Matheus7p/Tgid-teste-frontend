export interface IProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface IProductModelResponse {
  products: IProductModel[];
}