import Image from "next/image";
import React from "react";
import { footerLinks } from "@/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex p-4 justify-between">
      <div>
        <Image src="/logo.png" alt="logo" width={90} height={20} />
        <div className="font-serif font-semibold italic text-stone-500">
          EasyWheels
        </div>
      </div>
      {footerLinks?.map((link) => {
        return (
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">{link.title}</h3>
            {link.links?.map((links) => {
              return (
                <Link href={links.url} key={links.title} className="text-grey">
                  {links.title}
                </Link>
              );
            })}
          </div>
        );
      })}
    </footer>
  );
}
