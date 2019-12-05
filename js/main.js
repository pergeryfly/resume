
setTimeout(() => {
    siteWelcome.classList.remove("active")
}, 1000)

window.onscroll = function () {
    if (window.scrollY > 0) {
        topNavbar.classList.add("sticky")
        menuSlide.classList.add("sticky")
    }
    else {
        topNavbar.classList.remove("sticky")
        menuSlide.classList.remove("sticky")
    }
}
let liTags = document.querySelectorAll('.nav.menu>ul>li')
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
        x.currentTarget.classList.add('active')
        //    let li= x.currentTarget
        //    let brother = li.getElementsByTagName("ul")[0]
        //    while(brother.nodeType === 3){
        //    brother = brother.nextSibling
        //    }
        //   while(brother.tagName!=="UL"){
        // brother = brother.nextSibling
        //   }
    }
    liTags[i].onmouseleave = function (x) {
        x.currentTarget.classList.remove('active')
    }
}
let aTags = document.querySelectorAll('.nav.menu>ul>li>a')
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
        x.preventDefault()
        //  阻止a标签默认动作
        let a = x.currentTarget
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let top = element.offsetTop
        window.scrollTo(0, top - 80)
    }
}
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
