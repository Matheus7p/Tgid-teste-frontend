import { useProductsContext } from "@/app/context/product.context";
import { Header } from "../components/header/header.component";
import { HeroSection } from "../components/heroSection/heroSection.component";

export function Home() {
  const { products } = useProductsContext();

  return (
    <main className="">
      <section className="bg-black h-[400px] lg:h-[550px] shadow-slate-300 rounded-b-4xl">
        <Header />
        <section className="mt-[12vh]">
          <HeroSection />
        </section>
      </section>
    
      

      <section className="">
        {products.map((product) => (
          <p className="text-white text-4xl">{product.name}</p>
        ))}
      </section>
    </main>
  );
}
