ex1 = (isYes) => isYes ? "yes" : "false";

// --------------- Finish 1 Excercis---------------

function ex2_1(arr) {
    // get smallest num
    const min1 = Math.min(...arr)
    const iMin1 = arr.indexOf(min1)
    // remove smalleset num
    arr.splice(iMin1, iMin1 + 1)
    // get another smallest num
    const min2 = Math.min(...arr)
    return min1 + min2;
}
console.log(ex2_1([1, 2, 3, 4]));

ex2_2 = (arr) => parseInt(arr.join(''), 2)

function findNextSquare(perfect) {
    const num = Math.sqrt(perfect)
    if (!Number.isInteger(num))
        return -1
    return Math.pow(num + 1, 2)
}

function findUniq(arr) {
    obj = {}
    arr.forEach(v => {
        if (v in obj)
            obj[v] += 1
        else
            obj[v] = 1
    })

    return Object.entries(obj).reduce((p, c) => {
        if (p[1] > c[1])
            return Number(c[0])

        return Number(p[0])
    })
}


function Summation(num) {
    sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i
    }
    return sum
}

centuryFromYear = (year) => Math.ceil(year / 100)

function basicOp(opt, val1, val2) {
    if (opt === '+')
        return val1 + val2

    if (opt === '-')
        return val1 - val2

    if (opt === '*')
        return val1 * val2

    if (opt === '/')
        return val1 / val2
}

// ---------------Finish 2 Excercis---------------

function nb_year(p0, percent, aug, p) {
    if (!percent)
        return "percent not set until!!"
    let res = p0;
    let years = 0;
    while (res < p) {
        res += (res * percent / 100) + aug;
        years++
    }
    return years;
}

// ---------------Finish 3 Excercis---------------

function fibonacci_seq(n,offset) {
    //0 1 1 2 3 5
    let prev = 0; //
    let current = offset;
    let res = ""
    for (let i = 0; i < n; i++) {
       res+=current+" "
       const temp=prev
       prev=current
       current+=temp
       
       if(i==0)
       current=1
    }
    return res

}


function tribonacci_seq(n,offset) {

    //0 0 1 1 2
    let prev = 0; //
    let pre_prev = 0; //
    let current = offset;
    let res = ""
    for (let i = 0; i < n; i++) {
       res+=current+" "
       const temp=prev
       const temp2=pre_prev
       pre_prev=prev
       prev=current
       current=current+temp+temp2
       if(i==1)
       current=1
    }
    return res
}


// ---------------Finish 4 Excercis---------------

function trimmingString(str) {
    return str.slice(1, str.length - 1)
}


function repeat_str(num, str) {
    return str.repeat(num)
}


toCamelCase = (str) => {
    let arr = []

    // remove sepeartor symbol and convert it to array
    if (str.includes('-'))
        arr = str.split('-')
    else
        arr = str.split('_')
    // change first case for every single word
    arr = arr.map((word, i) => {
        let first_letter = word[0].toUpperCase();
        if (i == 0) {
            // figuer out whether first lettr is upper or lower case
            if (str[0] !== first_letter)
                first_letter = first_letter.toLowerCase()
        }

        return first_letter + word.slice(1)
    })
    return arr.join('')
}


toWeirdCase = (str) => {
    return str.split(' ').map(word => {
        return word.split('').map((c, i) => {
            if (i % 2 === 1)
                return c.toLowerCase()
            else
                return c.toUpperCase()
        }).join('')
    }).join(' ');
}

getAbbreviatedWords = (str) => {
    return str.split(' ').map(word => {
        return word[0].toUpperCase()
    }).join('.')
}

function maskify(str) {
    //asdfqwe
    //0123456
    //7654321
    //*******/

    let res = ""
    for (let i = 0; i < str.length; i++) {
        if (str.length - i > 4)
            res += "#"
        else
            res += str[i]
    }

    return res
}

function getShortWordLength(str) {

    return str.split(' ').reduce((p, c) => {
        const len1 = p.length
        const len2 = c.length
        return len1 < len2 ? p : c
    }).length
}

function getLongestWord(str) {
    
    return str.split(' ').reduce((p, c) => {
        const len1 = p.length
        const len2 = c.length
        return len1 > len2 ? p : c
    })
}

// ---------------Finish 5 Excercis---------------

function accum(str) {
    return str.split('').map((c, i) => {
        return c.toUpperCase() + c.toLowerCase().repeat(i)
    }).join('-')
}

function countingDuplicates(str) {
    const letters = {}
    str.split('').forEach(c => {
        if (c in letters)
            letters[c] += 1
        else
            letters[c] = 1
    })
    let result = ""
    for (k in letters) {
        if (letters[k] > 1)
            result += `${k} occurs ${letters[k]} times \n `
    }
    return result == '' ? 'no characters repeats more than once' : result
}

function helperFunction(str) {
    const letters = {}
    str.split('').forEach(c => {
        if (c in letters)
            letters[c] += 1
        else
            letters[c] = 1
    })
    return Object.keys(letters)
}

function orgnizeStrings(a,b){
const combine=helperFunction(a+b)
return combine.sort().join('');
}

function isIsoGram(str) {
    //check only letters
    if (!str.match(/^[a-zA-Z]+$/)) {
        return false;
    }
    // ignore letter case
    const letters = str.toLowerCase().split('');
    // check repeating letters 
    const distinctLetters = new Set(letters);
    return letters.length === distinctLetters.size;
}

// ---------------Finish 6 Excercis---------------

findPerimeter=(len,width)=>{
    return (len+width)*2
}