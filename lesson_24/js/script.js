// Строгий режим
"use strict"


// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active.
// При повторному кліку прибрати клас 
document.addEventListener("click", documentAction)
function documentAction(e) {
    const elementTarget = e.target
    if (e.type === "click" && elementTarget.closest(".item")) {
        const currentElement = elementTarget.closest(".item")
        currentElement.classList.toggle("active")
    }
}



// Задача №2
// Дано в css/scss: body прозорий.
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.
const bodyElement = document.body
window.addEventListener("load", pageLoaded)
function pageLoaded(e) {
   bodyElement.classList.add("loaded")
}



// Задача №3
// Дано в html: header main footer.
// При наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.
const header = document.querySelector(".header")
const footer = document.querySelector(".footer")

if (header && footer) {
    header.addEventListener("mouseenter", setStyle)
    header.addEventListener("mouseleave", setStyle)
    function setStyle (e) {
        if (e.type === "mouseenter") {
            footer.classList.add("style")
        } else if (e.type === "mouseleave") {
            footer.classList.remove("style")
        }
    }
}



// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.
const option = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.5,
}

const callback = (entries, obsorver) => {
    entries.forEach(entry => {
        const item = entry.target
        const itemCounter = item.querySelector('.page__item')
        const timeout = +itemCounter.dataset.timeout || 1000
        const lastNumber = +itemCounter.dataset.lastNumber || 5

        if(entry.isIntersecting && !itemCounter.classList.contains("animate")) {
            itemCounter.classList.add("animate") 
            let i = 1
            let timer = setInterval(() => {
                i === lastNumber ? clearInterval(timer) : null
                itemCounter.textContent = `${i}`
                i++
            }, timeout)
        }
    });
}

const obsorver = new IntersectionObserver(callback, option)
const animElements = document.querySelectorAll(`[class*="--anim"]`)
animElements.forEach(animElement => {
    obsorver.observe(animElement)
});

