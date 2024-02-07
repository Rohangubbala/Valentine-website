document.addEventListener('DOMContentLoaded', function () {
    var playButton = document.getElementById('playButton');
    var voiceMessage = document.getElementById('voiceMessage');

    playButton.addEventListener('click', function () {
        if (voiceMessage.paused) {
            voiceMessage.play();
            playButton.textContent = 'Pause Voice Message';
        } else {
            voiceMessage.pause();
            playButton.textContent = 'Play Voice Message';
        }
    });
});
