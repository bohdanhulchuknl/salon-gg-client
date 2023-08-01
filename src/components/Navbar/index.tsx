import userIcon from "../../assets/user-avatar.png";
import { Link } from "react-router-dom";
import { IUser } from "../../types/users.type";
import axios from "axios";
import { serverUri } from "../../config/config";

type Props = {
  user: IUser | null;
};

const Navbar = ({ user }: Props) => {
  const logout = () => {
    // window.open(`${serverUri}/auth/logout`, "_self");
    // const res = await fetch("http://localhost:5000/auth/logout")
    // console.log(res)
    axios
      .get(`${serverUri}/auth/logout`, {
        withCredentials: true,
      })
      .then((resResponse) => {
        console.log(resResponse)
        if (resResponse.data === "done") {
          window.location.href = "/";
        }
      }).catch(err => console.log(err));
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
          <li>
            <Link to="/test-user">TEST</Link>
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
