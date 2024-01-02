document.getElementById('fileInput').addEventListener('change', function() {
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    thumbnailContainer.innerHTML = ''; // Clear existing thumbnails

    const files = this.files;
    let currentZoomedInImage = null; // To keep track of the currently zoomed-in image

    for (const file of files) {
        if (file.type.startsWith('image/')) { // Check if the file is an image
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.style.maxWidth = '150px'; // Set a maximum width
            img.style.maxHeight = '150px'; // Set a maximum height
            thumbnailContainer.appendChild(img); // Add the image to the container

            // Add a click event listener to the image for zooming
            img.addEventListener('click', function() {
                // Check if this image is already zoomed in
                if (img === currentZoomedInImage) {
                    // Clicking again on a zoomed-in image returns it to original size
                    img.style.transform = 'scale(1)';
                    currentZoomedInImage = null; // Reset the current zoomed-in image
                } else {
                    // Zoom in the clicked image
                    img.style.transform = 'scale(3)';
                    img.style.transition = 'transform 0.2s'; // Add a smooth transition effect

                    // If another image was zoomed in, return it to original size
                    if (currentZoomedInImage) {
                        currentZoomedInImage.style.transform = 'scale(1)';
                    }
                    currentZoomedInImage = img; // Set the current zoomed-in image
                }
            });
        }
    }
});
