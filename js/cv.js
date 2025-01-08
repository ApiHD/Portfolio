function showImages() {
    var magnifying_area = document.querySelector('.zoom__aera');
    var magnifying_img = document.querySelector('.zoomimg');
    const zoomlinks = document.querySelectorAll('.zoom__link');
    const zoompart = document.querySelectorAll('.zoomed__part');
    const boutons = document.querySelectorAll('.exit__link');
    const showimg = document.querySelector('.zoomed__part');

    zoomlinks.forEach(elem => {
        elem.addEventListener('mousedown', (event) => {
            event.preventDefault();

            showimg.classList.add('show');
            magnifying_area.addEventListener("mousemove", moveMagnifying);

            // Trigger the zoom effect immediately on mousedown
            triggerMagnifying(event);
        });
    });

    magnifying_area.addEventListener("mouseup", closeMagnifying);

    function closeMagnifying(event) {
        magnifying_img.style.transform = 'translate(-50%,-50%) scale(2)';
        zoompart.forEach(zoom => {
            zoom.classList.remove('show');
            magnifying_img.classList.remove('show');
        });
    }

    function moveMagnifying(event) {
        magnifying_img.classList.add('show');
        calculateMagnifying(event);
    }

    function triggerMagnifying(event) {
        // Trigger the same behavior as moveMagnifying on mousedown
        calculateMagnifying(event);
        magnifying_img.classList.add('show');
    }

    function calculateMagnifying(event) {
        const clientX = event.clientX - magnifying_area.offsetLeft;
        const clientY = event.clientY - magnifying_area.offsetTop;

        const mWidth = magnifying_area.offsetWidth;
        const mHeight = magnifying_area.offsetHeight;

        const xPercent = (clientX / mWidth) * 100;
        const yPercent = (clientY / mHeight) * 100;

        magnifying_img.style.transform = `translate(-${xPercent}%, -${yPercent}%) scale(2)`;
    }

    boutons.forEach(exite => {
        exite.addEventListener('click', (event) => {
            event.preventDefault();
            hideModals();
            hideModalsback();
        });
    });
}

showImages();
