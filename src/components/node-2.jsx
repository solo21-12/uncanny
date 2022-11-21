import React, { memo } from 'react';
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import Select from "../components/select.tsx"
import { Handle } from "reactflow"
import Options from './common/options';
import SideOption from './common/sideOption';
import {styleNode_2} from "../nodeStyle/node"
function Node2({ id, data }) {
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
  const data_options = [
    {
      rigth: 'Variant',
      left: '0.5000'
    },
    {
      rigth: 'Creativity',
      left: '7.5000'
    },
    {
      rigth: 'Details',
      left: '20'
    },
    {
      rigth: 'Seed',
      left: '6554867'
    }
  ]
  return (
    <div className='bg-[#0F1115] text-white rounded-lg w-[240px]'>
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
      <div className='  max-w-[180px]  text-[11px] mx-auto py-3  font-light'>
        Futuristic translucent basketball
        <div> sneaker design </div>
      </div>
      <div className="custom-node__body  mb-3">
        {Object.keys(data.selects).map((handleId) => (
          <Select key={handleId} nodeId={id} value={data.selects[handleId]} handleId={handleId} />
        ))}
        {
          data_options.map(data=>{
            return(
              <SideOption  rigth={data.rigth} left={data.left} key={data.left}/>
            )
          })
        }
      </div>
      <div className=' text-gray-400 text-[12px] flex flex-col justify-between'>
        {
          options.map(option => {
            return (
              <Options title={option.title} key={option.title} />
            )
          })
        }
        <Handle type="source" position='right' style={styleNode_2} id='daw' />
      </div>
    </div>
  );
}

export default memo(Node2);
