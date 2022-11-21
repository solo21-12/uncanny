import React, { memo } from 'react';
import Header from './common/header';
import Select from "../components/select.tsx"
import { Handle } from "reactflow"
import { styleBasic2, styleBasic22 } from "../nodeStyle/node"
function BasicFilter2({ id, data }) {
  return (
    <div className=' bg-[#0F1115] text-white w-[220px] rounded-lg'>
      <div className=''>
        <Header title='Basic Filter 2' menu={true} />
      </div>
      <div className="custom-node__body  ">
        {Object.keys(data.selects).map((handleId) => (
          <Select key={handleId} nodeId={id} value={data.selects[handleId]} handleId={handleId} firstTitle="Output" secondTitle="Input" />
        ))}
        <Handle type="target" position='right' style={styleBasic2} id='b-3' />
        <Handle type="target" position='left' style={styleBasic22} id='b-2' />
      </div>
    </div>
  );
}

export default memo(BasicFilter2);
