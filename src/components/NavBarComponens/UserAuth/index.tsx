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
    <div className="container ">
      <div className="flex items-center justify-between px-5 m-auto ">
        <div className="px-4 py-3 mx-auto">
          <div className="flex justify-center flex-1 gap-5 text-sm">
            <button
              onClick={() => {
                homeRef?.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`transition-all  ${
                isHomeInView
                  ? "text-fifth"
                  : " text-firstColor/50 hover:underline"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                serviceRef?.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`${
                isServiceInView
                  ? "text-fifth "
                  : " text-firstColor/50 hover:underline"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => {
                whyWeRef?.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`${
                isWhyWeInView
                  ? "text-fifth "
                  : " text-firstColor/50 hover:underline"
              }`}
            >
              Why we are?
            </button>
            <button
              onClick={() => {
                worksRef?.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`${
                isWorksInView
                  ? "text-fifth "
                  : " text-firstColor/50 hover:underline"
              }`}
            >
              Works
            </button>
            <button
              onClick={() => {
                teamRef?.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`${
                isTeamInView
                  ? "text-fifth "
                  : " text-firstColor/50 hover:underline"
              }`}
            >
              Team
            </button>
          </div>
        </div>
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
