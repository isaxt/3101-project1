const audioPlayer = document.getElementById('audio-player');
  const songs = document.querySelectorAll('.song');

  songs.forEach(song => {
    song.addEventListener('click', () => {
      const audioSrc = song.getAttribute('data-audio');
      audioPlayer.src = audioSrc;
      audioPlayer.style.display = 'block'; // show controls if you want
      audioPlayer.play();
    });
  });