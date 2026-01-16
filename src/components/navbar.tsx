import './navbar.css'

function Navbar() {
  return (
    <nav>
      <h1 className="logo">Jhonatan Ribeiro</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
