import PostComp from "@/app/components/post";
import { Post, url, User } from "@/app/constants/constants";
import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Link from "next/link";

export default async function UserDetails({
  params,
}: {
  params: { id: number };
}) {
  const id = params.id;

  let users: User[], posts: Post[], myPosts: Post[];

  let me: User;

  const response = await fetch(url + "users/" + id);
  me = await response.json();
  const res1 = await fetch(url + "users");
  users = await res1.json();
  const res2 = await fetch(url + "posts");
  posts = await res2.json();
  myPosts = posts.filter((el) => el.userId === id);

  return (
    <div className="h-full w-full ">
      <div className="w-[100%] h-[27%] flex bg-blue-600 p-4 text-center">
        {" "}
        <span className="m-auto">Immagine di copertina di {me?.name}</span>
        <Avatar className="absolute   z-10" name={me?.name} />
      </div>

      <Tabs size={"lg"}>
        <TabList>
          <Tab>Amici</Tab>
          <Tab>Diario</Tab>
          <Tab>Informazioni</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <section className="w-[100%]  h-[100%] ">
              <div className="w-full h-full grid grid-cols-3 space-x-3 space-y-2 px-3">
                {users.map((el) => (
                  <Card className="shadow" key={el.id.toString()}>
                    <Flex
                      className={"px-2 py-3 flex flex-col justify-center gap-3"}
                    >
                      <Avatar name={el.name} />
                      <Link className=" text-blue-600" href={el.id.toString()}>
                        {el.name}
                      </Link>
                      <Button bg={"blue"} color={"white"}>
                        Aggiungi agli amici
                      </Button>
                    </Flex>
                  </Card>
                ))}
              </div>
            </section>
          </TabPanel>

          <TabPanel>
            <Box className="m-4 w-full h-[30%] flex flex-col items-center relative ">
              <Text className="bg-gray-200 h-[40%] w-[90%]">
                CONOSCI {me?.name.toUpperCase()}?
              </Text>
              <Textarea
                className="border border-gray-500 w-[90%] h-[60%]"
                placeholder={
                  "Se conosci\t" + me?.name + ", scrivigli un messaggio"
                }
              ></Textarea>
              <Button className="bg-green-600 rounded-sm p-1 text-white  font-bold absolute m-1 bottom-[5%] right-[13%]">
                Aggiungi agli amici
              </Button>
            </Box>

            <div className="flex flex-col  items-center">
              {posts.map((el) => (
                <PostComp
                  key={el.id.toString()}
                  id={el.id}
                  uid={el.userId}
                  name={me?.name}
                  title={el.title}
                  body={el.body}
                />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <>
              <strong>Informazioni</strong>
              <ul className="text-xl">
                <li>{me?.name}</li>
                <li>Abito a : {me?.address.city}</li>
                <li>Telefono:{me?.phone}</li>
                <li>Lavoro per {me?.company.name}</li>

                <li>
                  Sito personale:{" "}
                  <a className="text-blue-600" href="/">
                    {" "}
                    {me?.website}
                  </a>
                </li>
              </ul>
            </>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
