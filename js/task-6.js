function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }

  function createBoxes() {
    const amountInput = document.getElementById('amountInput');
    const amount = parseInt(amountInput.value);

    if (isNaN(amount) || amount < 1 || amount > 100) {
      alert('Please enter a number between 1 and 100.');
      return;
    }

    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';

    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
      size += 10;
    }

    amountInput.value = ''; // Очистка значення інпуту після створення елементів.
  }

  function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
  }