"use client";
import { Button, Flex, List, ListItem } from "@chakra-ui/react";

const names = [
  "Generale",
  "Sicurezza",
  "Privacy",
  "Blocco",
  "Lingua",
  "Applicazioni",
];

export default function SideBar() {
  return (
    <Flex
      className=" bg-transparent flex-col hidden md:block md:w-[30%] h-screen py-2 sticky top-0"
    >
      <List flexGrow={1}>
        {names.map((el, id) => (
          <ListItem className="w-full px-2" my={2} key={id}>
            <Button className="w-full bg-transparent ">{el}</Button>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
}

