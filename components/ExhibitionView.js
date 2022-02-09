import BigExhibit from "./BigExhibit";
import ExhibitionSmall from "./ExhibitionSmall"

function ExhibitionView({ data }) {
  return(
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mr-20 mb-24">
        {data.slice(5, 7).map(({id, name, artist, summary, image}) => (
          <BigExhibit
            key={id}
            artist={artist}
            name={name}
            summary={summary}
            image={image}
          />
        ))}
      </div>

      <div className="grid grid-flow-row-dense grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-10 md:-mt-52 -mx-5 sm:mx-auto pt-[200px]">
        {data.map((item) => (
          item.private === false && item.category === "exhibition" ?
            <ExhibitionSmall
              key={item._id}
              identity={item.id}
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
    </div>
  )
}

export default ExhibitionView