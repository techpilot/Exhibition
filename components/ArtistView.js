import ArtistDetails from "./ArtistDetails";

const ArtistView = ({ data }) => {
  return(
    <div>
      <div className="flex flex-col mb-2 mx-20 py-1">
        {data.map(({ id, artist, summary }) => (
          <ArtistDetails
            key={id}
            artist={artist}
            summary={summary}
          />
        ))}
      </div>
    </div>
  )
}

export default ArtistView