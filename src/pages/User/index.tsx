import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/slices/auth.slice";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components";

const User = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);
  return (
    <div>
      <Logo />
    </div>
  );
};

export default User;
