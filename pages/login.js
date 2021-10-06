import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  return(
    <div>
      <main className="max-w-7xl mx-auto px-8 sm:px-16 bg-white m-4 rounded-lg">
        <Header />
        <div className="my-20 border border-gray-900 bg-gray-500">
          <h1 className="mx-[160px] md:mx-[300px] lg:mx-[370px] xl:mx-[500px] my-10 text-xl md:text-2xl text-gray-900 font-bold">LOGIN PAGE</h1>
          <p className="mx-[2px] lg:mx-[210px] mt-2 text-sm font-semibold">EMAIL</p>
          <div className="flex mx-auto sm:mx-auto md:mx-auto lg:mx-[210px] items-center py-2 md:shadow-sm">
            <input
              className="px-2 py-2 mx-3 border-gray-900 bg-transparent outline-none flex-grow text-sm text-gray-600 border-2 rounded-md placeholder-gray-400"
              type="email"
              placeholder={"Email"}
            />
          </div>

          <p className="mx-[2px] lg:mx-[210px] mt-2 text-sm font-semibold mt-5">PASSWORD</p>
          <div className="flex mx-auto sm:mx-auto md:mx-auto lg:mx-[210px] items-center md:shadow-sm mt-1">
            <input
              className="px-2 py-2 mx-3 border-gray-900 border-2 rounded-md bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
              type="password"
              placeholder={"Should not be less than 8 digits"}
            />
          </div>

          <button className="flex mx-[98px] sm:mx-auto md:mx-auto mx-[330px] items-center md:border-2 rounded-md py-2 md:shadow-sm border-gray-700
              px-20 md:px-32 m-auto mt-16 mb-24 bg-gradient-to-b from-black to-gray-700 text-white hover:shadow-lg
              active:scale-95 transform transition duration-500 ease-out"
          >
            ACCESS
          </button>
        </div>
      </main>
    </div>
  )
}

export default Login