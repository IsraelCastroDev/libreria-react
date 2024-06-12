import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BooksProvider } from "./contexts/books.jsx";
import { FilterProvider } from "./contexts/filters.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FilterProvider>
    <BooksProvider>
      <App />
    </BooksProvider>
  </FilterProvider>
);
