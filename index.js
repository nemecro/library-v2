const library = (function(){
    const books = [];

    const addBook = function(book){
        books.push(book);
    }

    const removeBook = function(book){
        // using simply indexOf returns undefined and therefore clears the entire array
        const index = books.map(e => e.title).indexOf(book.title);
        books.splice(index, 1);
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
        DOM.refresh();
    });

    const readSection = document.querySelector('#read');
    const wishlistSection = document.querySelector('#wishlist');

    const refresh = function(){
        // clear all the previous records first
        readSection.children[1].innerHTML = '';
        wishlistSection.children[1].innerHTML = '';

        library.books.forEach((book) => {
            const bookCard = document.createElement('div');
            const bookCardInfo = document.createElement('div');
            const bookCardActions = document.createElement('div');
            const title = document.createElement('h3');
            const author = document.createElement('h4');
            const pages = document.createElement('p');
            const changeBtn = document.createElement('button');
            const removeBtn = document.createElement('button');

            bookCard.classList.add('book-card');
            bookCardInfo.classList.add('book-card-info');
            bookCardActions.classList.add('book-card-actions');

            title.textContent = book.title;
            author.textContent = book.author;
            pages.textContent = book.pages;
            
            changeBtn.textContent = 'Change';
            changeBtn.value = 'change';
            removeBtn.textContent = 'Remove';
            removeBtn.value = 'remove';

            changeBtn.addEventListener('click', () => {
                book.changeStatus();
                refresh();
            });

            removeBtn.addEventListener('click', () => {
                library.removeBook(book);
                refresh();
            })

            bookCard.append(bookCardInfo, bookCardActions);
            bookCardInfo.append(title, author, pages);
            bookCardActions.append(changeBtn, removeBtn);

            if (book.status === 'read'){
                readSection.children[1].appendChild(bookCard);
            } else {
                wishlistSection.children[1].appendChild(bookCard);
            }
        });
    };

    return {
        refresh
    }
})();


