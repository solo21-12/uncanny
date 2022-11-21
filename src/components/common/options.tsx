/* eslint-disable @typescript-eslint/no-unused-vars */
import {Handle} from "reactflow"
const myStyle = {
  position: 'absolute',
  top: '64%',
  left: '-2%',
  height: '14px',
  width: '8px',
  backgroundColor: 'gray',
  overFlow: 'hidden',
  borderRadius: '150px 0  0 150px',
  transform:' translate(-50%, -50%)'
}
const Options = (props:any) => {
  return ( 
    <div className=' p-2'> 
    {props.title}
    {/* <Handle type="target" position="left" style={myStyle} /> */}
    </div>
   );
}
 
export default Options;