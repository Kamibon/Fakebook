"use client";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { SignLayout } from "../components/_layout";

export default function Register() {
  // const [credentials, setCredentials] = useState({name:"", surname:"", email:"", password:"", date:Date(), friends:[], posts:[{content:"Il mio post", date:Date()}]})
  const [credentials, setCredentials] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    birthDate: Date(),
    friends: [],
    online: true,
    posts: [
      { id: "", user: "", content: "Il mio post", date: Date(), likes: [""] },
    ],
  });

  let error = "";

  /* function createAccount(){
       
       fetch(url + "users/"+ credentials.email +".json" , {method:"POST", body: JSON.stringify(credentials)}).then((res)=>{
        if(res.status === 200) localStorage.setItem("user", credentials?.name + "\t"+ credentials?.surname)
       }).catch(error=>console.log(error))
    } */

  function changeCred(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    if (!event.target.value) {
      error = "Hai sbagliato";
      return error;
    }
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
    return "";
  }

  return (
    <>
      <SignLayout>
          <Box className="gap-4 flex flex-col bg-white shadow p-7 rounded-md">
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input name="email" type="email" />
              <FormErrorMessage>Errore!</FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Nome</FormLabel>
              <Input name="name" />
              <FormErrorMessage>
                Hai inserito un nome non valido!
              </FormErrorMessage>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Cognome</FormLabel>
              <Input name="surname" />
              <FormErrorMessage>
                Hai inserito un cognome non valido!
              </FormErrorMessage>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Data di nascita</FormLabel>
              <Input type="date" name="date" />
              <FormErrorMessage>
                Hai inserito una data non valida!
              </FormErrorMessage>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" />
              <FormErrorMessage>
                Hai inserito una password non valida!
              </FormErrorMessage>
            </FormControl>

            <Button className="bg-lime-700 text-white" my={3}>
              Crea il tuo account
            </Button>
          </Box>
      </SignLayout>
    </>
  );
}
