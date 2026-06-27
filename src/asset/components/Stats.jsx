const stats = [
  {
    number: "24%",
    label: "Revenue Business",
  },
  {
    number: "180K",
    label: "Annual Revenue",
  },
  {
    number: "10+",
    label: "Months of Runway",
  },
];

export default function Stats() {
  return (
    <section className="w-full flex justify-center py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="uppercase text-cyan-600 tracking-widest text-sm">
          Our Mission
        </p>

        <h2 className="text-5xl font-bold mt-4">
          We've helped innovative companies
        </h2>

        <p className="text-gray-500 mt-6 max-w-xl mx-auto">
          Hundreds of all sizes and across all industries have made a big
          improvements with us.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {stats.map((item) => (
            <div key={item.number}>
              <h1 className="text-6xl font-bold text-cyan-600">
                {item.number}
              </h1>

              <p className="mt-5 text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
