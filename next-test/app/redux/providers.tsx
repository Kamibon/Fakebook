"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { ChakraProvider } from "@chakra-ui/react";

import { CacheProvider } from "@chakra-ui/next-js";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
    </Provider>
  );
}
