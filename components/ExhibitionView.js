import SmallCard from "./SmallCard";
import BigExhibit from "./BigExhibit";

function ExhibitionView({ data }) {
  return(
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mr-20 mb-24">
        {data.slice(5, 7).map(({id, name, artist, summary, images}) => (
          <BigExhibit
            key={id}
            artist={artist}
            name={name}
            summary={summary}
            image={images[1]}
          />
        ))}
      </div>

      <div className="grid grid-flow-row-dense grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-10 md:-mt-52 mx-auto pt-[200px]">
        {data.map(({id, name, images, artist, summary, startDates, location}) => (
          <SmallCard
            key={id}
            image={images[0]}
            artist={artist}
            name={name}
            location={location}
            startDate={startDates[0]}
            endDate={startDates[1]}
            summary={summary}
          />
        ))}
      </div>
    </div>
  )
}

export default ExhibitionView