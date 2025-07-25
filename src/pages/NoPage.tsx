import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow-sm p-6 dark:bg-purple-500 dark:border-gray-700">
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white md-5">
        404
      </h1>
      <h2 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white md-5">
        Page Not Found
      </h2>
      <p className="block mb-2 text-md font-medium text-white-900 dark:text-white">
        The page you are looking for does not exist.
      </p>
      <Link to="/">
        <button className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">
          Go to Home
        </button>
      </Link>
    </div>
  );
}

export default NoPage;
