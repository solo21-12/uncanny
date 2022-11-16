import React, { memo } from 'react';
import { Handle, useReactFlow, useStoreApi } from 'reactflow';
import { AiOutlineMinus } from 'react-icons/ai'
import Image from 'next/image';

const options = [
  {
    value: 'smoothstep',
    label: 'Smoothstep',
  },
  {
    value: 'step',
    label: 'Step',
  },
  {
    value: 'default',
    label: 'Bezier (default)',
  },
  {
    value: 'straight',
    label: 'Straight',
  },
];

function Select({ value, handleId, nodeId }) {
  const { setNodes } = useReactFlow();
  const store = useStoreApi();

  const onChange = (evt) => {
    const { nodeInternals } = store.getState();
    setNodes(
      Array.from(nodeInternals.values()).map((node) => {
        if (node.id === nodeId) {
          node.data = {
            ...node.data,
            selects: {
              ...node.data.selects,
              [handleId]: evt.target.value,
            },
          };
        }

        return node;
      })
    );
  };

  return (
    <div className="custom-node__select">
      <div className=' float-right text-white '> Output </div>
      <select className="nodrag bg-neutral-800 text-white " onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className='text-white mt-4'> Input </div>
      {/* <Handle type="source" position="right" id={handleId} /> */}
    </div>
  );
}

function ImagePreview1({ id, data }) {
  return (
    <>
      <div className='bg-neutral-700 text-white'>
        <div className="custom-node__header text-center ">
          Image Preview 1
        </div>
        <div> Image 1 </div>
      </div>
      <div>
        <Image src= "https://media.gq.com/photos/5e7ce2390ac4740008d77e11/master/w_2000,h_1333,c_limit/Nike-Air-Force-1-'07-sneaker.jpg"
        width={400} height={250}  />
      </div>
      {/* <div className="custom-node__body bg-neutral-700 ">
        {Object.keys(data.selects).map((handleId) => (
          <Select key={handleId} nodeId={id} value={data.selects[handleId]} handleId={handleId} />
        ))}
      </div> */}
    </>
  );
}

export default memo(ImagePreview1);
