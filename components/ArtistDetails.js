const ArtistDetails = ({ name, email, about, works }) => {
  return (
    <div className="relative">
      <div className="w-full sm:max-w-5xl mx-auto my-2 md:my-5 px-0 sm:px-8 py-1 sm:shadow-md sm:rounded-xl sm:bg-gray-50">
        <h1 className="font-bold text-xs lg:text-xl text-gray-700 mt-10 border-gray-400 border-r-0 border-l-0 border-t-0 border-b-2 mb-0">
          {name}
        </h1>
        <h1 className="mb-2">{email}</h1>
        <div className="sm:grid gap-x-3 mb-3 ">
          <div className="mx-0 mb-5">
            <h2 className="font-semibold font-mono text-lg text-gray-600 w-50">About</h2>
            <p className="text-justify text-gray-600 font-serif">
              {about}
            </p>
          </div>
          <div>
            <h2 className="font-semibold  mt-5 sm:mt-0 text-lg text-gray-600 font-mono w-50">Works</h2>
            <p className="text-justify text-gray-600 font-serif">{works}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistDetails