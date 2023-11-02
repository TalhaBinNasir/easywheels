"use client";

import Image from "next/image";
import React from "react";
import { Button } from ".";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex px-4 w-full items-center">
        <Image
          className="cursor-pointer pr-4"
          src="/logo.png"
          alt="logo"
          width={90}
          height={20}
        />
        <ul className="cursor-pointer pr-4">Home</ul>
        <ul className="cursor-pointer pr-4">Explore</ul>
        <ul className="cursor-pointer pr-4">Contact Us</ul>
      </div>
      <div className="flex px-4 w-full justify-end items-center">
        <Button
          title="Sign In"
          type="button"
          handleClick={() => {
            alert("testing");
          }}
          containerStyles="bg-zinc-100 rounded-full text-grey hover:rounded-full hover:bg-zinc-200 active:bg-zinc-300"
        />
      </div>
    </nav>
  );
}
