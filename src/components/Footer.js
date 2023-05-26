export default function Footer() {
  const fullYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__text">© {fullYear} Mesto Russia</p>
    </footer>
  );
}