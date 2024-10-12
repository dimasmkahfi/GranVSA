import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { OurServices } from "@/components/OurServices";
{
  /*import { Video } from "@/components/Video";*/
}
{
  /*import { Faq } from "@/components/Faq";*/
}
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
import { Testimonials } from "@/components/Testimonial";
import React from "react";
export default function Home() {
  return (
    <>
      <div className="bg-white min-h-[100vh]">
        <Container>
          <Hero />
        </Container>
      </div>
      <br />
      <div className="bg-gray-200 min-h-[100vh]">
        <Container>
          <OurServices />
        </Container>
      </div>
      <br />
      <div className="bg-white min-h-[100vh]">
        <Container>
          <SectionTitle
            preTitle="Testimonials"
            title="What our customers said"
          />
          <Testimonials />
        </Container>
      </div>
      <br />
      <br />
      <div className="bg-gray-200">
        <Container>
          <Cta />
        </Container>
      </div>
    </>
  );
}
