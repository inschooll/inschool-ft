import Image from "next/image";
import constants from "./core/constants/constants";
import AuthNavbar from "./components/navbar/auth_navbar";
import Button from "./components/buttons/button";
import links from "./core/constants/links";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      {/* Navbar */}
      <AuthNavbar />

      {/* Main */}
      <main>
        {/* section 1 - empowering minds and shaping futures */}
        <div className="my-10 lg:my-20">
          <div className="grid grid-cols-12">
            <div className="col-span-10 col-start-2 text-4xl sm:text-6xl font-extrabold text-center uppercase">
              <h1>
                Empowering minds
                <span className="pl-2 sm:pl-4 inline-block">
                  <img src={constants.brainPink} alt="brain icon" className="w-8 sm:w-[60px]" />
                </span>
                ,
              </h1>
              <h1 className="sm:mt-4">
                Shaping futures
                <span className="pl-4 pr-2 inline-block">
                <img src={constants.bookStack} alt="brain icon" className="w-8 sm:w-[60px]" />
                </span>
                .
              </h1>
            </div>

          </div>

          {/* section 2 - sub text and button */}
          <div className="mt-7">
            <div className="grid grid-cols-12 sm:block">

              <div className="col-span-10 col-start-2 col-end-12 sm:w-[600px] sm:mx-auto">
                <p className="font-medium text-center text-xl text-gray-600">Inschool is the connected workspace where schools and students can thrive together.</p>
              </div>

            </div>

            <div className="flex justify-center mt-7">
              <Button variant={"default"} className="px-12 py-2" href={links.signup}>Start today</Button>
              
              {/* <button className="bg-black shadow hover:shadow-none text-white hover:bg-gray-900 py-2 px-2 text-sm rounded-[4px] font-semibold">
                <div className="flex justify-around bg-redl-600 px-12 w-full">
                  <p className=" whitespace-nowrap">Start today</p>

                  <div className="flex items-center justify-end bg-lime-300 ">
                    <div className="inline-block h-5 w-1 bg-white"></div>
                    <div className="inline-block">
                      <Image src={constants.doubleArrowUp} alt="double arrow icon facing up" width={10} height={10} />
                    </div>
                  </div>
                </div>
              </button> */}
            </div>

          </div>

        </div>

        {/* Maths Calculations */}
        <div className="hidden max-w-screen-2xl lg:flex justify-center relative mx-auto">
          <span>
            <Image src={constants.mathsCalculation} alt="maths calculations image" width={450} height={280} className="absolute left-0 "/>
          </span>
          <span>
            <Image src={constants.mathsCalculation} alt="maths calculations image" width={450} height={280} className="absolute left-3/4 "/>
          </span>
          <span>
            <Image src={constants.mathsCalculation} alt="maths calculations image" width={450} height={280} className="absolute left-1/2 "/>
          </span>
          <span>
            <Image src={constants.mathsCalculation} alt="maths calculations image" width={450} height={280} className="absolute left-1/4 "/>
          </span>
        </div>
      </main>
      
    </div>
  );
}
