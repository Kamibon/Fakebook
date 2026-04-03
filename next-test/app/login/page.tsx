"use client";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { SignLayout } from "../components/_layout";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  /* function enterAccount(){
    
     fetch(url + "users.json", {method:"POST", body: JSON.stringify(credentials)}).then((res)=>{localStorage.setItem("user", credentials.email)}).catch(error=>console.log(error))
  } */

  function changeCred(
    event: React.ChangeEvent<HTMLInputElement>,
    field: string,
  ) {
    event.preventDefault();
    setCredentials({ ...credentials, [field]: event.target.value });
  }

  return (
    <>
      <SignLayout>
        <div className="justify-center  w-full md:w-[40%] ">
          <form className="flex flex-col gap-2 items-center  p-7 bg-white rounded-md shadow shadow-slate-400">
            <FormControl>
              <FormLabel>Email o numero di telefono</FormLabel>
              <Input
                onChange={(e) => changeCred(e, "email")}
                className="border  focus:border-blue-600 shrink-0 rounded-md p-3 w-full"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                onChange={(e) => changeCred(e, "password")}
                type="password"
                className="border shrink-0 rounded-md p-3  w-full"
              />
            </FormControl>
            <Button className="bg-blue-600 rounded-md font-bold text-white w-full p-3">
              <Link href="/">Accedi</Link>
            </Button>
            <div className="text-blue-600 m-3">Password dimenticata?</div>
            <Button
              /* onClick={()=>enterAccount()} */ className="bg-lime-700 rounded-md font-bold p-3 text-white"
            >
              {<Link href="/register">Crea un nuovo account</Link>}
            </Button>
          </form>
        </div>
      </SignLayout>
    </>
  );
}
