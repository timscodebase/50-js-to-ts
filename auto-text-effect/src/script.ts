const textEl: HTMLElement = document.getElementById('text') as HTMLElement
const speedEl: HTMLInputElement = document.getElementById('speed') as HTMLInputElement
const text = 'We Love Programming!'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target?.value)