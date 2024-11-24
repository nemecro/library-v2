const library = (function(){
    const read = [];
    const wishlist = [];

    const addBook = function(book){
        if (book.status === true){
            read.push(book);
        } else {
            wishlist.push(book);
        }
    }

    return {
        read,
        wishlist,
        addBook
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
console.log(library.read);


