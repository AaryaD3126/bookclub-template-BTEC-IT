document.querySelector('.toggle-menu').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');

  }); // toggling mobile menu 
document.querySelector('.search-btn').addEventListener('click', function(){
    document.querySelector('.popup').style.display = 'flex';
})
function closePopup(){
    document.querySelector('.popup').style.display = 'none';

}

const top_books = [
    "img/books/book1.jpg",
    "img/books/book2.jpg",
    "img/books/book3.jpg",
    "img/books/book4.jpg",
    "img/books/book5.jpg",
    "img/books/book6.jpg",
    "img/books/book7.jpg"
];

for (let i = 0; i < top_books.length; i++) {
    const newImage = document.createElement('img');
    newImage.src = top_books[i]; 
    newImage.alt = `Book ${i + 1}`; 
    const link = document.createElement('a');
    link.href = "#"; 
    link.appendChild(newImage); 

    const newBook = document.createElement('div');
    newBook.classList.add('book');
    newBook.appendChild(link); 

    document.querySelector('.book-grid').appendChild(newBook);
}
