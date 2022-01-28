import info from "../public/data/newData";
import ExhibitionView from "../components/ExhibitionView";
import Header from "../components/Header";
import Footer from "../components/Footer";
import fetch from "isomorphic-unfetch";

function Exhibitions({ arts }) {
  const data = info
  return(
    <div>
      <div className="max-w-7xl mx-auto px-8 sm:px-16 sm:w-full bg-white">
        <Header />

        <ExhibitionView data={arts}/>
      </div>
      <div className="-mr-12">
        <Footer />
      </div>
    </div>
  )
}

Exhibitions.getInitialProps = async () => {
  const res = await fetch(`http://localhost:3000/api/arts`)
  const { data } = await res.json()

  return { arts: data }
}

export default Exhibitions