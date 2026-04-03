"use client";
import { Button, Flex, Textarea } from "@chakra-ui/react";
import { useState } from "react";

export default function Think() {
  const [content, setContent] = useState("");

  /* function createPost(){
    fetch(url+"posts.json", {method:"POST", body:JSON.stringify({content:content, user:localStorage.getItem("user"), date:new Date().toLocaleDateString(), likes:[""] })})
  }
 */
  return (
    <Flex  width={"100%"} direction={"column"}>
      <Flex>
        <Button flexGrow={1}>Aggiorna stato</Button>
        <Button flexGrow={1}>Aggiungi foto/video</Button>
      </Flex>
      <Textarea placeholder={"A cosa stai pensando?"}></Textarea>
      <Button className=" hover:bg-blue-700" bg={"blue.600"} color={"white"}>
        Posta
      </Button>
    </Flex>
  );
}
{
  /* <div className='h-[80%] w-[35%]  m-auto mt-4 shadow-xl shadow-slate-700'>
        <div className='bg-slate-300 h-[20%] flex justify-start items-start'>
             <div className='hover:bg-gray-700 inline m-2'>Aggiorna stato</div>
             <div className='hover:bg-gray-700 inline m-2'>Aggiungi foto/video</div>

        </div>
        <textarea value={content} onChange={(e)=>setContent(e.target.value)} className='h-[60%] w-[100%] py-3'
           placeholder = ' A cosa stai pensando?'/>
        
        <div className='bg-slate-300 h-[17%] flex justify-end items-center'>
             <button /* onClick={createPost} className='bg-blue-700  m-2 p-1 rounded-md text-white hover:bg-blue-800'>Posta</button>

        </div>


    </div> */
}
