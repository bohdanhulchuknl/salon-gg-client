import { Link } from "react-router-dom";
import userIcon from "../../../assets/user-avatar.png";
import { IUser } from "../../../types/users.type";

interface IUserAuthProps {
  logout: () => void;
  user: IUser;
}

const UserAuth = ({ logout, user }: IUserAuthProps) => {
  return (
    <div>
      <nav className="">
        <ul className="flex gap-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/client">Client</Link>
          </li>
          <li>
            <Link to="/editor">editor</Link>
          </li>
          <li>
            <Link to="/Admin">admin</Link>
          </li>
        </ul>
        <div>
          <img
            src={userIcon}
            alt="user icon"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <p>{user.username}</p>
          <p onClick={logout}>LOGOUT</p>
        </div>
      </nav>
    </div>
  );
};

export default UserAuth;
