import Header from "../components/Header";
import LoginImage from "../components/LoginImage";
import Footer from "../components/Footer";

const Private = () => {
  return(
    <div>
      <div className="max-w-7xl mx-auto px-8 sm:px-16 sm:w-full bg-white">
        <Header />
        <LoginImage />
      </div>

      <Footer />
    </div>
  )
}

export default Private