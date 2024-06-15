import React, { ReactNode } from "react";
import { DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import Image from "next/image";

const SignUp = ({
  cross,
  onclick,
}: {
  cross?: ReactNode;
  onclick?: Function;
}) => {
  return (
    <>
      <div className="flex justify-between items-center my-2">
        <DialogTitle>Create Account</DialogTitle>
        {cross}
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Last Name" />
          </div>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
        </div>
        {cross ? (
          <div className="flex justify-between items-center">
            <button className="py-3 px-4 rounded-full bg-blue-500 font-medium text-white my-2">
              Create Account
            </button>
            <div
              onClick={() => {
                const voidFunc = () => {};
                onclick !== undefined ? onclick() : voidFunc();
              }}
              className="border-b border-slate-900 hover:text-blue-500 hover:border-blue-500"
            >
              Or, Sign in
            </div>
          </div>
        ) : (
          <button className="py-3 px-4 rounded-full bg-blue-500 font-medium text-white my-2">
            Create Account
          </button>
        )}
        <div className="mt-2 flex flex-col gap-2">
          <button className="py-3 px-4 border-2  rounded-md font-medium flex justify-center gap-2 items-center">
            <Image
              src="/icons/google.svg"
              height={40}
              width={40}
              alt="google"
              className="w-5 h-5"
            />
            <span>Sign up with Google</span>
          </button>
          <button className="py-3 px-4 border-2  rounded-md font-medium flex justify-center gap-2 items-center">
            <Image
              src="/icons/facebook.svg"
              height={40}
              width={40}
              alt="google"
              className="w-5 h-5"
            />
            <span>Sign up with Facebook</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
