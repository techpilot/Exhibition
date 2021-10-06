import { useRouter } from "next/router";
import Image from "next/image";
import image from "../public/data/tours/PageEx.jpeg"
import info from "../public/data/newData";

const Art = () => {
  const data = info
  const router = useRouter()
  const { location, startDate, endDate, names, summary, description } = router.query

  // data.map(({ name }) => {
  //   if (name === names) {
  //     console.log(names)
  //   }
  // })
  console.log(names)

  return(
    <div>
      <h2>{summary}</h2>
    </div>
  )
}

export default Art