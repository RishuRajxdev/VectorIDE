import React from "react";
import Image from "next/image";
import SignInFormClient from "@/modulus/auth/components/sign-in-form-client";
const page = () => {
  return (
    <>
    <Image src={"/login.svg"} alt="Login-Image" height ={300} width={200} className="m-6 object-cover"/>
    <SignInFormClient/>
    </>
  )
}

export default page
