import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold text-gray-800">Poll Autoxona</h1>
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/" className="text-gray-600 hover:text-blue-500 font-medium">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-gray-600 hover:text-blue-500 font-medium">About</NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="text-gray-600 hover:text-blue-500 font-medium">Blog</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
