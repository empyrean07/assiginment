import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#E9F3F4]/90 backdrop-blur-lg">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="h-24 flex items-center justify-between">
          {/* Logo */}

          <div className="flex items-center">
            <h1 className="text-[32px] font-bold text-[#180039] cursor-pointer">
              Finpay
            </h1>
          </div>

          {/* Navigation */}

          <ul className="hidden lg:flex items-center gap-12 text-[17px] font-medium text-[#4B5563]">
            <li className="cursor-pointer hover:text-[#2A8E9E] transition">
              Products
            </li>

            <li className="cursor-pointer hover:text-[#2A8E9E] transition">
              Customers
            </li>

            <li className="cursor-pointer hover:text-[#2A8E9E] transition">
              Pricing
            </li>

            <li className="cursor-pointer hover:text-[#2A8E9E] transition">
              Learn
            </li>
          </ul>

          {/* Buttons */}

          <div className="hidden md:flex items-center gap-4">
            <span className="inline-flex items-center justify-center h-12 min-w-[110px] rounded-full bg-white text-[#180039] text-[16px] font-medium shadow-sm cursor-pointer hover:shadow-md transition-all">
              Login
            </span>

            <span className="inline-flex items-center justify-center h-12 min-w-[135px] rounded-full bg-[#2A8E9E] text-white text-[16px] font-medium shadow-sm cursor-pointer hover:bg-[#237B89] transition-all">
              Sign Up
            </span>
          </div>

          {/* Mobile */}

          <button className="lg:hidden text-3xl text-[#180039]">
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </div>
    </nav>
  );
}
