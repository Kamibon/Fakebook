"use client";

import { Avatar, Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { User } from "../constants/constants";
import { Social } from "../redux/stateSlice";
import NavBar from "./navBar";

type myProps = {
  name: String;
  // onChange: Function,
};

export default function Searchbar() {
  const [value, setValue] = useState("");
  const [searched, setSearched] = useState<User[]>([]);

  const posts = useSelector((state: Social) => state.social.posts);
  const users = useSelector((state: Social) => state.social.users);

  const search = (val: string) => {
    if (val.length > 0)
      setSearched(
        users?.filter(
          (el) => el.username.startsWith(val) || el.name.startsWith(val),
        ),
      );
    else setSearched([]);
  };

  return (
    <Box className="w-[100%]">
      <NavBar onChange={search} name={"Giorgio Armani"}></NavBar>

      {searched?.map((el) => (
        <Box
          key={el.id.toString()}
          className="flex flex-col border fixed top-[10%]  bg-white justify-center m-auto z-10 w-[70%]"
        >
          <Flex justifyContent={"center"}>
            <Link
              key={el.id.toString()}
              href={"users/" + el.id}
              className="w-[20%] h-[8%] border-gray-400  hover:bg-slate-500  "
            >
              {el.username}
              {/* <Image key={el.surname} className='w-[30%] h-[50%]' alt = "" src ={require('./pages/photo/profile.jpg')}/> */}
              <Avatar name={el.name}></Avatar>
            </Link>
          </Flex>
        </Box>
      ))}
    </Box>
  );
}
