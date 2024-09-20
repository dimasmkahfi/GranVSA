// Card.tsx
import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
      <img
        className="w-full h-50 object-cover mb-4"
        src={imageUrl}
        alt={title}
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
    </div>
  );
};

export default Card;
