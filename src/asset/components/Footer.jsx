import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer 
      className="w-full flex justify-center bg-[#F7FAFA]"
      style={{ paddingTop: '80px', paddingBottom: '40px' }}
    >
      <div className="max-w-[1200px] w-full mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4Z" fill="#0A2E3F"/>
                <path d="M22 2L2 22H11L22 11V2Z" fill="#F7FAFA"/>
              </svg>
              <h2 className="text-[1.75rem] font-bold text-[#0A2E3F] tracking-tight">
                Finpay
              </h2>
            </div>
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-gray-900 mb-6">Solutions</h3>
            <ul className="space-y-4 text-[15px] text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Small Business</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Freelancers</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Customers</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Taxes</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-gray-900 mb-6">Company</h3>
            <ul className="space-y-4 text-[15px] text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-gray-900 mb-6">Learn</h3>
            <ul className="space-y-4 text-[15px] text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Ebooks</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Guides</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Templates</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[15px] text-gray-900 mb-5">Follow us on</h3>
            <div className="flex gap-4 text-[22px] text-[#0A2E3F]">
              <FaTwitter className="hover:text-[#368C90] cursor-pointer transition-colors" />
              <FaLinkedin className="hover:text-[#368C90] cursor-pointer transition-colors" />
              <FaFacebook className="hover:text-[#368C90] cursor-pointer transition-colors" />
            </div>
          </div>

        </div>

        {/* Updated Copyright Section with increased spacing */}
        <div 
          className="border-t border-gray-200/80 text-center"
          style={{ marginTop: '80px', paddingTop: '40px' }}
        >
          <p className="text-[15px] text-[#0A2E3F] font-medium">
            ©Finpay 2024. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}