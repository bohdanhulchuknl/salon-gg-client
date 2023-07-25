import userIcon from "../../assets/user-avatar.png";
import { Link } from "react-router-dom";
import { IUser } from "../../types/users.type";

type Props = {
  user: IUser | null;
};

const Navbar = ({ user }: Props) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
    // const res = await fetch("http://localhost:5000/auth/logout")
    // console.log(res)
  };
  return (
    <div>
      <span>Lama app</span>
      {user ? (
        <ul>
          <li>
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
          </li>
          <li>{user.username}</li>
          <li onClick={logout}>LOGOUT</li>
          <li>
            <Link to="/client">Client</Link>
          </li>
          <li>
            <Link to="/editor">editor</Link>
          </li>
          <li>
            <Link to="/admin">admin</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      ) : (
        <div>
          <div>

            <Link to="/login">Login</Link>
          </div>
          <div>

            <Link to="/client">Client</Link>
          </div>
          <div>

            <Link to="/editor">editor</Link>
          </div>
          <div>

            <Link to="/admin">admin</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
