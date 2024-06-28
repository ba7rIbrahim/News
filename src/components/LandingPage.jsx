import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LandingPage() {
  return (
    <div className="container min-h-[calc(100vh-100px)] flex items-center mt-8">
      <div className="flex justify-center items-center h-full gap-10 my-10 ">
        <div className="text-center md:text-left md:w-[40%]">
          <h1 className="font-bold text-5xl text-main">
            More of News in This Page
          </h1>
          <p className="py-6 text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            soluta dolores ratione. Cum fugiat porro magnam esse hic odio
            adipisci facilis temporibus iste totam dolorum, repellat quidem sunt
            nam. Enim?
          </p>
          <Link href="/Articles" className="bg-main py-1 px-5 rounded text-xl border text-white hover:text-main border-main hover:bg-transparent duration-300">
            News
          </Link>
        </div>
        <div className="flex-1">
          <Image
            src="/landingPage.svg"
            alt="Landing Page"
            width={500}
            height={500}
            className="hidden md:block w-full"
          />
        </div>
      </div>
    </div>
  );
}
