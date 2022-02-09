import Image from "next/image";
import profile from "../public/default.jpg";
import fetch from "isomorphic-unfetch";
import AdminPage from "../components/AdminPage"
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import {useState} from "react";

const Admin = ({ arts }) => {
  let { data: session } = useSession()
  const router = useRouter();
  const [client, setClient] = useState()
  const [user, setUser] = useState()

  const result = ({ arts }) => {
    if (session) {
      setClient(session.user.name)
      setUser(session.user)
    } else {
      setClient(null)
      setUser(null)
    }

    console.log("session", session)
    console.log("client", client)
  };

  // const items = useSelector(selectItems)
  console.log("select:", client);

  return (
    <div className="max-w-7xl sm:mx-auto -px-8 sm:px-16 sm:w-full">
      <div className="max-w-5xl sm:max-w-5xl mx-auto my-5 md:my-10 px-8 py-1 shadow-lg rounded-xl pb-10 bg-gray-700">
        <button className="pb-0" onClick={result}>SHOW</button>
        <div className="pt-5 border border-r-2 border-l-2 border-b-0 border-t-0 border-gray-100">
          {client === "admin" ?
              <div>
                <div className="relative flex-col max-w-7xl mx-auto px-8 sm:px-16 sm:w-full">
                  <div className="mx-auto items-center ml-0 m-2 mt-20 h-[200px] w-[150px]">
                    <Image className="rounded-full" src={profile} layout="fill" objectFit="contain"/>
                  </div>
                </div>

                <div className="max-w-5xl  mx-[150px] sm:mx-[200px] lg:mx-[200px] my-5 md:my-10 px-8 py-1">
                  <div className="flex my-2">
                    <p className="mr-1 font-bold text-gray-100">User ID:</p>
                    <h2 className="text-gray-100">{session.id}</h2>
                  </div>
                  <div className="flex my-2">
                    <p className="mr-1 font-bold text-gray-100">Role:</p>
                    <h2 className="text-gray-100">{client}</h2>
                  </div>
                  <div className="flex my-2">
                    <p className="mr-1 font-bold text-gray-100">Email:</p>
                    <h2 className="text-gray-100">{user.email}</h2>
                  </div>
                  <div className="flex my-2 border border-r-0 border-l-0 border-t-0 border-b-2">
                    <p className="mr-1 font-bold text-gray-100">Mobile:</p>
                    <h2 className="text-gray-100">08123994356</h2>
                  </div>
                </div>

                <div className="max-w-5xl  mx-[150px] sm:mx-[200px] lg:mx-[200px] my-5 md:my-10 px-8 py-1">
                  <div className="flex flex-grow my-3 mx-auto mb-0">
                    <h2 className="my-auto ml-0 mr-20 my-auto font-semibold text-sm text-gray-100">NO OF ARTS: 35</h2>
                    <h2 className="mr-0 m-auto justify-content-end font-semibold text-sm text-gray-100">NO OF USERS: 10</h2>
                  </div>
                </div>

                <div className="max-w-5xl  mx-[150px] sm:mx-[200px] lg:mx-[200px] my-5 md:my-10 px-8 py-1">
                  <AdminPage arts={arts} />
                </div>

                <div className="max-w-5xl  mx-[150px] sm:mx-[200px] lg:mx-[260px] px-8 pb-10">
                  <button className="text-gray-100 px-20 items-center rounded-md py-2 border-green-600
                    px-20 md:px-32 m-auto bg-gradient-to-b from-green-700 to-green-600 hover:shadow-lg
                    active:scale-95 transform transition duration-500 ease-out"
                          onClick={() => router.push("/upload")}
                  >
                    Add Art Work
                  </button>
                  <button className="text-gray-100 px-20 items-center rounded-md py-2 border-green-600
                    px-20 md:px-32 m-auto my-7 bg-gradient-to-b from-green-700 to-green-600 hover:shadow-lg
                    active:scale-95 transform transition duration-500 ease-out"
                    onClick={() => router.push("/user-upload")}
                  >
                    Add User Data
                  </button>
                </div>
              </div>
              : null
          }
        </div>
      </div>
    </div>
  )
}

export default Admin

Admin.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/arts');
  const { data } = await JSON.stringify(res);

  return { arts: data }
}




