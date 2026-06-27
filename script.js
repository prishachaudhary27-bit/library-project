const myLibrary=[];
class Book{
    constructor(title,author,pages,read){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.read=read;
        this.id=crypto.randomUUID();
    }
    get title(){
        return this._title;
    }   
    set title(value){
        if(value === null || value === undefined||value.trim() === ""  ){
            throw new Error("Title cannot be empty");
        }
        this._title=value;
    }
    get pages(){
        return this._pages;
    }   
    set pages(value){
        if(isNaN(value) == true || value <= 0){
            throw new Error("Pages can only be a positive number");
        }
        this._pages=value;
    }
    get author(){
        return this._author;
    }
    set author(value){
        if(value === null || value === undefined||value.trim() === ""  ){
            throw new Error("Author cannot be empty");
        }
        this._author=value;
    }
    get read(){
        return this._read;
    }   
    set read(value){
        if(typeof value !== "boolean"){
            throw new Error("Read can only be a boolean");
        }
        this._read=value;
    }   
    toggleRead(){
        this.read=!this.read;
    }
}

function addBookToLibrary(title,author,pages,read){
    const isduplicate = myLibrary.some(book => book.title.toLowerCase() === title.toLowerCase() && book.author.toLowerCase() === author.toLowerCase());
    if(isduplicate){
        throw new Error("Book with this title already exists");
    }
    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
}
function render(){
    const container = document.getElementById("library");
    container.innerHTML = "";
    myLibrary.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("book-card");
    card.setAttribute("data-id", book.id);
    card.innerHTML = `
        <img src="https://placehold.co/150x200?text=Book+Cover" alt="Book Cover">
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Status: ${book.read ? "Read" : "Not Read"}</p>
    `;
    container.appendChild(card);
});
}