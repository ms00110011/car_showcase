'use client'

import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import { useSession, signOut } from "next-auth/react";

const NavBar = () => {


  const {data:session} = useSession()

return (
  <header className="w-full z-10">
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
      <Link href="/" className="flex justify-center items-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width={118}
          height={18}
          className="object-contain"
        />
      </Link>


      {!session ?


      <div className="  flex">
        <Link href='/api/auth/signin'>
          <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles="text-white rounded-full bg-primary-blue min-w-[130px]"
          />
        </Link>
       
      </div> :

      <div className=" w-3/12 flex justify-around">
        <CustomButton
          title={session.user!.name!} 
          btnType="button"
          containerStyles="text-white rounded-full bg-black min-w-[130px]"
        />
        <CustomButton
        
          title="Sign Out"
          btnType="button"
          handleClick={()=>signOut()}
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </div>
} 
    </nav>
  </header>
)};

export default NavBar;
