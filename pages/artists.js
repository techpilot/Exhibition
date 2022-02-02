import ArtistView from "../components/ArtistView";
import Header from "../components/Header";
import Footer from "../components/Footer";
import artists from "../public/data/artist.json";

function Artists() {
  return(
    <div>
      <div className="max-w-7xl mx-auto px-8 sm:px-16 sm:w-full bg-white">
        <Header />

        <ArtistView data={artists.data}/>
      </div>
      <Footer />
    </div>
  )
}

export default Artists