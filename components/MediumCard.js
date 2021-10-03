import Image from "next/image";

function MediumCard({ name, image }) {
  return(
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out my-6">
      <div className="relative h-60 w-80">
        <Image src={image} layout="fill" objectFit="contain" className="rounded-lg"/>
      </div>
      <h2 className="font-semibold text-sm">{ name }</h2>
    </div>
  )
}

export default MediumCard