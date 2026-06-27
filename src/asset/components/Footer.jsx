import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center border-t py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-cyan-700">Finpay</h2>

            <p className="text-gray-500 mt-5">
              Modern financial platform for businesses.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Solutions</h3>

            <ul className="space-y-3 mt-5 text-gray-500">
              <li>Small Business</li>
              <li>Freelancers</li>
              <li>Taxes</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Company</h3>

            <ul className="space-y-3 mt-5 text-gray-500">
              <li>About</li>
              <li>Career</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Learn</h3>

            <ul className="space-y-3 mt-5 text-gray-500">
              <li>Blog</li>
              <li>Ebooks</li>
              <li>Templates</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Follow</h3>

            <div className="flex gap-5 mt-6 text-2xl">
              <FaTwitter className="hover:text-cyan-600 cursor-pointer" />
              <FaLinkedin className="hover:text-cyan-600 cursor-pointer" />
              <FaFacebook className="hover:text-cyan-600 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border-t mt-16 pt-8 text-center text-gray-500">
          © 2026 Finpay. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
