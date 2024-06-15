"use client";
import Image from "next/image";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { IoSearch } from "react-icons/io5";
import { FaTimesCircle } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import SignUp from "./dialog-box/sign-up";
import SignIn from "./dialog-box/sign-in";

interface auth {
  authType: "sign-in" | "sign-up";
}
const Navbar = () => {
  const [log, setLog] = useState<auth | string>("sign-up");
  const [openmodal, setOpenModal] = useState(true);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        setOpenModal(false);
        console.log("I am triggred");
      }
    });
  }, [openmodal]);

  return (
    <div className="flex justify-center px-5">
      <div className="flex justify-between gap-5 shadow-sm py-3 md:py-2 w-full max-w-6xl">
        <div className="flex">
          <Image
            src="/assets/logo-S2lIhR8K.svg"
            alt="logo"
            width={150}
            height={80}
          />
        </div>
        <div className="hidden md:flex gap-2 items-center rounded-full bg-slate-200 py-2 px-4">
          <IoSearch size={26} />
          <input
            type="search"
            name=""
            id=""
            placeholder="Search your favourite groups in ATG"
            className="text-lg outline-none bg-slate-200 w-[21rem]"
          />
        </div>
        <div className="hidden md:block my-auto">
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="my-auto font-medium cursor-pointer"
              >
                <span>Create account.</span>{" "}
                <span className="text-blue-500">It&apos;s Free!</span>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-4xl">
              <DialogHeader>
                <div className="text-center text-sm text-green-800 font-medium">
                  Let&apos;s learn, share & inspire each other with our passion
                  for computer engineering. Sign up now 🤘🏼
                </div>
              </DialogHeader>
              <div className="flex gap-2">
                <div className="flex flex-col gap-2 w-1/2">
                  {log === "sign-up" ? <SignUp /> : <SignIn />}
                </div>
                <div className=" w-1/2">
                  <DialogTitle className="flex justify-end gap-1">
                    {log === "sign-up" ? (
                      <>
                        <div className="font-normal">
                          Already have an account?
                        </div>
                        <div
                          className="text-blue-500 font-medium cursor-pointer"
                          onClick={() => setLog("sign-in")}
                        >
                          Sign in
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="font-normal">
                          Don&apos;t have an account?
                        </div>
                        <div
                          className="text-blue-500 font-medium cursor-pointer"
                          onClick={() => setLog("sign-up")}
                        >
                          Sign up
                        </div>
                      </>
                    )}
                  </DialogTitle>
                  <Image
                    src="/assets/signup.svg"
                    height={400}
                    width={400}
                    alt="image"
                    className="w-full h-96"
                  />
                  <div className="text-slate-500 text-sm">
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="md:hidden flex gap-5 items-center">
          <IoSearch size={26} className="cursor-pointer" />
          {openmodal ? (
            <Drawer>
              <DrawerTrigger asChild>
                <Image
                  src="/assets/img1.jpg"
                  alt="profile"
                  width={40}
                  height={40}
                  className="w-8 h-8 rounded-full cursor-pointer"
                  // onClick={() => setOpenModal(!openmodal)}
                />
              </DrawerTrigger>

              <DrawerContent>
                <div className="mx-auto w-full max-w-sm p-5">
                  {log === "sign-up" ? (
                    <SignUp
                      cross={
                        <DrawerClose asChild>
                          <FaTimesCircle size={18} />
                        </DrawerClose>
                      }
                      onclick={() => setLog("sign-in")}
                    />
                  ) : (
                    <SignIn
                      cross={
                        <DrawerClose asChild>
                          <FaTimesCircle size={18} />
                        </DrawerClose>
                      }
                      onclick={() => setLog("sign-up")}
                    />
                  )}
                  <div className="text-slate-500 text-sm text-center mt-3">
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          ) : (
            <Image
              src="/assets/img1.jpg"
              alt="profile"
              width={40}
              height={40}
              className="w-8 h-8 rounded-full cursor-pointer"
              onClick={() => setOpenModal(!openmodal)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
