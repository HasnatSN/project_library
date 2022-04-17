const addBookBtn = document.getElementById("add-book");
const newBookModal = document.querySelector(".modal-bg");
const form = document.getElementById("f1");
const logIn = document.getElementById("log-in");

logIn.addEventListener("click", () => {
  alert("Will be implemented in a future version.");
});

addBookBtn.addEventListener("click", () => {
  newBookModal.classList.add("bg-active");
});

let library = [];

function Book(title, author, pages, read, indexOfBook) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.indexOfBook = indexOfBook;
}

function addBookToLibrary() {
  document.getElementById("cards").textContent = "";
  library.forEach((book) => {
    let card = document.createElement("div");
    let title = document.createElement("div");
    let author = document.createElement("div");
    let pages = document.createElement("div");
    let readButton = document.createElement("button");
    let removeButton = document.createElement("button");

    card.classList.add("card");

    title.classList.add("book-title");
    title.textContent = book.title;
    card.appendChild(title);

    author.classList.add("book-author");
    author.textContent = book.author;
    card.appendChild(author);

    pages.classList.add("book-pages");
    pages.textContent = book.pages;
    card.appendChild(pages);

    readButton.classList.add("toggleRead");
    readButton.textContent = "Read";

    if (!book.read) {
      readButton.classList.add("notRead");
      readButton.textContent = "Not read yet.";
    }

    readButton.addEventListener("click", (e) => {
      readButton.classList.toggle("not-read");

      var x = document.querySelector(".toggleRead");
      console.log(x);
      if (x.textContent == "Read") {
        x.textContent = "Not read yet";
      } else {
        x.textContent = "Read";
      }
    });

    card.appendChild(readButton);

    removeButton.classList.add("remove-btn");
    removeButton.textContent = "Remove";
    card.appendChild(removeButton);

    removeButton.setAttribute("data-index", book.indexOfBook);

    removeButton.addEventListener("click", (e) => {
      let index = library.findIndex(
        (x) => x.indexOfBook == removeButton.dataset.index
      );
      library.splice(index, 1);
      console.log(removeButton.dataset.index);
      addBookToLibrary();
    });
    document.getElementById("cards").appendChild(card);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let readStatus = document.getElementById("read_check").checked;
  let indexOfBook = library.length;

  library.push(new Book(title, author, pages, readStatus, indexOfBook));
  addBookToLibrary();
  newBookModal.classList.remove("bg-active");
  form.reset();
});

// const readingStatus = document.querySelector("toggleRead");
// readingStatus.addEventListener("click", () => {
//     readingStatus.textContent
// })

// let books = [];
// let cards = [];

// function Book(title, author, pages, read, indexOfBook) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.indexOfBook = indexOfBook;
// }

// function fillCard(index, card) {
//     let title = document.createElement("div");
//     title.classList.add('book-title');
//     // title.textContent = books[index].title;
//     let author = document.createElement("div");
//     author.classList.add('book-author');
//     // author.textContent = books[index].author;
//     let pages = document.createElement("div");
//     pages.classList.add("bool-pages");
//     // pages.textContent = books[index].pages;

//     card.appendChild(title);
//     card.appendChild(author);
//     card.appendChild(pages);

// }

// function createCard(indexOfBook) {
//     let card = document.createElement("div");
//     card.classList.add('card');
//     cards.push(card);
//     document.getElementById('cards').textContent = "";
//     cards.forEach(card => {
//         document.getElementById('cards').appendChild(card);
//         fillCard(indexOfBook, card);
//     });
// }

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     let title = document.getElementById('title').value;
//     let author = document.getElementById('author').value;
//     let pages = document.getElementById('pages').value;
//     let readStatus = document.getElementById('read_check').value;
//     let indexOfBook = cards.length;

//     books.push(new Book(title, author, pages, readStatus, indexOfBook));
//     createCard(books[indexOfBook]);
//     newBookModal.classList.remove('bg-active');

// })
