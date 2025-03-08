let images = document.querySelectorAll('.container img');
let openImage = document.getElementById('openImage');
let imgItem = document.getElementById('img-item');
let currentIndex = 0;

function OpenImage(index){
    currentIndex = index;
    openImage.style.display = "flex";
    imgItem.src = images[index].src;
}

function closeImage(){
    openImage.style.display = "none";
}

function nextImage(){
    if (currentIndex < images.length - 1){
        currentIndex++;
        imgItem.src = images[currentIndex].src;
    }
}

function prevImage(){
    if(currentIndex>0){
        currentIndex--;
        imgItem.src = images[currentIndex].src;
    }
}

openImage.addEventListener("click", function(event){
    if(event.target===openImage){
        closeImage();
    }
})