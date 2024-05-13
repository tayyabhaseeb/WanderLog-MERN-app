import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Component {
  mapLink: boolean;
  edit: boolean;
  children: ReactNode;
}

function Button({ children, mapLink, edit }: Component) {
  if (mapLink) {
    return (
      <a className="border-2 border-solid border-pink-500 px-4 py-2 text-pink-500 hover:text-white  hover:bg-pink-500">
        {children}
      </a>
    );
  }

  if (edit) {
    return (
      <Link
        to="/"
        className="border-2 border-solid border-pink-700 bg-pink-700 text-white px-4 py-2"
      >
        {children}
      </Link>
    );
  }

  return (
    <button className="border-2 border-solid border-red-700 bg-red-700 text-white px-4 py-2">
      {children}
    </button>
  );
}

export default Button;
