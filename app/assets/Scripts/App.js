import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnscroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

let stickyHeader = new StickyHeader();
const mobileMenu = new MobileMenu();
new RevealOnscroll(document.querySelectorAll(".feature-item"),75);
new RevealOnscroll(document.querySelectorAll(".testimonial"),60);

let testimonialLink = document.querySelector("#testimonials-link")

testimonialLink.addEventListener('click',() => {
    testimonialLink.classList.add("is-current-link")
})

if(module.hot){
    module.hot.accept();
}

