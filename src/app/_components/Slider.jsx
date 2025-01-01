import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Slider() {
  return (
    <div className="relative w-full max-w-6xl mx-auto h-[400px] px-10 sm:px-10 md:px-9">
      <Carousel className="relative w-full h-full ">
        <CarouselContent className="flex items-center">
          <CarouselItem>
            <Image
              src="/taking-care-lambs-sheep-farm.jpg"
              alt="cow"
              width={400}
              height={300}
              className="carousel-image"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/hen-with-beak-feathers.jpg"
              alt="chicken"
              width={400}
              height={300}
              className="carousel-image"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/pigfeed.jpg"
              alt="pig"
              width={400}
              height={300}
              className="carousel-image"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-5 md:left-7 lg:left-8 p-2 hover:bg-green-200 roundeed-full" />
        <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-5 md:right-7 lg:right-8  p-2 hover:bg-green-200 rounded-full" />
      </Carousel>
    </div>
  );
}

export default Slider;
