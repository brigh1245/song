const audio = document.getElementById('audio');
const downloadBtn = document.getElementById('downloadBtn');

// Update download link when audio source changes
audio.addEventListener('loadstart', () => {
  const audioSrc = audio.querySelector('source').getAttribute('src');
  downloadBtn.setAttribute('href', audioSrc);
});

// Update download link when audio is loaded (for browsers that don't support 'loadstart')
audio.addEventListener('canplay', () => {
  const audioSrc = audio.querySelector('source').getAttribute('src');
  downloadBtn.setAttribute('href', audioSrc);
});
