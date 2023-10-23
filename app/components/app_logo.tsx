import constants from "../core/constants/constants";
import images from "../core/constants/images";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({subsets: ["latin"]});

const AppLogo = () => {
  return (
    <div className="flex gap-2 items-center text-xl sm:text-2xl font-medium">
      <div className="w-5 sm:w-7">
        <img src={images.logo} alt={`${constants.appName} logo`} data-testid='app-logo' className='' /> 
      </div>
      <p className={gabarito.className}>Inschool</p>
    </div>
  );
}

export default AppLogo;