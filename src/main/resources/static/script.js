function showImages(files) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Clear existing images

    for (const file of files) {
        if (file.type.startsWith('image/')) { // Check if the file is an image
            const thumbnailDiv = document.createElement('div');
            thumbnailDiv.classList.add('thumbnail-div'); // Add the thumbnail-div class
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.style.width = '150px'; // Adjust size as needed
            img.style.height = '150px';
            thumbnailDiv.appendChild(img); // Add the image to the div
            gallery.appendChild(thumbnailDiv); // Add the div to the gallery
        }
    }
}
