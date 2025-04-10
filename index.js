let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let setEl = document.getElementById("set-el")
let count = 0
let setCount =0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    setCount++
    setEl.textContent ='Previous sets:'+ setCount
}
