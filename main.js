let count = 0

const incrementBtn = document.getElementById("increment-btn")
const saveBtn = document.getElementById("save-btn")
const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")

incrementBtn.addEventListener("click", function(){
   count++
   countEl.textContent = count
})

saveBtn.addEventListener("click", function(){
   let countStr = count + " - "
   saveEl.textContent += countStr
   count = 0
   countEl.textContent = 0
})