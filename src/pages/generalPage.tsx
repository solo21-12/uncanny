import Link from "next/link"
import Image from 'next/image'
import { BsPlusLg } from 'react-icons/bs'
import { BsX } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'
import {IoDownloadOutline} from 'react-icons/io5'

function generalPage() {
    return (
        <div className="bg-black pb-80 p-12 flex ">
            {/* Left Side */}
            <div>
                <div>
                    <Link href="#" >
                        <a className="text-white mx-4"> General </a>
                    </Link>
                    <Link href="#">
                        <a className="text-white"> Library </a>
                    </Link>
                </div>

                <div className="border border-gray-700 w-80 rounded-[12px] ">
                    <div className="bg-neutral-800 p-4 ">
                        <div className="text-white pb-2 "> Prompt </div>
                        <div className="text-white"> Futuristic translucent basketball sneaker designed by Yohji Yamamoto,
                            product photography, studio lightning
                        </div>
                    </div>

                    <div className="bg-neutral-700 p-4">
                        <div className="flex items-center justify-between ">
                            <div className="text-white "> Image </div>
                            <div>
                                <button type="button" className="mr-2 text-white"> <BiMinus /> </button>
                                <button type="button" className="text-white"> <BsPlusLg /> </button>
                            </div>
                        </div>
                        <Image src="https://media.gq.com/photos/5e7ce2390ac4740008d77e11/master/w_2000,h_1333,c_limit/Nike-Air-Force-1-'07-sneaker.jpg"
                            width={400} height={250} />
                    </div>
                    <div className="text-white bg-neutral-800 p-4 flex items-center justify-between ">
                        <div> Image strength </div>
                        <div> 100% </div>
                    </div>

                    <div>
                        <div className="text-white bg-neutral-700 p-4 flex items-center justify-between ">
                            <div> Visual Style </div>
                            <button type="button"> <BsPlusLg /> </button>
                        </div>
                        <div className="text-white bg-neutral-700 p-4 flex items-center justify-between ">
                            <div> Rendering Style </div>
                            <button type="button"> <BsPlusLg /> </button>
                        </div>
                        <div className="text-white bg-neutral-700 p-4 flex items-center justify-between ">
                            <div> Export </div>
                            <button type="button"> <BsPlusLg /> </button>
                        </div>
                    </div>

                    <div className="text-white bg-neutral-800 p-4">
                        <label>W</label>
                        <input type="text" className="bg-neutral-700 w-10 ml-2 mr-24" />
                        <label>H</label>
                        <input type="text" className="bg-neutral-700 ml-2 w-10" />
                    </div>

                    <div>
                        <div className="text-white bg-neutral-700 p-4 flex items-center justify-between ">
                            <div> Variations </div>
                            <div> 1 </div>
                        </div>
                        <div className="text-white bg-neutral-700 p-4 flex items-center justify-between ">
                            <div> Focal </div>
                            <div> 100% </div>
                        </div>
                        <div className="text-white bg-neutral-700 p-4 flex items-center justify-between ">
                            <div> Capacity </div>
                            <div> 50% </div>
                        </div>
                        <div className="text-white bg-neutral-700 p-4 flex items-center justify-between ">
                            <div> Send </div>
                            <div> Name </div>
                        </div>
                        <div className="text-white bg-neutral-700 p-4 flex items-center justify-between ">
                            <div> Supplier </div>
                            <div> #_####_# </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="mx-24">

                <div className="bg-neutral-700 p-4 mt-4 rounded-[12px]">
                    <div className="flex items-center justify-between ">
                        <div className="text-white ">
                            <button type="button"> <BsX /> </button>
                            Untitled 1
                        </div>
                        <div>
                            <button type="button" className="mr-2 text-white"> <IoDownloadOutline /> </button>

                        </div>
                    </div>
                    <Image src="https://stylecaster.com/wp-content/uploads/2022/02/Screen-Shot-2022-03-23-at-11.23.23-AM.png?w=670"
                        width={800} height={400} />
                </div>

                <div className="bg-neutral-700 p-4 mt-4 rounded-[12px] mt-8">
                    <div className="flex items-center justify-between ">
                        <div className="text-white ">
                            <button type="button"> <BsX /> </button>
                            Untitled 2
                        </div>
                        <div>
                            <button type="button" className="mr-2 text-white"> <IoDownloadOutline /> </button>

                        </div>
                    </div>
                    <Image src="https://stylecaster.com/wp-content/uploads/2022/02/Screen-Shot-2022-03-23-at-11.23.23-AM.png?w=670"
                        width={800} height={400} />
                </div>
            </div>
        </div>
    )
}

export default generalPage