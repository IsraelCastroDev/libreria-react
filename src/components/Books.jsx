import { useBooks } from "../hooks/useBooks";
import { useFilters } from "../hooks/useFilters";
import { IconMinus, IconPlus } from "./Icons";
import "./css/books.css";

function Books() {
  const { handleClick, isInReadingList, readingList } = useBooks();
  const { filters, allBooks, filteredBooks } = useFilters();
  const availableBooksCount = (books) => {
    // filtro por genero
    const genreBooks = books.filter(
      (b) => filters.genre === "all" || b.book.genre === filters.genre
    );

    // filtro por disponibilidad
    const unavailableBooksCount = readingList.filter(
      (b) => filters.genre === "all" || b.genre === filters.genre
    ).length;

    // calculo de libros disponibles
    return genreBooks.length - unavailableBooksCount;
  };

  const allBooksIsEmpty = allBooks?.length > 0;
  const genreIsAll = filters.genre === "all";
  const booksAvailableInTotal = allBooks.length - readingList.length;
  const booksAvailableByGenre = availableBooksCount(allBooks);

  return (
    <div className="w-3/4">
      <p className="font-semibold">
        {allBooksIsEmpty
          ? `Hay ${booksAvailableInTotal} libros disponibles en total`
          : "No hay libros disponibles en total"}
      </p>
      <p className="font-semibold">
        {genreIsAll &&
          `Hay ${booksAvailableByGenre} libros disponibles en el género ${
            filters.genre === "all" ? "Todos" : filters.genre
          }`}
      </p>

      <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-x-5 gap-y-8">
        {filteredBooks?.map((book) => (
          <li key={book.book.ISBN}>
            <div className="book-img">
              <img
                src={book.book.cover}
                alt={book.book.title}
                className={`book-cover w-full h-[400px] block ${
                  isInReadingList(book.book) ? "opacity-35" : "opacity-100"
                }`}
              />
              <button
                className={`book-btn font-black`}
                onClick={() => handleClick(book.book)}
              >
                {isInReadingList(book.book) ? <IconMinus /> : <IconPlus />}
              </button>
            </div>
            <h3 className="text-center font-semibold mt-2">
              {book.book.title}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
