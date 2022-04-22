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

class Book {
  constructor(title, author, pages, read, indexOfBook) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.indexOfBook = indexOfBook;
  }
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
