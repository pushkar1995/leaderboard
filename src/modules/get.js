const refreshScores = async (gameId) => {
  const scoresUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;
  const response = await fetch(scoresUrl);
  const data = await response.json();
  return data.result;
};

export default refreshScores;
