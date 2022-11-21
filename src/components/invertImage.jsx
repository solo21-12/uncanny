import React, { memo } from 'react';
import Header from './common/header';
import { Handle } from "reactflow"
function CustomNode({ id, data }) {
  const myStyle = {
    position: 'absolute',
    top: '75%',
    right: '-5%',
    height: '14px',
    width: '8px',
    backgroundColor: 'gray',
    borderRadius: '0 150px 150px 0',
    transform: ' translate(-50%, -50%)'
  }
  const myStyle2 = {
    position: 'absolute',
    top: '75%',
    left: '-2%',
    height: '14px',
    width: '8px',
    backgroundColor: 'gray',
    borderRadius: ' 150px 0 0 150px',
    transform: ' translate(-50%, -50%)'
  }
  return (
    <div className='bg-neutral-800 text-white  w-[220px] rounded-lg'>
      <Header title='Invert Image 1' menu={true}/>
      <div className='flex justify-between pb-2 text-gray-400 px-2 text-[12px]'>
        <div> Image </div>
        <div> Invert_Image </div>
      </div>
      <Handle type="source" position='right' style={myStyle} id='i-3'/>
      <Handle type="source" position='left' style={myStyle2} id='i-1' />
    </div>
  );
}

export default memo(CustomNode);
