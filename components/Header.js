import { useRouter } from "next/router";

function Header() {
  const router = useRouter()

  return (
    <header className="flex top-0 z-50 sticky bg-white py-3 items-center m-auto">
      {/* left */}
      <div className="font-bold font-mono text-5xl my-auto ml-0 mr-20 h-10 text-5xl">
        <p onClick={() => router.push("/")} className="cursor-pointer active:scale-90 transform transition duration-500 ease-out">Steve</p>
      </div>
      {/* right */}
      <div className="lg:flex pt-5 text-sm mr-0 m-auto justify-content-end font-semibold">
        <p onClick={() => router.push("/exhibitions")} className="cursor-pointer mx-2 hover:text-gray-500 active:scale-90 active:text-gray-100
          transform transition duration-500 ease-out"
        >
          EXHIBITIONS
        </p>
        <p className="cursor-pointer mx-2 hover:text-gray-500 active:scale-90 transform transition duration-500 ease-out">
          ARTISTS
        </p>
        {/*<p className="cursor-pointer mx-2 hover:text-gray-500 active:scale-90 transform transition duration-500 ease-out">*/}
        {/*  PUBLICATIONS*/}
        {/*</p>*/}
        {/*<p className="cursor-pointer mx-2 hover:text-gray-500 active:scale-90 transform transition duration-500 ease-out">*/}
        {/*  FAIRS*/}
        {/*</p>*/}
        {/*<p className="cursor-pointer mx-2 hover:text-gray-500 active:scale-90 transform transition duration-500 ease-out">*/}
        {/*  NEWS*/}
        {/*</p>*/}
        <p onClick={() => router.push("/private")} className="cursor-pointer mx-2 hover:text-gray-500 active:scale-90 transform transition duration-500 ease-out">
          PRIVATE
        </p>
        <p onClick={() => router.push("/bookshop")} className="cursor-pointer mx-2 hover:text-gray-500 active:scale-90 transform transition duration-500 ease-out">
          BOOKSHOP
        </p>
        {/*<p className="cursor-pointer ml-2 hover:text-gray-500 active:scale-90 transform transition duration-500 ease-out">*/}
        {/*  GALLERY*/}
        {/*</p>*/}
      </div>
    </header>
  )
}

export default Header