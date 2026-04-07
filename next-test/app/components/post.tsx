"use client";
import Link from "next/link";
import React, { MouseEventHandler, useEffect, useState } from "react";
import { url } from "../constants/constants";
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { CheckIcon, EditIcon } from "@chakra-ui/icons";
import { usePathname } from "next/navigation";

type myProps = {
  id: Number;
  uid: Number;
  name: string | undefined;
  title: string;
  body: string;
};

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export default function PostComp({ id, uid, name, title, body }: myProps) {
  const [liked, setLiked] = useState(false);

  const [comments, setComments] = useState<Comment[]>([]);
  const [showComments, setShowComments] = useState(false);
  const url = usePathname();

  const likeString = liked ? "text-blue-600" : "text-black";

  function liking(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setLiked(!liked);
  }

  return (
    <Card className=" w-full px-3 py-2 ">
      <Flex className="items-center gap-3 w-full">
        <Avatar name={name} size={'md'}/>
        <Link
          className="text-blue-700 cursor-pointer "
          href={url === "/" ? "users/" + uid : uid.toString()}
        >
          {name}
        </Link>
      </Flex>

      <Container className="p-3 w-full">
        <Heading as={"h4"} className="w-full">
          {title.substring(0, 15)}
        </Heading>
        <Text  className="w-full">{body}</Text>
      </Container>
      <Divider />
      <Box flexGrow={1} className="py-2">
        <Text className="flex items-center gap-2">
          <CheckIcon></CheckIcon>A 10 persone piace questo elemento
        </Text>
      </Box>
      <Flex>
        <Button
          className={`hover:text-blue-700 ${likeString}`}
          onClick={(e) => liking(e)}
          flexGrow={1}
          rightIcon={<CheckIcon></CheckIcon>}
        >
          Mi piace
        </Button>
        <Button
          className="hover:text-blue-700"
          flexGrow={1}
          rightIcon={<EditIcon></EditIcon>}
        >
          Commenta
        </Button>
      </Flex>
    </Card>
  );
}
