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
export default function Home() {
  return (
    <>
      <div className="bg-white">
        <Container>
          <Hero />
        </Container>
      </div>
      <br />
      <br />
      <div className="bg-gray-200">
        <Container>
          <OurServices />
        </Container>
      </div>
      <br />
      <br />
      <div className="bg-white">
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
