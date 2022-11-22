/* eslint-disable jsx-a11y/alt-text */
import React, { memo, useState, useRef, useEffect } from "react";
import { Handle } from "reactflow";
import Image from "next/image";
import Header from "./common/header";
import { styleSeed } from "../nodeStyle/node";
function SeedNode({ id, data }) {
  const [image, setImage] = useState(preview);
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(
        "https://media.gq.com/photos/5e7ce2390ac4740008d77e11/master/w_2000,h_1333,c_limit/Nike-Air-Force-1-'07-sneaker.jpg"
      );
    }
  }, [image]);
  return (
    <div className="flex w-[300px]   flex-col justify-between rounded-lg  bg-[#0F1115] text-white">
      <div className=" ">
        <Header title="Seed" menu={true} />
      </div>
      <div className=" float-right   mb-2 py-4 text-right text-[#676D7D] ">
        <input
          type="file"
          placeholder="Image"
          className=" hidden w-full bg-[#0F1115] "
          id="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={(event) => {
            const file = event.target.files[0];
            if (file && file.type.substr(0, 5) === "image") {
              setImage(file);
            } else {
              setImage(null);
            }
          }}
        />
        <label
          htmlFor="file"
          className=" cursor-pointer"
          onClick={(event) => {
            event.preventDefault();
            fileInputRef.current.click();
          }}
        >
          Image
        </label>
      </div>
      <div>
        <Image src={preview} width={300} height={200} alt="image" className=" object-contain" />
      </div>
      <div className=" flex flex-row justify-between p-4 text-[#9199B0]">
        <div>
          <label>width</label>
          <input
            type="text"
            className="ml-2 w-10 bg-neutral-800 "
            placeholder="790"
          />
        </div>
        <div>
          <label>Height</label>
          <input
            type="text"
            className="ml-2 w-10 bg-neutral-800"
            placeholder="395"
          />
        </div>

        <Handle type="source" position="right" style={styleSeed} id="seed" />
      </div>
    </div>
  );
}

export default memo(SeedNode);
