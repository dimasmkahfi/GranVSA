"use client";
import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";
import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <div className="flex">
              <img src="/img/vsa.png" alt="logo" className="w-25 h-16" />
            </div>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Welcome to GranVSA, your premier destination for seamless travel
              solutions. Inspired by our motto, "Visa Ventures, Road
              Adventures," we are dedicated to making your travel dreams a
              reality with effortless visa services and exceptional car travel
              options.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="350"
              height="350"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center"></div>
      </Container>
    </>
  );
};
