import Image from "next/image";
import info from "../public/data/newData";

function BigExhibit({ artist, name, summary, image }) {
  return(
    <div className="relative cursor-pointer hover:scale-95 transform transition duration-500 active:scale-105 ease-out">
      {/* up */}
      <div className="relative items-center ml-0 m-2 mt-2 space-x-4 h-[300px] w-[350px]">
        <Image src={image} layout="fill" objectFit="contain" />
      </div>
      {/* down */}
      <div className="ml-2 pr-[10px] sm:pr-[100px] md:pr-[260px] lg:pr-[170px]">
        <div className="mb-3 pt-2">
          <h1 className="text-2xl font-semibold hover:text-gray-500 py-1">
            {artist}
          </h1>
          <p className="italic">
            {name}
          </p>
          <p className="text-sm">
            {`${info[13].startDates[0]} - ${info[13].startDates[1]}`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default BigExhibit