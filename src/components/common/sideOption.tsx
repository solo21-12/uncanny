import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useState } from "react";
const SideOption = (props: any) => {
  const [value,setValue] = useState(props.left)
  const incVal:any=()=>{
    const val = value;
    if(val==0){
      setValue(0);
    }
    else{
    setValue(val+1);

    }
  }
  const decVal:any=()=>{
    const val = value;
    if(val==0){
      setValue(0);
    }
    else{
    setValue(val-1);

    }
  }
  return (
    <div className=" mx-auto flex h-6 w-[95%] flex-row justify-between bg-[#0C0D10] py-2 text-[#676D7D] m-2">
      <div className=" flex justify-between gap-2">
        <AiOutlineLeft className="w-[14px] text-[#2487E2]  cursor-pointer" onClick={()=>decVal()}/>
        <p className=" text-[14px] font-[500] leading-[13.31px]">
          {props.rigth}
        </p>
      </div>
      <div className=" flex justify-between gap-2">
        <p className=" text-[14px] font-[500] leading-[13.31px]">
          {value}
        </p>
        <AiOutlineRight className="w-[14px] text-[#2487E2]  cursor-pointer" onClick={()=>incVal()}  />
      </div>
    </div>
  );
};

export default SideOption;
