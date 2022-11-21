import { HiOutlineDotsHorizontal } from "react-icons/hi";

const Header = (props:any) => {
  return (
    <div className="custom-node__header flex justify-between  text-center font-semibold ">
      <div></div>
      <p className=" text-[14px] font-semibold text-left">{props.title}</p>
      {
        props.menu &&  <HiOutlineDotsHorizontal className=" cursor-pointer text-blue-400" />

      }
    </div>
  );
};

export default Header;
