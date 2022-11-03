class Book {
  constructor(isbn, title, author, category, editorial, pages) {
    this.title = title;
    this.isbn = isbn;
    this.author = author;
    this.category = category;
    this.editorial = editorial;
    this.pages = pages;
  }
  //getter y setter: propiedad conmutada
  get showTitles() {
     return this.title;
  }

  
  set modifyTitle(newTitle) {
    this.title = newTitle;
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
  if (validation.ok) {
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
    };
  } else {
    return {
      ok: false,
      msg: "El libro no se encuentra",
    };
  }
}

//filtrar libros por titulo
const filterTitle = (title) => {
  const searchBook = books.filter((book) => {
    return book.title.toUpperCase().includes(title.toUpperCase());
  });

  if (searchBook.length > 0) {
    return searchBook;
  } else {
    alert("Libro no encontrado");
  }
};

// Listar libros con forEach

const booksList = (array) => {
  console.log("Libros encontrados");
  console.log("==================");
  array.forEach((book) => {
    console.log(`ISBN: ${book.isbn}`);
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Category: ${book.category}`);
    console.log(`Editorial: ${book.editorial}`);
    console.log(`Pages: ${book.pages}`);
    console.log("======================");
  });
  console.log("Quantity books: " + array.length);
};

//Mostrar libros según su cantidad de páginas definiendo si serán mayor o menor que cierta cantidad.

let viewForPagesMayor = (quantity, mayor) => {
  let searchBook = [];
  if (mayor) {
    searchBook = books.filter((book) => {
      return book.pages >= quantity;
    });
  } else {
    searchBook = books.filter((book) => {
      return book.pages <= quantity;
    });
  }
  if (searchBook.length > 0) {
    booksList(searchBook);
  }
  return searchBook;
};

console.log(viewForPagesMayor(250, true));

//undefine, false, 0, null, '' ----> dan false en un condicional

//Eliminar un libro por su ISBN

const deleteBook = (isbn) => {
  const index = books.findIndex((book) => {
    return book.isbn === isbn;
  });

  if (index > -1) {
    let validar = confirm(`Desea eliminar el libro ${books[index].title}`);
    if (validar) {
      books.splice(index, 1);
      alert("El libro fue eliminado con exito");
    }
  } else {
    alert("Libro no encontrado");
  }
};

deleteBook("dasdasdas");



console.log(books);

//Actualizar datos del libro usando su ISBN

const modifyBook = (isbn) => {
  const index = books.findIndex((book) => {
    return book.isbn === isbn;
  });

  if (index > -1) {
    let newTitle = prompt(
      `Titulo actual:${books[index].title}. Ingrese el nuevo titulo del libro`
    ) || books[index].title;
    let newAuthor = prompt(
      `Autor actual:${books[index].author}. Ingrese el nuevo Autor del libro`
    ) || books[index].author;
    let newCategory = prompt(
      `Categoria actual:${books[index].category}. Ingrese el nuevo Categoria del libro`
    ) || books[index].category;
    let newEditorial = prompt(
      `Editoria actual:${books[index].editorial}. Ingrese el nuevo Editoria del libro`
    ) || books[index].editorial;

    books[index].modifyTitle = newTitle;
    books[index].author = newAuthor;
    books[index].category = newCategory;
    books[index].editorial = newEditorial;

    alert('El libro fue modificado correctamente')
  } else {
    alert("Libro no encontrado");
  }
};

//Ordenar de mayor a menor

const orderBooks = (array) => {
 let orderBook =  array.sort((a, b) => {
    const nameA = a.title.toUpperCase(); // ignore upper and lowercase
    const nameB = b.title.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;

   // return b.pages - a.pages
  })

  return orderBook
}

console.log(orderBooks(books))