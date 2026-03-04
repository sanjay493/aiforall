import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between">
        <h1 className="text-xl font-bold text-green-400">
          DevOps Tutorial
        </h1>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/architecture">Architecture</Link>
          <Link to="/oracle">Oracle Cloud</Link>
          <Link to="/free-domain">Free Domain</Link>
          <Link to="/backend">Backend</Link>
          <Link to="/frontend">Frontend</Link>
          <Link to="/devops">DevOps</Link>
        </div>
      </div>
    </nav>
  );
}