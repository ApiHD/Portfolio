var magnifying_area =  document.getElementById("magnifying_area");
var magnifying_img =  document.getElementById("magnifying_img");

magnifying_area.addEventListener("mousedown",function(event){
    magnifying_area.addEventListener("mousemove",moveMagnifying)
    modals.classList.remove('show');
});




magnifying_area.addEventListener("mouseup",function(){
	magnifying_img.style.transform = 'translate(-50%,-50%) scale(1)';
    magnifying_area.removeEventListener("mousemove", moveMagnifying);
});

function moveMagnifying(event){
    clientX = event.clientX - magnifying_area.offsetLeft
    clientY = event.clientY - magnifying_area.offsetTop
     
    var mWidth = magnifying_area.offsetWidth
    var mHeight = magnifying_area.offsetHeight
    clientX = clientX / mWidth * 100
    clientY = clientY / mHeight * 100

    //magnifying_img.style.transform = 'translate(-50%,-50%) scale(2)'
    magnifying_img.style.transform = 'translate(-'+clientX+'%, -'+clientY+'%) scale(2)'
}
