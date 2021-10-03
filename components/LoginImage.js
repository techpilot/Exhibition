import Image from "next/image";
import img from "../public/data/tours/PageEx.jpeg"

const LoginImage = () => {
  return(
    <div className="mb-20">
      <div className="relative h-[250px] w-[400px] sm:h-[300px] sm:w-[500px] md:h-[400px] md:w-[600px] cursor-pointer mx-auto mt-7">
        <Image src={img} layout="fill"/>
      </div>

      <div>
        <h2 className="mx-[170px] sm:mx-[230px] md:mx-[300px] lg:mx-[520px] mt-20 mb-0 font-bold font-mono text-lg md:text-2xl">REGISTER</h2>

        <main className="max-w-7xl mx-auto px-8 sm:px-16 bg-white m-4 rounded-lg">
          <div>
            <p className="mx-[210px] mt-2 text-sm font-semibold">EMAIL</p>
            <div className="flex mx-[210px] items-center md:border-2 rounded-sm py-2 md:shadow-sm border-gray-500">
              <input
                className="px-2 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
                type="email"
                placeholder={"Email"}
              />
            </div>

            <p className="mx-[210px] mt-2 text-sm font-semibold mt-5">PASSWORD</p>
            <div className="flex mx-[210px] items-center md:border-2 rounded-sm py-2 md:shadow-sm border-gray-500 mt-1">
              <input
                className="px-2 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
                type="password"
                placeholder={"Should not be less than 8 digits"}
              />
            </div>

            <p className="mx-[210px] mt-2 text-sm font-semibold mt-5">CONFIRM PASSWORD</p>
            <div className="flex mx-[210px] items-center md:border-2 rounded-sm py-2 md:shadow-sm border-gray-500 mt-1">
              <input
                className="px-2 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
                type="password"
                placeholder={"Re-enter your password"}
              />
            </div>

            <button className="flex mx-[330px] items-center md:border-2 rounded-sm py-2 my-3 md:shadow-sm border-gray-700
              px-32 m-auto mt-16 mb-24 bg-gradient-to-b from-black to-gray-700 text-white hover:shadow-lg
              active:scale-95 transform transition duration-500 ease-out"
            >
              SIGN UP
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default LoginImage