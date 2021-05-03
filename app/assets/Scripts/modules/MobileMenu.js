class MobileMenu {
    constructor(){
        this.menuIcon = document.querySelector(".site-header__menu-icon")
        this.events();
    }

    events(){
        this.menuIcon.addEventListener('click',() => this.toggleTheMenu())

    }
    toggleTheMenu(){
        console.log("Okay so the thing is working...somehow...")
    }

}

export default MobileMenu