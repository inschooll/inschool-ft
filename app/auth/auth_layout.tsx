import React from "react";
import AppLayout from "../components/layout/app_layout";
import Button from "../components/buttons/button";
import Image from "next/image";
import constants from "../core/constants/constants";
import Link from "next/link";
import links from "../core/constants/links";

const AuthLayout = ({
  children,
  isLogin,
}: {
  children: React.ReactNode;
  isLogin: boolean;
}) => {
  return (
    <AppLayout>
      <div className="">
        <div className="w-96 my-5 mx-auto bg-purple-5000">
          <h1 className="text-center font-bold text-3xl">
            {isLogin ? "Log in" : "Sign up"}
          </h1>

          <div className="mt-5">
            <Button variant={"outlineFull"} size={"sm"}>
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

            {children}

            {/* Bottom */}
            <div className="text-center mt-5 text-gray-600">
              {isLogin ? (
                <Link href={links.landingPage} className="hover:underline">
                  <p>Forgot Password?</p>
                </Link>
              ) : (
                <></>
              )}

              {isLogin ? (
                <div className="mt-5">
                  Don’t have an account ?
                  <Link href={links.signup}>
                    <span className="text-[#55A1FF] underline ml-2">
                      Sign up
                    </span>
                  </Link>
                </div>
              ) : (
                <div className="mt-10">
                  Already have an account ?
                  <Link href={links.login}>
                    <span className="text-[#55A1FF] underline ml-2">
                      Log in
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default AuthLayout;
