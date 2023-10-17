import Image from "next/image";
import constants from "../../constants/constants";
import Button from "../buttons/button";

const AuthNavbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center px-5 py-3">
        {/* logo */}
        <Image
          src={constants.logoFull}
          alt="inschool logo"
          width={150}
          height={40}
        />

        {/* links / buttons */}
        <div className="flex gap-1">
          {/* <Button bgColor={"red-500"} textColor={""} hoverBgColor={""} fontSize={""} fontWeight={""}>Log in</Button>
          <Button bgColor={"green-700"} textColor={""} hoverBgColor={""} fontSize={""} fontWeight={""}>Sign up</Button> */}
          <Button>Log in</Button>
        </div>
      </div>
    </nav>
  );
};

export default AuthNavbar;
