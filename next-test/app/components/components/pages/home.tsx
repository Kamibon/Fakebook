import { url } from "inspector";
import { useEffect, useState } from "react";
import Post from "../../post";
import Searchbar from "../../searchbar";
import SideBar from "../../sideBar";
import Think from "../../think";
import Trending from "../../trending";


interface User {
  name: string;
  surname: string;
  date: Date;
  password: string;
  email: string;
}

function Chat({ name }: { name: String }) {
  const [openChat, setOpenChat] = useState(true);

  return (
    <div className="absolute bottom-[-30%] right-0 h-[50%] w-[20%]">
      <div
        onClick={() => setOpenChat(!openChat)}
        className="bg-blue-700 cursor-pointer text-white font-bold"
      >
        {name}
      </div>
      {openChat && (
        <div className="bg-slate-200 relative h-[68%]">
          <div>
            <textarea
              placeholder=" Scrivi qui il tuo messaggio"
              className="w-full border absolute bottom-0 left-0 border-black rounded-md"
            ></textarea>
          </div>
        </div>
      )}
    </div>
  );
}

type FakePost = {
  userID: Number;
  id: Number;
  title: String;
  body: String;
};

export default function Home() {
  const [searched, setSearched] = useState<User[]>([]);
  const [openChat, setOpenChat] = useState(false);
  const [posts, setPosts] = useState<FakePost[]>([]);
  useEffect(() => loadPosts(), []);

  function loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((res) => setPosts(res));
  }

  function openCloseChat() {
    setOpenChat(!openChat);
  }

  function search(sea: string) {
    if (sea.length === 0) setSearched([]);
    else
      fetch(url + "users.json")
        .then((response) => response.json())
        .then((people) =>
          setTimeout(() => {
            let list: User[] = [];

            for (let el of Object.keys(people)) {
              list.push(people[el]);
            }

            setSearched(list.filter((el) => el.name.includes(sea)));
          }, 500),
        );
  }

  return (
    <div className="h-vh w-[100%] bg-gray-200">
      <Searchbar/>
      <div className="flex space-x-20">
        <Think />
        <SideBar />
        <Trending />
      </div>
      <div>
        {posts.length &&
          posts?.map((el) => (
            <Post
              key={el.id + Math.random().toString()}
              id={el.id} uid={el.id} name={el.userID.toString()} title={el.title} body={el.body}              
            
             
        
            />
          ))}
      </div>
      {openChat && <Chat name={"Giorgio Melita"} />}
    </div>
  );
}
