import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container mx-auto">
      <div className="navbar-cente py-2 flex flex-col justify-start gap-3 content-center sm:flex-row">
        <a className="btn btn-ghost normal-case text-xl" href="/">
          Rick and Morty
        </a>
        <div className="flex justify-center items-center gap-2">
          <Link to="/" className="link link-hover my-0 py-0 h-5">
            Home
          </Link>
          <Link to="/characters" className="link link-hover my-0 py-0 h-5">
            Characters
          </Link>
          <Link to="/locations" className="link link-hover my-0 py-0 h-5">
            Locations
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
