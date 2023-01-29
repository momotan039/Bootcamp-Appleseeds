export let randomWords = []
export let playedWord = []
export let empty_inputs = []
export let chars_elems = []
export let current_index = 0
const words = ['Hi', 'Hello', "ashraf", 'Mohammed', 'Ali', 'Shibly', 'Rafat', 'Adel']


export function increaseScore() {}
export function changeStyleWord() {
    // pass to next word in line words
    line_words.querySelectorAll('span').forEach(span => {
        debugger
        if (span.innerText === playedWord[playedWord.length - 1])
            span.classList.add('pass')
    })
}

export function shuffelWords(words) {
    let temp = []
    while (true) {
        const i = Math.floor(Math.random() * (words.length))
        const random_word = words[i]

        if (!temp.includes(random_word))
            temp.push(random_word)

        if (temp.length === words.length)
            break
    }
    return temp
}


export function fillWord(word) {
    const chars = word.split('')
    chars_elems = chars.reduce((c, p, i) => {
        const span = document.createElement('span')
        span.innerHTML = chars[i]
        c.push(span)
        return c
    }, [])
    goal.append(...chars_elems)
}

export function createEmptyInputs(word) {

    const chars = word.split('')
    const squars = chars.reduce((c, p, i) => {
        const input = document.createElement('input')
        input.classList.add('char')
        c.push(input)
        return c
    }, [])

    word_elm.append(...squars)
    // add configuartion to inputs
    configInputs(squars)

    return squars
}

export function configInputs(empty_inputs) {
    empty_inputs.forEach((input, i) => {
        //disable if before of its empty
        if (i !== 0 && empty_inputs[i - 1].value === '')
            input.disabled = true

        //  configuration pressing key and fill
        input.addEventListener('input', () => {
            checkChar(i)
            setpOver(i)
            checkFinishWord()
        })

        // configureation backspace key
        input.addEventListener('keyup', () => {
            if (event.keyCode === 8) {
                backStep(i)
                checkChar(i)
                checkFinishWord()
                return
            }
        })

    })

}

export function checkFinishWord() {
    finish = true
    for (let i = 0; i < chars_elems.length; i++) {
        if (chars_elems[i].innerHTML !== empty_inputs[i].value)
            finish = false
    }
    if (finish) {
        button.classList.add('pass')
        button.focus()
    } else
        button.classList.remove('pass')
    return finish
}

export function backStep(i) {
    if (i != 0 &&
        empty_inputs[i].value === '') {
        empty_inputs[i - 1].focus()
        empty_inputs[i - 1].select()
    }
    if (empty_inputs[i].value === '')
        chars_elems[i].classList.remove('pass', 'wrong')
}

export function checkChar(i) {
    if (chars_elems[i].innerHTML === empty_inputs[i].value) {
        chars_elems[i].classList.add('pass')
    } else {
        chars_elems[i].classList.add('wrong')
    }
}

export function setpOver(i) {
    if (i == mpty_inputs.length - 1)
        return
    // disable current input
    empty_inputs[i + 1].disabled = false
    // go forword
    empty_inputs[i + 1].focus()
}


export function refreshWord() {
    debugger
    if (playedWord.length == words.length) {
        showScorePanel()
        button.blur()
        return
    }
    const current_word = randomWords.shift()
    debugger
    fillWord(current_word)
    empty_inputs = createEmptyInputs(current_word)
    empty_inputs[0].focus()

    // set this word to list word played
    playedWord.push(current_word)
}

export function showScorePanel() {
    const cr = document.createElement('div')
    const panel = document.createElement('div')
    const h1 = document.createElement('h1')
    const h3 = document.createElement('h3')
    const close = document.createElement('div')

    h1.innerText = "Score:1000"
    h3.innerText = "Keep Going"

    close.innerText = "X"
    close.addEventListener('click', () => {
        cr.classList.add('hide')
        location.reload()
    })

    cr.classList.add('container-result', 'hide')
    panel.classList.add('panel')
    close.classList.add('close')

    cr.appendChild(panel)
    panel.appendChild(h1)
    panel.appendChild(h3)
    panel.appendChild(close)
    document.body.appendChild(cr)

    setTimeout(() => {
        cr.classList.remove('hide')
    }, 100)
}

export function createRoadMapWords() {
    randomWords.forEach((word, i) => {
        const span = document.createElement('span')
        span.innerText = word
        span.setAttribute('data-num', i + 1 + '')
        line_words.appendChild(span)
    })
}
