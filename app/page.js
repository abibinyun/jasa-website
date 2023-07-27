import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import Price from "@/components/Price";
import Stat from "@/components/Stat";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Stat />
      <Carousel />
      <Price />
    </div>
  );
};

export default page;
