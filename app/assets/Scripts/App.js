import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnscroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
//import Modal from './modules/Modal'

//new Modal;
let stickyHeader = new StickyHeader();
const mobileMenu = new MobileMenu();
new RevealOnscroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnscroll(document.querySelectorAll(".testimonial"), 60);
let testimonialLink = document.querySelector("#testimonials-link")
let modal


testimonialLink.addEventListener('click', () => {
    testimonialLink.classList.add("is-current-link")
})

document.querySelectorAll(".open-modal").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault()
    if (typeof modal == "undefined") {
      import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
        modal = new x.default()
        setTimeout(() => modal.openTheModal(), 20)
      }).catch(() => console.log("There was a problem."))
    } else {
      modal.openTheModal()
    }
  })
})

if (module.hot) {
    module.hot.accept();
}

