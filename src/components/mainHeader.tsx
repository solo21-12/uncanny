import { BsPlusLg, BsPlayFill, BsChevronDown } from "react-icons/bs";
import { FaHandPaper } from "react-icons/fa";
import { IoIosText } from "react-icons/io";
import { BiUserPlus } from "react-icons/bi";
import { ImShare } from "react-icons/im";
import Link from "next/link";
import { useState } from "react";
const MainHeader = () => {
  const [active, setActive] = useState(true);
  return (
    <div className=" mx-auto  flex h-[48px] w-[95%] justify-between  bg-[#1F2021] p-3 align-middle text-[14px] font-[500] leading-[16.59px] text-white  ">
      <div className=" flex  gap-8">
        <BsPlusLg className=" text-lg text-[#2487E2] cursor-pointer" />
        <FaHandPaper className=" h-[16px] w-[13px] text-lg cursor-pointer" />
        <IoIosText className=" h-[20px] w-[23px] text-lg cursor-pointer" />
      </div>
      <div className=" flex ">
        <button
          className={
            active
              ? `h-[32px] w-[79px] rounded-md bg-[#555657] text-white opacity-[75%]`
              : `h-[32px] w-[79px] rounded-md bg-[#161617] text-white opacity-[75%]`
          }
          onClick={() => setActive(true)}
        >
          <Link href="/">Diffusor</Link>
        </button>
        <button
          className={
            active
              ? `h-[32px] w-[79px] rounded-md bg-[#161617] text-white opacity-[75%]`
              : `h-[32px] w-[79px] rounded-md bg-[#555657] text-white opacity-[75%]`
          }
          onClick={() => setActive(false)}
        >
          <Link href="/generalPage">Editor</Link>
        </button>
      </div>
      <div className=" flex  gap-5">
        <BiUserPlus className="mt-2 text-xl cursor-pointer" />
        <div className=" circle h-[33.57px] w-[32px] border-x-[50%]  bg-blue-500"></div>
        <div className=" mt-2  flex gap-2 text-[12px]">
          <p>Share</p>
          <ImShare className="text-[15px] cursor-pointer" />
        </div>
        <BsPlayFill className="mt-2 text-lg cursor-pointer" />
        <div className=" m-2  flex gap-1">
          <p>100%</p>
          <BsChevronDown className="text-lg cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
