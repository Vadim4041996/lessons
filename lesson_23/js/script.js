// Строгий режим
"use strict"

// Завдання 1
const bodyElement = document.body
console.log(bodyElement)



// Завдання 2
const page = document.querySelector(".page__container")

function addElement(num = 4) {
    let newList = "<ul>"
    for(let i = 1; i < num; i++) {
        newList += `<li>Item ${i}</li>`
    }
    newList +="</ul>"
    page.insertAdjacentHTML("afterbegin", newList)
}

addElement(8)



// Завдання 3
const bodyEl = document.body
let totalColor = ("green")
bodyEl.classList.add("loaded")
if(bodyEl.classList.contains("loaded")) {
    bodyEl.style.color = `${totalColor}`
}



// Завдання 4
const itemElements = document.querySelectorAll(".item")
itemElements.forEach((itemElement, index) => {
    itemElement.classList.add("active")
    itemElement.textContent = `Елемент № ${index + 1}`
})



// Завдання 5
const button = document.querySelector('.page__button')
function scrollToBlock(element) {
  const block = element.dataset.scroll
  element.scrollIntoView({
    //"start", "center", "end". За замовчуванням "center".
    block: block,
    //"start", "center", "end" чи "nearest". За замовчуванням "nearest".
    inline: "nearest",
    behavior: "smooth"
  })
}
scrollToBlock(button)



// Завдання 6
const link = document.querySelector(".link")
if(link) {
  link.dataset.value = "100"
  const value = +link.dataset.value
  if(value < 200) {
    link.style.color = "red"
  }
}
