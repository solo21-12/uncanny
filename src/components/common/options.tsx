/* eslint-disable @typescript-eslint/no-unused-vars */
import {Handle,Position} from "reactflow"
import {myStyle,myStyle1,myStyle2,myStyle3,myStyle4,myStyle5} from "../../nodeStyle/node"
const Options = (props:any) => {
  return ( 
    <div className=' p-2'> 
    {props.title}
    <Handle type="target" position={Position.Left} style={myStyle} id='10'/>
    <Handle type="target" position={Position.Left} style={myStyle1} id='11'/>
    <Handle type="target" position={Position.Left} style={myStyle2} id='12' />
    <Handle type="target" position={Position.Left} style={myStyle3} id='13'/>
    <Handle type="target" position={Position.Left} style={myStyle4} id='14'/>
    <Handle type="target" position={Position.Left} style={myStyle5} id='15'/>
    </div>
   );
}
 
export default Options;