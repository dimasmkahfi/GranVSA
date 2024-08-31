"use client";

import Card from "@/components/Card";
import React from "react";

const FlagLicense = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Visa For Seafarer</h1>
      <div className="overflow-x-auto">
        <div className="flex space-x-4">
          <div className="min-w-[75%] sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[25%]">
            <Card
              title="China Visa"
              description="China Visa"
              imageUrl="/img/flag/china.png"
            />
          </div>
          <div className="min-w-[75%] sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[25%]">
            <Card
              title="Schengen Visa"
              description="Schengen Visa"
              imageUrl="/img/flag/europ.png"
            />
          </div>
          <div className="min-w-[75%] sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[25%]">
            <Card
              title="South Korea Visa"
              description="South Korea Visa"
              imageUrl="/img/flag/southkorea.jpg"
            />
          </div>
          <div className="min-w-[75%] sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[25%]">
            <Card
              title="Taiwan Visa"
              description="Taiwan Visa"
              imageUrl="/img/flag/taiwan.png"
            />
          </div>
          <div className="min-w-[75%] sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[25%]">
            <Card
              title="USA Visa"
              description="USA Visa"
              imageUrl="/img/flag/usa.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlagLicense;
