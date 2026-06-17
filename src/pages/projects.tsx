import './projects.css'
import { FaGithub, FaGlobeAmericas } from 'react-icons/fa'

function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projetos</h2>

      <div className="grid grid-3">

        <div className="card">
          <h3>Rule Based Log Analyzer</h3>

          <p>
            Analisador de logs baseado em regras para detecção de eventos suspeitos.
          </p>

          <div className="project-links">
            <a
              href="https://github.com/Retegui492/Rule-Based-Log-Analyzer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver no GitHub"
              title="Ver no GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="card">
          <h3>Laboratório Wireshark</h3>

          <p>
            Captura e análise de tráfego HTTP, DNS, SMB e FTP.
          </p>

          <div className="project-links">
            <a
              href="https://github.com/Retegui492/wireshark-lab"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver no GitHub"
              title="Ver no GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="card">
          <h3>Pentest com Nmap</h3>

          <p>
            Enumeração de serviços e análise de superfícies de ataque.
          </p>

          <div className="project-links">
            <a
              href="https://github.com/Retegui492/projeto-pentest-nmap"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver no GitHub"
              title="Ver no GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="card">
          <h3>Mini SIEM – Threat Detection Dashboard</h3>

          <p>
            Mini SIEM com análise de logs e dashboard interativo.
          </p>

          <div className="project-links">
            <a
              href="https://mini-siem-dashboard.streamlit.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
              title="Live Demo"
            >
              <FaGlobeAmericas />
            </a>

            <a
              href="https://github.com/Retegui492/mini-siem-threat-detection-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver no GitHub"
              title="Ver no GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects