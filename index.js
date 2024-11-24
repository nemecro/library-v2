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
book1.changeStatus();
console.log(book1);
