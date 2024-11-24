const library = (function(){
    const books = [];

    const addBook = function(book){
        books.push(book);
    }

    const removeBook = function(book){
        books.splice(books.indexOf[book]);
    }

    return {
        addBook,
        removeBook, 
        books
    }
})();

class Book {
    constructor(title, author, pages, status){
        this.title = title;
        this.author = author;
        this.pages = pages;
        if (status === true || status === false){
            this.status = status;
        } else {
            alert('Invalid input');
        }
    }

    changeStatus(){
        if (this.status === true){
            this.status = false;
        } else {
            this.status = true;
        }
    }
}

const book1 = new Book('Title', 'Author', 329, true);
console.log(book1);

library.addBook(book1);
book1.changeStatus();

library.removeBook(book1)
console.log(library.books);


