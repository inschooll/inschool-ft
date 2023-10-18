"use client";

import Image from "next/image";
import constants from "../../core/constants/constants";
import Button from "../buttons/button";
import Link from "next/link";
import { useState } from "react";
import links from "@/app/core/constants/links";
import MenuCancelButton from "../buttons/menu_cancel_button";

const AuthNavbar = () => {
  var [showMenuDropdown, setShowMenuDropdown] = useState(false);

  const handleMenuClick = (value: boolean) => {
    setShowMenuDropdown(value);
  };

  return (
    <nav>
      <div className="flex justify-between items-center mx-5 sm:mx-10 py-5">
        {/* logo */}
        <Link href={links.landingPage}>
          <Image
            src={constants.logoFull}
            alt="inschool logo"
            width={150}
            height={40}
          />
        </Link>

        {/* links / buttons */}
        <div className="hidden lg:flex gap-2">
          <Button variant={"noBackground"} href="/auth/login">
            Log in
          </Button>
          <Button variant={"default"} href="/auth/signup" className="px-10">
            Sign up
          </Button>
        </div>

        <div className="lg:hidden">
          <MenuCancelButton showMenu={showMenuDropdown} onClick={() => handleMenuClick(!showMenuDropdown)} />
        </div>

        {showMenuDropdown && <DropdownMenu />}
      </div>
    </nav>
  );
};

export default AuthNavbar;

const DropdownMenu = () => {
  return (
    <div className="block lg:hidden w absolute top-[76px] z-10 left-0 w-full h-4/5 bg-white border-b border-gray-200">
      <div className="flex justify-stretch flex-col mx-5 sm:mx-10 py-7">
        <Button
          variant={"outlineFull"}
          size={"sm"}
          className="block"
          href={links.login}
        >
          Log in
        </Button>
        <Button
          variant={"defaultFull"}
          size={"sm"}
          className="mt-2 block"
          href={links.signup}
        >
          Sign up
        </Button>
      </div>
    </div>
  );
};


