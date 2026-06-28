import { FaUniversity, FaCreditCard, FaWifi } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HeroCards() {
  return (
    <div className="relative flex justify-center items-center w-full min-h-[600px] py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[480px]"
      >
        {/*  Invoice Card (Bottom/Main)  */}
        <div 
          className="relative bg-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] w-full z-10 border border-gray-100"
          style={{ 
            borderRadius: '48px', 
            padding: '3.5rem'      
          }}
        >
          <div className="flex items-center gap-6 mb-12">
            <div className="w-20 h-20 rounded-3xl bg-[#368C90] flex items-center justify-center text-white text-4xl font-bold">D</div>
            <div>
              <h3 className="text-3xl font-bold text-[#0A2E3F]">Dipa Inhouse</h3>
              <p className="text-lg text-gray-400">dipainhouse@gmail.com</p>
            </div>
          </div>

          <div className="border border-gray-100 rounded-[32px] p-10 bg-gray-50/50 mb-10">
            <p className="text-md text-gray-400 uppercase tracking-widest">Invoice</p>
            <h1 className="text-6xl font-bold text-[#0A2E3F] mt-3">$1,876,580</h1>
            <p className="text-lg text-gray-400 mt-3">April 21, 2024</p>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center border-2 border-[#368C90] rounded-3xl px-10 py-8">
              <div className="flex items-center gap-6">
                <FaCreditCard className="text-[#368C90] text-2xl" />
                <span className="font-semibold text-xl">Credit Card</span>
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-[#368C90] flex items-center justify-center">
                <div className="w-4 h-4 bg-[#368C90] rounded-full" />
              </div>
            </div>
            
            <div className="flex justify-between items-center border border-gray-200 rounded-3xl px-10 py-8">
              <div className="flex items-center gap-6">
                <FaUniversity className="text-gray-400 text-2xl" />
                <span className="font-medium text-xl text-gray-500">Bank Account</span>
              </div>
            </div>
          </div>

          <button className="mt-12 w-full h-20 rounded-3xl bg-[#0A2E3F] text-white text-2xl font-semibold hover:bg-[#1a2d3d] transition-all">
            Pay
          </button>
        </div>

        {/*Floating Credit Card  */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute -top-16 -right-36 z-20 w-[380px] h-[240px] rounded-[32px] overflow-hidden shadow-2xl flex flex-col "
        >
          <div className="h-[68%] bg-[#368C90] p-10 text-white flex flex-col justify-between">
            <p className="text-lg opacity-80">Credit Card</p>
            <h2 className="text-3xl font-medium tracking-[0.2em]">1234 **** ****</h2>
          </div>
          <div className="h-[32%] bg-[#0A2E3F] flex justify-between items-center px-10">
            <h2 className="text-white italic font-bold text-2xl">VISA</h2>
            <FaWifi className="text-white text-2xl rotate-90" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}