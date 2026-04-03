import { Flex, VStack } from "@chakra-ui/react";
import { Metadata } from "next";
import { Suspense } from "react";
import PostSection from "./components/postSection";
import Searchbar from "./components/searchbar";
import SideBar from "./components/sideBar";
import Trending from "./components/trending";

export const metadata: Metadata = {
  title: "Feisbook",
};

export default function Home() {
  return (
    <div>
      <Suspense fallback={"Caricamento dati..."}>
        <Flex direction={"column"}>
          <Searchbar />

          <Flex gap={8} paddingTop={8}>
            <SideBar />
            <PostSection />
            <Trending />
          </Flex>
        </Flex>
      </Suspense>
    </div>
  );
}
