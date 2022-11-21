/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import {Handle,Position} from "reactflow"
const Imagepreview = (props: any) => {
  const myStyle = {
    position: 'absolute',
    top: '13%',
    left: '-1%',
    height: '14px',
    width: '9px',
    backgroundColor: 'gray',
    borderRadius: '150px 0 0 150px',
    transform: ' translate(-50%, -50%)'
  }

  return (
    <div className="rounded-lg bg-neutral-800  text-white ">
      <div className="">
      <p className=" text-[14px] font-semibold text-center">{props.title}</p>
        <div className=" p-2 text-gray-400">{props.name} </div>
      </div>
      <div className="pb-2">
        <Image src={props.image} width={420} height={250} alt="image" />
      </div>
      <Handle type="target" position={Position.Left} style={myStyle}   id={props.id}/>
    </div>
  );
};

export default Imagepreview;
