import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
const SideOption = (props: any) => {
  return (
    <div className=" mx-auto flex h-6 w-[95%] flex-row justify-between bg-[#0C0D10] py-2 text-[#676D7D] m-2">
      <div className=" flex justify-between gap-2">
        <AiOutlineLeft className="w-[14px] text-[#2487E2] " />
        <p className=" text-[14px] font-[500] leading-[13.31px]">
          {props.rigth}
        </p>
      </div>
      <div className=" flex justify-between gap-2">
        <p className=" text-[14px] font-[500] leading-[13.31px]">
          {props.left}
        </p>
        <AiOutlineRight className="w-[14px] text-[#2487E2] " />
      </div>
    </div>
  );
};

export default SideOption;
