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

/* TO BE DELETED */

const DOM = (function(){
    // MAIN PAGE
    const addBtn = document.querySelector('#add-book-btn');
    const modal = document.querySelector('#add-book-modal');
    const closeBtn = modal.querySelector('#close-modal');
    const form = modal.querySelector('form');

    addBtn.addEventListener('click', () => {
        modal.showModal();
    });
    closeBtn.addEventListener('click', () => {
        modal.close();
    });
    form.addEventListener('submit', () => {
        modal.close();
        // get the data from the form in an object key value pairs
        const data = Object.fromEntries(new FormData(form));
    })
})();


