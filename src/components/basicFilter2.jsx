import React, { memo } from 'react';
import Header from './common/header';
import Select from "../components/select.tsx"
import {Handle} from  "reactflow"
function BasicFilter2({ id, data }) {
  const myStyle = {
    position: 'absolute',
    top: '38%',
    right: '-5%',
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
    <div className=' bg-neutral-800 text-white w-[220px] rounded-lg'>
      <div className=''>
        <Header title='Basic Filter 2' menu={true}/>
      </div>
      <div className="custom-node__body  ">
        {Object.keys(data.selects).map((handleId) => (
          <Select key={handleId} nodeId={id} value={data.selects[handleId]} handleId={handleId} firstTitle="Output" secondTitle="Input"/>
        ))}
      <Handle type="target" position='right' style={myStyle} id='b-3' />
        <Handle type="target" position='left' style={myStyle2}  id='b-2'/>
      </div>
    </div>
  );
}

export default memo(BasicFilter2);
