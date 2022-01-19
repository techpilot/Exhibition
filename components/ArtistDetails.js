const ArtistDetails = ({ artist, summary }) => {
  return (
    <div className="relative">
      <div className="max-w-5xl sm:max-w-5xl mx-auto my-2 md:my-5 px-8 py-1 shadow-md rounded-xl bg-gray-50">
        <h1 className="font-bold text-xs lg:text-xl text-gray-700 mt-10 border-gray-400 border-r-0 border-l-0 border-t-0 border-b-2 mb-5">
          {artist}
        </h1>
        <div className="flex mb-3">
          <div className="mx-3">
            <h2 className="font-semibold text-lg text-gray-600">About</h2>
            <p>
              {summary}
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg text-gray-600 font-i">Works</h2>
            <p>{summary}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistDetails