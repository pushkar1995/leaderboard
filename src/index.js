import './index.css';
import createNewGame from './modules/newGame.js';
import onloadScore from './modules/onLoadScore.js';
import refreshScores from './modules/get.js';

const submitBtn = document.getElementById('submitBtn');
const refreshBtn = document.getElementById('refreshBtn');
const game = 'game';

const getGameId = async () => {
  if (localStorage.getItem('gameId')) {
    return localStorage.getItem('gameId');
  }
  return createNewGame(game);
};

const gameId = await getGameId();

submitBtn.addEventListener('click', () => {
  onloadScore(gameId);
});

refreshBtn.addEventListener('click', async () => {
  const scores = await refreshScores(gameId);

  const resultTable = document.getElementById('ul');
  let child = resultTable.lastElementChild;
  while (child) {
    resultTable.removeChild(child);
    child = resultTable.lastElementChild;
  }

  scores.forEach((individualUser) => {
    const li = document.createElement('li');
    li.className = 'listItem';
    li.innerHTML = `${individualUser.user} : ${individualUser.score}`;

    const isEvenIndex = resultTable.children.length % 2 === 0;

    if (isEvenIndex) {
      li.style.backgroundColor = 'white';
    } else {
      li.style.backgroundColor = '#cdcbcb';
    }

    resultTable.appendChild(li);
  });
});

export default gameId;