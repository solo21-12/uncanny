import React, { memo } from 'react';
import Header from './common/header';
import Select from "../components/select.tsx"
import {Handle,Position} from "reactflow"
function CustomNode({ id, data }) {
  const myStyle = {
    position: 'absolute',
    top: '38%',
    right: '-28%',
    height: '14px',
    width: '8px',
    backgroundColor: 'gray',
    borderRadius: '0 150px 150px 0',
    transform:' translate(-50%, -50%)'
}
const myStyle2 = {
  position: 'absolute',
  top: '82%',
  left: '-2%',
  height: '14px',
  width: '8px',
  backgroundColor: 'gray',
  borderRadius: ' 150px 0 0 150px',
  transform:' translate(-50%, -50%)'
}
  return (
    <div className='bg-neutral-800 text-white w-[220px] rounded-lg'>
      <div className=''>
        <Header title='Basic Filter 1' menu={true}/>
      </div>
      <div className="custom-node__body  ">
        {Object.keys(data.selects).map((handleId) => (
          <Select key={handleId} nodeId={id} value={data.selects[handleId]} handleId={handleId} firstTitle="Output" secondTitle="Input"/>
        ))}
        <Handle type="source" position={Position.Right} style={myStyle} id="cn-1"/>
        <Handle type="target" position={Position.Left} style={myStyle2}  id='100'/>


      </div>
    </div>
  );
}

export default memo(CustomNode);
