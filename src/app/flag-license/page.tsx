"use client";

import React, { useState } from "react";
import Card from "@/components/Card";

// Define the keys for the FlagDetails object
type FlagType = "Bahamas License" | "Panama License";

// Define the structure of the visa details
interface FlagDetails {
  description: string;
  Text: string;
  imageUrl: string;
  prices: { type: string; price: string }[];
}

const FlagLicense = () => {
  const [selectedFlag, setSelectedFlag] = useState<FlagType | null>(null);

  const FlagDetails: Record<FlagType, FlagDetails> = {
    "Bahamas License": {
      description: "Bahamas License",
      imageUrl: "/img/flag/bahamas.png",
      Text: "Requirement:a,b,c,d",
      prices: [
        { type: "Single Entry", price: "$100" },
        { type: "Multiple Entry", price: "$200" },
      ],
    },
    "Panama License": {
      description: "Panama License",
      imageUrl: "/img/flag/panama.png",
      Text: "Requirement:a,b,c,d",
      prices: [
        { type: "Single Entry", price: "$120" },
        { type: "Multiple Entry", price: "$250" },
      ],
    },
  };

  const handleCardClick = (flagTitle: FlagType) => {
    setSelectedFlag(flagTitle === selectedFlag ? null : flagTitle);
  };

  return (
    <div className="container mx-auto text-black">
      <h1 className="text-3xl font-bold text-center mb-8">Flag License</h1>
      <div className="overflow-x-auto">
        <div className="flex space-x-4">
          {Object.keys(FlagDetails).map((title) => (
            <div
              key={title}
              className="min-w-[75%] sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[25%] cursor-pointer"
              onClick={() => handleCardClick(title as FlagType)}
            >
              <Card
                title={title}
                description={FlagDetails[title as FlagType].description}
                imageUrl={FlagDetails[title as FlagType].imageUrl}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedFlag && (
        <div className="mt-8 p-4 border rounded-lg bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">{selectedFlag}</h2>
          <p className="mb-4">{FlagDetails[selectedFlag].Text}</p>
          <table className="table-auto mt-4 w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {FlagDetails[selectedFlag].prices.map((price, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{price.type}</td>
                  <td className="border px-4 py-2">{price.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FlagLicense;
