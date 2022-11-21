import React, { memo } from 'react';
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import Select from "../components/select.tsx"
import { Handle } from "reactflow"
import Options from './common/options';
function Node2({ id, data }) {
  const myStyle = {
    position: 'absolute',
    top: '8%',
    right: '-5%',
    height: '14px',
    width: '8px',
    backgroundColor: 'gray',
    overFlow: 'hidden',
    borderRadius: '0 150px 150px 0',
    transform: ' translate(-50%, -50%)'
  }
  const options = [
    {
      title: '2ImageIn'
    },
    {
      title: 'Var Amount'
    },
    {
      title: 'CFG Scale'
    },
    {
      title: 'Steps'
    },
    {
      title: 'Sampler'
    },
    {
      title: 'Seed'
    },

  ]
  return (
    <div className='bg-neutral-800 text-white rounded-lg w-[220px]'>
      <div className=' flex  justify-between py-1 pb-2 rounded-xl'>
        <div></div>
        <div className=" text-[13px]">
          img2img Node-2
        </div>
        <div className=' text-blue-400 align-middle mr-5'>
          <HiOutlineDotsHorizontal />
        </div>
      </div>
      <div className=' text-right  p-2  text-[10px] text-gray-400'> 2 image
      </div>
      <div className='  max-w-[180px]  text-[12px] mx-auto py-3  font-light'>
        Futuristic translucent basketball
        <div> sneaker design </div>
      </div>

      <div className="custom-node__body ">
        {Object.keys(data.selects).map((handleId) => (
          <Select key={handleId} nodeId={id} value={data.selects[handleId]} handleId={handleId} />
        ))}
      </div>
      <div className=' text-gray-400 text-[12px] flex flex-col justify-between'>
        {
          options.map(option => {
            return (
              <Options title={option.title} key={option.title} />
            )
          })
        }
        <Handle type="source" position='right' style={myStyle} id='daw'  />
      </div>
    </div>
  );
}

export default memo(Node2);
