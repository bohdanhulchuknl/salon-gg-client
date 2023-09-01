import { serverUri } from "../../config/config";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const handleGoogleLogin = () => {
    window.open(`${serverUri}/auth/google`, "_self");
  };
  console.log("LOGIN");

  return (
    <div className="container flex items-center justify-center h-screen mx-auto font-apocBold ">
      <div className="flex flex-col justify-center gap-3 mx-auto rounded-lg shadow shadow-firstColor px-7 py-14">
        <h2 className="pb-10 text-2xl ">Log in to your account</h2>

        <button
          onClick={handleGoogleLogin}
          type="button"
          className=" w-full  gap-3 text-2xl  bg-white hover:shadow-md hover:shadow-firstColor focus:ring-4 focus:outline-none border-2 shadow shadow-firstColor focus:ring-[#4285F4]/50 font-apocBold rounded-md py-2.5 inline-flex items-center justify-center  "
        >
          <FcGoogle /> <span className="text-sm">Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
