const API_URL = "https://api.poll.autoxona.com";

export const fetchPolls = async () => {
  const response = await fetch(`${API_URL}/polls`);
  return response.json();
};
