/* eslint-disable jsx-a11y/alt-text */
import React, { memo } from 'react';
import { Handle, useReactFlow, useStoreApi, Position } from 'reactflow';
import Image from 'next/image';
import Header from './common/header';

const myStyle = {
    position: 'absolute',
    top: '22%',
    right: '-5%',
    height: '14px',
    width: '8px',
    backgroundColor: 'gray',
    borderRadius: '0 150px 150px 0',
    transform:' translate(-50%, -50%)'
}
function SeedNode({ id, data }) {
    return (
        <div className='bg-neutral-800 text-white   flex flex-col justify-between  rounded-lg'>
            <div className=' '>
                <Header title="Seed" menu={true} />
            </div>
            <Handle type="target" position='right' style={myStyle}  id="ab" />
            <div className=' float-right  mr-3 text-right py-4 mb-2 text-gray-300'>
                Image
            </div>
            <div>
                <Image src="https://media.gq.com/photos/5e7ce2390ac4740008d77e11/master/w_2000,h_1333,c_limit/Nike-Air-Force-1-'07-sneaker.jpg"
                    width={250} height={150} alt="image" />
            </div>
            <div className=" p-4 flex flex-row justify-between">
                <div>
                    <label>width</label>
                    <input type="text" className="bg-neutral-800 w-10 ml-2 " placeholder='790' />
                </div>
                <div>
                    <label>Height</label>
                    <input type="text" className="bg-neutral-800 ml-2 w-10" placeholder='395' />
                </div>


            </div>
        </div>
    );
}

export default memo(SeedNode);
