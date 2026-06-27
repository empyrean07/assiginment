import { FiRepeat, FiDatabase, FiShield } from "react-icons/fi";

const features = [
  {
    icon: <FiRepeat size={32} />,
    title: "Free Transfers",
    description:
      "Create financial transparency and automate recurring payments with ease.",
  },
  {
    icon: <FiDatabase size={32} />,
    title: "Multiple Accounts",
    description:
      "Manage business finances using multiple accounts in one dashboard.",
  },
  {
    icon: <FiShield size={32} />,
    title: "Unmatched Security",
    description:
      "Enterprise-level protection with secure infrastructure and monitoring.",
  },
];

export default function Features() {
  return (
    <section className="w-full flex justify-center -mt-[80px] px-10 py-32 sm:px-12 lg:px-24 lg:py-36 bg-[linear-gradient(to_bottom,#E9F3F4_0_80px,#fff_80px_100%)]">
      <div className="max-w-7xl mx-auto p-10 sm:p-12 lg:p-20 bg-white border-0 rounded-2xl outline-none shadow-lg">
        <div className="grid lg:grid-cols-2 gap-16 mb-20 p-24 sm:p-6 lg:p-8 flex items-center justify-center ">
          <div className="mt-10">
            <p className="text-cyan-600 uppercase text-sm tracking-widest">
              Future Payment
            </p>

            <h2 className="text-4xl font-bold mt-10 leading-tight">
              Experience that grows
              <br />
              with your scale.
            </h2>
          </div>

          <div className="flex items-center">
            <p className="text-gray-500 leading-8">
              Design a financial operating system that works for your business
              and streamlines cash flow management.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 sm:p-6 lg:p-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl p-10 bg-gray-50 hover:shadow-xl transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-700">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mt-6">{item.title}</h3>

              <p className="text-gray-500 mt-4 leading-7">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
