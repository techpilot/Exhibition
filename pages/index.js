import Head from 'next/head'
import Header from "../components/Header";
import Banner from "../components/Banner";
import CardView from "../components/CardView";
import MediumCard from "../components/MediumCard";
import Footer from "../components/Footer";
import fetch from "isomorphic-unfetch";

export default function Home({ arts }) {
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
              <CardView data={arts} />
            </div>
          </section>
        </main>

        <section>
          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3">
            {arts.slice(5, 12).map((item) => (
              item.private === false ?
                <MediumCard key={item._id} name={item.name} image={item.image} date={item.startDate} artist={item.artist} />
                : null
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}


Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/arts');
  const { data } = await res.json();

  return { arts: data }
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
