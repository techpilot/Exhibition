import Image from "next/image"


const ArtDetails = ({ name, image, artist, summary, description, startDate, endDate }) => {
  return(
    <div>
      <div className="max-w-5xl mx-auto my-5 md:my-10 px-8 py-1 shadow-2xl rounded-lg">
        <div className="relative flex-col max-w-7xl mx-auto px-8 sm:px-16 sm:w-full">
          <div className="mx-auto items-center ml-0 m-2 mt-20 h-[300px] w-[400px]">
            <Image src={image} layout="fill" objectFit="contain" className="rounded-xl"/>
          </div>
        </div>

        <div className="mx-[150px] sm:mx-[200px] lg:mx-[430px] text-sm">
          <h2 className="font-semibold">{artist}</h2>
          <p>{name}</p>
          <p>{startDate}</p>
        </div>

        <div className="flex">
          <div>
            <h1 className="font-bold text-sm text-gray-700 mt-10 border-gray-400 border-r-0 border-l-0 border-t-0 border-b-2">SUMMARY</h1>
            <p className="mt-3 mb-20">{summary}</p>
          </div>

          <div className="hidden mx-10 lg:flex flex-col">
            <h1 className="font-bold text-xs lg:text-sm text-black mt-10 ">About {artist}</h1>
            <p className="mt-3 mb-20">Exciting adventure in the snow with snowboarding and skiing Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh", "Sed do eiusmod
            </p>
          </div>
        </div>

        <div>
          <h1 className="font-bold text-xs lg:text-sm text-gray-700 mt-10 border-gray-400 border-r-0 border-l-0 border-t-0 border-b-2">DETAILS</h1>
          <p className="mt-5 mb-10">{description}</p>
          <p className="mt-5 mb-10 lg:mb-20">{description}</p>
        </div>

        <div className="flex flex-col lg:hidden">
          <h1 className="font-bold text-xs lg:text-sm text-black mt-20">About {artist}</h1>
          <p className="mt-2 mb-20">Exciting adventure in the snow with snowboarding and skiing Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh", "Sed do eiusmod.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ArtDetails