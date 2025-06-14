import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "../button";

interface CarouselProps {
  children: React.ReactNode;
  defaultVisibleCards?: number;
}

export const Carousel: React.FC<CarouselProps> = ({ children, defaultVisibleCards = 5 }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [visibleCards, setVisibleCards] = useState(defaultVisibleCards);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width >= 1280) setVisibleCards(5);
      else if (width >= 1024) setVisibleCards(4);
      else if (width >= 768) setVisibleCards(3);
      else setVisibleCards(1);
    };

    updateVisibleCards(); 
    window.addEventListener("resize", updateVisibleCards); 
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const slideWidth = `calc(100% / ${visibleCards})`;

  return (
    <div className="relative overflow-hidden h-auto px-7 lg:px-9">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{React.Children.map(children, (child) => (
          <div style={{ minWidth: slideWidth }}>{child}</div>
        ))}</div>
      </div>
      <Button
        variant="outline"
        className="w-2 h-8 lg:w-10 lg:h-10 absolute left-2 top-1/2 -translate-y-1/2 rounded-[100%]"
        onClick={scrollPrev}
      >
        {"<"}
      </Button>
      <Button
        variant="outline"
        className="w-2 h-8 lg:w-10 lg:h-10 absolute right-2 top-1/2 -translate-y-1/2 rounded-[100%]"
        onClick={scrollNext}
      >
        {">"}
      </Button>
    </div>
  );
};
