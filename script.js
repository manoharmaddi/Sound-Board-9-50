const sounds = ['All i know', 'Blinding Lights', 'I feel it coming', 'Out of Time','Save Your Tears', 'Starboy']

sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.classList.add('btn')

  btn.innerText = sound

  btn.addEventListener('click', () => {

    stopSongs()

    document.getElementById(sound).play()
  })

  document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound)

    song.pause()
    sound.currentTime = 0;

  })
}