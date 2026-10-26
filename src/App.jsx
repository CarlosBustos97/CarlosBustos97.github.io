const projects = [
  {
    title: 'Aula en tiempo real',
    kicker: 'Prueba técnica · Kuepa',
    problem:
      'Una clase en línea necesita que quienes entran hablen en el mismo momento, no solo que dejen mensajes guardados para más tarde.',
    does: 'La aplicación registra usuarios, abre un aula y muestra un chat que llega al instante a quienes están conectados.',
    stack: [
      'React',
      'React Router',
      'Bootstrap',
      'Axios',
      'Socket.io',
      'Express',
      'MongoDB',
      'JWT',
    ],
    links: [
      {
        href: 'https://github.com/CarlosBustos97/kuepa_front',
        label: 'Frontend',
      },
      {
        href: 'https://github.com/CarlosBustos97/kuepa_back',
        label: 'Backend',
      },
    ],
  },
  {
    title: 'Nómina',
    kicker: 'Gestión de personal',
    problem:
      'El personal de una empresa queda repartido en hojas sueltas: el cargo, el área, la ciudad y quién hizo cada cambio.',
    does: 'El sistema guarda empleados, cargos, áreas y roles, los ubica por país, departamento y ciudad, y deja una bitácora de los cambios.',
    stack: ['Laravel', 'PHP', 'SQL'],
    links: [
      {
        href: 'https://github.com/CarlosBustos97/pp_nomi',
        label: 'Repositorio',
      },
    ],
  },
]

const skills = [
  'React',
  'Node/Express',
  'Socket.io',
  'MongoDB',
  'Laravel',
  'SQL',
]

export default function App() {
  return (
    <>
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header">
        <a className="brand" href="#inicio">
          Carlos Bustos
        </a>
        <nav aria-label="Secciones">
          <a href="#proyectos">Proyectos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main id="contenido">
        <section className="hero" id="inicio">
          <p className="eyebrow">Estudiante</p>
          <h1>Desarrollo web full stack</h1>
          <p className="lede">
            Trabajo con JavaScript y PHP. Armo la interfaz, la API y la base
            de datos del mismo producto.
          </p>
        </section>

        <section id="proyectos" aria-labelledby="proyectos-titulo">
          <h2 id="proyectos-titulo">Proyectos</h2>
          <div className="projects">
            {projects.map((project) => (
              <article className="project" key={project.title}>
                <p className="kicker">{project.kicker}</p>
                <h3>{project.title}</h3>
                <p>
                  <strong>Problema. </strong>
                  {project.problem}
                </p>
                <p>
                  <strong>Qué hace. </strong>
                  {project.does}
                </p>
                <ul className="stack" aria-label={`Tecnologías de ${project.title}`}>
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="links">
                  {project.links.map((link) => (
                    <a key={link.href} href={link.href}>
                      {link.label}
                    </a>
                  ))}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="habilidades" aria-labelledby="habilidades-titulo">
          <h2 id="habilidades-titulo">Habilidades</h2>
          <ul className="skills">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section id="contacto" aria-labelledby="contacto-titulo">
          <h2 id="contacto-titulo">Contacto</h2>
          <p>Si quieres ver el código o escribirme, estos son los dos canales.</p>
          <p className="links">
            <a href="https://github.com/CarlosBustos97">GitHub</a>
            <a href="mailto:carlosbustos1997@gmail.com">
              carlosbustos1997@gmail.com
            </a>
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          El resto del perfil de GitHub son cursos y ejercicios. Aquí están
          los dos proyectos propios.
        </p>
      </footer>
    </>
  )
}
