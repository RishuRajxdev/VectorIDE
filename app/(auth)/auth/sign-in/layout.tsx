import { Mail } from "lucide-react";
import React from "react";
const AuthLayout =({children}:{children:React.ReactNode})=>{
    return(
        <main className="flex justify-center items-center h-screen flex-col  bg-[#1a1a1a]">
          {children}
        </main>
    )
}
export default AuthLayout;