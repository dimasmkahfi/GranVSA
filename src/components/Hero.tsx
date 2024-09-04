"use client";
import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";
import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap justify-center items-center px-4 lg:px-8">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <div className="flex justify-center lg:justify-start">
              <img src="/img/vsa.png" alt="logo" className="w-25 h-16" />
            </div>
            <p className="py-5 text-xl leading-normal text-gray-600 lg:text-xl xl:text-2xl text-center lg:text-left">
              Welcome to GranVSA, your premier destination for seamless travel
              solutions. Inspired by our motto, "Visa Ventures, Road
              Adventures," we are dedicated to making your travel dreams a
              reality with effortless visa services and exceptional car travel
              options.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="mx-auto">
            <Image
              src={heroImg}
              width="350"
              height="350"
              className="object-cover"
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
};
