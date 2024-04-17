import Image from "next/image";
import Link from "next/link";
import { FieldValues, useForm } from "react-hook-form";

import Logo from "../../app/assets/airpocket.svg";

const Login = () => {
  const { register, reset, handleSubmit } = useForm();

  const handleOnSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    // <div className=" mt-[-6rem] inset-0 z-10">
    <div className="  w-[80vw] mx-auto  rounded-lg p-2 relative max-w-[480px]">
      <div className="py-6 px-3">
        <div className="w-36 h-10 mx-auto relative">
          <Image src={Logo} alt="Logo" className="mx-auto" />
        </div>
        <div className="text-center my-3 space-y-1">
          <p>Login</p>
          <p className="text-sm text-gray-500">Enter Your Login Details</p>
        </div>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div className="flex flex-col gap-4 mt-10">
            <div className="relative">
              <input
                type="email"
                id="email"
                {...register("email")}
                className="peer border border-gray-400 focus:border-[#1D91CC] rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-[#1D91CC]"
              />
              <p className="peer-focus:text-[#1D91CC] text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]">
                Email Address
              </p>
            </div>
            <div className="relative">
              <input
                type="password"
                id="password"
                {...register("password")}
                className="peer border border-gray-400 focus:border-[#1D91CC] rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-[#1D91CC]"
              />
              <p className="peer-focus:text-[#1D91CC] text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]">
                Password
              </p>
            </div>
          </div>
          <div className="flex text-xs justify-between item-center my-2">
            <div className="space-x-1 gap-2 flex items-center text-gray-500">
              <input type="checkbox" name="" id="" />
              <span>Remember Password</span>
            </div>
            <Link href="/forgot-password" className="text-[#1D91CC] ">
              Forget Password
            </Link>
          </div>
          <button type="submit" className="bg-[#1D91CC] text-white w-full rounded-md p-3 mt-10">
            Log In
          </button>
          <div className="text-sm flex flex-col items-center justify-between py-4 text-gray-500">
            <button>Don't have an account?</button>
            <button type="button" className="text-[#1D91CC]">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
    // </div>
  );
};

export default Login;
