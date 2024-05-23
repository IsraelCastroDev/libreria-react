import { IconMinus } from "./Icons";
import "./css/reading-list.css";

function ReadingList({ readingList, deleteBook }) {
  return (
    <aside className="bg-gray-100 p-5 w-1/4">
      <h2 className="text-2xl text-slate-800 font-black">Lista de Lectura</h2>
      <p className="text-slate-800 font-semibold">
        {readingList.length > 0
          ? `Tienes ${readingList.length} libros agregados`
          : "No tienes libros agregados"}
      </p>
      <ul className="overflow-scroll h-[calc(100vh-130px)] custom-scroll flex flex-col gap-4 items-center mt-3">
        {readingList.map((book) => (
          <li key={book.ISBN}>
            <div className="book-img">
              <img
                src={book.cover}
                alt={book.title}
                className="book-hover w-[250px] h-full"
              />
              <button className="book-btn" onClick={() => deleteBook(book)}>
                <IconMinus />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default ReadingList;
