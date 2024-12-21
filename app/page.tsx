"use client";
import { ImagesSlider } from "@/components/ui/image-slider";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import airconditioner from "@/public/Icons/Air-2.png";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Testimonials from "@/components/Testimonials";
const Home = () => {
  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="min-h-screen">
      <ImagesSlider className="h-[40rem]" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.h1 className="font-bold text-wrap tracking-wider md:text-6xl text-center bg-clip-text text-transparent text-white py-4">
            <TypewriterEffectSmoothDemo />
            <motion.p className="text-sm md:text-2xl mt-5">
              Your Trusted Partner in MEP and Green Energy Solutions
            </motion.p>
          </motion.h1>
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Contact us →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>
      <div className="md:py-20 py-10 ">
        <div className=" px-5">
          <h1 className="text-3xl font-bold text-primary text-center mb-20">
            Our Services
          </h1>
          <div className="flex justify-center items-center flex-wrap gap-5 mt-10">
            <div className=" text-primary rounded-lg shadow-sm shadow-secondary py-5 max-w-lg border-primary hover:bg-primary hover:text-white transition-all ease-in-out duration-500">
              <Image
                src={airconditioner}
                alt="Air Conditioner"
                className="max-w-20 mx-auto"
              />
              <div className="pt-5 px-10">
                <h1 className="text-xl font-bold">Mechanical Solutions</h1>
                <p className="pt-3">
                  We design and implement advanced mechanical systems that
                  enhance operational efficiency and reduce energy consumption.
                  From HVAC systems to specialized industrial machinery, we
                  ensure robust and reliable solutions tailored to your needs.
                </p>
              </div>
            </div>
            <div className=" text-primary rounded-lg shadow-sm shadow-secondary py-5 max-w-lg border-primary hover:bg-primary hover:text-white transition-all ease-in-out duration-500">
              <Image
                src={airconditioner}
                alt="Air Conditioner"
                className="max-w-20 mx-auto"
              />
              <div className="pt-5 px-10">
                <h1 className="text-xl font-bold">Mechanical Solutions</h1>
                <p className="pt-3">
                  We design and implement advanced mechanical systems that
                  enhance operational efficiency and reduce energy consumption.
                  From HVAC systems to specialized industrial machinery, we
                  ensure robust and reliable solutions tailored to your needs.
                </p>
              </div>
            </div>
            <div className=" text-primary rounded-lg shadow-sm shadow-secondary py-5 max-w-lg border-primary hover:bg-primary hover:text-white transition-all ease-in-out duration-500">
              <Image
                src={airconditioner}
                alt="Air Conditioner"
                className="max-w-20 mx-auto"
              />
              <div className="pt-5 px-10">
                <h1 className="text-xl font-bold">Mechanical Solutions</h1>
                <p className="pt-3">
                  We design and implement advanced mechanical systems that
                  enhance operational efficiency and reduce energy consumption.
                  From HVAC systems to specialized industrial machinery, we
                  ensure robust and reliable solutions tailored to your needs.
                </p>
              </div>
            </div>
            <div className=" text-primary rounded-lg shadow-sm shadow-secondary py-5 max-w-lg border-primary hover:bg-primary hover:text-white transition-all ease-in-out duration-500">
              <Image
                src={airconditioner}
                alt="Air Conditioner"
                className="max-w-20 mx-auto"
              />
              <div className="pt-5 px-10">
                <h1 className="text-xl font-bold">Mechanical Solutions</h1>
                <p className="pt-3">
                  We design and implement advanced mechanical systems that
                  enhance operational efficiency and reduce energy consumption.
                  From HVAC systems to specialized industrial machinery, we
                  ensure robust and reliable solutions tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Welcome",
      className: "text-2xl md:text-6xl text-center text-white",
    },
    {
      text: "to",
      className: "text-2xl md:text-6xl text-center text-white",
    },
    {
      text: "AEROMAX",
      className: "text-2xl md:text-6xl text-center text-blue-500 dark:text-blue-500 tracking-wider",
    },
    {
      text: "Engineering",
      className: "text-2xl md:text-6xl text-center text-white",
    },
  ];
  return (
    <div>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
