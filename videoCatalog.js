// Wait until the DOM is fully loaded before running the script to ensure
// all elements are available for manipulation.
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the video catalog container and the main video player on the page.
    const videoCatalog = document.getElementById('videoCatalog');
    const mainVideo = document.getElementById('mainVideo');

    // Add an event listener to the video catalog for click events.
    videoCatalog.addEventListener('click', function (e) {
        // Use event delegation to identify if a click occurred on a video thumbnail.
        const target = e.target.closest('.video-thumbnail');
        // If a video thumbnail was clicked, proceed with the following actions.
        if (target) {
            // Retrieve the video source URL from the clicked thumbnail's data attribute.
            const videoSrc = target.getAttribute('data-video');
            // Update the main video player's source to the selected video.
            mainVideo.src = videoSrc;
            // Show the main video player by setting its hidden property to false.
            mainVideo.hidden = false;
            // Hide the video catalog to focus the user's attention on the main video.
            videoCatalog.hidden = true;
            // Play the selected video in the main video player.
            mainVideo.play();
        }
    });

    // Add an event listener to the main video player to handle the video ending.
    mainVideo.addEventListener('ended', function () {
        // When the video ends, show the video catalog again for further selection.
        videoCatalog.hidden = false;
        // Hide the main video player until another video is selected.
        mainVideo.hidden = true;
    });
});
