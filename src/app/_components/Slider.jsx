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
    <div className="relative w-full max-w-6xl mx-auto px-20 mt-5 ">
      <Carousel className="relative w-full h-full">
        <CarouselContent>
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
        <CarouselPrevious className=" hover:bg-green-200 rounded-full w-10 h-10 text-white bg-black" />
        <CarouselNext className=" hover:bg-green-200 rounded-full w-10 h-10 text-white bg-black" />
      </Carousel>
    </div>
  );
}

export default Slider;
