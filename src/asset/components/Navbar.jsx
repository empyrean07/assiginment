import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#E9F3F4]/90 backdrop-blur-lg flex justify-center">
      {/* 1. Added 'flex items-center w-full max-w-[1200px]' 
        2. This forces the internal content to act as one centered block
      */}
      <div className="flex items-center justify-between w-full max-w-[1200px] h-24 px-6">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer" style={{ paddingRight: '2rem' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4Z" fill="#180039"/>
            <path d="M22 2L2 22H11L22 11V2Z" fill="#E9F3F4"/>
          </svg>
          <h1 className="text-[28px] font-bold text-[#180039]">Finpay</h1>
        </div>

        {/* Navigation Section */}
        <ul className="hidden lg:flex items-center gap-12 text-[17px] font-medium text-[#4B5563]" style={{ padding: '0 2rem' }}>
          <li className="cursor-pointer hover:text-[#2A8E9E] transition">Products</li>
          <li className="cursor-pointer hover:text-[#2A8E9E] transition">Customers</li>
          <li className="cursor-pointer hover:text-[#2A8E9E] transition">Pricing</li>
          <li className="cursor-pointer hover:text-[#2A8E9E] transition">Learn</li>
        </ul>

        {/* Buttons Section */}
        <div className="hidden md:flex items-center gap-4" style={{ paddingLeft: '2rem' }}>
          <span className="inline-flex items-center justify-center h-12 min-w-[110px] rounded-full bg-white text-[#180039] text-[16px] font-medium shadow-sm cursor-pointer hover:shadow-md transition-all">
            Login
          </span>
          <span className="inline-flex items-center justify-center h-12 min-w-[135px] rounded-full bg-[#2A8E9E] text-white text-[16px] font-medium shadow-sm cursor-pointer hover:bg-[#237B89] transition-all">
            Sign Up
          </span>
        </div>

        {/* Mobile Menu */}
        <button className="lg:hidden text-3xl text-[#180039]">
          <HiOutlineMenuAlt3 />
        </button>
      </div>
    </nav>
  );
}