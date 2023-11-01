"use client";

import React from "react";
import { Button } from ".";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Your Go To Place for Buying and Selling your Car
        </h1>
        <p className="hero__subtitle">It has never been easier</p>
        <Button
          title="Find Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={() => {
            alert("testing");
          }}
          disabled={false}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/porsche-home.png"
            className="object-contain"
            fill
            alt="porsche-img"
          />
          <div className="hero__logo-overlay" />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
}
