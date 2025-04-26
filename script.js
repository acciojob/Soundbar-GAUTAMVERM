const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttons = document.getElementById('buttons');

sounds.forEach(sound => {
  const btn = document.getElementById(sound);

  btn.addEventListener('click', () => {
    stopSounds();
    const audio = document.createElement('audio');
    audio.src = `sounds/${sound}.mp3`;
    audio.setAttribute('autoplay', 'autoplay');
    audio.id = 'current-audio'; // for easier access
    document.body.appendChild(audio);
  });
});

document.getElementById('stop').addEventListener('click', stopSounds);

function stopSounds() {
  const audio = document.getElementById('current-audio');
  if (audio) {
    audio.pause();
    audio.remove();
  }
}