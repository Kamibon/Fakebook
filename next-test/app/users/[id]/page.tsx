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
      {/* <div className=' rounded-3xl bg-gray-500 h-[15%] absolute left-2 top-[20%] w-[10%] z-10 '></div> */}
      {/* <Image className=' rounded-3xl bg-gray-500 h-[15%] absolute left-2 top-[20%] w-[10%] z-10 '  width={80} height={80}   alt={imageUrl?imageUrl.title:''} src={imageUrl?imageUrl.thumbnailUrl:'https://via.placeholder.com/150/771796'}/> */}

      <Tabs size={"lg"}>
        <TabList>
          <Tab>Amici</Tab>
          <Tab>Diario</Tab>
          <Tab>Informazioni</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <section className="w-[100%] border h-[100%]  absolute left-0">
              <div className="w-full h-full grid grid-cols-3 ">
                {users.map((el) => (
                  <Card margin={4} key={el.id.toString()}>
                    <Flex direction={"column"} justifyContent={"center"}>
                      <Avatar name={el.name}></Avatar>
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

/* {//
  page === "Diario" &&
  <>
       <div className='m-4 w-full h-[30%] flex flex-col items-center relative '>
        <div className='bg-gray-200 h-[40%] w-[90%]'>CONOSCI {me?.name.toUpperCase()}?</div>
          <input className='border border-gray-500 w-[90%] h-[60%]' placeholder={'Se conosci\t'  +me?.name+ ', scrivigli un messaggio'}>

          
          </input>
          <button className='bg-green-600 rounded-sm p-1 text-white  font-bold absolute m-1 bottom-[5%] right-[13%]'>Aggiungi agli amici</button>

       </div>

       <div className='flex flex-col  items-center'>
        
      

           {myPosts.map(el=><PostComp key = {el.id.toString()} id={el.id} uid = {el.userId} name = {me?.name} title={el.title} body={el.body} />)} 
        
       </div>
       </>
       //
}

{//Amici
page === "Amici" &&
<section className='w-[100%] border h-[100%]  absolute left-0'>
        
          <div className='w-full h-full grid grid-cols-3 '>{
          users.map(el=>
           <div className='size-[100%] text-center flex items-center border shadow-xl shadow-slate-400 m-4 relative' key={el.id.toString()}>
          <Image width={10} height={10} alt='Profilo' src={photos.find(p=>p.id===el.id)? photos.find(p=>p.id===el.id)!.thumbnailUrl:'https://via.placeholder.com/150/771796'} className=' bg-blue-800 m-2 w-[30%] h-[80%] overflow-clip hover:shadow-xl  shadow-blue-600 ' key={el.id.toString()}></Image>
          <Link className='font-bold text-blue-700' href={el.id.toString()}>{el.username}</Link>
          <button className='bg-blue-800 rounded-sm text-white font-bold m-5 p-1  absolute right-[5%]'>Aggiungi agli amici</button>
          </div>)

          }
        
          </div>
          
       </section>//
}

{page ==="Informazioni" && <>
      <strong>Informazioni</strong>
      <ul className='text-xl'>
        <li>{me?.name}</li>
        <li>Abito a : {me?.address.city}</li>
        <li>Telefono:{me?.phone}</li>
        <li>Lavoro per {me?.company.name}</li>
      
        <li>Sito personale: <a className='text-blue-600' href='/'> {me?.website}</a></li>
      </ul>
</>} */
