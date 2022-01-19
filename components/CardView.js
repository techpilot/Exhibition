import SmallCard from "./SmallCard";

function CardView({data}) {

  return(
    <div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-10 md:-mt-52
      sm:mx-auto pt-[10px] md:pt-[150px]">
      {data.slice(0, 9).map((item) => (
        item.private === false ?
          <SmallCard
            key={item._id}
            image={item.image}
            artist={item.artist}
            name={item.name}
            location={item.location}
            category={item.category}
            summary={item.summary}
            description={item.description}
          /> : null
      ))}
    </div>
  )
}

export default CardView