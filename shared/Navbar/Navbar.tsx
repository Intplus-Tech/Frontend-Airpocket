"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import Airpocket from "../../app/assets/airpocket.svg";
import SignUp from "@/shared/SignUp/SignUp";
import MaxwidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import Login from "../Login/Login";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div>
      <MaxwidthWrapper>
        <section className="h-24 z-10 w-full flex justify-between items-center px-6 bg-transparent">
          <div className=" w-1/2  justify-between gap-x-8 flex items-center mr-6 ">
            <div>
              <Image src={Airpocket} alt="Airpocket" />
            </div>
            <div className="hidden md:flex gap-6 text-[#283841] opacity-60 ">
              <Link className={`${pathname === "/" && "font-bold text-black"}`} href={"/"}>
                Home
              </Link>
              <Link
                className={` whitespace-nowrap ${
                  pathname === "/about-us" && "font-bold text-black"
                }`}
                href={"/about-us"}
              >
                About Us
              </Link>
              <Link
                className={`${pathname === "/flights" && "font-bold text-black"}`}
                href={"/flights"}
              >
                Flights
              </Link>
            </div>
          </div>
          <div className="whitespace-nowrap hidden items-center justify-end md:flex gap-4">
            <Dialog>
              <DialogTrigger>
                <p className="px-4 py-2 hover:shadow-md rounded-md">Sign In</p>
              </DialogTrigger>
              <DialogContent className=" max-h-[70vh]   ">
                <Login />
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger>
                <p className="px-3 py-2 text-white bg-[#1B96D6] rounded-md cursor-pointer">
                  Sign Up
                </p>
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
