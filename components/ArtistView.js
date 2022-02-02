import ArtistDetails from "./ArtistDetails";

const ArtistView = ({ data }) => {
  return(
    <div>
      <div className="flex flex-col mb-2 mx-20 py-1">
        {data.slice(0, 5).map(({ id, name, about, works, email }) => (
          <ArtistDetails
            key={id}
            name={name}
            about={about}
            works={works}
            email={email}
          />
        ))}
      </div>
    </div>
  )
}

export default ArtistView