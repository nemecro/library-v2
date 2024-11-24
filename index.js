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
}

const book1 = new Book('Title', 'Author', 329, true);
console.log(book1);
