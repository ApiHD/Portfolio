


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

    const hideModals = () => {
        modals.forEach(modals => {
            modals.classList.remove('show');
        });
    }

    const hideModalsback = () => {
        modalimage.forEach(modals => {
            modals.classList.remove('show');
        });
    }

    zoomlinks.forEach(elem => {
        elem.addEventListener('mousedown',(event) => {
            event.preventDefault();
    
            zoompart.forEach(el => {
                if (el.id === elem.dataset.id){
                    el.classList.add('show');
                }
            });
        });
    });

    links.forEach(elem => {
        elem.addEventListener('click',(event) => {
            event.preventDefault();
            document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show');
            document.querySelectorAll(`[id=${elem.dataset.id}]`)[1].classList.add('show');
            magnifying_area1.forEach(part =>{
                if (part.id === elem.dataset.id){
                    magnifying_area = part;
                    console.log("magnifyingaeraEEEEEEEEE",magnifying_area);
                    magnifying_area.addEventListener("mousemove",moveMagnifying)
                    magnifying_area.addEventListener("mouseup",closeMagnifying);
                    console.log("closeMagnifying LAUNCHED");
                }
            })

            magnifying_img1.forEach(part =>{
                console.log("part id",part.id);
                console.log("event.target id",elem.dataset.id);

                if (part.id === elem.dataset.id){
                    magnifying_img = part;
                    console.log("magnifyingimg",magnifying_img);
                    

                }
            })

        });
    })


    //new part 




    


    function closeMagnifying(event){
        magnifying_img.style.transform = 'translate(-50%,-50%) scale(1)';
        zoompart.forEach(zoom => {

            zoom.classList.remove('show');
        }); 
    }
    
    function moveMagnifying(event){
        console.log("EEEEEEEEEEEEEEEE");
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
