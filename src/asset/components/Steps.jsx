import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Open your account",
    desc: "Sign up and verify your account from the dashboard.",
  },
  {
    number: "2",
    title: "Transfer your money",
    desc: "Move money into your reserve account and begin earning.",
  },
  {
    number: "3",
    title: "Watch balance grow",
    desc: "Your reserve balance increases automatically over time.",
  },
];

export default function Steps() {
  return (
    <section className="bg-[#08384A] py-24 w-full flex justify-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="uppercase text-cyan-300 text-sm tracking-widest">Steps</p>

        <h2 className="text-white text-5xl font-bold mt-4 max-w-3xl leading-tight">
          Maximize your returns with a Reserve account that generates.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {steps.map((item) => (
            <motion.div
              whileHover={{ y: -8 }}
              key={item.number}
              className="bg-[#0D465B] rounded-3xl p-10"
            >
              <h1 className="text-6xl text-cyan-300 font-bold">
                {item.number}
              </h1>

              <h3 className="text-white text-2xl mt-8">{item.title}</h3>

              <p className="text-slate-300 mt-5 leading-7">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
