export default function CTA() {
  return (
    <section className="w-full flex justify-center pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#08384A] rounded-[40px] p-16 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div>
            <p className="uppercase text-cyan-300 tracking-widest text-sm">
              Try It Today
            </p>

            <h2 className="text-white text-5xl font-bold mt-5">
              Ready to level up your payment process?
            </h2>

            <p className="text-slate-300 mt-6 max-w-xl">
              Supports small businesses with invoicing, integrations and
              cash-flow insights.
            </p>
          </div>

          <div className="flex gap-4">
            <button className="bg-cyan-500 px-8 py-4 rounded-xl text-white hover:bg-cyan-600 transition">
              Get Started
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
