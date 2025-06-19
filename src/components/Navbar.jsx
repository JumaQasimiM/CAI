import { Link, useLocation } from "react-router-dom";
import { faoriteColors,useFullLinks,apisLinks } from "../data/data";
const Navbar = () => {
  const navItem = [
    { path: "/", lable: "Home" },
    { path: "/colors", lable: "Color", length: faoriteColors.length },
    { path: "/apis", lable: "APIS" , length: apisLinks.length},
    { path: "/links", lable: "Links" , length: useFullLinks.length},
  ];
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Private Dashbord</h1>
        <ul className="flex space-x-4 rtl:space-x-reverse">
          {navItem.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="relative px-4 py-2 rounded-md hover:bg-blue-300 text-gray-700 "
              >
                {item.lable}{" "}
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-sm rounded-full px-2">
                  {item.length}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
