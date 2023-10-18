import constants from "@/app/core/constants/constants";
import Image from "next/image";
import { MouseEventHandler } from "react";

const MenuCancelButton = ({onClick, showMenu} : {onClick: MouseEventHandler, showMenu: boolean}) => {
  return (
    <button
      className="md:hover:bg-gray-200 p-2 rounded transition duration-[30]"
      onClick={onClick}
    >
      {showMenu == false ? (
        <Image src={constants.menu} alt="menu icon" width={25} height={25} />
      ) : (
        <Image
          src={constants.cancel}
          alt="cancel icon"
          width={20}
          height={20}
        />
      )}
    </button>
  );
};

export default MenuCancelButton;