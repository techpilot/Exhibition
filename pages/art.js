import { useSelector } from "react-redux";
import ArtDetails from "../components/ArtDetails";
import { selectItems } from "../slices/artSlice";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import DetailsHeader from "../components/ExhibitionSmall";
import Header from "../components/Header";

const Art = () => {
  const items = useSelector(selectItems)
  const router = useRouter()

  const { name } = router.query

  // data.map(({ name }) => {
  //   if (name === names) {
  //     return setResult(name)
  //   }
  // })

  return(
    <div>
      <div className="w-full sm:max-w-7xl sm:mx-auto -px-8 sm:px-16 sm:w-full bg-white">
        <Header/>

        {items.map((item, i) => (
          <ArtDetails
            key={i}
            id={item.identity}
            name={item.name}
            image={item.image}
            artist={item.artist}
            summary={item.summary}
            description={item.description}
            location={item.location}
          />
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default Art