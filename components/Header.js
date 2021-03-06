import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image"
import logo from "/public/lion.png"

function Header() {
  const { data: session } = useSession()
  const router = useRouter()
  console.log("session: ", session)

  return (
    <header className="flex top-0 z-50 bg-white py-3 items-center m-auto">
      {/* left */}
      <div className="font-bold font-mono text-5xl my-auto ml-0 mr-20 h-10 text-5xl">
        {/*<p onClick={() => router.push("/")} className="cursor-pointer active:scale-90 transform transition duration-500 ease-out text-green-600"> Nelson</p>*/}
        <Image
          onClick={() => router.push('/')}
          src={logo}
          width={100}
          height={60}
          objectFit="contain"
          className="cursor-pointer active:scale-90 transform transition duration-500 ease-out"
        />
      </div>
      {/* right */}
      <div className="md:flex pt-5 text-sm mr-0 m-auto justify-content-end font-semibold">
        <p onClick={() => router.push("/exhibitions")} className="cursor-pointer mx-2 hover:text-gray-500 active:scale-90 active:text-gray-100
          transform transition duration-500 ease-out"
        >
          EXHIBITIONS
        </p>
        {/*<p className="cursor-pointer mx-2 hover:text-gray-500 active:scale-90 transform transition duration-500 ease-out">*/}
        {/*  PUBLICATIONS*/}
        <p onClick={() => router.push("/bookshop")} className="cursor-pointer mx-2 hover:text-gray-500 active:scale-90 transform transition duration-500 ease-out">
          SCULPTURES
        </p>
        <p  onClick={() => router.push("/artists")} className="cursor-pointer mx-2 hover:text-gray-500 active:scale-90 transform transition duration-500 ease-out">
          ARTISTS
        </p>
        <p onClick={() => router.push("/private")}
           className="cursor-pointer mx-2 hover:text-gray-500 active:scale-90 transform transition duration-500 ease-out">
          PRIVATE
        </p>
        {session ? <button onClick={() => signOut()} className="font-semibold">LOG OUT</button> :
          <p onClick={() => router.push("/api/auth/signin")}
             className="cursor-pointer mx-2 hover:text-gray-500 active:scale-90 transform transition duration-500 ease-out">
            SIGN IN
          </p>
        }
      </div>
    </header>
  )
}

export default Header