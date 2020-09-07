const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select a media stream then pass to video element and play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch Error here
        console.log('Error here: ', error);
    }
};

button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
})

// On load

selectMediaStream();