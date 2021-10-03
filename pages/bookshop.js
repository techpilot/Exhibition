import info from "../public/data/newData";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BooksView from "../components/BooksView";

const Bookshop = () => {
  const data = info

  return(
    <div>
      <div className="max-w-7xl mx-auto px-8 sm:px-16 sm:w-full bg-white">
        <Header />
        <BooksView data={data} />
      </div>
      <Footer />
    </div>
  )
}

export default Bookshop