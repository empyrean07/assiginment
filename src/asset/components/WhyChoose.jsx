import { FiArrowRight, FiTrendingUp } from "react-icons/fi";

export default function WhyChoose() {
  return (
    <section className="mt-20 py-24 w-full flex justify-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase text-cyan-600 tracking-widest text-sm">
            Why Us
          </p>

          <h2 className="text-5xl font-bold p-10 mt-3">Why they prefer Finpay</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 m-10">
          {/* Card 1 */}

          <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition">
            <h1 className="text-7xl font-bold text-cyan-600">3k+</h1>

            <p className="text-2xl mt-6 font-semibold">
              Businesses already running on Finpay
            </p>
          </div>

          {/* Card 2 */}

          <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold">Instant Withdraw</h3>

              <p className="text-gray-500 mt-4">
                Transfer funds instantly between your accounts whenever you
                need.
              </p>
            </div>

            <div className="flex justify-center items-center gap-10 mt-10">
              <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center text-white text-2xl">
                💳
              </div>

              <FiArrowRight size={40} className="text-gray-400" />

              <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-white text-2xl">
                🏦
              </div>
            </div>
          </div>

          {/* Card 3 */}

          {/* <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition">
            <h3 className="text-3xl font-bold">No asset volatility</h3>

            <p className="text-gray-500 mt-5 leading-8">
              Generate returns on your cash reserves without exposing your
              business to risky investments.
            </p>
          </div> */}

          {/* Graph Card */}

          {/* <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">Summary</p>

                <h2 className="text-4xl font-bold">$1,876,580</h2>
              </div>

              <FiTrendingUp size={34} className="text-cyan-600" />
            </div>

            <div className="mt-12">
              <svg viewBox="0 0 500 180" className="w-full">
                <polyline
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="5"
                  points="
                    20,150
                    90,120
                    160,105
                    230,85
                    300,70
                    370,50
                    460,25
                  "
                />

                <polyline
                  fill="rgba(6,182,212,.12)"
                  stroke="none"
                  points="
                    20,150
                    90,120
                    160,105
                    230,85
                    300,70
                    370,50
                    460,25
                    460,180
                    20,180
                  "
                />
              </svg>

              <div className="flex justify-between text-gray-400 mt-3">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>
          </div> */}
          
        </div>
      </div>
    </section>
  );
}
