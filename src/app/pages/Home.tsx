import { useProductsContext } from "@/app/context/product.context";
import { Header } from "../components/header/header.component";
import { HeroSection } from "../components/heroSection/heroSection.component";
import { Footer } from "../components/footer/footer.component";
import { Carousel } from "../components/ui/carousel/carousel.ui";
import { Card, CardContent, CardFooter, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { ProductModal } from "../components/productModal/productModal.component";
import { formatToBRL } from "@/shared/utils/formatToBrL.utils";

export function Home() {
  const { products } = useProductsContext();
  const [ selectedProductId, setSelectedProductId ] = useState<number | null>(null);

  const handleModalOpen = (productId: number) => {
    setSelectedProductId(productId);
  };

  const handleModalClose = () => {
    setSelectedProductId(null);
  };

  const productToShow = selectedProductId
    ? products.find(p => p.id === selectedProductId)
    : null;

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

      <section className="mt-[100vh] lg:mt-[40vh] mb-4">
        <Carousel defaultVisibleCards={5}>
          {products.map((product, index) => (
            <div key={index}>
              <Card className="hover:scale-105 duration-300 m-4">
                <CardTitle className="text-center ">{product.name}</CardTitle>
                <CardContent>
                  <img src={product.image} alt={product.name} className="rounded"/>
                  <p className="font-semibold text-[0.5rem] text-zinc-500 mt-2">{product.description}</p>
                  <p>R$ {formatToBRL(product.price)}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => handleModalOpen(product.id)}>
                    Comprar
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </Carousel>
      </section>

      {productToShow ? (
          <ProductModal product={productToShow} isOpen={!!productToShow} onClose={handleModalClose}/>
      ) : null}
      <Footer />
    </main>
  );
}
