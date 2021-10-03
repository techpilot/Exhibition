import Image from "next/image"

const SmallCard = ({ artist, name, startDate, endDate, location, image })  => {
  return (
    <div className="relative cursor-pointer hover:scale-105 active:scale-90 transform transition duration-500 ease-out">
      {/* up */}
      <div className="relative items-center m-2 mt-5 space-x-4 h-[130px] w-[160px] md:h-[150px] lg:w-[180px] xl:w-[190px] hover:shadow-lg ease-out
        border border-t-2 border-r-0 border-l-0 border-b-0 border-black"
      >
        <Image src={image} layout="fill" objectFit="contain" />
      </div>
      {/* down pr-[950px] */}
      <div className="ml-2 pr-[110px] sm:pr-[100px] lg:pr-[40px] hover:text-gray-300 duration-500 ease-out">
        <p className="my-2 text-gray-900 font-semibold">
          {artist}: {name}
        </p>
        <p className="text-sm my-2 italic text-gray-700 font-semibold">
          {startDate} - {endDate}
        </p>
        <p className="hidden md:grid text-gray-700">at {location}</p>
      </div>
    </div>
  )
}

export default SmallCard