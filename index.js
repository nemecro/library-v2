class Book {
    constructor(title, author, pages, status){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}

const book1 = new Book('Title', 'Author', 329, 'read');
console.log(book1);
