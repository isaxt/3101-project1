const audioPlayer = document.getElementById('audio-player');
  const songs = document.querySelectorAll('.song');

  // when the user clicks the song--> plays the audio
  songs.forEach(song => {
    song.addEventListener('click', () => {
      const audioSrc = song.getAttribute('data-audio');
      audioPlayer.src = audioSrc;
      audioPlayer.style.display = 'block'; 
      audioPlayer.play();
    });
  });