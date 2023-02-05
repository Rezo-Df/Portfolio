const clicks = document.querySelectorAll(".click");
const tabs = document.querySelectorAll(".our-story-tab");

clicks.forEach( (element, index) => { 
    element.addEventListener('click', () => {
        tabs.forEach((tab, tabindex) => {
          tab.classList.add('not-active')
         
        })
        if(index === 0) {
            tabs[1].classList.remove('freez')
            tabs[2].classList.remove('freez')
            tabs[3].classList.remove('freez')
            tabs[0].classList.add('freez')
        }
        if(index === 1) {
            tabs[0].classList.remove('freez')
            tabs[3].classList.remove('freez')
            tabs[2].classList.remove('freez')
            tabs[1].classList.add('freez')
        }
        if(index === 2) {
            tabs[3].classList.remove('freez')
            tabs[1].classList.remove('freez')
            tabs[0].classList.remove('freez')
            tabs[2].classList.add('freez')
        }
        if(index === 3) {
            tabs[3].classList.add('freez')
            tabs[1].classList.remove('freez')
            tabs[0].classList.remove('freez')
            tabs[2].classList.remove('freez')
        }
     })
 })
  
const test = () => {
    clicks.forEach((click, index) => {
           click.addEventListener("click", () => {
                clicks.forEach(element => {
                    element.classList.remove('colorful')
                })
                click.classList.add('colorful')
            })
    })
}
test()

window.onresize = () => { window.location.reload()}


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive:{
        0:{
            items:1
        },
        920:{
            items:2
        },
        1215:{
            items:3
        }
    }
})




new fullpage('#fullpage' ,{
    licenseKey: 'GPLv3',
    navigation: true,
    navigationTooltips: ['INTRO', 'SERVICES', 'PORTFOLIO', 'OUR STORY', 'CONTACT US']
});



$(document).ready('button').on("click",function(){
    $(window).scrollTop(0);
});




