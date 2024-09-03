"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const clientLogos = [
  { src: "/img/logo1.png", alt: "Client 1" },
  { src: "/img/logo2.png", alt: "Client 2" },
  { src: "/img/logo3.jpg", alt: "Client 3" },
  // Add more client logos as needed
];

const OurClients = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (scrollContainer) {
      const scroll = () => {
        scrollContainer.scrollLeft += 1;
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      };

      const intervalId = setInterval(scroll, 30); // Adjust speed by changing the interval time

      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Our Clients</h1>
      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex space-x-6 animate-marquee whitespace-nowrap"
        >
          {clientLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={75}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
          {clientLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={75}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
