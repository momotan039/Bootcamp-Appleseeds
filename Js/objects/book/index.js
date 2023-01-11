let book = {
    name: "Today I'm Strong",
    language: 'English',
    author: 'Shibly',
    publishing_yaer: 2021,
    story: "A story about finding your inner strength"
}

function describeBook(book) {
    return `The book ${book.name} was written by ${book.author} in the year ${book.publishing_yaer}
    ${book.story}`
}
console.log(describeBook(book));
