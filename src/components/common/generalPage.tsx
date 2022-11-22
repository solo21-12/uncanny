import Image from "next/image";
import { IoDownloadOutline } from "react-icons/io5";
import { BsX } from "react-icons/bs";


const GeneralImage = (props:any) => {
  return ( 
    <div className="mt-4 rounded-[12px] bg-[#1F2021] p-4">
            <div className="flex items-center justify-between ">
              <div className="text-white ">
                <button type="button">
                  {" "}
                  <BsX />{" "}
                </button>
               {props.title}
              </div>
              <div>
                <button type="button" className="mr-2 text-white">
                  {" "}
                  <IoDownloadOutline />{" "}
                </button>
              </div>
            </div>
            <Image
              src={props.image}
              width={800}
              height={400}
              alt=""
            />
          </div>
   );
}
 
export default GeneralImage;