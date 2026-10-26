import { useEffect, useId, useState } from "react";
import { practice, profile, projects, skills, tour } from "./content";

const filters = [
  { id: "all", label: "Todo" },
  { id: "backend", label: "Backend" },
  { id: "realtime", label: "Tiempo real" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [step, setStep] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const zoomTitle = useId();
  const featured = projects.find((project) => project.id === "flowdesk");
  const rest = projects.filter(
    (project) => project.id !== "flowdesk" && (filter === "all" || project.kind === filter),
  );
  const current = tour[step];

  useEffect(() => {
    if (!zoomed) return undefined;
    function onKey(event) {
      if (event.key === "Escape") setZoomed(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [zoomed]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header">
        <a className="brand" href="#inicio" onClick={closeMenu}>
          {profile.name}
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Cerrar" : "Menú"}
        </button>
        <nav id="nav" className={menuOpen ? "open" : undefined}>
          <a href="#aporte" onClick={closeMenu}>
            Aporte
          </a>
          <a href="#proyectos" onClick={closeMenu}>
            Proyectos
          </a>
          <a href="#flowdesk" onClick={closeMenu}>
            FlowDesk
          </a>
          <a href="#recorrido" onClick={closeMenu}>
            Recorrido
          </a>
          <a href="#contacto" onClick={closeMenu}>
            Contacto
          </a>
        </nav>
      </header>

      <main id="contenido">
        <section className="hero" id="inicio">
          <p className="eyebrow">Desarrollo de software · Backend</p>
          <h1>
            Desarrollo aplicaciones y servicios pensando en cómo funcionan por dentro y
            en los problemas que resuelven.
          </h1>
          <p className="lede">
            Soy desarrollador de software con más de 6 años de experiencia, especializado
            en backend con PHP y Laravel, y con Node.js como complemento. Tengo experiencia
            en ambos lenguajes y en sus herramientas: Laravel, Express y Fastify, además de
            APIs REST, bases de datos e integración de sistemas. En este portafolio comparto
            proyectos propios, las tecnologías que utilizo y las decisiones técnicas detrás
            de cada solución.
          </p>
          <div className="actions">
            <a className="button" href="#proyectos">
              Ver proyectos
            </a>
            <a className="button button-quiet" href="#flowdesk">
              Explorar FlowDesk
            </a>
            <a className="button button-quiet" href="#contacto">
              Contactarme
            </a>
            <a className="button button-quiet" href={profile.github}>
              GitHub
            </a>
          </div>
          <ul className="skill-row">
            {skills.map((group) => (
              <li key={group.group}>
                <span>{group.group}</span>
                <strong>{group.items.join(" · ")}</strong>
              </li>
            ))}
          </ul>
        </section>

        <section id="aporte">
          <h2>Qué puedo aportar</h2>
          <p>
            Mi especialidad es el desarrollo backend con PHP y Laravel, y Node.js como
            complemento. Trabajo con ambos lenguajes y sus herramientas, y también con
            interfaces web que consumen APIs, así que puedo seguir una aplicación de
            extremo a extremo.
          </p>
          <ul className="facts">
            {practice.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="proyectos">
          <div className="section-head">
            <div>
              <h2>Proyectos</h2>
              <p>
                Capturas de la aplicación ejecutada en local, con datos de demostración. No
                hay demo pública disponible.
              </p>
            </div>
            <div className="filters" role="group" aria-label="Filtrar proyectos">
              {filters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={filter === item.id}
                  onClick={() => setFilter(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="project-list">
              {[featured, ...rest].filter(Boolean).map((project) => (
                <article
                  key={project.id}
                  id={project.id}
                  className={project.id === "flowdesk" ? "project featured" : "project"}
                >
                  <div className="project-copy">
                    <p className="eyebrow">{project.kicker}</p>
                    <h3>{project.name}</h3>
                    <p>{project.problem}</p>
                    <p>{project.built}</p>
                    <ul className="facts">
                      {project.facts.map((fact) => (
                        <li key={fact}>{fact}</li>
                      ))}
                    </ul>
                    {project.assistance && <p className="assist">{project.assistance}</p>}
                    <div className="stack-groups">
                      {project.stacks.map((stack) => (
                        <div key={stack.group}>
                          <span>{stack.group}</span>
                          <ul>
                            {stack.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="actions">
                      {project.links.map((link) => (
                        <a key={link.href} href={link.href}>
                          {link.label}
                        </a>
                      ))}
                      {project.id === "flowdesk" && (
                        <a href="#recorrido">Ver el recorrido</a>
                      )}
                    </div>
                  </div>
                  <figure>
                    <div className="shot-row">
                      {project.shots.map((shot) => (
                        <img
                          key={shot.alt}
                          src={shot.src}
                          alt={shot.alt}
                          width="1440"
                          height="900"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </figure>
                </article>
              ))}
            </div>
          {filter !== "all" && (
            <p>FlowDesk se queda visible. El filtro solo afecta al resto.</p>
          )}
        </section>

        <section id="recorrido">
          <div className="section-head">
            <h2>Recorrido de FlowDesk</h2>
            <p>
              Capturas de la aplicación ejecutada en local, con datos de demostración. No
              hay demo pública disponible.
            </p>
          </div>
          <div className="tour">
            <div className="tour-nav" role="tablist" aria-label="Pasos del recorrido">
              {tour.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={index === step}
                  onClick={() => setStep(index)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="tour-stage" role="tabpanel">
              <figure>
                <img src={current.image} alt={current.alt} width="1440" height="900" />
                <figcaption>{current.title}</figcaption>
              </figure>
              <div>
                <h3>{current.title}</h3>
                <p>{current.body}</p>
                <div className="actions">
                  <button type="button" onClick={() => setStep((value) => Math.max(0, value - 1))} disabled={step === 0}>
                    Anterior
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep((value) => Math.min(tour.length - 1, value + 1))}
                    disabled={step === tour.length - 1}
                  >
                    Siguiente
                  </button>
                  <button type="button" onClick={() => setZoomed(true)}>
                    Ampliar captura
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto">
          <h2>Contacto</h2>
          <p>
            Si quieres hablar de un proyecto o de una oportunidad, escríbeme. El código de
            estos tres trabajos está en GitHub.
          </p>
          <div className="actions">
            <a className="button" href={profile.github}>
              GitHub
            </a>
            <a className="button button-quiet" href={profile.linkedin}>
              LinkedIn
            </a>
            <a className="button button-quiet" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>
          {profile.name}. Esta página reúne tres proyectos propios.{" "}
          <a href={profile.linkedin}>LinkedIn</a>.
        </p>
      </footer>

      {zoomed && (
        <div className="lightbox" role="presentation" onClick={() => setZoomed(false)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={zoomTitle}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="lightbox-bar">
              <h3 id={zoomTitle}>{current.title}</h3>
              <button type="button" onClick={() => setZoomed(false)}>
                Cerrar
              </button>
            </div>
            <img src={current.image} alt={current.alt} width="1440" height="900" />
            <p>{current.body}</p>
          </div>
        </div>
      )}
    </>
  );
}
