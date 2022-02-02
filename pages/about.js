import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return(
    <div>
      <div className="flex-col mx-auto px-8 sm:px-16 w-full">
        <Header/>
        <div className="max-w-5xl md:mx-auto items-center sm:ml-10 ml-5 mr-0 pl-10 sm:pl-10 m-2 mt-20
        border-b-0 border-t-2 border-l-0 border-r-0 hover:shadow-lg">
          <h2 className="mx-[40px] sm:mx-[230px] md:mx-[300px] lg:mx-[450px] mt-2 font-mono font-semibold lg:text-lg text-green-600">ABOUT US</h2>
          <h3 className="items-center text-center mr-20  md:mr-0 md:ml-20 lg:mx-[370px] pb-10">
            The Nelson Exhibitions is an art center in the University of Nigeria, Nsukka. We are gradually transforming to online exhibitions
            in order to reach, educate and entertain more
          </h3>
        </div>

        <div className="max-w-5xl md:mx-auto items-center sm:ml-10 ml-5 mr-0 pl-10 sm:pl-10 m-2 -mt-2
        border-2 border-b-0 border-t-2 border-l-0 border-r-0 hover:shadow-lg">
          <h2 className="mx-[40px] sm:mx-[230px] md:mx-[300px] lg:mx-[440px] mt-2 font-mono font-semibold lg:text-lg text-green-600">OUR VISION</h2>
          <h3 className="items-center text-center mr-20 lg:mx-[370px] pb-10">
            We are gradually transforming to online exhibitions in order to reach, educate and entertain more people. We see art works going into devices
            and that's where we are heading
          </h3>
        </div>

        <div className="max-w-5xl md:mx-auto items-center sm:ml-10 ml-5 mr-0 pl-10 sm:pl-10 m-2 -mt-2
        border-2 border-b-2 border-t-2 border-l-0 border-r-0 first:border-t hover:shadow-lg">
          <h2 className="mx-[40px] sm:mx-[230px] md:mx-[300px] lg:mx-[430px] mt-2 font-mono font-semibold lg:text-lg text-green-600">OUR MISSION</h2>
          <h3 className="items-center text-center mr-20 lg:mx-[370px] pb-10">
            The Nelson Exhibitions is an art center in the University of Nigeria, Nsukka. We are gradually transforming to online exhibitions
            in order to reach, educate and entertain more
          </h3>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default About