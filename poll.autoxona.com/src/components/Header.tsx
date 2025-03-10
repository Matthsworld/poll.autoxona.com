import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">poll.autoxona.com</h1>
      <div>
        <Link className="mr-4" to="/">Home</Link>
        <Link className="mr-4" to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Header;
/*import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Poll Autoxona</h1>
      <nav>
        <ul className="flex gap-4">
          <li><Link to="/" className="hover:text-red-500">Home</Link></li>
          <li><Link to="/blog" className="hover:text-red-500">Blog</Link></li>
          <li><Link to="/about" className="hover:text-red-500">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;*/