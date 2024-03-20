document.addEventListener('DOMContentLoaded', (event) => {
    const playlist = [
        'music_fx_wild_and_aggressive_hiphop_flappybirdgame.mp3',
        'DaBaby - BOP on Broadway (Hip Hop Musical).mp3',
        'DJ Maphorisa - Bopha Ft Mellow & Sleazy X Felo Le Tee X Madumane X Young Stunna [vocals].mp3'
        // Add more songs as needed
    ];

    let currentSongIndex = 0;
    const bgMusic = document.getElementById('bgMusic');

    function playBackgroundMusic() {
        bgMusic.src = playlist[currentSongIndex];
        bgMusic.loop = true; // Set to true if you want the playlist to loop
        bgMusic.play();
    }

    // Play background music when the user clicks anywhere on the page
    document.body.addEventListener('click', playBackgroundMusic);

    // Play the next song in the playlist when the current song ends
    bgMusic.addEventListener('ended', () => {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        bgMusic.src = playlist[currentSongIndex];
        bgMusic.play();
    });
});
