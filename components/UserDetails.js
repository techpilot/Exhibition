import Image from "next/image"
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import profile from "../public/default.jpg";

const UserDetails = () => {
  const [ form, setForm ] = useState({image: " ", name: " ", artist: " ", location: " ", private: " ", category: " ", summary: " ", description:" ",
    startDate: Date.now(), endDate: Date.now()
  })
  const [ isSubmitting, setIsSubmitting ] = useState(false)
  const [ errors, setErrors ] = useState({})
  const router = useRouter()

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        createArt();
        // alert("success")
      } else {
        setIsSubmitting(false)
      }
    }
  }, [errors])

  const createArt = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/arts', {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })
      await router.push("/users")
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let errs = validate()
    setErrors(errs)
    setIsSubmitting(true)
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
    console.log(e.target.value)
  }

  const validate = () => {
    let err = {}
    if (!form.name) err.name = 'Name is required'
    if (!form.summary) err.summary = 'Summary is required'

    return err
  }

  return (
    <div className="relative my-3 border border-t-0 border-r-0 border-l-2 border-b-0 border-black ml-20 mr-20">
      <div>
        <div className="relative items-center m-2 mt-5 mb-2 h-[110px] w-[130px] md:h-[120px] lg:w-[130px] hover:shadow-lg ease-out">
          <Image src={profile} layout="fill" objectFit="contain"/>
        </div>
        <h2 className="mx-auto ml-3 mb-3">Pretzel Ife</h2>
      </div>

      <div className="flex my-10">
        <h2 className="ml-3 font-semibold text-sm">NO OF ARTS: 35</h2>
        <h2 className="mx-5 font-semibold text-sm">NO OF USERS: 10</h2>
      </div>

      <div className="flex ml-3">
        <div>
          <h2 className="font-semibold font-mono">UPCOMING EVENTS</h2>
          <p>📌 Destructure every art item, check the items that there dates are greater than the recent date</p>
        </div>
        <div>
          <h2 className="font-semibold font-mono">PAST EVENTS</h2>
          <p>💕 Destructure every art item, check the items that there dates are less than the recent date</p>
        </div>
      </div>

      <div>
        <form className="pl-3" onSubmit={handleSubmit}>
          <div className="pt-4">
            <h2>Image</h2>
            <input type="file" name="image" onChange={handleChange}/>
          </div>

          <div className="pt-4">
            <h2>Name</h2>
            <input type="text" name="name" placeholder="enter a name" onChange={handleChange}/>
          </div>

          <div className="pt-4">
            <h2>Artist</h2>
            <input type="text" name="artist" placeholder="enter an artist" onChange={handleChange}/>
          </div>

          <div className="pt-4">
            <h2>Location</h2>
            <input type="text" name="location" placeholder="enter a location" onChange={handleChange}/>
          </div>

          <div className="pt-4">
            <h2>Private?</h2>
            <input type="text" name="private" placeholder="enter privacy" onChange={handleChange}/>
          </div>

          <div className="pt-4">
            <h2>Category</h2>
            <input type="text" name="category" placeholder="enter a category" onChange={handleChange}/>
          </div>

          <div className="pt-4">
            <h2>Summary</h2>
            <input type="text" name="summary" placeholder="enter a summary" onChange={handleChange}/>
          </div>

          <div className="pt-4">
            <h2>Description</h2>
            <input type="text" name="description" placeholder="enter a description" onChange={handleChange}/>
          </div>
          <button className="pt-2 pb-20">upload</button>
        </form>
      </div>
    </div>
  )
}

UserDetails.getInitialProps = async () => {

}

export default UserDetails
