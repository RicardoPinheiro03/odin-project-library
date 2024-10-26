const myLibrary = [];

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
    myLibrary.append(book);
}
