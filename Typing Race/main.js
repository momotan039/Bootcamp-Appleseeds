    import * as MyFuns from './functions.js'


    const goal = document.querySelector(".center .goal .letters")
    const word_elm = document.querySelector(".center .word")
    var line_words = document.querySelector(".center .words")
    const button = document.querySelector("button")

    // click button
    button.addEventListener("click", () => {
        if (!checkFinishWord())
            return
        word_elm.innerHTML = ""
        goal.innerHTML = ""
        MyFuns.increaseScore()
        MyFuns.changeStyleWord()
        MyFuns.refreshWord()
        button.classList.remove('pass')
    })

    function runGame() {
        MyFuns.createRoadMapWords()
        MyFuns.refreshWord()
    }

    runGame()
