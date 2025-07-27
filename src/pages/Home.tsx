function Home() {
  return (
    <div className="pl-64 min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center px-4">
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white md-5text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
        Home Page
      </h1>
      <p className="text-lg md:text-xl font-light text-gray-900 dark:text-white">
        Welcome to the home page of Zero Scuze!
      </p>
      <button
        onClick={() => localStorage.removeItem("token")}
        className="mt-4 transition-all duration-300 focus:outline-none text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-md px-6 py-2 shadow-lg dark:focus:ring-blue-800"
      >
        LogOut
      </button>
    </div>
  );
}
export default Home;
