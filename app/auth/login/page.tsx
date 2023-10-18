'use client';
import Button from "@/app/components/buttons/button";
import LabelAndTextInputField from "@/app/components/inputs/label_text_input_field";
import AppLayout from "@/app/components/layout/app_layout";
import constants from "@/app/core/constants/constants";
import links from "@/app/core/constants/links";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useState } from "react";

const Login = () => {
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("login form!");
  }
  const [selectedNavItem, setSelectedNavItem] = useState(1);

  return (
    <AppLayout>
      <div className="">
        <div className="w-96 my-5 mx-auto bg-purple-5000">
          <h1 className="text-center font-bold text-3xl">Log in</h1>

          <div className="mt-5">
            <Button variant={"outlineFull"} size={'sm'}>
              <div className="flex justify-center">
                <Image
                  src={constants.googleLogo}
                  alt="google icon"
                  width={20}
                  height={20}
                />
                <span>Continue with Google</span>
              </div>
            </Button>
          </div>

          {/* Navbar */}
          <div className="grid grid-cols-3">
            <NavItem onClick={() => setSelectedNavItem(1)} isSelected={selectedNavItem == 1} >Email</NavItem>
            <NavItem onClick={() => setSelectedNavItem(2)} isSelected={selectedNavItem == 2} >Phone</NavItem>
            <NavItem onClick={() => setSelectedNavItem(3)} isSelected={selectedNavItem == 3} >Matric No</NavItem>
          </div>

          {/* Line break */}
          <div className="w-full h-[2px] bg-gray-200"></div>

          {/* Form */}
          <div className="mt-5">
            <form onSubmit={onSubmit}>
              <LabelAndTextInputField
                label={selectedNavItem == 1 ? "email" : selectedNavItem == 2 ? 'phone' : 'matric no'}
                name="email"
                placeholder={`Enter your ${selectedNavItem == 1 ? 'email address' : selectedNavItem == 2 ? 'phone number' : 'matric number'}...`}
              />
              <div className="mt-3">
                <LabelAndTextInputField
                  label="password"
                  name="password"
                  placeholder="Enter your password..."
                />
              </div>

              <div className="mt-5">
                <Button variant={"defaultFull"} size={"md"} type="submit">
                  Log in
                </Button>
              </div>
            </form>
          </div>

          {/* Bottom */}
          <div className="text-center mt-5">
            <p>Forgot Password?</p>

            <div className="mt-5">
            Don’t Have an account ? 
            <Link href={links.signup}>
              <span className="text-[#55A1FF] underline ml-2">Sign up</span>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Login;

const NavItem = ({
  children,
  isSelected,
  onClick
}: {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: React.MouseEventHandler;
}) => {
  return (
    <button className="flex justify-center pt-5 pb-3" onClick={onClick}>
      <div className={isSelected ? "font-semibold" : ""}>{children}</div>
    </button>
  );
};
