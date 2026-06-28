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
    <section className="w-full flex justify-center items-center -mt-[80px] px-6 py-20 sm:px-12 lg:px-24 lg:py-36 bg-[linear-gradient(to_bottom,#E9F3F4_0_80px,#fff_80px_100%)]">
      {/* Using explicit arbitrary padding (up to 160px) to force massive 
        empty space at all four corners of the white card.
      */}
      <div className="max-w-[1440px] w-full mx-auto p-12 md:p-[100px] lg:p-[140px] xl:p-[160px] bg-white rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
      style={{ 
          paddingTop: '100px', 
          paddingBottom: '100px', 
          paddingLeft: '10%', 
          paddingRight: '10%' 
        }}>
        
        {/* Added massive bottom margin to separate the header from the grid */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-24 lg:mb-[120px]">
          <div className="max-w-lg">
            <p className="text-[#519B9E] text-xs font-semibold uppercase tracking-widest mb-6">
              Future Payment
            </p>
            <h2 className="text-5xl font-bold leading-tight">
              Experience that grows
              <br />
              with your scale.
            </h2>
          </div>
          
          <div className="flex items-center lg:w-[45%] lg:pt-8">
            <p className="text-gray-400 text-lg leading-8">
              Design a financial operating system that works for your business
              and streamlines cash flow management.
            </p>
          </div>
        </div>

        {/* Spread out the grid columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl p-10 hover:shadow-xl transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-700">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mt-8">{item.title}</h3>

              <p className="text-gray-500 mt-4 leading-7">{item.description}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}