const NotFound = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-2 text-lg text-gray-600">Oops! Page not found.</p>
        <a
          href="/"
          className="mt-4 px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
        >
          Go Home
        </a>
      </div>
    );
  };
  
  export default NotFound;
  