import { useProductsContext } from "@/app/context/product.context";
import { Header } from "../components/header/header.component";

export function Home() {
  const { products } = useProductsContext();

  return (
    <main className="h-screen bg-gray-200">
      <section className="bg-black h-2/3 ">
        <Header />
      </section>
      {products.map((product) => (
        <p className="text-black text-4xl">{product.name}</p>
      ))}
    </main>
  );
}
