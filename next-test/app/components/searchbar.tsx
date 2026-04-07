"use client";

import { Avatar, Box, Container, Flex } from "@chakra-ui/react";
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
      <Flex className=" flex-col items-center justify-center">
        <NavBar onChange={search} name={"Giorgio Armani"} />
        <Container className="w-full">
          {searched?.map((el) => (
            <Box
              key={el.id.toString()}
              className="flex flex-col border   bg-white justify-center z-10 w-full"
            >
              <Flex className="items-center gap-3 p-3">
                <Avatar size={"sm"} name={el.name} />
                <Link
                  key={el.id.toString()}
                  href={"users/" + el.id}
                  className="w-[20%] h-[8%] border-gray-400  hover:bg-slate-500  "
                >
                  {el.username}
                </Link>
              </Flex>
            </Box>
          ))}
        </Container>
      </Flex>
    </Box>
  );
}
