// CardGrid.tsx
import React from "react";
import Card from "./Card";

const CardGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Visa for Seafarer"
          description="Need a seafarer visa? We're here to help you. Fast process, easy requirements, and guaranteed timely departure."
          imageUrl="/img/visa.png"
          linkText="Read More »"
          linkUrl="#"
        />
        <Card
          title="Flag License"
          description="Travel worry-free! Your tourist visa is just a click away. Fast and reliable service."
          imageUrl="/img/flagli.png"
          linkText="Read More »"
          linkUrl="#"
        />
        <Card
          title="Seafarer Document"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageUrl="/img/seafarerdo.jpg"
          linkText="Read More »"
          linkUrl="#"
        />
      </div>
    </div>
  );
};

export default CardGrid;
