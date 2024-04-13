"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { EyeIcon } from "@heroicons/react/24/solid";
import Airpocket from "@/app/assets/airpocket.svg";

type Props = {
  showSignInModal: boolean;
};

const ResetPassword = ({ showSignInModal }: Props) => {
  const [showFirstPassword, setShowFirstPassword] = useState(false);
  const [showSecondPassword, setShowSecondPassword] = useState(false);

  const [passwordMatch, setPasswordMatch] = useState(true);

  const toggleShowFirstPassword = () => {
    setShowFirstPassword((prevState) => !prevState);
  };
  const toggleShowSecondPassword = () => {
    setShowSecondPassword((prevState) => !prevState);
  };

  const [firstPassword, setFirstPassword] = useState("");

  const onChangeFirstPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstPassword(e.currentTarget.value);
  };

  const [secondPassword, setSecondPassword] = useState("");

  const onChangeSecondPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondPassword(e.currentTarget.value);
  };

  useEffect(() => {
    if (firstPassword !== secondPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  });

  return (
    <div className="absolute inset-0 z-10">
      <div className="bg-white w-[80vw] mx-auto mt-16 rounded-lg p-2 relative max-w-[480px]">
        <div className="py-6 px-3">
          <div className="w-36 h-10 mx-auto relative">
            <Image src={Airpocket} fill alt="Logo" />
          </div>
          <div className="text-center my-3 space-y-1">
            <p>Reset Password</p>
            <p className="text-sm text-gray-500 capitalize">
              Create your new login credentials
            </p>
          </div>
          <form>
            <div className="space-y-6 mt-10">
              <div className="relative">
                <input
                  type={showFirstPassword ? "text" : "password"}
                  className={`peer border rounded-lg w-full h-10 px-4 py-2 focus:outline-none ${
                    passwordMatch
                      ? "border-gray-400 focus:border-primaryColor text-primaryColor"
                      : "border-red-500 text-red-500"
                  }`}
                  value={firstPassword}
                  onChange={onChangeFirstPassword}
                />
                <p
                  className={`text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%] ${
                    passwordMatch
                      ? "peer-focus:text-primaryColor text-gray-400"
                      : "text-red-500"
                  }`}
                >
                  New Password
                </p>
                <span
                  className={`absolute right-6 translate-y-[100%] ${
                    passwordMatch ? "text-primaryColor" : "text-red-500"
                  }`}
                  onClick={toggleShowFirstPassword}
                >
                  {showFirstPassword ? (
                    <EyeSlashIcon className="w-4 h-4" />
                  ) : (
                    <EyeIcon className="w-4 h-4" />
                  )}
                </span>
              </div>

              <div className="relative">
                <input
                  type={showSecondPassword ? "text" : "password"}
                  className={`peer border rounded-lg w-full h-10 px-4 py-2 focus:outline-none ${
                    passwordMatch
                      ? "border-gray-400 focus:border-primaryColor text-primaryColor"
                      : "border-red-500 text-red-500"
                  }`}
                  value={secondPassword}
                  onChange={onChangeSecondPassword}
                />
                <p
                  className={`text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%] ${
                    passwordMatch
                      ? "peer-focus:text-primaryColor text-gray-400"
                      : "text-red-500"
                  }`}
                >
                  Re Enter password
                </p>
                <span
                  className={`absolute right-6 translate-y-[100%] ${
                    passwordMatch ? "text-primaryColor" : "text-red-500"
                  }`}
                  onClick={toggleShowSecondPassword}
                >
                  {showSecondPassword ? (
                    <EyeSlashIcon className="w-4 h-4" />
                  ) : (
                    <EyeIcon className="w-4 h-4" />
                  )}
                </span>
              </div>
            </div>
            <small
              className={`${
                passwordMatch ? "opacity-0" : "opacity-100"
              } inline-block text-xs text-center w-full bg-red-50 text-red-500 py-1 rounded-lg my-2`}
            >
              Password do not match!
            </small>
            <button className="text-sm bg-gray-100 w-full rounded-md p-3 text-gray-500 mt-2">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ResetPassword;
