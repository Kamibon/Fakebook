"use client";
import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { MouseEventHandler } from "react";
import { useSelector } from "react-redux";
import { Social } from "../redux/stateSlice";

type myProps = {
  openChat: MouseEventHandler<HTMLDivElement>;
};

export default function Trending(/* {openChat}: myProps */) {
  const users = useSelector((state: Social) => state.social.users);

  return (
    <Flex
      className=" md:w-[30%] h-screen md:block hidden sticky top-0"
      direction={"column"}
    >
      <Box>
        <Heading>TRENDING</Heading>
        <Text>Scopri di più</Text>
        <Text>Vieni a vedere tutti i nuovi trend</Text>
      </Box>
      <Divider></Divider>
      ONLINE
      <Flex className="h-96 overflow-y-scroll no-scrollbar" direction={"column"}>
        <List className="flex flex-col gap-3 justify-end items-end ">
          {users?.map((elem) => (
            <ListItem className="w-full" key={elem.id.toString()}>
              <Button
              className="bg-transparent flex items-center justify-start gap-3 p-5 pl-0 w-full"
                rightIcon={<CheckCircleIcon color={"green"}></CheckCircleIcon>}
              >
                <Avatar size={'sm'} name={elem.name} />
                <Link
                  href={`users/${elem.id.toString()}`}
                  key={elem.id.toString()}
                >
                  {elem.username}
                  <br />{" "}
                </Link>{" "}
              </Button>
            </ListItem>
          ))}
        </List>
      </Flex>
    </Flex>
  );
}
