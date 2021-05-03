import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnscroll from './modules/RevealOnScroll(new)'

const mobileMenu = new MobileMenu();
new RevealOnscroll(document.querySelectorAll(".feature-item"),75);
new RevealOnscroll(document.querySelectorAll(".testimonial"),60);


if(module.hot){
    module.hot.accept();
}

