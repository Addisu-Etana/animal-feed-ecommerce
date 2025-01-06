import { HealthiconsAnimalCowOutline } from "@/components/ui/HealthiconsAnimalCowOutline";
import { FxemojiSheep } from "@/components/ui/FxemojiSheep";
import { EmojioneChicken } from "@/components/ui/EmojioneChicken";
import { OpenmojiHorse } from "@/components/ui/OpenmojiHorse";
import { NotoMedicalSymbol } from "@/components/ui/NotoMedicalSymbol";
import { CbiAqaraPetFeederC1 } from "@/components/ui/CbiAqaraPetFeederC1";
import { OpenmojiPig } from "@/components/ui/OpenmojiPig";
import { Button } from "@/components/ui/button";
import { Icon,LayoutGrid, Search,ShoppingBag } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
function Header() {
  return (
    <div className="p-5 shadow-sm flex justify-between bg-white z-50">
      <div className="flex items-center gap-8">
        <Image
          src="/popular-product/logo-niquos-animalFeed.jpg"
          alt="logo"
          width={180}
          height={100}
        />
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <h2 className="hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 cursor-pointer hover:bg-blue-300">
                <LayoutGrid className="w-5 h-5"></LayoutGrid> Category
              </h2>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="hover:bg-blue-300">
              <DropdownMenuLabel className="bg-blue-300">
                Browse Category
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <NotoMedicalSymbol style={{ width: "30px", height: "30px" }} />{" "}
                Vitamin Premixes
              </DropdownMenuItem>
              <DropdownMenuItem>
                <OpenmojiPig style={{ width: "30px", height: "30px" }} />
                Pig Feed
              </DropdownMenuItem>
              <DropdownMenuItem>
                {" "}
                <HealthiconsAnimalCowOutline
                  style={{ width: "30px", height: "30px" }}
                />
                Cattle Feed
              </DropdownMenuItem>
              <DropdownMenuItem>
                {" "}
                <OpenmojiHorse style={{ width: "30px", height: "30px" }} />
                Horse Feed
              </DropdownMenuItem>
              <DropdownMenuItem>
                {" "}
                <EmojioneChicken style={{ width: "30px", height: "30px" }} />
                Poultry Feed
              </DropdownMenuItem>
              <DropdownMenuItem>
                {" "}
                <FxemojiSheep style={{ width: "30px", height: "30px" }} />
                Sheep/Goat Pellets
              </DropdownMenuItem>
              <DropdownMenuItem>
                {" "}
                <CbiAqaraPetFeederC1
                  style={{ width: "30px", height: "30px" }}
                />
                Compound Feed
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="md:flex gap-3 items-center border rounded-full p-2 px-5 hidden">
          <Search />
          <input className="outline-none" type="text" placeholder="search" />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="flex gap-2 items-center text-lg">
          {" "}
          <ShoppingBag /> 0
        </h2>
        <Button>Login</Button>
      </div>
    </div>
  );
}

export default Header;
