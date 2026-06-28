const stats = [
  {
    number: "24%",
    label: "Revenue business",
  },
  {
    number: "180K",
    label: "In annual revenue",
  },
  {
    number: "10+",
    label: "Months of runway",
  },
];

export default function Stats() {
  return (
    <section 
      className="w-full flex justify-center items-center px-6 sm:px-12 lg:px-24 bg-white"
      style={{ paddingTop: '160px', paddingBottom: '160px' }}
    >
      <div className="max-w-[1000px] w-full mx-auto">
        
        {/* Header Section - FIXED ALIGNMENT */}
        {/* Added explicit flex layout to force absolute centering of all elements */}
        <div className="flex flex-col items-center text-center" style={{ marginBottom: '100px' }}>
          <p 
            className="uppercase text-[#519B9E] text-xs font-bold tracking-[0.2em]"
            style={{ paddingBottom: '20px' }}
          >
            Our Mission
          </p>

          <h2 className="text-4xl lg:text-[3.25rem] font-medium text-gray-900 leading-[1.2] tracking-tight">
            We've helped
            <br />
            innovative companies
          </h2>

          {/* Removed max-width block layout constraints and explicitly centered the text */}
          <p className="text-gray-500 text-[15px] leading-relaxed mt-6 text-center">
            Hundreds of all sizes and across all industries
            <br />
            have made a big improvements with us.
          </p>
        </div>

        {/* Stats Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
          style={{ marginBottom: '120px' }}
        >
          {stats.map((item) => (
            <div key={item.number} className="flex flex-col items-center">
              <h1 className="text-[4rem] lg:text-[5rem] font-medium text-gray-900 leading-none tracking-tight">
                {item.number}
              </h1>
              <p className="mt-4 text-gray-500 text-[15px]">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Choose Plan Section */}
        <div className="flex flex-col items-center">
          <p 
            className="uppercase text-[#519B9E] text-xs font-bold tracking-[0.2em]"
            style={{ paddingBottom: '32px' }}
          >
            Choose Plan:
          </p>

          <div className="grid md:grid-cols-2 gap-6 w-full max-w-[900px]">
            
            {/* Plus Card */}
            <div 
              className="bg-[#F6F9F9] rounded-[32px] flex flex-col justify-between text-left hover:shadow-lg transition-all duration-300"
              style={{ padding: '2.5rem', minHeight: '240px' }}
            >
              <h3 className="text-3xl font-medium text-gray-900">Plus</h3>
              
              <div className="flex justify-between items-end">
                <p className="text-[22px] font-medium text-gray-900">£2.99/month</p>
                {/* Up-Right Arrow Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>

            {/* Premium Card */}
            <div 
              className="bg-[#368C90] rounded-[32px] flex flex-col justify-between text-left relative overflow-hidden hover:shadow-lg transition-all duration-300"
              style={{ padding: '2.5rem', minHeight: '240px' }}
            >
              {/* CSS Geometric Background Pattern */}
              <div className="absolute top-0 right-0 bottom-0 left-0 opacity-20 pointer-events-none">
                <div className="absolute w-[200px] h-[300px] bg-white -rotate-45 translate-x-[150px] -translate-y-[50px]"></div>
                <div className="absolute w-[150px] h-[300px] bg-white -rotate-45 translate-x-[280px] translate-y-[50px]"></div>
              </div>

              <h3 className="text-3xl font-medium text-white relative z-10">Premium</h3>
              
              <div className="flex justify-between items-end relative z-10">
                <p className="text-[22px] font-medium text-white">£6.99/month</p>
                {/* Up-Right Arrow Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}