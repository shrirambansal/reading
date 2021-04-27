// Creates a book object with given parameters
function createBook(title, author, isbn) {
    return { title: title, author: author, isbn: isbn };
}

{
    /*  <tr>
       <td>Elon Musk</td>
       <td>Ashley Vance</td>
       <td>234567890</td>
       </tr> */
}

function cleanInputFields() {

    title.value = "";
    author.value = "";
    isbn.value = "";

}
function addBookToTable(book) {
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");
    row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete" style="background-color: red !important;" id="delete">X</a></td>`;

    list.appendChild(row);
}
               
console.log(createBook("Elon Musk", "Ashley Vance", "234567890"));

// Selecting Form Elements
const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");

const form = document.getElementById("book-form");

// --------------------------------------------------

form.addEventListener("submit", function (event) {
    event.preventDefault();
console.log("Ram")
    if (title.value === "" || author.value === "" || isbn.value === "") {
      alert("Please fill everything before submitting");
    } else {
      const data = createBook(title.value, author.value, isbn.value);  
      console.log(data);
      addBookToTable(data);  

      // add Book to Local Storage
      addBookLS(data); 
    } 

    cleanInputFields();
});

// Today

document.getElementById("book-list").addEventListener("click", function (e) {
    if (e.target.id === "delete") {
        console.log("Found");
        e.target.parentElement.parentElement.remove();
        
       removeBookLS(e.target.parentElement.previousElementSibling.textContent);
    }
});

document.addEventListener("DOMContentLoaded", displayBooks);

// Display Books Function
function displayBooks() {
    const books = getBooksLS();

    for (let i = 0; i < books.length; i++) {
        addBookToTable(books[i]);
    }
}

// localStorage Functions
function getBooksLS() {
    let books;
    if (localStorage.getItem("books") === null) {
        books = []; 
    } else {
        books = JSON.parse(localStorage.getItem("books"));
    }

  return books;
}

function addBookLS(book) {
    const books = getBooksLS();
    // books = [];
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
}

function removeBookLS(isbn) {
    const books = getBooksLS();
    console.log("raj");

    for (let i = 0; i < books.length; i++) {
        if(books[i].isbn === isbn) {
            books.splice(i, 1)
        }
    }
    localStorage.setItem("books", JSON.stringify(books));
}