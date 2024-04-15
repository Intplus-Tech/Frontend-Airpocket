"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import Airpocket from "../../app/assets/airpocket.svg";
import MaxwidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import SignUp from "@/auth/SignUp/SignUp";
import Login from "@/auth/Login/Login";
import ForgetPassword from "@/auth/ForgotPassword/ForgotPassword";
import ResetPassword from "@/auth/ResetPassword/ResetPassword";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [formType, setFormType] = useState("login");

  const renderForm = () => {
    if (formType === "login") {
      return <Login setFormType={setFormType} />;
    } else if (formType === "fogot") {
      return <ForgetPassword setFormType={setFormType} />;
    } else return <ResetPassword />;
  };

  return (
    <div>
      <MaxwidthWrapper>
        <section className="h-28 z-10 w-full flex justify-between items-center px-6 bg-transparent">
          <div className=" w-full  flex items-center mr-6 ">
            <div>
              <Image src={Airpocket} alt="Airpocket" />
            </div>
            <div className="hidden md:flex gap-6 text-[#283841] opacity-60 ">
              <Link
                className={`w-full ${
                  pathname === "/" && "font-bold text-black"
                }`}
                href={"/"}
              >
                Home
              </Link>
              <Link
                className={`w-full whitespace-nowrap ${
                  pathname === "/about-us" && "font-bold text-black"
                }`}
                href={"/about-us"}
              >
                About Us
              </Link>
              <Link
                className={` w-full ${
                  pathname === "/flights" && "font-bold text-black"
                }`}
                href={"/flights"}
              >
                Flights
              </Link>
            </div>
          </div>
          <div className="whitespace-nowrap hidden items-center justify-end md:flex gap-4">
            <Dialog>
              <DialogTrigger
                onClick={() => setFormType("login")}
                className="w-full px-4 py-2 hover:shadow-md rounded-md"
              >
                Sign In
              </DialogTrigger>
              <DialogContent className=" max-h-[70vh]">
                {renderForm()}
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger className="w-full px-3 py-2 text-white bg-[#1B96D6] rounded-md cursor-pointer">
                Sign Up
              </DialogTrigger>
              <DialogContent className=" overflow-y-auto min-h-full max-h-[50%] ">
                <SignUp />
              </DialogContent>
            </Dialog>
          </div>
        </section>
      </MaxwidthWrapper>
    </div>
  );
};

export default Navbar;
