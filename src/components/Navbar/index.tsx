import { IUser } from "../../types/users.type";
import { UserAuth, UserNoAuth } from "../NavBarComponens";
import { logout } from "../../Api/userApi";

type Props = {
  user: IUser | null;
};

const Navbar = ({ user }: Props) => {
  // const logout = () => {
  //   axios
  //     .get(`${serverUri}/auth/logout`, {
  //       withCredentials: true,
  //     })
  //     .then((data) => {
  //       console.log(data.data);
  //       if (data.data === "done") {
  //         // navigate("/");
  //         window.location.href = "/";
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   // window.open(`${serverUri}/auth/logout`, "_self");
  //   // const res = await fetch("http://localhost:5000/auth/logout")
  //   // console.log(res)
  // };
  // const navigate = useNavigate();

  return (
    <div className="container w-full mx-auto">
      <div className="flex ">
        {user ? <UserAuth logout={logout} user={user} /> : <UserNoAuth />}
      </div>
    </div>
  );
};

export default Navbar;
