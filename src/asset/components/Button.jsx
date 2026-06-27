export const Button = ({ disabled, children, onClick }) => {
  return (
    <span
      onClick={onClick}
      className={`w-full rounded-xl text-2xl pl-37 pr-37 px-6 py-2 text-white cursor-pointer font-semibold  ${disabled ? "bg-[#8095ac]" : "bg-[#3fe0d0]"}`}
    >
      {children}
    </span>
  );
};
