import React from "react";
import Card from "./Card";
import Carousel from "./Carousel";

export const OurServices = () => {
  return (
    <div id="our-services" className="flex flex-wrap justify-center text-black">
      <div>
        <h2 className="font-bold flex flex-col justify-center text-center text-4xl">
          Our Service
        </h2>
        <br />
        <p>
          Visa ready, car ready! Enjoy a seamless journey from start to finish
          with our best visa and car rental services.{" "}
        </p>
        <br />
        <Carousel />

        {/* Contoh Card yang bisa diklik untuk navigasi */}
        {/*<Card
          title="Example Visa"
          description="Click to navigate"
          imageUrl="/img/example.png"
          href="/example-visa"
        />*/}
      </div>
    </div>
  );
};
