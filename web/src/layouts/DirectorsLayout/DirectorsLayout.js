import { Link, routes } from '@redwoodjs/router'

const DirectorsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <div className="bg-white font-sans">
        <header className="flex justify-between py-4 px-8">
          <h1 className="text-xl font-semibold">
            <Link
              to={routes.adminDirectors()}
              className="text-gray-700 hover:text-gray-900 hover:underline"
            >
              Directors
            </Link>
          </h1>
          <Link
            to={routes.adminNewDirector()}
            className="flex bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-3 py-1 uppercase tracking-wide rounded"
          >
            <div className="text-xl leading-none">+</div>
            <div className="ml-1 leading-loose">New Director</div>
          </Link>
        </header>
        <main className="mx-4 pb-4">{props.children}</main>
      </div>
    </div>
  )
}

export default DirectorsLayout