import React, { memo } from 'react';
import Header from './common/header';
import { Handle } from "reactflow"
import {styleInvertImage1,styleInvertImage2} from "../nodeStyle/node"
function CustomNode({ id, data }) {
 
  return (
    <div className='bg-[#0F1115] text-white  w-[220px] rounded-lg'>
      <Header title='Invert Image 1' menu={true}/>
      <div className='flex justify-between pb-2 text-gray-400 px-2 text-[12px]'>
        <div> Image </div>
        <div> Invert_Image </div>
      </div>
      <Handle type="source" position='right' style={styleInvertImage1} id='i-3'/>
      <Handle type="source" position='left' style={styleInvertImage2} id='i-1' />
    </div>
  );
}

export default memo(CustomNode);
