import React from "react";
import Profile from "../../assets/profile.jpeg";
import { MdLogout } from "react-icons/md";
import { HiUserCircle } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <header className="bg-headerBg m-6 flex items-center py-[22px] rounded-md relative">
      {/* logo */}
      <div>
        <h1 className="font-bold text-2xl text-white pl-[40px] cursor-pointer">
          LOGO
        </h1>
      </div>

      {/* links */}
      <div className="ml-[92px] text-white hidden md:block">
        <ul className="flex text-center gap-16 ">
          <li className="cursor-pointer">Menu</li>
          <li className="cursor-pointer">Menu</li>
          <li className="cursor-pointer">Menu</li>
          <li className="cursor-pointer">Menu</li>
        </ul>
      </div>

      <AiOutlineMenu className="w-[30px] h-[30px] text-white ml-[160px] md:hidden" />
      {/* profile */}
      <div className="ml-[770px] h-[40px] bg-white w-[40px] rounded-full overflow-hidden cursor-pointer border-2 hidden md:block">
        <div>
          <img
            className="object-fill h-full w-full"
            src={Profile}
            alt="profile"
          />
        </div>
      </div>

      <div className="w-[208px] h-[105px] bg-white shadow-xl rounded-lg flex-col absolute top-16 right-5  md:block hidden">
        <div className="px-4 py-2 flex gap-3 cursor-pointer ">
          <HiUserCircle className="text-gray-600 w-5 h-5" />
          <div>
            <h1 className="text-sm text-gray-700">My Profile</h1>
            <p className="text-xs text-gray-500">
              Change settings to my account
            </p>
          </div>
        </div>
        <p className="px-4 py-2 flex items-center gap-3 cursor-pointer text-rose-600 border-t-2">
          <MdLogout /> Log out
        </p>
      </div>
    </header>
  );
};

export default Header;
