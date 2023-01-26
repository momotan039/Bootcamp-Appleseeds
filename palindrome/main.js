
function isPalindrome(word) {
    let fi = 0 //first index
    let li = word.length - 1; //last index

    while (fi < li) {
        //if the first character equal the last one
        if (word[fi] !== word[li])
            return false
        //change indexs
        fi++
        li--
    }
    return true
}




const button = document.querySelector('button');
button.addEventListener('click', () => {
    const word = document.querySelector('input').value
    const h1 = document.querySelector('h1');

    if (word === '') {
        h1.innerText = 'Please Enter A Word'
        return
    }
    const result = isPalindrome(word)
    if (result)
        h1.innerText = 'Yes , it\'s a Palindrome Word'
    else
        h1.innerText = 'No , it\'s not a Palindrome Word'
})

































// const input = document.querySelector('input');
// input.addEventListener('input', () => {

//     const word = event.target.value;

//     if (word === '') {
//         event.target.classList.remove('pass')
//         event.target.classList.remove('error')
//         return
//     }


//     if (isPalindrome(word)) {
//         event.target.classList.add('pass')
//         event.target.classList.remove('error')
//     } else {
//         event.target.classList.add('error')
//         event.target.classList.remove('pass')
//     }
// })
