import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/customer1.jpeg";
import userTwoImg from "../../public/img/customer2.jpeg";
import userThreeImg from "../../public/img/customer3.jpeg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-300">
            <p className="text-2xl leading-normal text-black">
              The seafarer visa processing was excellent. It was completed on
              time and at a very reasonable cost.
            </p>
            <Avatar
              image={userOneImg}
              name="Taufik"
              title="Crewing Replacement"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-300">
            <p className="text-2xl leading-normal text-black">
              The entire process was streamlined, and the staff was always
              available to answer any questions I had.
            </p>
            <Avatar
              image={userTwoImg}
              name="Rinovan Chaniago"
              title="Crewing Supervisor"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-300">
            <p className="text-2xl leading-normal text-black">
              The process was efficient, the cost was reasonable, and the staff
              was friendly and knowledgeable. I could not be happier with the
              results.
            </p>
            <Avatar
              image={userThreeImg}
              name="Ilham Achmad Syafii"
              title="3rd Engineer LNG Vessel"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          layout="responsive"
          width={56}
          height={56}
          alt="Avatar"
          className="object-cover"
        />
      </div>
      <div>
        <div className="text-lg font-medium text-black">{props.name}</div>
        <div className="text-black">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
