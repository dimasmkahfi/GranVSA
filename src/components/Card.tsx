// Card.tsx
import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkText: string;
  linkUrl: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  linkText,
  linkUrl,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
      <img
        className="w-full h-48 object-cover mb-4"
        src={imageUrl}
        alt={title}
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={linkUrl} className="text-blue-600 font-semibold hover:underline">
        {linkText}
      </a>
    </div>
  );
};

export default Card;
