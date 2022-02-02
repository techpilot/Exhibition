import Image from "next/image";
import {HeartIcon} from "@heroicons/react/solid";
import {StarIcon} from "@heroicons/react/outline";

const ReviewsPage = ({ review, art, user, image }) => {
 return (
   <div className="flex max-w-5xl mx-auto py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg
    transition duration-200 ease-out first:border-t">
    <div className="relative h-10 w-30 md:h-[70px] md:w-[100px] flex-shrink-0">
     <Image
       src={`/${image}`}
       layout="fill"
       objectFit="cover"
       className="rounded-2xl"
     />
    </div>

    <div className="flex flex-col flex-grow pl-5">
     <div className="flex justify-between">
      <p>{art}</p>
      <HeartIcon className="h-7 cursor-pointer text-red-400" />
     </div>

     <h4 className="pt-2 font-semibold">Review</h4>

     {/*<div className="border-b w-10 pt-4" />*/}

     <p className="pt-1 text-sm text-gray-500 flex-grow">{review}</p>

     <div className="flex justify-between items-end pt-5">
      <p className="flex items-center">
       <StarIcon className="h-5 text-red-400" />
       {/*{rating}*/}
      </p>

      <div>
       {/*<p className="text-lg lg:text-xl font-semibold pb-2">any</p>*/}
       <p className="text-right font-light italic">{user}</p>
      </div>
     </div>
    </div>
   </div>
 )
}

export default ReviewsPage