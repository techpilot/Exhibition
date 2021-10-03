import info from "../public/data/newData";
import ExhibitionView from "../components/ExhibitionView";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Exhibitions() {
  const data = info
  return(
    <div>
      <div className="max-w-7xl mx-auto px-8 sm:px-16 sm:w-full bg-white">
        <Header />

        <ExhibitionView data={data}/>
      </div>
      <Footer />
    </div>
  )
}

export default Exhibitions