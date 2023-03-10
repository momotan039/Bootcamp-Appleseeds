const btn = document.querySelector(".verify button")
const inputs = document.querySelectorAll(".verify .inputs input")

inputs.forEach((input, i) => {
    input.addEventListener('keyup', () => {
        if (i + 1 != inputs.length)
            inputs[i + 1].focus()

        if (i == inputs.length - 1) {
            inputs[0].focus()
            resetInputs()
        }

    })
})

inputs[0].addEventListener('paste', (e) => {
    e.preventDefault();
    const nums = e.clipboardData.getData('text').split('')

        inputs.forEach((input, i) => {
            if (nums.length != 0)
                input.value = nums.shift()
                
                if (i == inputs.length - 1) {
                    inputs[0].focus()
                }
        })
        setTimeout(()=>{
            resetInputs()
            inputs[0].focus()
        },100)

})


function resetInputs() {
    inputs.forEach(i => {
        i.value = ''
    })
}