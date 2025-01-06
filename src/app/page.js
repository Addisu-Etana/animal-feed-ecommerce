import { Button } from "@/components/ui/button";
import Image from "next/image";
import Slider from "./_components/Slider";
import Header from "./_components/Header";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import ProductItem from "./_components/ProductItem";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div>
      {/*slider*/}
      <Slider />
      {/*categoryList*/}
      <CategoryList />
      {/*ProductList*/}
      <ProductList />
      {/*ProductItem*/}
      <ProductItem />
      {/*Bamnner*/}
      <Image
        src="/animal-food-banner.jpg"
        alt="banner"
        width={1000}
        height={100}
        className="object-cover mt-5 w-full h-[400px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
      />
      <div>
        {/*foote*/}
        <Footer />
      </div>
    </div>
  );
}
