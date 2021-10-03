import Head from 'next/head'
import Header from "../components/Header";
import Banner from "../components/Banner";
import info from "../public/data/newData";
import CardView from "../components/CardView";
import MediumCard from "../components/MediumCard";
import Footer from "../components/Footer";

export default function Home() {
  const data = info

  return (
    <div>
      <div className="max-w-7xl mx-auto px-8 sm:px-16 sm:w-full bg-white">
        <Head>
          <title>The Nelsons</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Header */}
        <Header />
        {/* Banner */}
        <Banner />

        <main className="max-w-7xl mx-auto px-8 py-8 sm:px-16 bg-white m-4 rounded-lg">
          <section className="pt-5">
            <div>
              <CardView data={data} />
            </div>
          </section>
        </main>

        <section>
          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3">
            {data.slice(6, 11).map((item) => (
              <MediumCard key={item.name} name={item.name} image={item.images[1]} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

// export async function getStaticProps() {
//   // const cardsData = await JSON.parse(fs.readFileSync(`${__dirname}\\public\\data\\tours-simple.json`, "utf-8"))
//
//   return {
//     props: {
//       cardsData,
//     },
//   };
// }
