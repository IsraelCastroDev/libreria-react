import { useBooks } from "../hooks/useBooks";
import { IconMinus, IconPlus } from "./Icons";

function Book({ book }) {
  const { handleClick, isInReadingList } = useBooks();
  return (
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
      <h3 className="text-center font-semibold mt-2">{book.book.title}</h3>
    </li>
  );
}

export default Book;
