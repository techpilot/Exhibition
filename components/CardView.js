import SmallCard from "./SmallCard";

function CardView({data}) {

  return(
    <div className="grid grid-flow-row-dense grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-10 md:-mt-52 mx-auto pt-[10px] md:pt-[150px]">
      {data.slice(0, 5).map(({id, name, images, artist, summary, startDates, location, description}) => (
        <SmallCard
          key={id}
          image={images[0]}
          artist={artist}
          name={name}
          location={location}
          startDate={startDates[0]}
          endDate={startDates[1]}
          summary={summary}
          description={description}
        />
      ))}
    </div>
  )
}

export default CardView