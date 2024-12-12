import React from "react";
import Card from "./Card";
import Link from "next/link";

const CardGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Link href="https://registration.test/visa">
          <div className="w-full h-full flex">
            <Card
              title="Visa for Seafarer"
              description="Need a seafarer visa? We are here to help you. Fast process, easy requirements, and guaranteed timely departure."
              imageUrl="/img/visa.png"
            />
          </div>
        </Link>
        <Link href="https://registration.test/license">
          <div className="w-full h-full flex">
            <Card
              title="Flag License"

              description="Travel worry-free! Your tourist visa is just a click away. Fast and reliable service, and easy requirements."
              imageUrl="/img/flagli.png"
            />
          </div>
        </Link>
        <Link href="https://registration.test/seafarer">
          <div className="w-full h-full flex">
            <Card
              title="Seafarer Document"
              description="Need a seafarer visa? We are here to help you. Fast process, easy requirements, and guaranteed timely departure."
              imageUrl="/img/seafarerdo.png"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardGrid;
