import React from "react";

type PollCardProps = {
  title: string;
  description: string;
  votes: number;
};

const PollCard: React.FC<PollCardProps> = ({ title, description, votes }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-gray-800 font-bold">Votes: {votes}</p>
    </div>
  );
};

export default PollCard;
/*const PollCard = ({ question, votes }) => {
    return (
      <div className="border p-4 rounded shadow-md bg-white">
        <h2 className="text-lg font-bold mb-2">{question}</h2>
        <p className="text-gray-600">Votes: {votes}</p>
      </div>
    );
  };
  
  export default PollCard;*/