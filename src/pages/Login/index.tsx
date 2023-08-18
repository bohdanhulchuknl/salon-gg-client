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
    <div className="container flex mx-auto items-center justify-center h-screen font-ttInterfacesBold  ">
      <div className=" mx-auto  flex flex-col  justify-center  shadow shadow-firstColor rounded-lg gap-3 px-7 py-14 ">
        <h2 className="text-2xl pb-10 ">Log in to your account</h2>

        <button
          onClick={handleGoogleLogin}
          type="button"
          className=" w-full  gap-3 text-2xl  bg-white hover:shadow-md hover:shadow-firstColor focus:ring-4 focus:outline-none border-2 shadow shadow-firstColor focus:ring-[#4285F4]/50 font-poppinsBold rounded-md py-2.5 inline-flex items-center justify-center  "
        >
          <FcGoogle /> <span className="text-sm">Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
