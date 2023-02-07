function fn(num) {
    return new Promise((res, rej) => {
        if (num < 10)
            rej()
        else if (num > 10)
            res()
    })
}

fn(9)
.then(() => console.log('Yes'))
.catch(() => console.log('No'))
