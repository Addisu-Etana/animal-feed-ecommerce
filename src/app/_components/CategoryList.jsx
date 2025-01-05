import Image from "next/image";
import React from "react";
import { NotoMedicalSymbol } from "@/components/ui/NotoMedicalSymbol";
import { FxemojiSheep } from "@/components/ui/FxemojiSheep";
import { OpenmojiPig } from "@/components/ui/OpenmojiPig";
import { OpenmojiHorse } from "@/components/ui/OpenmojiHorse";
import { EmojioneChicken } from "@/components/ui/EmojioneChicken";
import { CbiAqaraPetFeederC1 } from "@/components/ui/CbiAqaraPetFeederC1";
import { HealthiconsAnimalCowOutline } from "@/components/ui/HealthiconsAnimalCowOutline";

function CategoryList() {
  return (
    <div className=" text-primary mt-5 sm:mt-7 md:mt-4">
      <div>
        <h2 className="text-primary font-bold text-2xl px-10 sm:px-10 mb-2 sm:mb-4">
          {" "}
          Shop By Category
        </h2>
      </div>
      {/* Enclosing container for all icons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 cursor-pointer mt-5 px-10 sm:px-10 md:px-10">
        {/*  each item in the grid*/}
        <div className="flex flex-col items-center bg-green-50 gap-2 p-4 rounded-lg hover:scale-75 transition-all ease-in-out hover:bg-blue-300">
          <NotoMedicalSymbol style={{ width: "50px", height: "50px" }} />
          <p className="text-center">Vitamins Premixes</p>
        </div>
        <div className="flex flex-col items-center bg-green-50 p-4 gap-2 rounded-lg hover:scale-75 transition-all ease-in-out hover:bg-blue-300">
          <FxemojiSheep style={{ width: "50px", height: "50px" }} />
          <p className="text-center">Sheep/Goat Pellets</p>
        </div>
        <div className="flex flex-col items-center bg-green-50 gap-2 p-4 rounded-lg hover:scale-75 transition-all ease-in-out hover:bg-blue-300 ">
          <OpenmojiPig style={{ width: "50px", height: "50px" }} />
          <p>Pig Feed</p>
        </div>
        <div className="flex flex-col items-center bg-green-50 gap-2 p-4 rounded-lg hover:scale-75 transition-all ease-in-out hover:bg-blue-300">
          <OpenmojiHorse style={{ width: "50px", height: "50px" }} />
          <p className="text-center">Horse Feed</p>
        </div>
        <div className="flex flex-col items-center bg-green-50 gap-2 p-4 rounded-lg hover:scale-75 transition-all ease-in-out hover:bg-blue-300">
          <EmojioneChicken style={{ width: "50px", height: "50px" }} />
          <p className="text-center">Poultry Feed</p>
        </div>
        <div className="flex flex-col items-center bg-green-50 gap-2 p-4 rounded-lg hover:scale-75 transition-all ease-in-out hover:bg-blue-300">
          <CbiAqaraPetFeederC1 style={{ width: "50px", height: "50px" }} />
          <p className="text-center">Compound Feed</p>
        </div>
        <div className="flex flex-col items-center bg-green-50 gap-2 p-3 rounded-lg hover:scale-75 transition-all ease-in-out hover:bg-blue-300">
          <HealthiconsAnimalCowOutline
            style={{ width: "50px", height: "50px" }}
          />
          <p>Cattle Feed</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
