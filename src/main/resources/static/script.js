document.getElementById('fileInput').addEventListener('change', function(event) {
    const files = event.target.files;
    showImages(files);
});

function showImages(files) {
    const gallery = document.getElementById('otembImages');
    gallery.innerHTML = ''; // Clear existing images

    for (const file of files) {
        if (file.type.startsWith('image/')) { // Check if the file is an image
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.title = file.name;
            img.classList.add('thumbnail', 'col-md-1', 'col-sm-2', 'col-xs-3');
            img.setAttribute('data-gallery', '');
            img.setAttribute('title', file.name);
            gallery.appendChild(img);
        }
    }

    // Register the gallery for local images
    const links = gallery.getElementsByTagName('img');
    document.getElementById('otembImages').onclick = function registerGallery(event) {
        event = event || window.event;
        var target = event.target || event.srcElement,
            link = target.src ? target.parentNode : target,
            options = { index: link, event: event };
        blueimp.Gallery(links, options);
    };
}
