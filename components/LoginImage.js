import Image from "next/image";
import { useRouter } from "next/router";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import {useState} from "react";
import { useSession } from "next-auth/react";
import Modal from "@material-ui/core/Modal"
import { makeStyles } from "@material-ui/core/styles"
import fetch from "isomorphic-unfetch";
import { useForm } from "react-hook-form";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const MAX_RATING = 5
const MIN_RATING = 2

const LoginImage = ({ identity, name, artist, image, secret, category, location, summary, description }) => {
  const { register, handleSubmit } = useForm()

  const classes = useStyles();
  const [ modalStyle ] = useState(getModalStyle);

  const [ open, setOpen ] = useState(false);
  const [ art, setArt ] = useState();
  const [ user, setUser ] = useState();

  const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING)
  const { data: session } = useSession()

  const router = useRouter();

  const result = () => {
    if (session) {
      setUser(session.id)
      setArt(identity)
      setOpen(true);
    } else {
      setArt(null);
      setUser(null);
    }
    console.log("review", art, user)
  }
  console.log("review 2", art, user)
  // console.log("identity", identity);

  const onSubmit = async (data) => {
    data.user = session.id;
    data.art = art

    console.log("data: ", data)

    try {
      const res = await fetch('http://localhost:3000/api/reviews', {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      await router.push("/private")
      setOpen(false);
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <div
      className="flex py-7 px-2 pr-4 border-b hover:opacity-80 hover:shadow-lg
    transition duration-200 ease-out first:border-t"
    >
    <Modal open={open} onClose={() => setOpen(false)}>
      <div style={modalStyle} className={classes.paper}>
        <form className="flex-col" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="ml-20 items-center">Review</h2>
          <textarea className="px-2 py-2 mx-3 ml-20 border-gray-100 bg-transparent outline-none flex-grow text-sm text-gray-600 border-2 bg-gray-100 rounded-md
            placeholder-gray-400 focus:border-yellow-600 focus:border-b-4 focus:border-l-0 focus:border-r-0 focus:border-t-0 focus:bg-green-50 focus:shadow-md"
            placeholder="enter"
            name="review"
            ref={register}
          />
          <button className="ml-20 mr-0 px-2 items-end border-2 rounded-lg">Post</button>
        </form>

      </div>
    </Modal>

      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={`/${image}`}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{artist}</p>
          <HeartIcon className="h-7 cursor-pointer" onClick={result} />
        </div>

        <h4 className="text-xl">{name}</h4>

        <div className="border-b w-10 pt-4" />

        <p className="pt-2 text-sm text-gray-500 flex-grow">@{location} - {summary}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {rating}
          </p>

          <div>
            <p className="text-lg lg:text-xl font-semibold pb-2">{category}</p>
            <p className="text-right font-light">Private</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginImage

// LoginImage.getInitialProps = async () => {
//   const res = await fetch('http://localhost:3000/api/arts');
//   const { data } = await res.json();
//
//   return { arts: data }
// }