let book = {
    name: "Today I'm Strong",
    year: 2021,
    author: 'Shibly',
}

let book2 = {
    name: "Go to Future",
    year: 2014,
    author: 'Mohammed',
}

bookUtils={}

bookUtils.getFirstPublished=(book1,book2)=>{
if(book1.year<book2.year)
return book1
return book2
}

bookUtils.setNewEdition=(book,year)=>{
book.year=year
}

bookUtils.setLanguage=(book,lan)=>{
    book.language=lan
 }

 bookUtils.setTranslation=(book,language,translator)=>{
    book.translation={
        translator:translator,
        language:language
    }
 }

 bookUtils.setPublisher=(book,name,location)=>{
    book.publisher={
        name:name,
        location:location
    }
 }

 bookUtils.isSamePublisher=(book,book2)=>{
    return book.publisher.name==book2.publisher.name
    && book.publisher.location==book2.publisher.location
 }


 console.log(bookUtils.getFirstPublished(book2,book))
 bookUtils.setPublisher(book,'ahmad','jordan')
 bookUtils.setPublisher(book2,'rami','yaffo')

 console.log(bookUtils.isSamePublisher(book2,book))
