import { Link } from "react-router-dom";
import Nav from "../header/Nav";

function Header() {
  return (
    <div className="bg-pink-500  px-6 py-6 flex items-center justify-between">
      <Link to="/" className="text-white text-2xl font-bold">
        YourPlaces
      </Link>
      <div className=" flex gap-8 items-center">
        <Nav to="/">ALL USERS</Nav>
        <Nav to="/u1/places">MY PLACES</Nav>
        <Nav to="/places/new">ADD PLACE</Nav>
        <Nav to="/auth">AUTHENTICATE</Nav>
      </div>
    </div>
  );
}

export default Header;
