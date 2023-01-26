


function showImages(){
    var magnifying_area =  document.querySelector('.zoom__aera');
    var magnifying_img =  document.querySelector('.zoomimg');
    const magnifying_area1 =  document.querySelectorAll('.zoom__aera');
    const magnifying_img1 =  document.querySelectorAll('.zoomimg');
    const links = document.querySelectorAll('.card__link');
    const zoomlinks = document.querySelectorAll('.zoom__link');
    const zoompart = document.querySelectorAll('.zoomed__part');
    const modals = document.querySelectorAll('.modal');
    const modalimage = document.querySelectorAll('.modal_image');
    const boutons = document.querySelectorAll('.exit__link');
    const showimg=document.querySelector('.zoomed__part');



    zoomlinks.forEach(elem => {
        elem.addEventListener('mousedown',(event) => {
            event.preventDefault();
    
            showimg.classList.add('show');
                
            magnifying_area.addEventListener("mousemove",moveMagnifying)
            
        });
    });


    //new part 



    magnifying_area.addEventListener("mouseup",closeMagnifying);

    function closeMagnifying(event){
        magnifying_img.style.transform = 'translate(-50%,-50%) scale(2)';
        zoompart.forEach(zoom => {

            zoom.classList.remove('show');
            magnifying_img.classList.remoove('show')
        }); 
    }
    
    function moveMagnifying(event){

        magnifying_img.classList.add('show')
        clientX = event.clientX - magnifying_area.offsetLeft
        clientY = event.clientY - magnifying_area.offsetTop
         
        var mWidth = magnifying_area.offsetWidth
        var mHeight = magnifying_area.offsetHeight
        clientX = clientX / mWidth * 100
        clientY = clientY / mHeight * 100
    
        //magnifying_img.style.transform = 'translate(-50%,-50%) scale(2)'
        magnifying_img.style.transform = 'translate(-'+clientX+'%, -'+clientY+'%) scale(2)'
    }


    boutons.forEach(exite => {
        exite.addEventListener('click',(event) => {
            event.preventDefault();
            hideModals();
            hideModalsback();
        });
    })
}

showImages();
