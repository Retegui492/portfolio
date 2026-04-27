import './home.css'


function Home() {
  return (
    <section id="home" className="home">
      <div className="home-avatar">
        <img src="/images/profiles.jpeg" alt="Foto de Jhonatan" />
      </div>

      <div className="home-info">
        <h2>
          Cibersegurança em Foco.<br />Tecnologia com Propósito.
        </h2>

        <p>
          Atuação focada em cibersegurança, com base sólida em redes,
          análise de tráfego e fundamentos de desenvolvimento front-end.


        </p>

        <div className="card home-card">
          <h3>Especialidades</h3>
          <ul>
            <li>🔐 Segurança da Informação</li>
            <li>🌐 Redes & Análise de Tráfego</li>
            <li>🧪 Pentest & Enumeração</li>
            <li>⚛️ Front-end com React</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Home

