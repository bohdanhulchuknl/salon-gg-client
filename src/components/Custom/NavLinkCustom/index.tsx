import { NavLink } from "react-router-dom";

interface INavLinkCustomProps {
  to: string;
  title: string;
  className?: string;
}

const NavLinkCustom = ({ to, title, className }: INavLinkCustomProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-apocBold text-sm px-2 py-2  ease-in-out transition-all duration-200 ${
          className ? className : ""
        } ${
          isActive
            ? "text-firstColor border-b-4 border-firstColor"
            : "text-gray-700 hover:underline hover:text-firstColor "
        }`
      }
    >
      {title}
    </NavLink>
  );
};

export default NavLinkCustom;
