
/*
1. call fetch() on the GoT API inside fetchBooks()
2.Parse the result from JSON into a JS oject
3. Pass the JS object result to renderBooks()
4. Using return fetch instead of just fetch isnt needed
5. .then(response)... converts the json to javascript so we can work with it
*/

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then(books => renderBooks(books));
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
