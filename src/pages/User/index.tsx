import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/slices/auth.slice";
import { useNavigate } from "react-router-dom";


const User = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user || !user.roles.includes(2001)) navigate("/");
  }, [user, navigate]);
  return (
    <div className="container mx-auto px-5">
      USER PAGE
    </div>
  );
};

export default User;
