/* eslint-disable jsx-a11y/alt-text */
import React, { memo } from 'react';
import { Handle } from 'reactflow';
import Image from 'next/image';
import Header from './common/header';
import { styleSeed } from "../nodeStyle/node"
function SeedNode({ id, data }) {
    return (
        <div className='bg-[#0F1115] text-white   flex flex-col justify-between  rounded-lg'>
            <div className=' '>
                <Header title="Seed" menu={true} />
            </div>
            <div className=' float-right  mr-3 text-right py-4 mb-2 text-[#676D7D]'>
                Image
            </div>
            <div>
                <Image src="https://media.gq.com/photos/5e7ce2390ac4740008d77e11/master/w_2000,h_1333,c_limit/Nike-Air-Force-1-'07-sneaker.jpg"
                    width={250} height={150} alt="image" />
            </div>
            <div className=" p-4 flex flex-row justify-between text-[#9199B0]">
                <div>
                    <label>width</label>
                    <input type="text" className="bg-neutral-800 w-10 ml-2 " placeholder='790' />
                </div>
                <div>
                    <label>Height</label>
                    <input type="text" className="bg-neutral-800 ml-2 w-10" placeholder='395' />
                </div>

                <Handle type="source" position='right' style={styleSeed} id="seed" />

            </div>
        </div>
    );
}

export default memo(SeedNode);
