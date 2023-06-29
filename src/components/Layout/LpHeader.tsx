import { Link } from "react-router-dom";
import logo from "../../asset/image/logo.svg";

export const LpHeader = () => {
  return (
    <header className="flex justify-between items-center md:py-[26px] md:pl-70 md:pr-10">
      <div>
        <img src={logo} className="w-100" alt="" />
      </div>
      <div className="flex md:flex-row">
        <Link className="font-mont text-basefont-semibold md:mr-104" to="/">
          Home
        </Link>
        <Link
          className="font-mont text-basefont-semibold md:mr-104"
          to="/product"
        >
          Product
        </Link>
        <Link className="font-mont text-basefont-semibold md:mr-104" to="/faq">
          Faq
        </Link>
        <Link className="font-mont text-basefont-semibold" to="/contact">
          Contact
        </Link>
      </div>
    </header>
  );
};
