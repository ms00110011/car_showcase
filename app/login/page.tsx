"use client";

import { CustomButton } from "@components";
import { getProviders, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
// import { useSession } from 'next-auth/react'


const Login = () => {


  const {data:session} = useSession()
  console.log(session)


  return (
    <div className="flex flex-col justify-center items-center  py-20 ">
      <h1 className="text-6xl pb-20">Sign In</h1>

      <div className="flex flex-col items-center ">
        <input
          type="text"
          className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Your Email"
        />
        <input
          type="password"
          className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Your password"
        />

        <CustomButton
          title="Sign In"
          containerStyles=" w-full bg-primary-blue text-white rounded-full"
        />
      </div>

      <h1 className="text-black mt-5">Don't have an account yet? <Link href='/signup'><span className="text-primary-blue">Sign Up!</span></Link> </h1>

     
    <CustomButton title="Or Connect with" 
        containerStyles="bg-black mt-5 rounded-full  text-sm text-gray-300 w-1/5 text-left"
        
        rightIcon="/icons8-google.svg"
        
        />


    </div>
  );
};

export default Login;
