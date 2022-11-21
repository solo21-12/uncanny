/* eslint-disable @typescript-eslint/no-explicit-any */
import { Handle, useReactFlow, useStoreApi } from 'reactflow';
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
export default function Select({ value, handleId, nodeId,firstTitle,secondTitle }:any) {
  const { setNodes } = useReactFlow();
  const store = useStoreApi();

  const onChange = (evt:any) => {
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
    <div className="custom-node__select ">
      <div className=' float-right text-[#9199B0]  text-[14px] py-1'> {firstTitle} </div>
      <select className="nodrag bg-[#0C0D10] text-[12px] text-[#676D7D]  h-6 " onChange={onChange} value={value}>
        
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-[#0C0D10] ">
            {option.label}
            
          </option>
        ))}
      </select>
      <div className='text-gray-500 mt-4 text-[14px] pb-1'> {secondTitle} </div>
      {/* <Handle type="source" position="right" id={handleId}  style={{ background: '#9ca3af', height:'12px',width:'8px' }}/> */}

    </div>
  );
}