import { motion } from "framer-motion";
import HeroCards from "./HeroCards";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-35rem)] w-full flex justify-center pt-24 lg:pt-28 pb-12 bg-[#E9F3F4]">
      <div className="max-w-7xl mx-auto px-26">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:pl-20 xl:pl-24"
          >
            <span className="text-7xl md:text-7.5xl font-medium leading-tight ">
              <p className="font-bold">Get paid early,</p>
              <p>save automatically</p>
              <p>all your pay.</p>
            </span>

            <div className="text-gray-400 mt-29 p-20 text-lg leading-7">
              Supports small businesses with simple invoicing, powerful
              integrations, and cash-flow management.
            </div>

            <div className="mt-20 w-full max-w-[620px]">
              <div className="flex items-center bg-white rounded-[15px] border border-[#E5E7EB] p-[56px] shadow-sm">
                <input
                  type="email"
                  placeholder="Your business email"
                  className="flex-1 h-16 px-8 text-[20px] placeholder:text-[#9CA3AF] outline-none bg-transparent"
                />

                <button className="h-16 px-10 bg-[#2A8E9E] hover:bg-[#237b89] rounded-[15px] text-white text-[20px] font-medium flex items-center gap-4 transition-all duration-300">
                  Get Started
                  <span className="text-2xl">↗</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right */}

          <HeroCards />
        </div>
      </div>
    </section>
  );
}
