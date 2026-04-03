"use client";
import { useEffect } from "react";

import { Flex, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPhoto,
  getPosts,
  getUsers,
  Social
} from "../redux/stateSlice";
import { AppDispatch } from "../redux/store";
import PostComp from "./post";
import Think from "./think";

export default function PostSection() {
  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
    dispatch(getPhoto());
  }, []);

  const posts = useSelector((state: Social) => state.social.posts);
  const users = useSelector((state: Social) => state.social.users);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div id="post" className="w-full px-4 md:w-[40%]">
      <div className="w-[100%] mx-auto flex flex-col items-center   ">
        <VStack>
          <Flex direction={"column"} gap={20} alignItems={"center"}>
            <Think />
            {posts.map((p) => (
              <PostComp
                key={p.id.toString()}
                id={p.id}
                uid={p.userId}
                name={users.find((el) => el.id === p.userId)?.name}
                body={p.body}
                title={p.title}
              />
            ))}
          </Flex>
        </VStack>
      </div>
    </div>
  );
}
