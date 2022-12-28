let i = 0

const countEl = document.getElementById("count-el")
const incrementBtn = document.getElementById("increment-btn")
const saveBtn = document.getElementById("save-btn")
const saveEl = document.getElementById("save-el")


incrementBtn.addEventListener("click", function() {
   i++
   countEl.textContent = i
})

saveBtn.addEventListener("click", function() {
   let iStr = i + " - "
   saveEl.textContent += iStr
   i = 0
   countEl.textContent = 0
})