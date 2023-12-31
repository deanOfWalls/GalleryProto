function showImages(files) {
    const gallery = document.getElementById('thumbnailContainer');
    gallery.innerHTML = ''; // Clear existing thumbnails

    for (const file of files) {
        if (file.type.startsWith('image/')) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.onclick = () => setSelectedImage(file);
            gallery.appendChild(img);
        }
    }
}

function setSelectedImage(file) {
    const selectedImage = document.getElementById('selectedImage');
    selectedImage.src = URL.createObjectURL(file);
}
