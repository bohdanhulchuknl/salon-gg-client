import { IUser } from "../../../types/users.type";

import { DropDownMenu } from "..";

import { AiFillPhone } from "react-icons/ai";
import { useSelector } from "react-redux";
import {
  selectHomeRef,
  selectHomeIsInView,
  selectServiceIsInView,
  selectServiceRef,
  selectWhyWeIsInView,
  selectWhyWeRef,
  selectWorksRef,
  selectWorksIsInView,
  selectTeamRef,
  selectTeamIsInView,
} from "../../../app/slices/scrollRefs.slice";

interface IUserAuthProps {
  logout: () => void;
  user: IUser;
}

const UserAuth = ({ logout, user }: IUserAuthProps) => {
  const homeRef = useSelector(selectHomeRef);
  const isHomeInView = useSelector(selectHomeIsInView);
  const serviceRef = useSelector(selectServiceRef);
  const isServiceInView = useSelector(selectServiceIsInView);
  const whyWeRef = useSelector(selectWhyWeRef);
  const isWhyWeInView = useSelector(selectWhyWeIsInView);
  const worksRef = useSelector(selectWorksRef);
  const isWorksInView = useSelector(selectWorksIsInView);
  const teamRef = useSelector(selectTeamRef);
  const isTeamInView = useSelector(selectTeamIsInView);
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-end w-full mx-auto md:justify-between">
        <nav className="hidden px-4 py-3 mx-auto sm:block">
          <ul className="flex justify-center flex-1 gap-5 text-sm">
            <li
              onClick={() => {
                homeRef?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`transition-all cursor-pointer ${
                isHomeInView
                  ? "text-fifth"
                  : " text-firstColor/50 hover:underline"
              }`}
            >
              Home
            </li>
            <li
              onClick={() => {
                serviceRef?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`transition-all cursor-pointer ${
                isServiceInView
                  ? "text-fifth "
                  : " text-firstColor/50 hover:underline"
              }`}
            >
              Services
            </li>
            <li
              onClick={() => {
                whyWeRef?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`transition-all cursor-pointer ${
                isWhyWeInView
                  ? "text-fifth "
                  : " text-firstColor/50 hover:underline"
              }`}
            >
              Why we are?
            </li>
            <li
              onClick={() => {
                worksRef?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`transition-all cursor-pointer ${
                isWorksInView
                  ? "text-fifth "
                  : " text-firstColor/50 hover:underline"
              }`}
            >
              Works
            </li>
            <li
              onClick={() => {
                teamRef?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`transition-all cursor-pointer ${
                isTeamInView
                  ? "text-fifth "
                  : " text-firstColor/50 hover:underline"
              }`}
            >
              Team
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-center gap-1 text-xs">
          <div className="flex items-center justify-center gap-2 pr-6 text-xs text-firstColor">
            <address>+380989571902</address>
            <AiFillPhone className="w-3 h-3 mb-1" />
          </div>
          <div className="text-firstColor/50">{user.name}</div>
          <DropDownMenu logout={logout} />
        </div>
      </div>
    </div>
  );
};

export default UserAuth;
