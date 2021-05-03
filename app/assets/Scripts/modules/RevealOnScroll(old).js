class RevealOnScroll{
    constructor(){
        this.itemsToReveal = document.querySelectorAll(".feature-item"); 
        this.hideInitially();
        this.events();
    }
    events(){
        window.addEventListener('scroll',() => {
            this.itemsToReveal.forEach(el=>{
                if(isRevealed == false){
                this.calculateIfScrolledTo(el);
                }
            })
        })
    }
    calculateIfScrolledTo(el){
        let scrollPercent = (el.getBoundingClientRect().y/window.innerHeight) * 100;
        if(scrollPercent < 75){
            el.classList.add("reveal-item--is-visible")
            el.isRevealed = true;
        }
    }
    hideInitially(){
        this.itemsToReveal.forEach(el =>{
            el.classList.add("reveal-item")
            el.isRevealed = false;
        })
    }
}

export default RevealOnScroll;