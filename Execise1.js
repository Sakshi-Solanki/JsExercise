//Exercise1 
//Library Management


//Book Object Creation
function CreatBooks(title, author, isbn,) {
    if(typeof title != "string" || title == ''){
        console.log("Please Enter Valid Book Title");
        return;
    }
    if(typeof author != "string" || author == ''){
        console.log("Please Enter Valid Author");
        return;
    }
    if(typeof isbn != "string" || isbn == '' || isbn.length !== 9){
        console.log("Please Enter Valid isbn");
    }

    return {
        title: title,
        author: author,
        isbn: isbn,
        checkedOut: false,
    };
}

//Library Array
const library = [];

library.push(CreatBooks("Making India Awesome", "Chetan Bhagat", "123-456-1"));
library.push(CreatBooks("A Sense of Time", "H.S.Vastsyayan", "123-456-2"));
library.push(CreatBooks("An Equal Music", "Vikram Seth", "123-456-3"));
library.push(CreatBooks("Broken WIngs", "Sarojini Naidu", "123-456-4"));

console.log(library);

//Add Books: using function "addBookToLibrary"
function addBookToLibrary(book) {
    library.push(book);
}

let book5 = CreatBooks("My Days", "R.K.Narayan", "123-456-5");
let book6 = CreatBooks("Sunny Days", "Sunny Days", "123-456-6");

addBookToLibrary(book5);
addBookToLibrary(book6);

console.log(library);

//CheckOut books using Isbns.

function checkoutBook(isbn) {
    const book = library.find(function (book) {
        return book.isbn === isbn;
    })
    if (typeof isbn !== 'string' || isbn.length !== 9) {
        console.log("Invalid Isbn")
    }
    else if(!book){
        console.log("book is not found");
    }
    else if(book.checkedOut){
        console.log(`the book is already checked out: ${book.title}`);
    }
    else{
        book.checkedOut = true;
        console.log(book);
    }
}

//     if (book) {
//         if (book.checkedOut) {
//             console.log(`the book is already checked out: ${book.title}`);
//         } else {
//             book.checkedOut = true;
//             console.log(book);
//         }
//     }
//     else if (typeof isbn !== 'string' || isbn.length !== 9) {
//         console.log("Invalid Isbn")
//     }
//     else {
//         console.log("book is not found");
//     }
// }
console.log("checkoutBook:");
checkoutBook("123-456-3");   //{  title: 'An Equal Music', author: 'Vikram Seth', isbn: '123-456-3', checkedOut: true}
checkoutBook("123-456-8");   //book is not found
checkoutBook("123-456-3");   //the book is already checked out: An Equal Music
checkoutBook("123-456-30");  //Invalid Isbn

//return book

function returnBook(isbn) {
    const book = library.find(function (book) {
        return book.isbn === isbn;
    })
    if (typeof isbn !== 'string' || isbn.length !== 9) {
        console.log("Invalid Isbn")
    }
    else if(!book){
        console.log("book is not found");
    }
    else if(book.checkedOut){
        book.checkedOut = false;
             console.log("This book is returned")
             console.log(book);
    }
    else{
        console.log(`the book is already Returned : ${book.title}`);
    }
    // if (book) {
    //     if (book.checkedOut) {
    //         book.checkedOut = false;
    //         console.log("This book is returned")
    //         console.log(book);
    //     } 
    //     else {
    //         console.log(`This Book is already Returned: ${book.title}`)
    //     }
    // }
    // else if (typeof isbn !== 'string' || isbn.length !== 9) {
    //     console.log("Invalid Isbn")
    // }
    // else {
    //     console.log("book is not found");
    // }

}

console.log("returnBook: ");
returnBook("123-456-3");   //This book is returned   {  title: 'An Equal Music', author: 'Vikram Seth', isbn: '123-456-3', checkedOut: false}
returnBook("123-456-2");   //This Book is already Returned: A Sense of Time
returnBook("123-456-3");   //This Book is already Returned: An Equal Music
returnBook("123-456-20");  //Invalid Isbn

//Find Book By Author:
function findBooksByAuthor(author){
    const book = library.find(function (book){
        return book.author === author;
    })
    if(book){
        console.log("The Book is:")
        console.log(book)
    }
    else{
        console.log("Book is Not AVailable")
    }
}

console.log("findBooksByAuthor:")
findBooksByAuthor("Sunny Days");   //The Book is: { title: 'Sunny Days', author: 'Sunny Days', isbn: '123-456-6', checkedOut: false }
findBooksByAuthor("Sakshi");   //Book is Not AVailable