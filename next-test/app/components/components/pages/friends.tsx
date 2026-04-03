import Image from "next/image";
import React from "react";

export default function Friends() {
  return (
    <div className="grid grid-cols-3 h-screen">
      <div className=" hover:bg-slate-500  border border-gray-400 shadow-sm shadow-blue-500 flex  items-center justify-start m-5 w-[60%] h-[20%]">
        <Image
          width={35}
          height={80}
          className="w-[35%] h-[80%] m-4"
          alt=""
          src={require("./photo/profile.jpg")}
        />
        <strong> Pinco Pallino</strong>
      </div>
      <div className=" hover:bg-slate-500  border border-gray-400 shadow-sm shadow-blue-500 flex  items-center justify-start m-5 w-[60%] h-[20%]">
        <Image
          width={35}
          height={80}
          className="w-[35%] h-[80%] m-4"
          alt=""
          src={require("./photo/profile.jpg")}
        />
        <strong> Pinco Pallino</strong>
      </div>
      <div className=" hover:bg-slate-500  border border-gray-400 shadow-sm shadow-blue-500 flex  items-center justify-start m-5 w-[60%] h-[20%]">
        <Image
          width={35}
          height={80}
          className="w-[35%] h-[80%] m-4"
          alt=""
          src={require("./photo/profile.jpg")}
        />
        <strong> Pinco Pallino</strong>
      </div>
    </div>
  );
}
