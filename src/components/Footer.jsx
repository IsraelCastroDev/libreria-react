function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-slate-900 p-2 text-center text-white mt-2">
      <p>Hecho por Israel Castro - {year}</p>
    </footer>
  );
}

export default Footer;
