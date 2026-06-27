import { FaUniversity, FaCreditCard, FaWifi } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HeroCards() {
  return (
    <div className="relative flex justify-center items-center w-full h-[620px]">
      {/* Shared positioning context for both cards */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-[430px]"
      >
        {/* ================= Invoice Card ================= */}
        <div className="relative bg-white rounded-[32px] shadow-2xl w-full p-8 z-10">
          {/* User */}
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#2A8E9E] flex items-center justify-center text-white text-3xl font-bold">
              D
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1B1C1E]">
                Dipa Inhouse
              </h3>
              <p className="text-gray-500">dipainhouse@gmail.com</p>
            </div>
          </div>

          {/* Invoice */}
          <div className="mt-8 border rounded-3xl p-6">
            <p className="text-gray-500 text-lg">Invoice</p>
            <h1 className="text-5xl font-bold text-[#11263C] mt-2">
              $1,876,580
            </h1>
            <p className="mt-2 text-gray-500">April 21, 2024</p>
          </div>

          {/* Credit Card option (selected) */}
          <div className="mt-6 flex justify-between items-center border-2 border-[#2A8E9E] rounded-2xl px-6 py-5">
            <div className="flex items-center gap-4">
              <FaCreditCard className="text-xl text-[#11263C]" />
              <span className="text-lg font-medium">Credit Card</span>
            </div>
            <div className="w-6 h-6 rounded-full border-2 border-[#2A8E9E] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#2A8E9E]" />
            </div>
          </div>

          {/* Bank Account option */}
          <div className="mt-5 flex justify-between items-center border rounded-2xl px-6 py-5">
            <div className="flex items-center gap-4">
              <FaUniversity className="text-xl text-[#11263C]" />
              <span className="text-lg">Bank Account</span>
            </div>
            <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
          </div>

          {/* Pay button */}
          <button className="mt-8 w-full h-16 rounded-2xl bg-[#072F46] text-white text-xl font-medium">
            Pay
          </button>
        </div>

        {/* ================= Floating Credit Card ================= */}
        {/* width 62% of card, aspect-ratio 1.264:1 (landscape, matches a real card), 
            offset -8% top / -31% right — all measured proportionally so it scales 
            correctly no matter how wide the surrounding container actually is */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute -top-[8%] -right-[31%] z-20 w-[62%] aspect-[537/425] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        >
          <div className="flex-[68] bg-[#2A8E9E] text-white p-5 flex flex-col">
            <p className="text-sm sm:text-base opacity-90">Credit Card</p>
            <h2 className="text-lg sm:text-xl font-bold mt-3 tracking-wide">
              234 **** ****
            </h2>
          </div>
          <div className="flex-[32] bg-[#082F46] flex justify-between items-center px-5">
            <h2 className="text-white text-base sm:text-lg italic font-bold">
              VISA
            </h2>
            <FaWifi className="text-white text-base sm:text-lg rotate-90" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}