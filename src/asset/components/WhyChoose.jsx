export default function WhyChoose() {
  return (
    <section
      className="w-full flex justify-center items-center px-6 sm:px-12 lg:px-24"
      style={{ paddingTop: "180px", paddingBottom: "120px" }}
    >
      <div className="max-w-[1200px] w-full mx-auto">
        {/* Header Section */}
        <div
          className="flex flex-col items-center text-center"
          style={{ marginBottom: "120px" }}
        >
          <p
            className="text-[#519B9E] text-xs uppercase tracking-[0.2em]"
            style={{ paddingBottom: "16px", fontWeight: "700" }}
          >
            Why Us
          </p>
          <h2
            className="text-4xl lg:text-[3.25rem] tracking-tight text-gray-900"
            style={{
              paddingTop: "8px",
              paddingBottom: "16px",
              fontWeight: "600",
            }}
          >
            Why they prefer Finpay
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1 */}
          <div
            className="bg-[#F8FBFB] rounded-[32px] flex flex-col justify-center shadow-[0_2px_20px_rgb(0,0,0,0.02)] hover:shadow-xl transition-all duration-300"
            style={{ padding: "4rem 3.5rem" }}
          >
            <h1
              className="text-[5rem] lg:text-[6.5rem] font-bold text-[#368C90] leading-none tracking-tight"
              style={{ marginBottom: "3rem" }}
            >
              3k+
            </h1>
            <p className="text-[22px] lg:text-[26px] font-medium text-gray-900 leading-snug max-w-[300px]">
              Businesses already running on Finpay
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-[#F8FBFB] rounded-[32px] flex flex-col justify-between shadow-[0_2px_20px_rgb(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 min-h-[350px]"
            // Matched the exact padding from the first card
            style={{ padding: "4rem 3.5rem" }}
          >
            <h3
              className="text-[22px] lg:text-[26px] font-medium text-gray-900 leading-snug max-w-[350px]"
              // Added explicit margin to push the diagram down
              style={{ marginBottom: "3rem" }}
            >
              Instant Withdraw your funds at any time
            </h3>

            {/* Custom Diagram */}
            <div className="flex items-center gap-6 mt-auto">
              {/* Left Icon (Teal Bowtie Logo) */}
              <div className="w-[80px] h-[80px] rounded-[24px] bg-[#368C90] flex items-center justify-center shrink-0">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13 12L21 4V20L13 12Z" fill="white" />
                  <path d="M11 12L3 4V20L11 12Z" fill="white" />
                </svg>
              </div>

              {/* Middle Thin Arrows */}
              <div className="flex flex-col gap-3 w-20 shrink-0">
                {/* Arrow Right */}
                <svg
                  width="100%"
                  height="12"
                  viewBox="0 0 40 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 6H38M38 6L33 1M38 6L33 11"
                    stroke="#CBD5E1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {/* Arrow Left */}
                <svg
                  width="100%"
                  height="12"
                  viewBox="0 0 40 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40 6H2M2 6L7 1M2 6L7 11"
                    stroke="#CBD5E1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Right Icon (Dark Bank Logo) */}
              <div className="w-[80px] h-[80px] rounded-full bg-[#0F1E29] flex items-center justify-center shrink-0">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2L2 7H22L12 2Z" fill="white" />
                  <path d="M4 9H6V17H4V9Z" fill="white" />
                  <path d="M9 9H11V17H9V9Z" fill="white" />
                  <path d="M13 9H15V17H13V9Z" fill="white" />
                  <path d="M18 9H20V17H18V9Z" fill="white" />
                  <path d="M2 19H22V22H2V19Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
