const PollCard = ({ question, votes }) => {
    return (
      <div className="border p-4 rounded shadow-md bg-white">
        <h2 className="text-lg font-bold mb-2">{question}</h2>
        <p className="text-gray-600">Votes: {votes}</p>
      </div>
    );
  };
  
  export default PollCard;