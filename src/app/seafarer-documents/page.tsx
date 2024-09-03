"use client";

import React, { useState } from "react";

// Define the keys for the FlagDetails object based on the actual keys
type FlagType =
  | "Basic Safety Training ( BST )"
  | "Advanced Fire Fighting ( AFF )"
  | "Survival Craft Rescue Boats ( SCRB )"
  | "Basic Training for Liquefied Gas Cargo Operation ( BLGT )"
  | "Basic Training For Oil & Chemical Tanker ( BOCT )"
  | "Advance Training for Oil Tanker Cargo Operation ( AOT )"
  | "Advance Training for Chemical Tanker Cargo Operation ( ACT )"
  | "Advanced Liquefied Gas Tanker Cargo Operation ( ALGT )"
  | "Buku Pelaut";

// Define the structure of the flag details
interface FlagDetails {
  description: string;
  Text: string;
  prices: { type: string; price: string }[];
}

const FlagLicense: React.FC = () => {
  const [selectedFlag, setSelectedFlag] = useState<FlagType | null>(null);

  const flagDetails: Record<FlagType, FlagDetails> = {
    "Basic Safety Training ( BST )": {
      description: "Bahamas License",
      Text: "Requirement: a, b, c, d",
      prices: [
        { type: "Single Entry", price: "$100" },
        { type: "Multiple Entry", price: "$200" },
      ],
    },
    "Advanced Fire Fighting ( AFF )": {
      description: "Panama License",
      Text: "Requirement: a, b, c, d",
      prices: [
        { type: "Single Entry", price: "$120" },
        { type: "Multiple Entry", price: "$250" },
      ],
    },
    "Survival Craft Rescue Boats ( SCRB )": {
      description: "Panama License",
      Text: "Requirement: a, b, c, d",
      prices: [
        { type: "Single Entry", price: "$120" },
        { type: "Multiple Entry", price: "$250" },
      ],
    },
    "Basic Training for Liquefied Gas Cargo Operation ( BLGT )": {
      description: "Panama License",
      Text: "Requirement: a, b, c, d",
      prices: [
        { type: "Single Entry", price: "$120" },
        { type: "Multiple Entry", price: "$250" },
      ],
    },
    "Basic Training For Oil & Chemical Tanker ( BOCT )": {
      description: "Panama License",
      Text: "Requirement: a, b, c, d",
      prices: [
        { type: "Single Entry", price: "$120" },
        { type: "Multiple Entry", price: "$250" },
      ],
    },
    "Advance Training for Oil Tanker Cargo Operation ( AOT )": {
      description: "Panama License",
      Text: "Requirement: a, b, c, d",
      prices: [
        { type: "Single Entry", price: "$120" },
        { type: "Multiple Entry", price: "$250" },
      ],
    },
    "Advance Training for Chemical Tanker Cargo Operation ( ACT )": {
      description: "Panama License",
      Text: "Requirement: a, b, c, d",
      prices: [
        { type: "Single Entry", price: "$120" },
        { type: "Multiple Entry", price: "$250" },
      ],
    },
    "Advanced Liquefied Gas Tanker Cargo Operation ( ALGT )": {
      description: "Panama License",
      Text: "Requirement: a, b, c, d",
      prices: [
        { type: "Single Entry", price: "$120" },
        { type: "Multiple Entry", price: "$250" },
      ],
    },
    "Buku Pelaut": {
      description: "Panama License",
      Text: "Requirement: a, b, c, d",
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
    <div className="container mx-auto px-4 text-black">
      <h1 className="text-3xl font-bold text-center mb-8">
        Seafarer Documents
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.keys(flagDetails).map((title) => (
          <div
            key={title}
            className="cursor-pointer p-4 border rounded-lg bg-gray-200 text-center"
            onClick={() => handleCardClick(title as FlagType)}
          >
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
        ))}
      </div>

      {selectedFlag && (
        <div className="mt-8 p-4 border rounded-lg bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">{selectedFlag}</h2>
          <p className="mb-4">{flagDetails[selectedFlag].Text}</p>
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <tr>
                <th className="px-4 py-2 border">Type</th>
                <th className="px-4 py-2 border">Price</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {flagDetails[selectedFlag].prices.map((price, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="px-4 py-2 border">{price.type}</td>
                  <td className="px-4 py-2 border">{price.price}</td>
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
