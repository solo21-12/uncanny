/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import Image from "next/image";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import GeneralImage from "../components/common/generalPage";
const data=[
  {
    id:1,
    title:"Untitled 1",
    image:"https://stylecaster.com/wp-content/uploads/2022/02/Screen-Shot-2022-03-23-at-11.23.23-AM.png?w=670"
  },
  {
    id:2,
    title:"Untitled 2",
    image:"https://stylecaster.com/wp-content/uploads/2022/02/Screen-Shot-2022-03-23-at-11.23.23-AM.png?w=670"
  }
]
function generalPage() {
  return (
    <div className="bg-[#00060c] py-0 text-[#676D7D] font-[500]">
      {/* <MainHeader /> */}
      <div className="flex  p-12  ">
        {/* Left Side */}
        <div className="bg-[#1F2021]">
          <div className=" py-2">
            <Link href="#">
              <a className="mx-4 text-[#2268A9]"> General </a>
            </Link>
            <Link href="#">
              <a className="text-white"> Library </a>
            </Link>
          </div>

          <div className="w-80 rounded-[12px] border border-gray-700 ">
            <div className="bg-[#0c0d11] p-4 ">
              <div className="pb-2 text-white "> Prompt </div>
              <div className="text-white">
                {" "}
                Futuristic translucent basketball sneaker designed by Yohji
                Yamamoto, product photography, studio lightning
              </div>
            </div>

            <div className="bg-[#131418] p-4">
              <div className="flex items-center justify-between py-4 px-3 font-[500]">
                <div className="text-white "> Image </div>
                <div>
                  <button type="button" className="mr-2 text-white">
                    {" "}
                    <BiMinus />{" "}
                  </button>
                  <button type="button" className="text-white">
                    {" "}
                    <BsPlusLg />{" "}
                  </button>
                </div>
              </div>
              <Image
                src="https://media.gq.com/photos/5e7ce2390ac4740008d77e11/master/w_2000,h_1333,c_limit/Nike-Air-Force-1-'07-sneaker.jpg"
                width={400}
                height={250}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between bg-[#0c0d11] py-2 px-4  ">
              <div> Image strength </div>
              <div className="text-white"> 100% </div>
            </div>

            <div>
              <div className="flex items-center justify-between bg-[#0c0d11] p-4  ">
                <div> Visual Style </div>
                <button type="button">
                  {" "}
                  <BsPlusLg />{" "}
                </button>
              </div>
              <div className="flex items-center justify-between bg-[#0c0d11] p-4 ">
                <div> Rendering Style </div>
                <button type="button">
                  {" "}
                  <BsPlusLg />{" "}
                </button>
              </div>
              <div className="flex items-center justify-between bg-[#0c0d11] p-4 ">
                <div> Export </div>
                <button type="button">
                  {" "}
                  <BsPlusLg />{" "}
                </button>
              </div>
            </div>
            <div className="bg-[#0c0d11] p-4 ">
              <label>W</label>
              <input type="text" className="ml-2 mr-24 w-10 bg-[#0c0d11] text-white" placeholder="790"/>
              <label>H</label>
              <input type="text" className="ml-2 w-10 bg-[#0c0d11] text-white" placeholder="395" />
            </div>
            <div className="bg-[#0c0d11]">
              <div className="flex items-center justify-between  p-4 ">
                <div> Variations </div>
                <div className="text-white"> 1 </div>
              </div>
              <div className="flex items-center justify-between  p-4  ">
                <div> Focal </div>
                <div className="text-white"> 100% </div>
              </div>
              <div className="flex items-center justify-between  p-4  ">
                <div> Capacity </div>
                <div className="text-white"> 50% </div>
              </div>
              <div className="flex items-center justify-between  p-4  ">
                <div> Send </div>
                <div className="text-white"> Name </div>
              </div>
              <div className="flex items-center justify-between  p-4  ">
                <div> Supplier </div>
                <div className="text-white"> #_####_# </div>
              </div>
            <div>
              <button className=" bg-[#0083fe] text-white w-full py-1 rounded-lg h-8 hover:bg-blue-700">Generate</button>
            </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="mx-24">
          {
            data.map(data=>{
              return (
                <GeneralImage key={data.id} title={data.title} image={data.image}/>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default generalPage;
