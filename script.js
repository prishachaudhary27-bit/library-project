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
        if(value.trim() === ""){
            throw new Error("Title cannot be empty");
        }
        this._title=value;
    }
    toggleRead(){
        this.read=!this.read;
    }
}

function addBookToLibrary(title,author,pages,read){
    const isduplicate = myLibrary.some(book => book.title === title && book.author === author);
    if(isduplicate){
        alert("Book with this title already exists");
        return;
    }
    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
}