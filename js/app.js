class Book {
  constructor(isbn, title, author, category, editorial, pages) {
    this.title = title;
    this.isbn = isbn;
    this.author = author;
    this.category = category;
    this.editorial = editorial;
    this.pages = pages;
  }
}

const librito = new Book(
  "9789871609826",
  "Videojuegos construye tu empresa en 10 pasos",
  "Mara Ares",
  "informática",
  "Alfaomega",
  156
);

const librito2 = new Book(
  "9789875669116",
  "Steve Jobs",
  "Walter Isaacson",
  "Biografía",
  "Debolsillo",
  737
);

console.log(librito2);

let books = [];

books.push(librito, librito2);

console.log(books);

//funciones declarativas

function addBook() {
  let isbn = prompt("Ingrese el ISBN del libro");
  if (!isbn) {
    return console.warn("El ISBN es obligatorio");
  }

  let validation = searchISBN(isbn);
   if(validation.ok){
    console.warn("El libro ya se encuentra cargado");
    return;
   }
  let title = prompt("Ingrese el título del libro");
  if (!title) {
    return console.warn("El Título es obligatorio");
  }
  let author = prompt("Ingrese el autor del libro") || "anónimo";
  let category = prompt("Ingrese la categoría del libro");
  if (!category) {
    return console.warn("La categoría es obligatori");
  }
  let editorial = prompt("Ingrese la editorial del libro");
  let pages = Number(prompt("Ingrese la cantidad de páginas del libro"));
  if (isNaN(pages) || pages <= 0) {
    return console.warn("La cantidad debe ser un número mayor que 0");
  }

  //creamops una instancia de la clase libro (generamos un nuevo libro)
  let book = new Book(isbn, title, author, category, editorial, pages);

  books.push(book);
  alert("Libro guardado");
}

//buscar o validar libro por ISBN
function searchISBN(isbn) {
  let isBook = books.find(function (book) {
    return book.isbn === isbn;
  });
  if (isBook) {
    return {
      ok: true,
      isBook,
    }
  }else{
    return {
        ok: false, 
        msg: "El libro no se encuentra",
    }
  }
}

//filtrar libros por titulo
const filterTitle = (title) => {
    const searchBook = books.filter((book) => {
      return book.title.toUpperCase().includes(title.toUpperCase());
    });

    if (searchBook.length > 0) {
        return searchBook;
      }else{
        alert('Libro no encontrado')
      }
  };