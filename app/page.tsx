import Image from "next/image";
import constants from "./constants/constants";
import AuthNavbar from "./components/navbar/auth_navbar";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <AuthNavbar />

      {/* Main */}
      <main>
        {/* section 1 - empowering minds and shaping futures */}
        <div>
          <div>
            <h1>
              Empowering minds
              <span className="inline-block">
                <Image
                  src={constants.brainPink}
                  alt="brain-image"
                  height={90}
                  width={90}
                />
              </span>
            </h1>
            <h1>
              Shaping futures
              <span className="inline-block">
                <Image
                  src={constants.bookStack}
                  alt="brain-image"
                  height={90}
                  width={90}
                />
              </span>
              .
            </h1>
          </div>

          {/* section 2 - sub text and button */}
          <div>
            <div>
              <p>Inschool is the connected workspace where schools and students can thrive together.</p>
            </div>

            <button className="relative flex justify-center bg-black text-white border-r-4 px-4 py-1">
              Start today
            </button>

          </div>
        </div>

        {/* Maths Calculations */}
        <div className="flex justify-center">
          <span>
            <Image src={constants.mathsCalculation} alt="maths calculations image" width={400} height={280}/>
          </span>
          <span>
            <Image src={constants.mathsCalculation} alt="maths calculations image" width={400} height={280}/>
          </span>
          <span>
            <Image src={constants.mathsCalculation} alt="maths calculations image" width={400} height={280}/>
          </span>
          <span>
            <Image src={constants.mathsCalculation} alt="maths calculations image" width={400} height={280}/>
          </span>
        </div>
      </main>
    </>
  );
}
