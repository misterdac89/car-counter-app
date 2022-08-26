let i = 0

let incrementBtn = document.getElementById("increment-btn")
let saveBtn = document.getElementById("save-btn")
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

incrementBtn.addEventListener("click", function(){
   i++
   countEl.textContent = i
})

saveBtn.addEventListener("click", function(){
   let iStr = i + " - "
   saveEl.textContent += iStr
   i = 0
   countEl.textContent = 0
})