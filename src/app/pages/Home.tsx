import { useProductsContext } from "@/app/context/product.context";
import { Header } from "../components/header/header.component";
import { HeroSection } from "../components/heroSection/heroSection.component";
import { Footer } from "../components/footer/footer.component";
import { Carousel } from "../components/ui/carousel/carousel.ui";
import { Card, CardContent, CardFooter, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";

export function Home() {
  const { products } = useProductsContext();

  return (
    <main className="flex flex-col min-h-screen">
      <section className="flex-grow">
        <section className="bg-gray-900 h-[220px] lg:h-[550px] shadow-slate-300 rounded-b-4xl">
          <Header />
          <section className="mt-[0vh] lg:mt-[12vh]">
            <HeroSection />
          </section>
        </section>
      </section>

      <section className="mt-[100vh] lg:mt-[40vh]">
        <Carousel defaultVisibleCards={5}>
          {products.map((product, index) => (
            <div key={index}>
              <Card className="hover:scale-105 duration-300 m-4">
                <CardTitle className="text-center ">{product.name}</CardTitle>
                <CardContent>
                  <img src={product.image} alt={product.name} className="rounded"/>
                  <p className="font-semibold text-[0.5rem] text-zinc-500 mt-2">{product.description}</p>
                  <p>{product.price}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Comprar
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </Carousel>
      </section>

      <Footer />
    </main>
  );
}
