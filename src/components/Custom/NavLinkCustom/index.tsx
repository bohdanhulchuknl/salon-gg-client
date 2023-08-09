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
        `text-sm shadow-sm shadow-black px-4 py-2  ease-in-out transition-all duration-200 ${
          className ? className : ""
        } ${
          isActive
            ? "text-thirdColor border-b-4 border-fourColor"
            : "text-secondColor hover:underline hover:text-thirdColor hover:shadow-md hover:shadow-black"
        }`
      }
    >
      {title}
    </NavLink>
  );
};

export default NavLinkCustom;
