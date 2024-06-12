import Header from "./components/Header";
import ReadingList from "./components/ReadingList";
import Books from "./components/Books";
import Footer from "./components/Footer";
import { IconReadingList } from "./components/Icons";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <main className="mx-[1.3em] md:mx-[1.7em">
        <h1 className="text-3xl font-bold text-center mt-2">
          Librería Virtual
        </h1>
        <section className="flex flex-col items-center md:items-start justify-center md:flex-row gap-5 mt-5">
          <Books />
          <input type="checkbox" id="menu" hidden className="input-menu" />
          <ReadingList />
        </section>
      </main>
      <label
        htmlFor="menu"
        className="btn-menu fixed bottom-5 right-5 bg-slate-900 p-2 rounded-full block lg:hidden z-10 cursor-pointer"
      >
        <IconReadingList />
      </label>
      <Footer />
    </>
  );
}

export default App;
