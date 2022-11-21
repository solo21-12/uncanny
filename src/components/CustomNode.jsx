import React, { memo } from 'react';
import Header from './common/header';
import Select from "../components/select.tsx"
import { Handle, Position } from "reactflow"
import { styleCustme1, styleCustme2 } from "../nodeStyle/node"
function CustomNode({ id, data }) {
  return (
    <div className='bg-[#0F1115] text-white w-[220px] rounded-lg'>
      <div className=''>
        <Header title='Basic Filter 1' menu={true} />
      </div>
      <div className="custom-node__body  ">
        {Object.keys(data.selects).map((handleId) => (
          <Select key={handleId} nodeId={id} value={data.selects[handleId]} handleId={handleId} firstTitle="Output" secondTitle="Input" />
        ))}
        <Handle type="source" position={Position.Right} style={styleCustme1} id="cn-1" />
        <Handle type="target" position={Position.Left} style={styleCustme2} id='100' />
      </div>
    </div>
  );
}

export default memo(CustomNode);
