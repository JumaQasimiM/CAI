const Navbar = () => {
  const scrollToSection = (id) => {
    const ele = document.getElementById(id);
    if (ele) ele.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">M Juma Qasimi</h1>
        {/* <img src={logo} width={80} className=""/> */}
        <ul className="flex space-x-4 rtl:space-x-reverse">
          <li>
            <button
              onClick={() => {
                scrollToSection("home");
              }}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToSection("about");
              }}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToSection("contuct");
              }}
            >
              Contuct
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToSection("experience");
              }}
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToSection("projects");
              }}
            >
              Projects
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
