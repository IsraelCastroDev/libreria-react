import { useFilters } from "../hooks/useFilters";

function Header() {
  const { filters, updateFilters } = useFilters();
  const handleOnChange = (e) => {
    updateFilters(e.target.value);
  };

  return (
    <header className="bg-slate-900 w-full py-4 px-8">
      <select
        name="genre"
        id="genre"
        className="bg-slate-900 border border-slate-200 p-1"
        onChange={handleOnChange}
        value={filters.genre}
      >
        <option value="all">-- Todos los géneros --</option>
        <option value="Ciencia ficción">Ciencia Ficción</option>
        <option value="Terror">Terror</option>
        <option value="Fantasía">Fantasía</option>
        <option value="Zombies">Zombies</option>
      </select>
    </header>
  );
}

export default Header;
