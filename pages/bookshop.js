import info from "../public/data/newData";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BooksView from "../components/BooksView";
import fetch from "isomorphic-unfetch";

const Bookshop = ({ arts }) => {
  const data = info
  // console.log("BOOKS", arts)

  return(
    <div>
      <div className="max-w-7xl mx-auto px-8 sm:px-16 sm:w-full bg-white">
        <Header />
        <BooksView data={arts} />
      </div>
      <Footer />
    </div>
  )
}

export default Bookshop

Bookshop.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/arts');
  const { data } = await res.json();

  return { arts: data }
}