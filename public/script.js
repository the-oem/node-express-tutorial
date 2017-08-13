const launchButton = document.getElementById('btnBigRed');
const launchContainer = document.getElementById('somethingHappened');
launchContainer.style.display = 'none';

launchButton.addEventListener('click', launchMissile);

function launchMissile() {
  launchContainer.style.display = launchContainer.style.display != 'none' ? 'none' : 'block';
}
