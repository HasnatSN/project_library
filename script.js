const addBookBtn = document.getElementById('add-book')
const newBookModal = document.querySelector('.modal-bg');
const form = document.getElementById('f1');
const logIn = document.getElementById('log-in');


let books = [];
let cards = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function createCard() {
    let card = document.createElement("div");
    card.classList.add('card');
    cards.push(card);
    document.getElementById('cards').textContent = "";
    cards.forEach(card => {
        document.getElementById('cards').appendChild(card);
    });
}

logIn.addEventListener('click', () => {
    alert('Will be implemented in a future version.')
})

addBookBtn.addEventListener('click', () => {
    newBookModal.classList.add('bg-active');
})

form.addEventListener('submit', e => {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let readStatus = document.getElementById('read_check').value;

    books.push(new Book(title, author, pages, readStatus));

    console.log(books);

    createCard();

    newBookModal.classList.remove('bg-active');

}) 