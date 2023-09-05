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
        checkoutCount: 0,
        dueDate: null,
        rating: []
    };
}

//Library Array
const library = [];
const Max_CheckOut = 3;

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

function checkoutBook(isbn, daysToReturn = 14) {
    const book = library.find(function (book) {
        return book.isbn === isbn;
    })
    if (typeof isbn !== 'string' || isbn.length !== 9) {
        console.log("Invalid Isbn")
    }
    else if(!book){
        console.log("book is not found");
    }
    else if(book.checkoutCount == Max_CheckOut){
        console.log(`${book.title} has reached the maximum number of checkOuts!!`)
    }
    else {
        book.checkedOut = true;
        book.checkoutCount++;
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + daysToReturn);
        book.dueDate = dueDate;
        console.log(`this book is checked out: ${book.title} and due date is ${dueDate.toDateString()}.`);
    }
}

function listOverdueBooks(){
    const currentDate = new Date();
    const overdueBooks = library.filter(book => book.checkedOut && book.dueDate < currentDate);
    return overdueBooks;
}

console.log("checkoutBook:");
checkoutBook("123-456-3");   //this book is checked out: An Equal Music and due date is Tue Sep 19 2023.
checkoutBook("123-456-8");   //book is not found
checkoutBook("123-456-3", 10);   //this book is checked out: An Equal Music and due date is Fri Sep 15 2023.
checkoutBook("123-456-30");  //Invalid Isbn
checkoutBook("123-456-3", 16);   //this book is checked out: An Equal Music and due date is Thu Sep 21 2023.
checkoutBook("123-456-3");   //An Equal Music has reached the maximum number of checkOuts!!


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

//rate a book
function rateBook(isbn, rating){
    const book = library.find(book => book.isbn === isbn);
    if (typeof isbn !== 'string' || isbn.length !== 9) {
        console.log("Invalid Isbn")
    }
    else if(rating >=1 && rating <= 5){
        book.rating.push(rating);
        console.log(`Rating of ${rating} added to ${book.title}.`)
    }
    else if(rating <=1 || rating >=5){
        console.log("rating must be between 1 to 5");
    }
    else{
        console.log("book is not found");
    }
}

// rateBook("123-456-3", 4);   //Rating of 4 added to An Equal Music.
// rateBook("123-456-3", 5)

//get the average rating of a book
function getAverageRating(isbn) {
    const book = library.find(book => book.isbn === isbn);
    if (typeof isbn !== 'string' || isbn.length !== 9) {
        console.log("Invalid Isbn");
    }
    else if(!book){
        console.log("book is not exist in the library");
    }
    else{
        const rating = book.rating;
        if(rating.length > 0){
            const sum = rating.reduce((acc, rating) => acc + rating, 0);
            return sum / rating.length;
    }    else{
         return 0;
    }
}
}

rateBook("123-456-3", 5)    //Rating of 5 added to An Equal Music.
rateBook("123-456-3", 4)    //Rating of 4 added to An Equal Music.
console.log(getAverageRating("123-456-3"));   //4.5