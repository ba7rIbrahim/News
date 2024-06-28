import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function  HomePage() {

  return (
    <div className=" my-24 md:my-8 py-6 flex justify-center items-center">
      <div className="container">
        <h1 className="text-main mb-10 font-bold text-6xl"> More News</h1>
        <div className="flex gap-6 items-center border border-gray-300 p-3 rounded-md">
          <div className="w-full md:w-2/3 ">
            <p className="text-black mb-12 text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam fugit sit pariatur sint voluptate a suscipit labore fuga
              possimus itaque omnis dolore vero, quis inventore molestias culpa
              iste dolor nobis,  sit pariatur sint voluptate a suscipit labore fuga
              possimus itaque.
            </p>
            <Link
              href="/Articles"
              className=" bg-main py-2 px-3 rounded text-white hover:bg-main/80 duration-300 block text-center"
            >
              Go To News
            </Link>
            </div>
          <Image
            src="/reading.jpg"
            alt=""
            width={200}
            height={200}
            className="hidden md:block flex-1 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
