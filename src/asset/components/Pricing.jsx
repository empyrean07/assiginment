import { FiArrowUpRight } from "react-icons/fi";

export default function Pricing() {
  return (
    <section className="w-full flex justify-center py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="uppercase text-center text-cyan-600 text-sm tracking-widest">
          Choose Plan
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-100 rounded-3xl p-12 hover:shadow-xl transition">
            <div className="flex justify-between">
              <h2 className="text-4xl font-bold">Plus</h2>

              <FiArrowUpRight size={28} />
            </div>

            <h3 className="mt-20 text-3xl font-semibold">£2.99/month</h3>
          </div>

          <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-3xl p-12 text-white hover:shadow-xl transition">
            <div className="flex justify-between">
              <h2 className="text-4xl font-bold">Premium</h2>

              <FiArrowUpRight size={28} />
            </div>

            <h3 className="mt-20 text-3xl font-semibold">£6.99/month</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
