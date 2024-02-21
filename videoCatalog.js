document.addEventListener('DOMContentLoaded', function () {
    const videoCatalog = document.getElementById('videoCatalog');
    const mainVideo = document.getElementById('mainVideo');

    videoCatalog.addEventListener('click', function (e) {
        const target = e.target.closest('.video-thumbnail');
        if (target) {
            const videoSrc = target.getAttribute('data-video');
            mainVideo.src = videoSrc;
            mainVideo.hidden = false;
            videoCatalog.hidden = true;
            mainVideo.play();
        }
    });

    mainVideo.addEventListener('ended', function () {
        videoCatalog.hidden = false;
        mainVideo.hidden = true;
    });
});
