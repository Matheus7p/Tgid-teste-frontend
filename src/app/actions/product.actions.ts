import {  IProductModelResponse } from "@/domain/models/product.model";
import axios from "axios";

const PRODUCTS_JSON_URL = "http://localhost:3001/products";

export async function getAllProducts(): Promise<IProductModelResponse> {
  const { data } = await axios.get(PRODUCTS_JSON_URL);
  return { products: data };
}
