import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

function ProductItem() {
  return (
    <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-7 cursor-pointer justify-center px-10 sm:px-10 md:px-10 ">
      {/* card 1 */}
      <div className="flex flex-col items-center bg-slate-100 gap-2 p-4 rounded-lg hover:scale-90 transition-all ease-in-out">
        <Image
          src="/popular-product/cattle-feed-palms.jpg"
          alt="cattle feed"
          width={450}
          height={250}
          className="h-[200px] w-[200px] rounded-lg"
        />
        <p> Cattle Feed Palms</p>
        <p>
          <s className="text-red-400">$30</s>
          <span className="ml-5 text-green-500 font-bold text-lg">$11 </span>
        </p>
        <Button
          variant="outline"
          className="hover:bg-green-500 hover:text-red-500"
        >
          Add to Cart
        </Button>
      </div>
      {/* card 2 */}
      <div className="flex flex-col items-center bg-slate-100 gap-2 p-4 rounded-lg hover:scale-90 transition-all ease-in-out ">
        <Image
          src="/popular-product/Concentrate-Layer_HR-primixes.png"
          alt="primixes"
          width={450}
          height={250}
          className="h-[200px] w-[200px] rounded-lg"
        />
        <p>Concentrate Primixes</p>
        <p>
          {" "}
          <s className="text-red-400">$30</s>{" "}
          <span className="ml-5 text-green-500 font-bold text-lg"> $22.5</span>
        </p>
        <Button
          variant="outline"
          className="hover:bg-green-500 hover:text-red-500"
        >
          Add to Cart
        </Button>
      </div>
      {/* card 3 */}
      <div className="flex flex-col items-center bg-slate-100 gap-2 p-4 rounded-lg hover:scale-90 transition-all ease-in-out">
        <Image
          src="/chicken-feed.jpg"
          alt="chicken-feed"
          width={450}
          height={250}
          className="h-[200px] w-[200px] rounded-lg"
        />
        <p>Chicken Feed</p>
        <p>
          {" "}
          <s className="text-red-400">$20</s>{" "}
          <span className="ml-5 text-green-500 font-bold text-lg ">$13</span>
        </p>
        <Button
          variant="outline"
          className="hover:bg-green-500 hover:text-red-500"
        >
          Add to Cart
        </Button>
      </div>
      {/* card 4 */}
      <div className="flex flex-col items-center bg-slate-100 gap-2 p-4 rounded-lg hover:scale-90 transition-all ease-in-out">
        <Image
          src="/popular-product/dog-cat-animal-feed.jpg"
          alt="dog-feed"
          width={450}
          height={250}
          className="h-[200px] w-[200px] rounded-lg"
        />
        <p>Recipe Dog or Cat Feed</p>
        <p>
          <s className="text-red-400">$16</s>{" "}
          <span className="ml-5 text-green-500 text-lg font-bold">$9.8</span>
        </p>
        <Button
          variant="outline"
          className="hover:bg-green-500 hover:text-red-500"
        >
          Add to Cart
        </Button>
      </div>
      {/* card 5 */}
      <div className=" flex flex-col items-center bg-slate-100 gap-2 p-4 rounded-lg hover:scale-90 transition-all ease-in-out">
        <Image
          src="/popular-product/haystacks.jpg"
          alt=" dry grass"
          width={500}
          height={200}
          className="h-[200px] w-[200px] rounded-lg object-contain"
        />
        <p>Haystack for Cattle</p>
        <p>
          <s className="text-red-400">$15</s>{" "}
          <span className="text-green-500 text-lg font-bold ml-5"> $10.8</span>
        </p>
        <Button
          variant="outline"
          className="hover:text-red-500 hover:bg-green-500"
        >
          Add to Cart
        </Button>
      </div>
      {/* card 6 */}
      <div className=" flex flex-col items-center bg-slate-100 gap-2 p-4 rounded-lg hover:scale-90 transition-all ease-in-out">
        <Image
          src="/popular-product/mixed-animals-is-pelleted.jpg"
          alt="pelleted"
          width={450}
          height={250}
          className="h-[200px] w-[200px] rounded-lg"
        />
        <p>Pelleted Grain Feed</p>
        <p>
          <s className="text-red-400">$13.5</s>{" "}
          <span className="text-green-500 text-lg font-bold ml-5">$9.75</span>
        </p>
        <Button
          variant="outline"
          className="hover:bg-green-500 hover:text-red-500"
        >
          Add to Cart
        </Button>
      </div>
      {/* card 7 */}
      <div className="flex flex-col items-center bg-slate-100 gap-2 p-4 rounded-lg hover:scale-90 transition-all ease-in-out">
        <Image
          src="/popular-product/wood-pellets.jpg"
          alt="grass"
          width={450}
          height={250}
          className="h-[200px] w-[200px] rounded-lg"
        />
        <p> Wood Pellets</p>
        <p>
          <s className="text-red-400">$19.5/Kg</s>{" "}
          <span className="text-green-500 text-lg font-bold ml-5">$14.65</span>
        </p>
        <Button
          variant="outline"
          className="hover:bg-green-500 hover:text-red-500"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;
