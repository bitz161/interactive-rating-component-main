const buttons = document.querySelectorAll('.btns')
const submit = document.querySelector("#submit")
const firstSec = document.querySelector(".firstSec")
const secondSec = document.querySelector(".secondSec")
const rating = document.querySelector("#rates")

for (let btn of buttons) {
    btn.addEventListener('click', function(e) {
    btn.classList.add("btns1")
    rating.textContent = (btn.textContent)
})
}

submit.addEventListener("click", function(){
    firstSec.classList.add('view')
    secondSec.classList.remove('view')
})