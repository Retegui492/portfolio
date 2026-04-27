import './projects.css'
function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projetos</h2>

      <div className="grid grid-3">
        <div className="card">
          <h3>Mini-SIEM (Python)</h3>
          <p>Análise de logs e detecção de eventos suspeitos.</p>
          <a href="https://github.com/Retegui492/mini-siem" target="_blank" rel="noopener noreferrer">
            🔗 Ver no GitHub
          </a>
        </div>

        <div className="card">
          <h3>Laboratório Wireshark</h3>
          <p>Captura e análise de tráfego HTTP, DNS, SMB e FTP.</p>
          <a href="https://github.com/Retegui492/wireshark-lab" target="_blank" rel="noopener noreferrer">
            🔗 Ver no GitHub
          </a>
        </div>

        <div className="card">
          <h3>Pentest com Nmap</h3>
          <p>Enumeração de serviços e análise de superfícies de ataque.</p>
          <a href="https://github.com/Retegui492/projeto-pentest-nmap" target="_blank" rel="noopener noreferrer">
            🔗 Ver no GitHub
          </a>
        </div>

        <div className="card">
          <h3>Mini SOC – Threat Detection Dashboard
          </h3>
          <p>Mini SOC com análise de logs, detecção de ameaças e visualização em dashboard.</p>
          <a className="disabled">
               🚧 Em desenvolvimento
          </a>  
        </div>
      </div>
    </section>
  )
}

export default Projects