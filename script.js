//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
  const btn = document.getElementById(sound);

  btn.addEventListener('click', () => {
    stopSounds();
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
    window.currentAudio = audio;
  });
});

document.getElementById('stop').addEventListener('click', stopSounds);

function stopSounds() {
  if (window.currentAudio) {
    window.currentAudio.pause();
    window.currentAudio.currentTime = 0;
  }
}