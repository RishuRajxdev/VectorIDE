import Image from "next/image";
import { Button } from "@/components/ui/button";
import {db} from "@/lib/db";
import UserButton from "@/modulus/auth/components/user-button";
export default async function Home() {
  const user = db.user;
  return (
   <div  className="flex flex-col justify-center items-center h-screen">
    <Button>
      Get Started
    </Button>
    <UserButton />
   </div>
  );
}
