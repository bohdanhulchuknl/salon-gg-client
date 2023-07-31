import Logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="bg-current dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span>
          <a href="/" className="flex items-center h-full pl-2">
            <img src={Logo} alt="DM logo" />
          </a>
        </span>

        <div className="flex items-center gap-2 text-white  ">
          <div className="text-4xl ">
            <h2>DM</h2>
          </div>
          <div className="text-2xl">
            <h3>stydio</h3>
            <h3>luxury</h3>
          </div>
        </div>

        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Our services
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Our works
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
