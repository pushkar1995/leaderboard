const onloadScore = async (gameId) => {
  const nameInput = document.getElementById('nameInput');
  const scoreInput = document.getElementById('scoreInput');
  const scoreError = document.getElementById('scoreError');
  const scoresUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

  const requestData = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: nameInput.value,
      score: scoreInput.value,
    }),
  };

  if (!scoreInput.validity.valid) {
    scoreError.style.display = 'block';
    return;
  }

  const response = await fetch(scoresUrl, requestData);
  nameInput.value = '';
  scoreInput.value = '';
  scoreError.style.display = 'none';
  await response.json();
};

export default onloadScore;