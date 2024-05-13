import { NavLink } from "react-router-dom";

interface Component {
  children: React.ReactNode;
  to: string;
}

function Nav({ children, to }: Component) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return isActive
          ? "text-black text-lg border-2 border-solid border-black bg-yellow-300 p-2 "
          : "text-white text-lg hover:border-2 hover:border-solid hover:border-black hover:bg-yellow-300 hover:text-black hover:p-2";
      }}
    >
      {children}
    </NavLink>
  );
}

export default Nav;
