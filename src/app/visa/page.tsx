"use client";

import React, { useState } from "react";
import Card from "@/components/Card";

// Define the keys for the visaDetails object
type VisaType =
  | "China Visa"
  | "Schengen Visa"
  | "South Korea Visa"
  | "Taiwan Visa"
  | "USA Visa";

// Define the structure of the visa details
interface VisaDetails {
  description: string;
  text: string; // Changed 'Text' to 'text' for consistency in naming conventions
  imageUrl: string;
  prices: { type: string; price: string }[];
}

const Visa = () => {
  const [selectedVisa, setSelectedVisa] = useState<VisaType | null>(null);

  const visaDetails: Record<VisaType, VisaDetails> = {
    "China Visa": {
      description: "China Visa",
      imageUrl: "/img/flag/china.png",
      text: `Personal Documents:
      
      - Passport valid for at least 6 months
      - Recent passport-sized photo
      - Completed visa application form
      
      Seafaring Documents:
      
      - Seafarer's employment contract
      - Seaman's Book
      - Ship's itinerary
      - Letter from the shipping company`,
      prices: [
        { type: "Single Entry", price: "$100" },
        { type: "Multiple Entry", price: "$200" },
      ],
    },
    "Schengen Visa": {
      description: "Schengen Visa",
      imageUrl: "/img/flag/europ.png",
      text: `Personal Documents:
      
      - Passport valid for at least 6 months
      - Recent passport-sized photo
      - Completed visa application form
      
      Seafaring Documents:
      
      - Seafarer's employment contract
      - Seaman's Book
      - Ship's itinerary
      - Letter from the shipping company`,
      prices: [
        { type: "Single Entry", price: "$120" },
        { type: "Multiple Entry", price: "$250" },
      ],
    },
    "South Korea Visa": {
      description: "South Korea Visa",
      imageUrl: "/img/flag/southkorea.jpg",
      text: `Personal Documents:
      
      - Passport valid for at least 6 months
      - Recent passport-sized photo
      - Completed visa application form
      
      Seafaring Documents:
      
      - Seafarer's employment contract
      - Seaman's Book
      - Ship's itinerary
      - Letter from the shipping company`,
      prices: [
        { type: "Single Entry", price: "$80" },
        { type: "Multiple Entry", price: "$160" },
      ],
    },
    "Taiwan Visa": {
      description: "Taiwan Visa",
      imageUrl: "/img/flag/taiwan.png",
      text: `Personal Documents:
      
      - Passport valid for at least 6 months
      - Recent passport-sized photo
      - Completed visa application form
      
      Seafaring Documents:
      
      - Seafarer's employment contract
      - Seaman's Book
      - Ship's itinerary
      - Letter from the shipping company`,
      prices: [
        { type: "Single Entry", price: "$90" },
        { type: "Multiple Entry", price: "$180" },
      ],
    },
    "USA Visa": {
      description: "USA Visa",
      imageUrl: "/img/flag/usa.png",
      text: `Personal Documents:
      
      - Passport valid for at least 6 months
      - Recent passport-sized photo
      - Completed visa application form
      
      Seafaring Documents:
      
      - Seafarer's employment contract
      - Seaman's Book
      - Ship's itinerary
      - Letter from the shipping company`,
      prices: [
        { type: "Single Entry", price: "$160" },
        { type: "Multiple Entry", price: "$320" },
      ],
    },
  };

  const handleCardClick = (visaTitle: VisaType) => {
    setSelectedVisa(visaTitle === selectedVisa ? null : visaTitle);
  };

  return (
    <div className="container mx-auto text-black">
      <h1 className="text-3xl font-bold text-center mb-8">Visa For Seafarer</h1>
      <div className="overflow-x-auto">
        <div className="flex space-x-4">
          {Object.keys(visaDetails).map((title) => (
            <div
              key={title}
              className="min-w-[75%] sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[25%] cursor-pointer"
              onClick={() => handleCardClick(title as VisaType)}
            >
              <Card
                title={title}
                description={visaDetails[title as VisaType].description}
                imageUrl={visaDetails[title as VisaType].imageUrl}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedVisa && (
        <div className="mt-8 p-4 border rounded-lg bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">{selectedVisa}</h2>
          <p className="mb-4 whitespace-pre-line">
            {visaDetails[selectedVisa].text}
          </p>
          <table className="table-auto mt-4 w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {visaDetails[selectedVisa].prices.map((price, index) => (
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

export default Visa;
