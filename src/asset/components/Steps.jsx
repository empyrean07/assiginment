import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Open your account",
    desc: "Sign up to finpay and set up your account from the dashboard.",
  },
  {
    number: "2",
    title: "Transfer your money",
    desc: "Move money from to another account into and start to earning up.",
  },
  {
    number: "3",
    title: "Watch your balance grow",
    desc: "Accessed instantly and remain insulated from market volatility.",
  },
];

export default function Steps() {
  return (
    <section 
      className="bg-[#0A3040] w-full flex justify-center items-center px-6 sm:px-12 lg:px-24"
      // Added massive void space to the top and bottom of the entire section
      style={{ paddingTop: '160px', paddingBottom: '160px' }}
    >
      <div className="max-w-[1200px] w-full mx-auto">
        
        {/* Header Section */}
        <div 
          className="flex flex-col items-start"
          // Guaranteed void space pushing the cards far down below the title
          style={{ marginBottom: '100px' }}
        >
          <p 
            className="uppercase text-[#519B9E] text-xs font-bold tracking-[0.2em]"
            style={{ paddingBottom: '20px' }}
          >
            Step
          </p>
          <h2 className="text-white text-4xl lg:text-[3.25rem] font-medium max-w-2xl leading-[1.2] tracking-tight">
            Maximize your returns with a Reserve account that generates.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item) => (
            <motion.div
              whileHover={{ y: -8 }}
              key={item.number}
              className="bg-[#103C4E] rounded-[32px] flex flex-col"
              // Applied the massive internal breathing space to all cards
              style={{ padding: '4rem 3rem' }}
            >
              {/* Added a vertical gradient text effect to replicate the fading numbers in the image */}
              <h1 
                className="text-[6rem] font-medium leading-none bg-gradient-to-b from-[#D0E8EB] to-transparent bg-clip-text text-transparent"
                style={{ marginBottom: '3.5rem' }}
              >
                {item.number}
              </h1>

              <h3 className="text-white text-[22px] font-medium tracking-wide mb-4">
                {item.title}
              </h3>

              <p className="text-[#84A8B6] text-[15px] leading-relaxed pr-4">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}