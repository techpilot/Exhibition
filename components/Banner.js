import Image from "next/image"
import info from "../public/data/newData";
import art1 from "../public/data/tours/art1.jpeg"
import art2 from "../public/data/tours/art2.jpeg"
import art3 from "../public/data/tours/artfairCover.jpeg"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel";
// import { Carousel } from "react-bootstrap"

function Banner(){
  return (
    <div className="relative">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        showArrows={false}
        interval={5000}
      >
        <div className="relative h-[230px] sm:h-[300px] md:h-[400px] lg:h-[550px] xl:h-[550px] 2xl:h-[600px] mt-10">
          <Image
            src={art1}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-[230px] sm:h-[300px] md:h-[400px] lg:h-[550px] xl:h-[550px] 2xl:h-[600px] mt-10">
          <Image
            src={art2}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-[230px] sm:h-[300px] md:h-[400px] lg:h-[550px] xl:h-[550px] 2xl:h-[600px] mt-10">
          <Image
            src={art3}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Carousel>


      {/*<Carousel controls={false} fade={true} pause={false}>*/}
      {/*  <Carousel.Item interval={5000}>*/}
      {/*    <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[550px] xl:h-[540px] 2xl:h-[570px] mt-0">*/}
      {/*      <Image*/}
      {/*        src={art1}*/}
      {/*        layout="fill"*/}
      {/*        objectFit="cover"*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*  </Carousel.Item>*/}
      {/*  <Carousel.Item interval={5000}>*/}
      {/*    <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[550px] xl:h-[540px] 2xl:h-[570px] mt-0">*/}
      {/*      <Image*/}
      {/*        src={art2}*/}
      {/*        layout="fill"*/}
      {/*        objectFit="cover"*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*  </Carousel.Item>*/}
      {/*</Carousel>*/}

      <div className="mb-1">
        <h1 className="text-2xl">
          {info[13].artist}'s
        </h1>
        <p className="italic">
          {info[13].name}
        </p>
        <p className="text-sm">
          {`${info[13].startDates[0]} - ${info[13].startDates[1]}`}
        </p>
      </div>
    </div>
  )
}

export default Banner