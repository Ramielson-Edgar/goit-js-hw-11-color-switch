import { colors, refs } from './items.js';

const { $body, $btnStart, $btnStop } = refs;

$btnStart.addEventListener('click', startSwitchColor);
$btnStop.addEventListener('click', stopSwitchColor);

let interval = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function setRandomColor() {
  const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
  $body.style.backgroundColor = color;
}

function startSwitchColor() {
  interval = setInterval(() => {
    setRandomColor();
  }, 1000);

  disabledActiveBtn();
}

function stopSwitchColor() {
  if (disabledActiveBtn) {
    $btnStart.setAttribute('disabled', true);
    $btnStart.style.backgroundColor = 'green';

    clearInterval(interval);
  }
}

function disabledActiveBtn() {
  if (setInterval) {
    $btnStart.setAttribute('disabled', false);
    $btnStart.style.backgroundColor = 'grey';
  }
}
