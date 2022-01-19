import Header from "../components/Header";
import LoginImage from "../components/LoginImage";
import Footer from "../components/Footer";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import img from "../public/data/tours/PageEx.jpeg";
import fetch from "isomorphic-unfetch";
import Modal from "@material-ui/core/Modal"
import { makeStyles } from "@material-ui/core/styles"
import {useState} from "react";

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


const Private = ({ arts }) => {
  const classes = useStyles();
  const [ modalStyle ] = useState(getModalStyle);
  const [ open, setOpen ] = useState(false);

  const { data: session } = useSession()
  const router = useRouter()

  const account = async () => {
    if (session) {
      try {
        // await fetch(`http://localhost:3000/api/reviews/${session.id}`, {
        //   method: "Delete"
        // })
        await signOut();
        await router.push("/private");
        setOpen(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("No logged in user");
    }

    // console.log(session.id);

  }

  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <p>Delete account and cancel all subscription.</p>
          <div className="flex space-x-3">
            <button className="border-2 p-2" onClick={account}>Delete</button>
            <button className="border-2 p-2">Cancel</button>
          </div>
        </div>
      </Modal>
      <div className="max-w-7xl mx-auto px-1 sm:px-16 sm:w-full bg-white">
        <Header />
        <div className="hidden lg:inline-flex mb-3 mt-10 space-x-3 text-gray-800 whitespace-nowrap">
          <p className="px-4 py-2 mb-3 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100
            transition transform duration-100 ease-out" onClick={() => (setOpen(true))}>Cancellation Flexibility</p>
          <button className="px-4 py-2 mb-3 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100
            transition transform duration-100 ease-out"
             onClick={() => (router.push("/reviews"))}
          >Reviews</button>
          <p className="px-4 py-2 mb-3 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100
            transition transform duration-100 ease-out">Price</p>
          <p className="px-4 py-2 mb-3 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100
            transition transform duration-100 ease-out">Exhibition & Sculptures</p>
          <p className="px-4 py-2 mb-3 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100
            transition transform duration-100 ease-out">More Filters</p>
        </div>
        <div className="py-5">
          {session ?
            arts?.map((item) => (
              item.private === true ?
                <LoginImage key={item._id} identity={item.id} name={item.name} image={item.image} secret={item.private} category={item.category}
                            location={item.location} summary={item.summary} description={item.description} artist={item.artist} />
                : null
            )) :
            <div onClick={() => {router.push("/api/auth/signin")}}>
              <div className="relative h-[250px] w-[400px] sm:h-[300px] sm:w-[500px] md:h-[400px] md:w-[600px] cursor-pointer mx-auto mt-7">
                <Image src={img} layout="fill"
                       className="hover:scale-95 transform transition duration-500 active:scale-105 ease-out"
                />
              </div>
              <h2
                className="mx-[130px] sm:mx-[230px] md:mx-[300px] lg:mx-[470px] mt-2 font-mono mb-20 font-semibold text-xl"
              >
                SIGN IN TO ACCESS
              </h2>
            </div>
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Private

Private.getInitialProps = async () => {
  const res = await fetch('http://127.0.0.1:3000/api/arts');
  const { data } = await res.json();

  return { arts: data }
}
