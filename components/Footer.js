import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles"
import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import twitter from "../public/twitter.png"
import instagram from "../public/instagram.png"
import facebook from "../public/facebook.png"
import Image from "next/image";

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

function Footer() {
  const classes = useStyles();
  const [ modalStyle ] = useState(getModalStyle);
  const [ open, setOpen ] = useState(false);

  const router = useRouter()

  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <div>
            <h2 className="px-2 py-2 mx-3 ml-5 items-center text-green-600 text-lg">Contact the admin for any support.</h2>
          </div>
        </div>
      </Modal>
      <div className="bg-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-10 ml-15 bg-gray-800 text-gray-600"
        >
          <div className="space-y-4 text-xs text-gray-800 md:mx-auto">
            <h5 className="font-bold text-green-600">COMPANY</h5>
            <p className="cursor-pointer text-white hover:text-gray-300 md:ml-1 hover:underline" onClick={() => router.push("/about")}>About Us</p>
          </div>

          <div className="space-y-4 text-xs text-gray-800 md:mx-auto">
            <h5 className="font-bold text-green-600 md:ml-5">CONTACT US</h5>
            <p className="text-white">admin001@nelson.com</p>
          </div>

          <div className="space-y-4 text-xs text-gray-800 md:mx-auto">
            <h5 className="font-bold text-green-600 md:ml-7">PHONE</h5>
            <p className="text-white">+234 807 484 1411</p>
          </div>

          <div className="space-y-4 text-xs text-gray-800 md:mx-auto">
            <h5 className="font-bold text-green-600 md:ml-1">SUPPORT</h5>
            <p className="cursor-pointer text-white hover:text-gray-300 hover:underline" onClick={()=> setOpen(true)}>Help Centre</p>
          </div>
          <div className="space-y-4 text-xs text-gray-800 md:mx-auto xl:hidden">
            <Image
              onClick={() => router.push('https://twitter.com/cipherep')}
              src={twitter}
              width={27}
              height={24}
              objectFit="contain"
              className="cursor-pointer"
            />
            <Image
              onClick={() => router.push('https://www.instagram.com/autocipher/')}
              src={instagram}
              width={23}
              height={22}
              objectFit="contain"
              className="cursor-pointer"
            />
            <Image
              onClick={() => router.push('https://www.facebook.com')}
              src={facebook}
              width={27}
              height={28}
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>

        </div>
        <div className="mx-20 border-2 border-gray-600 border-r-0 border-l-0 border-t-2 border-b-0"/>
        <div className="hidden xl:grid grid-cols-1 md:grid-cols-2 gap-y-10 px-32 ml-20 pt-1 pb-3">
          <div>
            <h2 className="text-white ml-0 mr-20 text-sm">Copyright ©️ 2022 Nelson Exhibitions, All rights reserved.</h2>
          </div>
          <div className="flex mr-0 ml-20 pl-9 justify-content-end">
            <h2 className="text-white text-sm mx-3 cursor-pointer hover:text-gray-400">Terms of Use</h2>
            <h2 className="text-white text-sm mx-3 cursor-pointer hover:text-gray-400">Privacy Policy</h2>
            <h2 className="text-white text-sm ml-2 cursor-pointer hover:text-gray-400">Certification of Incorporation</h2>
            <h2 className="ml-2"/>
            <Image
              onClick={() => router.push('https://twitter.com/cipherep')}
              src={twitter}
              width={27}
              height={27}
              objectFit="contain"
              className="cursor-pointer"
            />
            <Image
              onClick={() => router.push('https://www.instagram.com/autocipher/')}
              src={instagram}
              width={20}
              height={20}
              objectFit="contain"
              className="cursor-pointer"
            />
            <Image
              onClick={() => router.push('https://www.facebook.com')}
              src={facebook}
              width={27}
              height={28}
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>

  );
}

export default Footer;
