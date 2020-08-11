let books = [];
let myChart;

fetch("/api/books/")
  .then(response => {
    return response.json();
  })
  .then(data => {
    books = data;
  });

fetch("/api/books", {
  method: "POST",
  body: JSON.stringify(books),
  headers: {
  Accept: "application/json, text/plain, */*",
  "Content-Type": "application/json"
  }
})
.then(response => {
return response.json();
})
.then(data => {
})
.catch(err => {
});