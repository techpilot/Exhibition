import Books from "./Books";
import Image from "next/image";
import art1 from "../public/data/tours/artfairCover.jpeg";
import info from "../public/data/newData";

const BooksView = ({ data }) => {
  return(
    <div>
      <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[550px] xl:h-[550px] 2xl:h-[600px] mt-2">
        <Image
          src={art1}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="mb-3 pt-2">
        <h1 className="text-2xl">
          {info[13].artist}
        </h1>
        <p className="italic">
          {info[13].name}
        </p>
        <p className="text-sm">
          {`${info[13].startDates[0]} - ${info[13].startDates[1]}`}
        </p>
      </div>

      {/* grids */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mr-0 mb-24">
        {data.map(({id, name, artist, summary, images}) => (
          <Books
            key={id}
            artist={artist}
            name={name}
            summary={summary}
            image={images[0]}
          />
        ))}
      </div>
    </div>
  )
}

export default BooksView