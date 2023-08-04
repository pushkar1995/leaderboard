function AddUser(nameInput, scoreInput, scores, ul) {
  nameInput = document.getElementById('nameInput');
  scoreInput = document.getElementById('scoreInput');
  scores = document.getElementById('scoreDiv');
  ul = document.getElementById('ul');

  const li = document.createElement('li');
  li.innerHTML = `${nameInput.value} : ${scoreInput.value}`;
  li.className = 'listItem';

  const isEvenIndex = ul.children.length % 2 === 0;

  if (isEvenIndex) {
    li.style.backgroundColor = 'white';
  } else {
    li.style.backgroundColor = '#cdcbcb';
  }

  ul.appendChild(li);

  nameInput.value = '';
  scoreInput.value = '';
}

export default AddUser;