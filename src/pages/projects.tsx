function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projetos</h2>

      <div className="grid grid-3">
        <div className="card">
          <h3>Mini-SIEM (Python)</h3>
          <p>Análise de logs e detecção de eventos suspeitos.</p>
        </div>

        <div className="card">
          <h3>Laboratório Wireshark</h3>
          <p>Captura e análise de tráfego HTTP, DNS, SMB e FTP.</p>
        </div>

        <div className="card">
          <h3>Pentest com Nmap</h3>
          <p>Enumeração de serviços e análise de superfícies de ataque.</p>
        </div>

        <div className="card">
          <h3>Sistema Hospitalar</h3>
          <p>Front-end em React com dashboard e cadastros.</p>
        </div>
      </div>
    </section>
  )
}

export default Projects
