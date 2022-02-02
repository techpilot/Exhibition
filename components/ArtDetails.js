import Image from "next/image"
import artists from "../public/data/artist.json";

const ArtDetails = ({ name, image, artist, summary, description, location }) => {
  const data = artists.data

  return(
    <div>
      <div className="w-full sm:max-w-5xl mx-auto my-5 md:my-10 px-8 py-1 shadow-2xl rounded-lg">
        <div className="relative flex-col max-w-7xl mx-auto px-8 sm:px-16 sm:w-full">
          <div className="mx-auto items-center ml-0 m-2 mt-20 h-[450px] w-[700px]">
            <Image src={`/${image}`} layout="fill" objectFit="contain" className="rounded-xl"/>
          </div>
        </div>

        <div className="mx-[150px] sm:mx-[200px] lg:mx-[430px] text-sm text-center">
          <h2 className="font-semibold">{artist}'s</h2>
          <p className="font-bold text-gray-700">{name}</p>
          <p className="italic pt-2 text-gray-600">@{location}</p>
        </div>

        <div className="flex lg:grid lg:grid-cols-2 ">
          <div>
            <h1 className="font-bold text-xs lg:text-sm text-gray-700 mt-10 border-gray-400 border-r-0 border-l-0 border-t-0 border-b-2">SUMMARY</h1>
            <p className="mt-3 mb-20 text-justify text-gray-600 font-serif">{summary}</p>
          </div>

          <div className="hidden mx-10 lg:flex flex-col">
            <h1 className="font-bold text-xs lg:text-sm text-black mt-10 ">About {artist}</h1>
            {
              data.slice(3, 4).map(({ works }) => (
                <p className="mt-3 mb-20 text-justify text-gray-600 font-serif">{works}</p>
              ))
            }
          </div>
        </div>

        <div className="-mt-20">
          <h1 className="font-bold text-xs lg:text-sm text-gray-700 mt-10 border-gray-400 border-r-0 border-l-0 border-t-0 border-b-2">DETAILS</h1>
          <p className="mt-5 mb-10 lg: mb-20 text-justify text-gray-600 font-serif">{description}</p>
          {/*<p className="mt-5 mb-10 lg:mb-20">{description}</p>*/}
        </div>

        <div className="flex flex-col lg:hidden">
          <h1 className="font-bold text-xs lg:text-sm text-black mt-20">About {artist}</h1>
          {
            data.slice(3, 4).map(({ works }) => (
              <p className="mt-3 mb-20 text-justify text-gray-600 font-serif">{works}</p>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ArtDetails