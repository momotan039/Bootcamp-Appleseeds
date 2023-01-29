const roll = document.querySelector('.roll')
const hold = document.querySelector('.hold')
const ctrPanel = document.querySelector('.controls-panel')
const dice1 = document.querySelectorAll('.dices .dice')[0]
const dice2 = document.querySelectorAll('.dices .dice')[1]

const bg_audio = document.querySelector('.bg-audio')
const rolling_sound = document.querySelector('.rolling-audio')
const pop_up_sound = document.querySelector('.popUp-audio')
const winner_sound = document.querySelector('.winner-audio')
const loseRound_sound = document.querySelector('.twice-6-audio')

let isSfxPlaying = true
let isBgPlaying = true

const elmPlayers = {
    player1: {
        main: document.querySelectorAll('.game-page main>div:not(:nth-child(2))')[0],
        total: document.querySelectorAll('.game-page .info .score')[0],
        current: document.querySelectorAll('.game-page .current .num')[0],
        winning: document.querySelectorAll('.game-page .winning-times .num')[0],
    },
    player2: {
        main: document.querySelectorAll('.game-page main>div:not(:nth-child(2))')[1],
        total: document.querySelectorAll('.game-page .info .score')[1],
        current: document.querySelectorAll('.game-page .current .num')[1],
        winning: document.querySelectorAll('.game-page .winning-times .num')[1],
    },
    turn: document.querySelector('.game-page main .center .turn')
}
let target_score
let player1
let player2
let current_player
let isPlayer1 = true

/**
 * 
 * @param  type 0 for bg 1 for sfx
 */

function playSound(sound, type=0) {
    if (type === 0)
    {
        if(isBgPlaying)
        sound.play()
        else
        sound.pause()
    }

    if (type === 1)
    {
        if(isSfxPlaying)
        sound.play()
        else
        sound.pause()
    }

}
function repeatGame(){
    location.reload()
}
function PlayGame() {
    debugger
    playSound(bg_audio)
    const playOverly = document.querySelector('div.play')
    playOverly.classList.remove('show')
}

function StartGame() {
    const score = +document.querySelector('input').value;
    if (Number.isNaN(score) || score <= 1)
        return

    localStorage.removeItem('player1')
    localStorage.removeItem('player2')
    location.replace('./game.html?score=' + score)
}

function closeSettings() {
    playSound(pop_up_sound,1)
    ctrPanel.classList.remove('show')
}

function openSettings() {
    playSound(pop_up_sound,1)
    ctrPanel.classList.add('show')
}

function runGame() {
    if (location.href.includes('index.html'))
        return
    initGame()
    refreshElements()
}

const rollBtnClicking = () => {
    if (roll.classList.contains('lock'))
        return

    // Lock the button
    lockButtons()

    dice1.classList.add('roll')
    dice2.classList.add('roll')

    // Apply sound effect rolling
    playSound(rolling_sound,1)
    //Apply roll animation for 1 second
    setTimeout(() => {

        // remove the points on the dices
        removeLastShape(dice1)
        removeLastShape(dice2)


        // print the points on the dices
        const dice1Number = changeAShape(dice1)
        const dice2Number = changeAShape(dice2)

        changeCurrent(dice1Number, dice2Number)
        checkLooserRound(dice1Number + dice2Number)

        //toggle movement 2-ways 
        // dice1.classList.toggle('movement')
        // dice2.classList.toggle('movement')

        //remove animation after finishing
        dice1.classList.remove('roll')
        dice2.classList.remove('roll')

        // Remove Lock the button
        unLockButtons()
    }, 1500);
}

const holdBtnClicking = () => {
    if (current_player.current == 0)
        return

    //change total current-player
    current_player.total += current_player.current
    refreshElements()
    clearCurrent()

    // check winner or exceed predefined score
    const player_winner = checkWinner()
    if (player_winner)
        finishGame(player_winner)

    //change player
    changePlayer()
}

function setTargetScore() {
    //set target score
    const searchParams = new URLSearchParams(window.location.search);
    const score = +searchParams.get("score");
    if (typeof score === 'string' || !score || score <= 1)
        location.replace('./index.html')
    target_score = +score
}

function configSettingsPanel() {
    // style sfx sound button
    const sfx = document.getElementById('sfxBtn')
    sfx.addEventListener('change', () => {
        isOff = event.target.checked
        if (isOff)
        isSfxPlaying = false
        else
        isSfxPlaying = true
        localStorage.setItem('sfx',isSfxPlaying)
    })


    const bg_soundbtn = document.getElementById('bg_soundBtn')
    bg_soundbtn.addEventListener('change', () => {
        isOff = event.target.checked
        if (isOff)
        isBgPlaying = false
        else
        isBgPlaying = true
        playSound(bg_audio)
        localStorage.setItem('bg',isBgPlaying)
    })
}

function getSoundsStates(){
    const bg=localStorage.getItem('bg')
    const sfx=localStorage.getItem('sfx')

    isBgPlaying=bg=='false'?false:true
    isSfxPlaying=sfx=='false'?false:true
}

