import Image from "next/image";
import logo from "../images/DraftDigitalLogo.png";

export default function NavBar() {
  return (
    <div className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Image src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex list-none flex-row justify-between flex-initial items-center">
        <li className="mx-4 cursor-pointer">home</li>
        <li className="mx-4 cursor-pointer">services</li>
        <li className="mx-4 cursor-pointer">blog</li>
        <li className="mx-4 cursor-pointer">contact us</li>
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          wallet
        </li>
      </ul>
    </div>
  );
}
