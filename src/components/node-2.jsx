import React, { memo } from 'react';
import { Handle, useReactFlow, useStoreApi } from 'reactflow';
import { AiOutlineMinus } from 'react-icons/ai'

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

      <select className="nodrag bg-neutral-800 text-white " onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {/* <div className='text-white mt-4'> Input </div> */}
      <Handle type="source" position="right" id={handleId} />
    </div>
  );
}

function Node2({ id, data }) {
  return (
    <>
      <div className='bg-neutral-700 text-white'>
        <div className="custom-node__header text-center w-48 ">
          img2img Node-2
        </div>
      </div>
      <div className='bg-neutral-700 text-right text-white p-2 '> 2 image </div>

      <div className='bg-neutral-800 text-white p-2 '>
        Futuristic translucent basketball
        <div> sneaker design </div>
      </div>

      <div className="custom-node__body bg-neutral-700 ">
        {Object.keys(data.selects).map((handleId) => (
          <Select key={handleId} nodeId={id} value={data.selects[handleId]} handleId={handleId} />
        ))}
      </div>
      <div className=' bg-neutral-700 text-white '>
        <div> Steps </div>
        <div> Steps </div>
        <div> Steps </div>
        <div> Steps </div>
        <div> Steps </div>
      </div>
    </>
  );
}

export default memo(Node2);