function initGame() {
    setTargetScore()
    configSettingsPanel()
    getSoundsStates()
    player1 = {
        total: 0,
        current: 0,
        winning: 0
    }

    player2 = {
        total: 0,
        current: 0,
        winning: 0
    }

    isPlayer1 = true

    roll.addEventListener('click', rollBtnClicking)
    hold.addEventListener('click', holdBtnClicking)
    //get players data from LocalStorage
    const data1 = localStorage.getItem('player1')
    const data2 = localStorage.getItem('player2')
    if (data1 && data2) {
        player1.total = 0
        player1.current = 0
        player2.total = 0
        player2.current = 0

        player1.winning = JSON.parse(data1).winning
        player2.winning = JSON.parse(data2).winning
    }
    current_player = player1
}

function removeLastShape(dice) {
    dice.classList.forEach(c => {
        if (c.includes('s'))
            dice.classList.remove(c)
    })
}

function changeAShape(dice) {
    const shapes = ['s1', 's2', 's3', 's4', 's5', 's6']
    let random = Math.floor(Math.random() * shapes.length)
    const randomShap = shapes[random]
    dice.classList.add(randomShap)
    return random + 1;
}

function changeCurrent(dice1num, dice2num) {
    current_player.current += dice1num + dice2num
    let num = +elmPlayers.player1.current.innerText
    elmPlayers.player1.current.innerText = num + dice1num + dice2num
    refreshElements()
}

function refreshElements() {
    elmPlayers.player1.current.innerText = player1.current
    elmPlayers.player2.current.innerText = player2.current

    elmPlayers.player1.total.innerText = player1.total
    elmPlayers.player2.total.innerText = player2.total

    elmPlayers.player1.winning.innerText = player1.winning
    elmPlayers.player2.winning.innerText = player2.winning
}

function clearCurrent() {
    current_player.current = 0
    elmPlayers.player1.current.innerText = '0'
    elmPlayers.player2.current.innerText = '0'
}

function changePlayer() {
    if (isPlayer1) {
        current_player = player2
        elmPlayers.turn.innerText = 'Turn : Player2'
    } else {
        current_player = player1
        elmPlayers.turn.innerText = 'Turn : Player1'
    }
    elmPlayers.player1.main.classList.toggle('playing')
    elmPlayers.player2.main.classList.toggle('playing')
    isPlayer1 = !isPlayer1
}

function checkWinner() {
    if (current_player.total < target_score)
        return null

    // check winner
    if (current_player.total === target_score)
        return {
            player: current_player,
            reasonLose: 'not reach to top score'
        }

    //check exeeded predefind score
    if (current_player.total > target_score) {
        if (isPlayer1)
            return {
                player: player2,
                reasonLose: 'exceed predefined score'
            }
        else
            return {
                player: player1,
                reasonLose: 'exceed predefined score'
            }
    }
}

function finishGame(data) {
    const scoreboard = document.querySelector('.scoreboard-container')
    const player1_winning_num = scoreboard.querySelectorAll('.scoreboard span')[0]
    const player2_winning_num = scoreboard.querySelectorAll('.scoreboard span')[1]
    const player_result = scoreboard.querySelector('.scoreboard-container span')
    const message_Lose = scoreboard.querySelector('.scoreboard-container span.message')
    scoreboard.classList.add('show')

    // winner sound effect
    playSound(winner_sound,1)

    let isWinnerPlayer1 = false
    if (data.player === player1)
        isWinnerPlayer1 = true

    data.player.winning += 1

    player1_winning_num.innerText = `Player1 Winner:${player1.winning} times`
    player2_winning_num.innerText = `Player2 Winner:${player2.winning} times`
    player_result.innerText = isWinnerPlayer1 ? 'Player1 Winner' : 'Player2 Winner'

    if (isWinnerPlayer1)
        message_Lose.innerText = 'Player2 ' + data.reasonLose
    else
        message_Lose.innerText = 'Player1 ' + data.reasonLose

    // save to players to localStorage
    localStorage.setItem('player1', JSON.stringify(player1))
    localStorage.setItem('player2', JSON.stringify(player2))
}

function checkLooserRound(num) {
    if (num !== 12)
        return
    const dialog = document.querySelector('body .shoked-popUp')
    const h1 = document.querySelector('body .shoked-popUp h1')
    h1.innerText = '8'
    let seconds = 8;
    dialog.classList.add('show')
    // Play pop up sound
    playSound(loseRound_sound,1)
    clearCurrent()
    changePlayer()
    const idInterval = setInterval(() => {
        h1.innerText = --seconds
    }, 1000)

    setTimeout(() => {
        clearInterval(idInterval)
        dialog.classList.remove('show')
    }, seconds * 1000);

}

function lockButtons() {
    roll.classList.add('lock')
    hold.classList.add('lock')
}

function unLockButtons() {
    roll.classList.remove('lock')
    hold.classList.remove('lock')
}

function startNewGame() {
    localStorage.removeItem('player1')
    localStorage.removeItem('player2')
    location.replace('./index.html')
}

function PlayAgain() {
    const scoreboard = document.querySelector('.scoreboard-container')
    scoreboard.classList.remove('show')
    if (current_player == player2)
        changePlayer()
    initGame()
    refreshElements()
}



runGame()
