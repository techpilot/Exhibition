import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  return(
    <div>
      <div className="max-w-7xl mx-auto px-8 sm:px-16 bg-white">
        <Header />
        <main className="max-w-5xl mx-auto px-8 sm:px-16 bg-white m-4 rounded-lg">
          <div className="my-20 border border-gray-50 bg-white rounded-xl shadow-lg">
            <h1 className="mx-[45px] sm:mx-[67px] md:mx-[80px] lg:mx-[240px] xl:mx-[270px] my-10 text-xl md:text-2xl text-green-600
              font-bold">
              LOGIN INTO YOUR ACCOUNT
            </h1>
            <p className="mx-[2px] lg:mx-[210px] mt-2 text-sm font-semibold text-gray-500">EMAIL</p>
            <div className="flex mx-auto sm:mx-auto md:mx-auto lg:mx-[210px] items-center py-2">
              <input
                className="px-2 py-2 mx-3 border-gray-100 bg-transparent outline-none flex-grow text-sm text-gray-600 border-2 bg-gray-100 rounded-md
                  placeholder-gray-400 focus:border-yellow-600 focus:border-b-4 focus:border-l-0 focus:border-r-0 focus:border-t-0 focus:bg-green-50"
                type="email"
                placeholder={"Email"}
              />
            </div>

            <p className="mx-[2px] lg:mx-[210px] mt-2 text-sm font-semibold text-gray-500 mt-5">PASSWORD</p>
            <div className="flex mx-auto sm:mx-auto md:mx-auto lg:mx-[210px] items-center mt-1">
              <input
                className="px-2 py-2 mx-3 border-gray-100 border-2 rounded-md bg-transparent outline-none flex-grow text-sm bg-gray-100 text-gray-600
                  placeholder-gray-400 focus:border-yellow-600 focus:border-b-4 focus:border-l-0 focus:border-r-0 focus:border-t-0 focus:bg-green-50"
                type="password"
                placeholder={"Should not be less than 8 digits"}
              />
            </div>

            <div className="px-[0px] sm:px-auto md:px-auto lg:px-[210px] items-center mt-1">
              <button className="flex mx-[80px] sm:mx-auto md:mx-auto mx-[330px] items-center md:border-2 rounded-md py-2 md:shadow-sm border-green-600
              px-20 md:px-32 m-auto mt-16 mb-24 bg-gradient-to-b from-green-700 to-green-600 text-white hover:shadow-lg
              active:scale-95 transform transition duration-500 ease-out"
              >
                ACCESS
              </button>
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}

export default Login