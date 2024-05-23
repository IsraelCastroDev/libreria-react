import Header from "./components/Header";
import ReadingList from "./components/ReadingList";
import Books from "./components/Books";
import { useBooks } from "./hooks/useBooks";

function App() {
  const { readingList, deleteBook } = useBooks();

  return (
    <>
      <Header />
      <main className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mt-2">
          Librería Virtual
        </h1>
        <section className="flex gap-5 mt-5 h-[calc(100vh-60px)]">
          <Books />
          <ReadingList readingList={readingList} deleteBook={deleteBook} />
        </section>
      </main>
    </>
  );
}

export default App;
