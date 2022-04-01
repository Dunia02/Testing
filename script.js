const buttons =document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button =>{
    button.addEventListener("click", () => {
        const offset =button.dataset.carouselButton ==="next" ? 1:-1;  //this is going to access the property that we set in html(prev ,next) so either its gonna go to the next image or the previous one
        const slides =button.closest("[data-carousel]").querySelector("[data-slides]");
        const activeSlide =slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) +offset; //slides.children convert the elements to an array
        if (newIndex < 0) newIndex = slides.children.length -1
        if(newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active =true;
        delete activeSlide.dataset.active //removes the active state from the slides that were active before
    })
})