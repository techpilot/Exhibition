import fetch from "isomorphic-unfetch";
import Header from "../components/Header";
import {useSession} from "next-auth/react";
import ReviewsPage from "../components/ReviewsPage";

const Reviews = ({ reviews }) => {
  const { data: session } = useSession();
  console.log("rev", reviews)

  return (
    <div className="max-w-7xl mx-auto px-1 sm:px-16 sm:w-full bg-white">
      <Header />

      {session ?
        reviews?.map((item) => (
          <ReviewsPage key={item._id} identity={item.id} review={item.review} user={item.user.name} art={item.art.name} image={item.art.image} />
        )) : <h2 className="text-red-600 mx-[45px] sm:mx-[67px] md:mx-[80px] lg:mx-[240px] xl:mx-[300px] my-10 px-20 text-red-600
            font-bold items-center text-center">User not signed in, permission denied!</h2>
      }

    </div>
  )
}

export default Reviews;

Reviews.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/reviews');
  const { data } = await res.json();

  return { reviews: data }
}
