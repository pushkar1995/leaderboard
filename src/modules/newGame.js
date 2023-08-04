const createNewGame = async (game) => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
  const endpoint = `${url}/games`;

  const requestData = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: game,
    }),
  };

  const response = await fetch(endpoint, requestData);
  const data = await response.json();
  const gameId = data.result.split(': ')[1].replace(' added.', '');
  localStorage.setItem('gameId', gameId);
  return gameId;
};

export default createNewGame;