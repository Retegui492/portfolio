import './projects.css'
function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projetos</h2>

      <div className="grid grid-3">
        <div className="card">
          <h3>Rule Based Log Analyzer </h3>
          <p>Análisador de logs baseado em regras para detecção de eventos suspeitos e geração de alertas de segurança</p>
          <a href="https://github.com/Retegui492/Rule-Based-Log-Analyzer" target="_blank" rel="noopener noreferrer">
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
          <h3>Mini SIEM – Threat Detection Dashboard
          </h3>
          <p>Mini SIEM com correlação comportamental, detecção de ameaças baseada em padrões e dashboard interativo</p>
          <a href="https://github.com/Retegui492/mini-siem-threat-detection-dashboard" target="_blank" rel="noopener noreferrer">
            🔗 Ver no GitHub
          </a>  
        </div>
      </div>
    </section>
  )
}

export default Projects