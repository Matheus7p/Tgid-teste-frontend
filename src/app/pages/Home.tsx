import { useProductsContext } from "@/app/context/product.context";
import { Header } from "../components/header/header.component";
import { HeroSection } from "../components/heroSection/heroSection.component";

export function Home() {
  const { products } = useProductsContext();

  return (
    <main className="h-screen bg-gray-200">
      <section className="bg-black lg:h-2/3 shadow-slate-300 rounded-b-4xl">
        <Header />
      </section>
    
      <section className="xl:mt-[-40vh]">
       <HeroSection />
      </section>

      <section className="">
        {products.map((product) => (
          <p className="text-white text-4xl">{product.name}</p>
        ))}
      </section>
    </main>
  );
}
