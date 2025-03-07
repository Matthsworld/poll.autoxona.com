import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:5000");

const PollDetails = () => {
  const { id } = useParams();
  const [poll, setPoll] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPoll = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/polls/${id}`);
        setPoll(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch poll");
        setLoading(false);
      }
    };

    fetchPoll();

    socket.on("pollUpdated", (updatedPoll) => {
      if (updatedPoll._id === id) {
        setPoll(updatedPoll);
      }
    });

    return () => {
      socket.off("pollUpdated");
    };
  }, [id]);

  const handleVote = async (optionId) => {
    try {
      await axios.post(`http://localhost:5000/api/polls/${id}/vote`, { optionId });
    } catch (err) {
      console.error("Voting failed", err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">{poll.question}</h2>
      <div className="space-y-2">
        {poll.options.map((option) => (
          <button
            key={option._id}
            className="w-full p-2 border rounded-lg flex justify-between items-center"
            onClick={() => handleVote(option._id)}
          >
            <span>{option.text}</span>
            <span className="bg-blue-500 text-white px-2 py-1 rounded-md">{option.votes}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PollDetails;