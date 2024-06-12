function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-slate-900 p-2 text-center text-white mt-2">
      <p>Hecho por Israel Castro - {year}</p>
      <p>
        Problema tomado del repositorio de{" "}
        <a
          href="https://github.com/midudev/pruebas-tecnicas/tree/main/pruebas/01-reading-list"
          target="_blank"
          className="font-black text-sky-700 underline underline-offset-2"
        >
          Midudev
        </a>
      </p>
    </footer>
  );
}

export default Footer;
