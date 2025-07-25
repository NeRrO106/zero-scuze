function Hero() {
  return (
    <div className="pl-64 min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center px-4">
      <div className="text-center max-w-xl text-white space-y-6">
        <h1 className="text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
          Zero Scuze
        </h1>
        <p className="text-lg md:text-xl font-light">
          Organizează-ți antrenamentele și atinge-ți obiectivele. Fără scuze.
        </p>
        <p className="italic text-md text-white/90">
          Pentru o experiență completă, autentifică-te sau creează un cont.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="transition-all duration-300 focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-semibold rounded-lg text-md px-6 py-2 shadow-lg dark:focus:ring-green-800">
            Sign In
          </button>
          <button className="transition-all duration-300 focus:outline-none text-gray-900 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-semibold rounded-lg text-md px-6 py-2 shadow-lg dark:focus:ring-yellow-900">
            Sign Up
          </button>
          <button
            className="transition-all duration-300 focus:outline-none text-gray-900 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-semibold rounded-lg text-md px-6 py-2 shadow-lg dark:focus:ring-yellow-900"
            onClick={() => localStorage.setItem("token", "abc123")}
          >
            Set Token
          </button>
        </div>
      </div>
    </div>
  );
}
export default Hero;
