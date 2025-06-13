/* eslint-disable react-refresh/only-export-components */
import { IProductModel, IProductModelResponse } from "@/domain/models/product.model";
import { useQuery } from "@tanstack/react-query";
import { createContext, ReactNode, useContext } from "react";
import { getAllProducts } from "../actions/product.actions";

export interface IProductContext {
  products: IProductModel[];
  isLoading: boolean;
}


export const ProductsContext = createContext<IProductContext | null>(null);
export function ProductProvider({ children }: Readonly<{ children: React.ReactNode }>): ReactNode {
  const { data, isLoading } = useQuery<IProductModelResponse>({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  return (
    <ProductsContext.Provider value={{ 
      products: data?.products || [],
      isLoading,
    }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProductsContext(): IProductContext {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error(
      "Missing PropertiesContext.Provider before useProductsContext"
    );
  }

  return context;
}
