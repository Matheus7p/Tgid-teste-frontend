import { useProductsContext } from "@/app/context/product.context";

export function Home() {
  const { products, isLoading } = useProductsContext();

  if (isLoading) {
    return <div>carregando produtos...</div>;
  }

  if (products.length === 0) {
    return <div>nenhum produto disponivel</div>;
  }
  return (
    <main className="h-screen bg-gray-200">
      {products.map((product) => (
        <p className="text-black text-4xl">{product.name}</p>
      ))}
    </main>
  );
}
