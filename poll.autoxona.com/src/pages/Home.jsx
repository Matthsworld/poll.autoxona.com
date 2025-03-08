import { useState, useEffect } from "react";

function Home() {
  const [votes, setVotes] = useState(120);

  // Simulating live vote updates every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVotes((prevVotes) => prevVotes + Math.floor(Math.random() * 5));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-12">
      {/* Hero Section */}
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 animate-fadeIn">
          Welcome to <span className="text-blue-600">Poll Autoxona</span>
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-8 animate-slideUp">
          A simple and interactive platform for polling and voting. Stay updated with real-time voting results.
        </p>
        <button className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
          Start Voting
        </button>
      </div>

      {/* Live Voting Stats */}
      <div className="mt-16 p-6 bg-white shadow-lg rounded-lg w-full max-w-md text-center animate-bounceIn">
        <p className="text-gray-800 text-xl md:text-2xl font-semibold">
          Total Votes:{" "}
          <span className="text-blue-600 font-bold text-3xl md:text-4xl animate-pulse">
            {votes}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Home;
