'use client';

import { motion } from "framer-motion";
import React from "react";
import Hero from "@/Components/Hero";
import DetailedServices from "@/Components/DetailedServices";
import Rainesoft from "@/Components/ChooseRainesoft";

const Home = () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <section className="h-full font-nunito">
        <Hero
          backgroundImage="https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//Rectangle%2043.png"
          content={
            <div className="flex flex-col items-center gap-[3rem]">
              <h1 className="text-5xl font-bold">
                What We <span className="text-[#6dc1fc]">Do</span>
              </h1>
              <span>Innovative solutions that move your business forward.</span>
              <a href="#Details" className="border border-[#6DC1FC] px-3 py-2 rounded-md">
                Our Services
              </a>
            </div>
          }
        />

        {/* Services */}
        <DetailedServices />

        {/* Rainesoft */}
        <Rainesoft />
      </section>
    </motion.main>
  );
};

export default Home;
