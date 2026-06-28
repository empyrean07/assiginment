export default function CTA() {
  return (
    <section
      className="w-full flex justify-center items-center px-6 sm:px-12 lg:px-24 bg-white"
      style={{ paddingBottom: "160px" }}
    >
      <div className="max-w-[1200px] w-full mx-auto">
        <div
          className="bg-[#0A2E3F] rounded-[32px] flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8"
          style={{ padding: "5rem 6rem" }}
        >
          {/* Left Text Content */}
          <div className="flex-1">
            <p
              className="uppercase text-[#368C90] text-xs font-bold tracking-[0.2em]"
              style={{ paddingBottom: "20px" }}
            >
              Try It Now
            </p>

            <h2 className="text-white text-4xl lg:text-[3rem] font-medium leading-[1.2] tracking-tight mb-6">
              Ready to level up your
              <br />
              payment process?
            </h2>

            <p className="text-[#84A8B6] text-[15px] leading-relaxed max-w-[500px]">
              Supports small businesses with simple invoicing, powerful
              <br className="hidden sm:block" />
              integrations, and cash flow management tools.
            </p>
          </div>

          {/* Right Buttons Content - FIXED */}
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 items-center">
            {/* Primary Button */}
            <button
              className="bg-[#368C90] text-white font-medium hover:bg-[#2B7377] transition-all duration-300 flex items-center justify-center whitespace-nowrap"
              // Forced structural dimensions to prevent squishing
              style={{
                padding: "0 32px",
                minHeight: "60px",
                borderRadius: "16px",
                fontSize: "16px",
              }}
            >
              Get Started Now
            </button>

            {/* Secondary Button */}
            <button
              className="border border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 whitespace-nowrap"
              // Forced structural dimensions to prevent squishing
              style={{
                padding: "0 32px",
                minHeight: "60px",
                borderRadius: "16px",
                fontSize: "16px",
              }}
            >
              Learn More
              {/* Up-Right Arrow Icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
