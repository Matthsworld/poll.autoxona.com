import { useState, useEffect } from "react";

function Home() {
  const [votes, setVotes] = useState(120); // Default count

  // Fetch votes from backend
  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/votes");
        const data = await response.json();
        setVotes(data.totalVotes);
      } catch (error) {
        console.error("Error fetching votes:", error);
      }
    };

    fetchVotes();

    // Poll for updates every 3 seconds
    const interval = setInterval(fetchVotes, 3000);
    return () => clearInterval(interval);
  }, []);

  // Function to handle voting
  const handleVote = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const data = await response.json();
        setVotes(data.totalVotes);
      } else {
        console.error("Failed to cast vote");
      }
    } catch (error) {
      console.error("Error voting:", error);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 text-center">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Poll Autoxona</h2>
        <p className="text-gray-600 text-lg mb-6">A simple and interactive platform for polling and voting.</p>
        <button
          onClick={handleVote}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition transform hover:scale-105"
        >
          Vote Now
        </button>
      </div>

      {/* Live Voting Stats */}
      <div className="mt-12">
        <p className="text-gray-700 text-xl font-semibold">
          Total Votes: <span className="text-blue-600 font-bold text-2xl">{votes}</span>
        </p>
      </div>
    </div>
  );
}

export default Home;
