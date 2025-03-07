import PollCard from "../components/PollCard";
const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to Poll Autoxona</h1>
      <PollCard question="Do you like this app?" votes={120} />
    </div>
  );
};

export default Home;