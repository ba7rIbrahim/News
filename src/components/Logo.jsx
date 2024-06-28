import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div>
      <Link href="/" className="flex gap-3 border-main border-2 rounded-full px-3 py-1 font-bold text-xl text-white ">
        NEWS
        <Image src="/newspaper.png" alt="" width={30} height={30}/>
      </Link> 
    </div>
  );
}
