import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

import Logo from "@/app/assets/airpocket.svg";
import MaxwidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";

const Footer = () => {
  return (
    <MaxwidthWrapper>
      <div className="px-6 my-6 md:flex justify-between">
        <div className="space-y-3 max-w-[420px]">
          <div className="relative w-28 h-8">
            <Image src={Logo} alt="logo" />
          </div>
          <p className="text-xs md:text-sm text-gray-600">
            Our passion for travel fuels our dedication to exceeding
            expectations and delivering unparalleled value, ensuring that every
            journey with Airpockets is an extraordinary adventure.
          </p>
          <div className="pt-6 space-y-2">
            <p className="text-[#1D91CC] font-semibold text-sm lg:hidden">
              Follow us
            </p>
            <div className="space-x-3">
              <button className="border border-[#1D91CC] rounded-full p-2 lg:border-gray-300">
                <FaLinkedinIn className="text-[#1D91CC] lg:text-[#333333]" />
              </button>
              <button className="border border-[#1D91CC] rounded-full p-2 lg:border-gray-300">
                <FaFacebookF className="text-[#1D91CC] lg:text-[#333333]" />
              </button>
              <button className="border border-[#1D91CC] rounded-full p-2 lg:border-gray-300">
                <FaTwitter className="text-[#1D91CC] lg:text-[#333333]" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between lg:gap-x-28">
          <div className="space-y-4 pt-6">
            <h3 className="font-semibold">Product</h3>
            <ul className="text-gray-600 space-y-2">
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/career"}>Career</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 pt-6">
            <h3 className="font-semibold">Help</h3>
            <ul className="text-gray-600 space-y-2">
              <li>
                <Link href={"/faq"}>FAQ</Link>
              </li>
              <li>
                <Link href={"/help-center"}>Help Center</Link>
              </li>
              <li>
                <Link href={"/help-center"}>Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Contact Information</h3>
          <div className="text-gray-600 space-y-2 mt-2">
            <p>18, Cray Crescent, Ikoyi, Lagos</p>
            <p>+234 701 100 1000</p>
            <p>info@airpocketstravels.com</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex mx-auto justify-center mt-8">
        <ul className="flex gap-x-6 text-gray-700 text-sm">
          <li>
            <Link href={"/terms"}>Terms</Link>
          </li>
          <li>
            <Link href={"/privacy"}>Privacy</Link>
          </li>
          <li>
            <Link href={"/cookies"}>Cookies</Link>
          </li>
        </ul>
      </div>
    </MaxwidthWrapper>
  );
};
export default Footer;
