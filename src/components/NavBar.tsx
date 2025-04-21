const NavBar = () => {
  return (
    <div className="bg-green-400 h-20  w-full  py-5 px-5 flex justify-between items-center mb-0">
      <div>
        <img
          className="h-16  w-16"
          src="src/assets/logo.png"
          alt=""
        />
      </div>
      <nav>
       <h1 className="text-white font-bold text-4xl">Plantsy</h1>
      </nav>
    </div>
  );
};

export default NavBar;
