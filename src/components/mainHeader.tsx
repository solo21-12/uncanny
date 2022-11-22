import { BsPlusLg, BsPlayFill, BsChevronDown } from "react-icons/bs";
import { FaHandPaper } from "react-icons/fa";
import { IoIosText } from "react-icons/io";
import { BiUserPlus } from "react-icons/bi";
import { ImShare } from "react-icons/im";

const MainHeader = () => {
  return (
    <div className=" mx-auto  flex h-[48px] p-3 w-[95%]  justify-between bg-[#1F2021] align-middle text-[14px] font-[500] leading-[16.59px] text-white  ">
      <div className=" flex  gap-8">
        <BsPlusLg className=" text-lg text-[#2487E2]" />
        <FaHandPaper className=" h-[16px] w-[13px] text-lg" />
        <IoIosText className=" h-[20px] w-[23px] text-lg" />
      </div>
      <div className=" flex ">
        <button className="w-[79px] h-[32px] opacity-[75%] bg-[#161617] text-white rounded-md">Diffusor</button>
        <button className="w-[79px] h-[32px] opacity-[75%] bg-[#555657] text-white rounded-md">Editor</button>
      </div>
      <div className=" flex  gap-5">
        <BiUserPlus className="mt-2 text-xl " />
        <div className=" circle h-[33.57px] w-[32px] border-x-[50%]  bg-blue-500"></div>
        <div className=" mt-2  flex gap-2 text-[12px]">
          <p>Share</p>
          <ImShare className="text-[15px]" />
        </div>
        <BsPlayFill className="mt-2 text-lg" />
        <div className=" m-2  flex gap-1">
          <p>100%</p>
          <BsChevronDown className="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
