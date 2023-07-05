import { Link } from "react-router-dom";
import logo from '../assets/logoBank2.png'

function HomePage() {
  return (
  <section className="flex justify-center items-center h-screen flex-col">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to</h1>
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Online Banking</span></h1>
      <img src={logo} className="h-32 mr-3" />
      <p className="mb-6 text-sm font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center mx-auto">
        Welcome to our online banking service! We offer a secure and convenient platform for all your financial needs.
      </p>
      <Link to="/register">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Get Started
          </span>
        </button>
      </Link>
  </section>
  );
}

export default HomePage;
