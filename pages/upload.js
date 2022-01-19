import {useForm} from "react-hook-form";
import fetch from "isomorphic-unfetch";
import {useRouter} from "next/router";
import Image from "next/image";
import profile from "../public/default.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSession } from "next-auth/react";
import { useState } from "react";
import {Button} from "semantic-ui-react";

const Upload = () => {
  const { register, handleSubmit } = useForm()
  const router = useRouter()
  const { data: session } = useSession()
  const [client, setClient] = useState()

  const result = () => {
    if (session) {
      setClient(session.user.name)
    } else {
      setClient(null)
    }
  };

  const onSubmit = async (data) => {

    const data2 = new FormData();
    data2.append("file", data.image[0]);
    console.log("public image", data2);
    console.log(data.image[0])

    // console.log(data.image[0].name)
    if (data.image[0]) {
      data.image = data.image[0].name
    } else {
      alert("Please select an image")
    }

    // console.log("after", data.image)
    // console.log(data)
    // console.log(JSON.stringify(data))

    try {
      const res = await fetch('http://localhost:3000/api/arts', {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      await router.push("/upload")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="max-w-7xl sm:mx-auto -px-8 sm:px-16 sm:w-full bg-white">
        <Header />

        <Button className="border-2 px-2 mt-10 rounded-full mx-20 cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100
            transition transform duration-100 ease-out" onClick={result}>
          PROCEED
        </Button>

        {session && client === "admin" ?
          <div className="relative my-3 border rounded-2xl shadow-lg ml-20 mr-20">
            {/*<input ref={register} type="file" name="image"/>*/}
            {/*<input ref={register} type="text" name="name" placeholder="Title"/>*/}
            {/*<input ref={register} type="text" name="location" placeholder="Age"/>*/}
            {/*<button>Submit</button>*/}

            <h1 className="mx-[45px] sm:mx-[67px] md:mx-[80px] lg:mx-[240px] xl:mx-[300px] my-10 px-20 text-xl md:text-2xl text-green-600
              font-bold items-center">
              UPLOAD AN ART
            </h1>

            <form className="pl-3 ml-20" onSubmit={handleSubmit(onSubmit)}>

              <h2 className="mx-[2px] lg:mx-[170px] mt-2 text-sm font-semibold text-gray-500 mt-5">Image</h2>
              <div className="flex mx-auto sm:mx-auto md:mx-auto lg:mx-[170px] pr-20 items-center py-2">
                <input
                  className="px-2 py-2 mx-3 border-gray-100 bg-transparent outline-none flex-grow text-sm text-gray-600 border-2 bg-gray-100 rounded-md
                    placeholder-gray-400 focus:border-yellow-600 focus:border-b-4 focus:border-l-0 focus:border-r-0 focus:border-t-0 focus:bg-green-50"
                  type="file" ref={register} name="image"/>
              </div>

              <h2 className="mx-[2px] lg:mx-[170px] mt-2 text-sm font-semibold text-gray-500 mt-5">Name</h2>
              <div className="flex mx-auto sm:mx-auto md:mx-auto lg:mx-[170px] pr-20 items-center py-2">
                <input
                  className="px-2 py-2 mx-3 border-gray-100 bg-transparent outline-none flex-grow text-sm text-gray-600 border-2 bg-gray-100 rounded-md
                    placeholder-gray-400 focus:border-yellow-600 focus:border-b-4 focus:border-l-0 focus:border-r-0 focus:border-t-0 focus:bg-green-50 focus:shadow-md"
                  type="text"
                  ref={register} name="name"
                  placeholder="enter a name"
                />
              </div>

              <h2 className="mx-[2px] lg:mx-[170px] mt-2 text-sm font-semibold text-gray-500 mt-5">Artist</h2>
              <div className="flex mx-auto sm:mx-auto md:mx-auto lg:mx-[170px] pr-20 items-center py-2">
                <input
                  className="px-2 py-2 mx-3 border-gray-100 bg-transparent outline-none flex-grow text-sm text-gray-600 border-2 bg-gray-100 rounded-md
                    placeholder-gray-400 focus:border-yellow-600 focus:border-b-4 focus:border-l-0 focus:border-r-0 focus:border-t-0 focus:bg-green-50 focus:shadow-md"
                  type="text"
                  ref={register}
                  name="artist"
                  placeholder="enter an artist"
                />
              </div>

              <h2 className="mx-[2px] lg:mx-[170px] mt-2 text-sm font-semibold text-gray-500 mt-5">Location</h2>
              <div className="flex mx-auto sm:mx-auto md:mx-auto lg:mx-[170px] pr-20 items-center py-2">
                <input
                  className="px-2 py-2 mx-3 border-gray-100 bg-transparent outline-none flex-grow text-sm text-gray-600 border-2 bg-gray-100 rounded-md
                    placeholder-gray-400 focus:border-yellow-600 focus:border-b-4 focus:border-l-0 focus:border-r-0 focus:border-t-0 focus:bg-green-50 focus:shadow-md"
                  type="text"
                  ref={register}
                  name="location"
                  placeholder="enter a location"
                />
              </div>

              <h2 className="mx-[2px] lg:mx-[170px] mt-2 text-sm font-semibold text-gray-500 mt-5">Private?</h2>
              <div className="flex mx-auto sm:mx-auto md:mx-auto lg:mx-[170px] pr-20 items-center py-2">
                <select className="px-2 py-2 mx-3 border-gray-100 bg-transparent outline-none flex-grow text-sm text-gray-600 border-2 bg-gray-100 rounded-md
                    placeholder-gray-400 focus:border-yellow-600 focus:border-b-4 focus:border-l-0 focus:border-r-0 focus:border-t-0 focus:bg-green-50 focus:shadow-md"
                  name="private"
                  id="private"
                  ref={register}
                >
                  <option value="false">false</option>
                  <option value="true">true</option>
                </select>
              </div>

              <h2 className="mx-[2px] lg:mx-[170px] mt-2 text-sm font-semibold text-gray-500 mt-5">Category</h2>
              <div className="flex mx-auto sm:mx-auto md:mx-auto lg:mx-[170px] pr-20 items-center py-2">
                <select className="px-2 py-2 mx-3 border-gray-100 bg-transparent outline-none flex-grow text-sm text-gray-600 border-2 bg-gray-100 rounded-md
                    placeholder-gray-400 focus:border-yellow-600 focus:border-b-4 focus:border-l-0 focus:border-r-0 focus:border-t-0 focus:bg-green-50 focus:shadow-md"
                  name="category"
                  id="category"
                  ref={register}
                >
                  <option value="exhibition">exhibition</option>
                  <option value="sculpture">sculpture</option>
                </select>
              </div>



              <h2 className="mx-[2px] lg:mx-[170px] mt-2 text-sm font-semibold text-gray-500 mt-5">Summary</h2>
              <div className="flex mx-auto sm:mx-auto md:mx-auto lg:mx-[170px] pr-20 items-center py-2">
                <textarea
                  className="px-2 py-2 mx-3 border-gray-100 bg-transparent outline-none flex-grow text-sm text-gray-600 border-2 bg-gray-100 rounded-md
                    placeholder-gray-400 focus:border-yellow-600 focus:border-b-4 focus:border-l-0 focus:border-r-0 focus:border-t-0 focus:bg-green-50 focus:shadow-md"
                  type="text"
                  ref={register}
                  name="summary"
                  placeholder="enter a summary"
                />
              </div>

              <h2 className="mx-[2px] lg:mx-[170px] mt-2 text-sm font-semibold text-gray-500 mt-5">Description</h2>
              <div className="flex mx-auto sm:mx-auto md:mx-auto lg:mx-[170px] pr-20 items-center py-2">
                <textarea
                  className="px-2 py-2 mx-3 border-gray-100 bg-transparent outline-none flex-grow text-sm text-gray-600 border-2 bg-gray-100 rounded-md
                    placeholder-gray-400 focus:border-yellow-600 focus:border-b-4 focus:border-l-0 focus:border-r-0 focus:border-t-0 focus:bg-green-50 focus:shadow-md"
                  type="textarea"
                  ref={register}
                  name="description"
                  placeholder="enter description"
                />
              </div>
              <button className="hidden md:flex mx-[75px] sm:mx-auto md:mx-auto lg:mx-[250px] mx-[330px] items-center md:border-2 rounded-md py-2 md:shadow-sm border-green-600
                px-20 md:px-32 m-auto mt-16 mb-24 bg-gradient-to-b from-green-700 to-green-600 text-white hover:shadow-lg
                active:scale-95 transform transition duration-500 ease-out">
                Upload
              </button>
            </form>

          </div> :  <h2 className="mx-[45px] sm:mx-[67px] md:mx-[80px] lg:mx-[240px] xl:mx-[300px] my-10 px-20 text-red-600
            font-bold items-center">Strictly for Admins only. Make sure you are provided with an access</h2>
        }
      </div>
      <Footer />
    </div>
  )
}

export default Upload