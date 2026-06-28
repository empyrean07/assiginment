import { motion } from "framer-motion";
import HeroCards from "./HeroCards";

export default function Hero() {
  return (
    /* Increased pt-24/28 to pt-32/40 to push content down away from the navbar */
    <section className="min-h-[calc(100vh-35rem)] w-full flex justify-center mt-[50px] pb-12 bg-[#E9F3F4]">      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:pl-20 xl:pl-24"
          >
            <span className="text-7xl md:text-7.5xl font-medium leading-tight">
              <p className="font-bold">Get paid early,</p>
              <p>save automatically</p>
              <p>all your pay.</p>
            </span>

            {/* Reduced excessive padding/margin that might be causing layout collapse */}
            <div className="text-gray-500 mt-12 text-lg leading-7 max-w-lg">
              Supports small businesses with simple invoicing, powerful
              integrations, and cash-flow management.
            </div>

            <div className="mt-12 w-full max-w-[620px]">
              <div className="flex items-center bg-white rounded-[15px] border border-[#E5E7EB] p-2 shadow-sm">
                <input
                  type="email"
                  placeholder="Your business email"
                className="flex-1 flex justify-center items-center h-16 px-6 text-[18px] placeholder:text-[#9CA3AF] outline-none bg-transparent"
                style={{
                padding: "0 32px",
                minHeight: "60px",
                borderRadius: "16px",
                fontSize: "16px",
              }}
                />

              <button className="h-15 px-[72px] bg-[#2A8E9E] hover:bg-[#237b89] rounded-[15px] text-white text-[18px] font-medium flex justify-center items-center gap-6 transition-all duration-300"
              style={{
                padding: " 20px",
                minHeight: "60px",
                borderRadius: "16px",
                fontSize: "16px",
              }}>
                  Get Started
                  <span className="text-xl">↗</span>
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
