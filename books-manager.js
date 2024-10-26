const myLibrary = [];
const BREAK_TAG = "<br>";

/**
 * Book constructor.
 * @param {*} title 
 * @param {*} author 
 * @param {*} noPages 
 * @param {*} readSt 
 */
function Book(title, author, noPages, readSt) {
    this.title = title;
    this.author = author;
    this.noPages = noPages;
    this.readSt = readSt;
}

/**
 * Get info about each Book.
 * @returns all the attributes from the Book object.
 */
Book.prototype.getInfo = function() {
    return `Title: ${this.title} \n Author: ${this.author} \n Number of Pages: ${this.noPages} \n Read Status: ${this.readSt}`;
}

/**
 * Add one book to the array of books. 
 * @param {*} book 
 */
function addBookToTheLibrary(book) {
    myLibrary.push(book);
}

const lotr = new Book("LOTR", "Tolkien", 300, true);
addBookToTheLibrary(lotr);

function showBooks() {
    const divShowBooks = document.getElementById("show-books");
    divShowBooks.innerHTML = ''; // Refresh list
    let index = 0;
    myLibrary.forEach((book) => {
        divShowBooks.innerHTML += "<b>Title:</b> " + book.title 
        + BREAK_TAG
        + "<b>Author:</b> " + book.author 
        + BREAK_TAG 
        + "<b>Number of Pages:</b> " + book.noPages 
        + BREAK_TAG
        + "<b>Read status:</b> " + book.readSt +
        "<button name='remove' id='btn-book-"+ index + "'>🗑️</button>";
        index++;
    });
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    showBooks();
}

/**
 * Event delegation.
 * https://stackoverflow.com/questions/66193592/how-i-know-which-button-been-clicked-in-class-of-buttons
 */
document.addEventListener("click", (evt) => {
    let element = evt.target;
    let elementID = element.id;
    if(elementID.includes("btn-book")) {
        let indexToRemove = elementID.substring(9);
        console.log(`Index to remove ${indexToRemove}`);
        deleteBook(indexToRemove);
    }
});

const addBookButton = document.getElementById("add-book");
addBookButton.addEventListener("click", () => {
    const bookName = document.getElementById("book-name").value;
    const bookAuthor = document.getElementById("author-name").value;
    const bookNoOfPages = document.getElementById("number-of-pages").value;
    const bookReadSt = document.getElementById("read-status").value;

    const newBook = new Book(bookName, bookAuthor, bookNoOfPages, bookReadSt);
    addBookToTheLibrary(newBook);
    showBooks();
});

// console.table(myLibrary);
showBooks();