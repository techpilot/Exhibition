import Image from "next/image";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {addToArt, removeFromArt} from "../slices/artSlice";
// import image from "../public/artfairBasel.jpeg"

function MediumCard({ name, image, date, artist }) {
  const router = useRouter()
  const dispatch = useDispatch()

  const result = () => {
    dispatch(removeFromArt(name))

    const artWork = {
      name,
      image,
      date,
      artist
    }

    //  Send the art work as an action to redux store
    dispatch(addToArt(artWork))
    console.log(artWork)

    router.push({
      pathname: "/art",
      query: {
        name
      }
    })
  }

  return(
    <div
      className="cursor-pointer hover:scale-105 transform transition duration-300 active:scale-95 ease-out mt-3 mb-20"
      onClick={result}
    >
      <div className="relative h-60 w-80">
        <Image src={`/${image}`}  layout="fill" objectFit="contain" className="rounded-lg"/>
      </div>
      <h2 className="font-semibold text-sm">{ name }</h2>
    </div>
  )
}

export default MediumCard