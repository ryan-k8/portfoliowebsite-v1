window.addEventListener('scroll',function(){
    if (window.scrollY > 150){
        this.document.querySelector('#main-navbar').style.opacity = 0.85;
    } else {
        this.document.querySelector('#main-navbar').style.opacity = 1;
    }
});