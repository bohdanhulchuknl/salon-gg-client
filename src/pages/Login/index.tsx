import { serverUri } from "../../config/config";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const handleGoogleLogin = () => {
    window.open(`${serverUri}/auth/google`, "_self");
  };

  // const handleFacebookLogin = () => {
  //     window.open("http://localhost:5000/auth/facebook", "_self")
  // }
  return (
    <div className="container mx-auto  flex flex-col  justify-center items-center border rounded-lg max-w-[300px] gap-3 pt-5 font-serif">
      <span>
        <FcGoogle />
      </span>
      <p className="pb-2">Use an account Google</p>
      <button
        onClick={handleGoogleLogin}
        type="button"
        className="text-white   bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 pt-2 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
      >
        Sign in
      </button>
    </div>
  );
};

export default Login;
