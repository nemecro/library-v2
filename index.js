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
        if (status === 'read' || status === 'wishlist'){
            this.status = status;
        } else {
            alert('Invalid input');
        }
    }

    changeStatus(){
        if (this.status === 'read'){
            this.status = 'wishlist';
        } else {
            this.status = 'read';
        }
    }
}

const book1 = new Book('Title', 'Author', 329, 'wishlist');


library.addBook(book1);
book1.changeStatus();
console.log(book1);

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
        let data = Object.fromEntries(new FormData(form));
        data = new Book(data.title, data.author, data.pages, data.status);
        library.addBook(data);
    })
})();


