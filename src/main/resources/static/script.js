document.getElementById('fileInput').addEventListener('change', function() {
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    thumbnailContainer.innerHTML = ''; // Clear existing thumbnails

    const files = this.files;

    for (const file of files) {
        if (file.type.startsWith('image/')) { // Check if the file is an image
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.style.maxWidth = '150px'; // Set a maximum width
            img.style.maxHeight = '150px'; // Set a maximum height
            thumbnailContainer.appendChild(img); // Add the image to the container
        }
    }
});
