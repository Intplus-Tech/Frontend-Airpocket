import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Airpocket from "@/app/assets/airpocket.svg";

type Props = {
  showSignInModal: boolean;
};

const ForgetPassword = ({ showSignInModal }: Props) => {
  return (
    <div className="absolute inset-0 z-10">
      <div className="bg-white w-[80vw] mx-auto mt-16 rounded-lg p-2 relative max-w-[480px]">
        <div className="py-6 px-3">
          <div className="w-36 h-10 mx-auto relative">
            <Image src={Airpocket} fill alt="Logo" />
          </div>
          <div className="text-center my-3 space-y-1">
            <p>Forget Password</p>
            <p className="text-sm text-gray-500 capitalize">
              Enter your email to resent your password
            </p>
          </div>
          <form>
            <div className="space-y-6 mt-10">
              <div className="relative">
                <input
                  type="email"
                  className="peer border border-gray-400 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor"
                />
                <p className="peer-focus:text-primaryColor text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]">
                  Email Address
                </p>
              </div>
            </div>
            <button className="text-sm bg-gray-100 w-full rounded-md p-3 text-gray-500 mt-10">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ForgetPassword;
