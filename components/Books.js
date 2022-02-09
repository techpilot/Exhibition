import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import {addToArt, removeFromArt} from "../slices/artSlice";

const Books = ({ identity, artist, name, image, summary, description, category, location }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  // console.log("key",identity)

  const result = () => {
    dispatch(removeFromArt(name))

    const artWork = {
      identity,
      name,
      artist,
      image,
      category,
      summary,
      description,
      location
    }

    //  Send the art work as an action to redux store
    dispatch(addToArt(artWork))
    console.log(artWork)

    router.push({
      pathname: "/art",
      query: {
        name
      }
    })
  };

  return(
    <div className="relative pb-2 flex flex-col">
      {/* up */}
      <div className="relative items-center m-2 mt-5 space-x-4 md:w-[250px] h-[250px] w-[300px] lg:h-[250px] lg:w-[300px] hover:shadow-2xl
        border border-t-2 border-r-0 border-l-0 border-b-2 border-black"
      >
        <Image src={`/${image}`} layout="fill" objectFit="contain" />
      </div>
      {/* down */}
      <div className="ml-2 pr-[120px] sm:pr-[230px] md:pr-[90px] lg:pr-[220px] xl:pr-[70px] font-semibold">
        <p className="my-2 text-gray-700 hover:text-gray-500 lg:text-justify font-serif">
          {artist}: {name} - {summary}
        </p>
        <button onClick={result}
          className="mt-auto p-2 text-xs h-[35px] md:text-sm bg-gradient-to-b from-black to-black border border-black
          rounded-sm focus:outline-none focus:ring-2 focus:ring-white active:from-blue-500 text-white">KNOW MORE</button>
      </div>
    </div>
  )
}

export default Books