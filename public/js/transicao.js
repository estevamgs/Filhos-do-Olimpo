window.addEventListener('scroll', function(){
    let header = document.querySelector('.header');
    if(window.scrollY > 625){
        header.classList.remove('transparente');
    } else{
        header.classList.add('transparente');
    }
});