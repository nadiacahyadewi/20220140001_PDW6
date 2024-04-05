
const video = document.querySelector('video');
const muteButton = document.getElementById('muteButton');

muteButton.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
        muteButton.textContent = 'Mute';
    } else {
        video.muted = true;
        muteButton.textContent = 'Unmute';
    }
});

document.querySelector('.audio-text').addEventListener("click", function() {
    alert("NEW ALBUM [BABYMONSTER - ‘SHEESH’ M/V]");
});

document.querySelector('.youtube-button').addEventListener("click", function() {
    alert("You will be redirected to YouTube >>>");
});

document.querySelector('.gambar-container').addEventListener("click", function() {
    alert("Is it beautiful?");
});

document.querySelector('.member').addEventListener("click", function() {
    alert("there are 7 members");
});

document.querySelector('.card-header').addEventListener("click", function() {
    alert("Enjoy <3");
});