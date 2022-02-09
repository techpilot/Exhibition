import Image from "next/image"
import { useSession } from "next-auth/react";
import artists from "../public/data/artist.json";
import {useRouter} from "next/router";
import {useState} from "react";
import fetch from "isomorphic-unfetch"
import Modal from "@material-ui/core/Modal"
import { makeStyles } from "@material-ui/core/styles"

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

const ArtDetails = ({ id, name, image, artist, summary, description, location }, {arts}) => {
  let { data: session } = useSession()
  const artsData = artists.data
  const router = useRouter();

  const classes = useStyles();
  const [ modalStyle ] = useState(getModalStyle);
  const [ open, setOpen ] = useState(false);

  console.log("id", id);
  const result = async () => {
    try {
      const deleted = await fetch(`http://localhost:3000/api/arts/${id}`, {
        method: "Delete"
      })

      await router.push("/")
    } catch (error) {
      console.log(error);
    }
  };

  return(
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <p className="text-red-600 font-serif text-center">Are you sure?</p>
          <div className="flex space-x-3 ml-20 mt-3">
            <button className="border-2 border-gray-300 text-white p-2 bg-gradient-to-b rounded-2xl bg-red-700" onClick={result}>Confirm</button>
            <button className="border-2 p-2 bg-gradient-to-b rounded-2xl" onClick={() => setOpen(false)}>Cancel</button>
          </div>
        </div>
      </Modal>
      <div className="w-full sm:max-w-5xl mx-auto my-5 md:my-10 px-8 py-1 shadow-2xl rounded-lg">
        <div className="relative flex-col max-w-7xl mx-auto px-8 sm:px-16 sm:w-full">
          <div className="mx-auto items-center ml-0 m-2 mt-20 h-[450px] w-[700px]">
            <Image src={`/${image}`} layout="fill" objectFit="contain" className="rounded-xl"/>
          </div>
        </div>

        <div className="mx-[150px] sm:mx-[200px] lg:mx-[430px] text-sm text-center">
          <h2 className="font-semibold">{artist}'s</h2>
          <p className="font-bold text-gray-700">{name}</p>
          <p className="italic pt-2 text-gray-600">@{location}</p>
        </div>

        <div className="flex lg:grid lg:grid-cols-2 ">
          <div>
            <h1 className="font-bold text-xs lg:text-sm text-gray-700 mt-10 border-gray-400 border-r-0 border-l-0 border-t-0 border-b-2">SUMMARY</h1>
            <p className="mt-3 mb-20 text-justify text-gray-600 font-serif">{summary}</p>
          </div>

          <div className="hidden mx-10 lg:flex flex-col">
            <h1 className="font-bold text-xs lg:text-sm text-black mt-10 ">About {artist}</h1>
            {
              artsData.slice(3, 4).map(({ works }) => (
                <p className="mt-3 mb-20 text-justify text-gray-600 font-serif">{works}</p>
              ))
            }
          </div>
        </div>

        <div className="-mt-20">
          <h1 className="font-bold text-xs lg:text-sm text-gray-700 mt-10 border-gray-400 border-r-0 border-l-0 border-t-0 border-b-2">DETAILS</h1>
          <p className="mt-5 mb-10 lg: mb-20 text-justify text-gray-600 font-serif">{description}</p>
          {/*<p className="mt-5 mb-10 lg:mb-20">{description}</p>*/}
        </div>

        <div className="flex flex-col lg:hidden">
          <h1 className="font-bold text-xs lg:text-sm text-black mt-20">About {artist}</h1>
          {
            artsData.slice(3, 4).map(({ works }) => (
              <p className="mt-3 mb-20 text-justify text-gray-600 font-serif">{works}</p>
            ))
          }
        </div>
        { session && session.user.name === "admin" ?
          <div>
            <h1 className="px-4 py-2 mb-3 mx-20 text-center lg:mx-[440px] border border-gray-600 rounded-full cursor-pointer hover:shadow-xl hover:bg-red-700 active:scale-95 active:bg-red-600
            hover:text-white hover:border-gray-200 transition transform duration-100 ease-out" onClick={() => (setOpen(true))}>Delete</h1>
          </div> : null
        }
      </div>
    </div>
  )
}

ArtDetails.getInitialProps = async ({query: { id }}) => {
  const res = await fetch(`http://localhost:3000/api/arts/${id}`);
  const { data } = await res.json();

  return {art: data}
}

export default ArtDetails