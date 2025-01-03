import React from "react";
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center bg-[#0E1016] text-[#e4ded7] gap-5">
      <p className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] uppercase">Stay on the right track and own the journey!</p>
      <Image
        src="https://i.pinimg.com/736x/9f/8e/50/9f8e50fb1605f45e09bde8b20812f0b7.jpg"
        alt="Funny Meme"
        width={858}
        height={483}
        className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]"
      />
      <div>
        <Link href="/" className="text-[20px] sm:text-[20px] md:text-[35px] lg:text-[40px] uppercase">
          Head back to my{" "}
          <span className="underline underline-offset-2">Portfolio</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
