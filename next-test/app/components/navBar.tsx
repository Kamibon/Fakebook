import { Avatar, Box, Flex, Heading, Input } from "@chakra-ui/react";

type myProps = { name: string; onChange: Function };

export default function NavBar({ name, onChange }: myProps) {
  return (
    <Box className=" w-[100%]">
      <Flex
        justifyContent={"space-between"}
        height={"100%"}
        alignItems={"center"}
        className=" bg-blue-800 py-2 px-3"
        gap={6}
      >
        <Heading className="text-white hidden md:block" color={"white"}>
          Feisbook
        </Heading>
        <Heading className="text-white md:hidden block" color={"white"}>
          f
        </Heading>
        <Input
          className="w-[30%] bg-white"
          name="search"
          placeholder="Cerca qui i tuoi amici"
          onChange={(event) => onChange(event.target.value)}
        />

        <Flex alignItems={"center"}>
          <Avatar name={name}></Avatar>
        </Flex>
      </Flex>
    </Box>
  );
}
