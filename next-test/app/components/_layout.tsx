import React, { ReactNode } from "react";

export const SignLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" h-screen flex flex-col items-center justify-start md:flex-row px-20 py-2">
      <h1 className="text-blue-600 font-extrabold md:hidden p-4 text-5xl">
        feisbook
      </h1>
      <aside className=" md:flex flex-col items-center hidden md:w-[60%]">
        <h1 className="text-blue-600 font-extrabold text-3xl text-start  md:text-5xl w-full">
          feisbook
        </h1>

        <h2 className="text-black text-2xl md:text-4xl  font-extrabold w-full">
          Feisbook ti aiuta a connetterti e <br />
          rimanere in contatto con le <br />
          persone della tua vita.
        </h2>
      </aside>
      {children}
    </div>
  );
};
