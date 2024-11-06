const Header = ({ title, subtitle, button }) => {
  return (
    <div className="text-center gap-y-5 w-9/12 mx-auto text-white py-10">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-base py-5">{subtitle}</p>
      <button className="text-xl font-bold btn rounded-3xl text-[#9538E2]">{button}</button>
    </div>
  );
};

export default Header;
