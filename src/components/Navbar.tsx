import { Link } from "react-router-dom"

const Navbar = (): JSX.Element => {
  return (
    <>
      <nav className="w-100 h-20 bg-gray-700 text-white shadow-lg">
        <div className="m-w-[1240px] w-full h-full mx-auto px-4 flex items-center">
          <Link to="/">
            <h1>React Query CRUD</h1>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar