import fetch from "isomorphic-unfetch";

const AdminPage = ({ arts }) => {
  return (
    <div className="flex py-3 items-center m-auto border border-r-0 border-l-0 border-t-2 border-b-0">
      <div className="my-auto ml-0 mr-20 my-auto">
        <h2 className="font-semibold font-mono text-gray-100">UPCOMING EVENTS</h2>
        {/* 📌 Destructure every art item, check the items that there dates are more than the recent date */}
        <p className="text-gray-100">
          <li>NYC Petzel</li>
          <li>Jeriqthehussler</li>
          <li>Kris work</li>
        </p>
      </div>
      <div className="mr-0 m-auto justify-content-end">
        <h2 className="font-semibold font-mono text-gray-100">PAST EVENTS</h2>
        {/* 💕 Destructure every art item, check the items that there dates are less than the recent date */}
        <p className="text-gray-100">
          <li>NYC Petzel</li>
          <li>Jeriqthehussler</li>
          <li>Kris work</li>
        </p>
      </div>
    </div>
  )
}

export default AdminPage

// AdminPage.getInitialProps = async () => {
//   const res = await fetch('http://localhost:3000/api/arts');
//   const { data } = await res.json();
//
//   return { arts: data }
// }
//
// AdminPage.getInitialProps = async () => {
//   const res = await fetch('http://localhost:3000/api/users');
//   const { data } = await res.json();
//
//   return { users: data }
// }