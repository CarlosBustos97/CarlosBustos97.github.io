import flowInicio from "./assets/flowdesk/inicio.jpg";
import flowTickets from "./assets/flowdesk/tickets.jpg";
import flowDetalle from "./assets/flowdesk/detalle.jpg";
import flowConversacion from "./assets/flowdesk/conversacion.jpg";
import flowInforme from "./assets/flowdesk/informe.jpg";
import flowApi from "./assets/flowdesk/api.jpg";
import auralisAcceso from "./assets/auralis/acceso.jpg";
import auralisClase from "./assets/auralis/clase.jpg";
import empleados from "./assets/nomina/empleados.jpg";
import empleadoFormulario from "./assets/nomina/empleado-formulario.jpg";
import cargos from "./assets/nomina/cargos.jpg";

export const profile = {
  name: "Carlos Bustos",
  github: "https://github.com/CarlosBustos97",
  linkedin: "https://www.linkedin.com/in/carlos-andres-bustos-hurtatiz/",
  email: "carlosbustos1997@gmail.com",
};

export const skills = [
  {
    group: "Backend",
    items: ["PHP", "Laravel", "Node.js", "Express", "Fastify"],
  },
  {
    group: "Datos",
    items: ["SQL", "PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    group: "Interfaz y tiempo real",
    items: ["Vue", "React", "Socket.io"],
  },
];

export const practice = [
  "Desarrollo de APIs REST y lógica de negocio.",
  "Integración de sistemas y trabajo con bases de datos relacionales y documentales.",
  "Diagnóstico y corrección de incidencias en aplicaciones existentes.",
  "Uso de Git, Docker y herramientas de desarrollo.",
];

export const projects = [
  {
    id: "flowdesk",
    name: "FlowDesk",
    kicker: "Proyecto principal",
    kind: "backend",
    problem:
      "Una mesa de soporte necesita tickets, plazos y un registro de lo que cambia, sin depender de una hoja de cálculo.",
    built:
      "Desarrollé la API y la interfaz web que la consume. La interfaz no tiene datos propios: cada pantalla sale de la API.",
    assistance:
      "Asistencia de IA en el desarrollo: utilizada ampliamente en el frontend y de forma puntual en el backend.",
    links: [
      {
        label: "Frontend",
        href: "https://github.com/CarlosBustos97/flowdesk-frontend",
      },
      {
        label: "Backend",
        href: "https://github.com/CarlosBustos97/flowdesk-backend",
      },
    ],
    stacks: [
      {
        group: "Frontend",
        items: ["Vue 3", "Vue Router", "Pinia", "vue-i18n", "TypeScript", "Vite"],
      },
      {
        group: "Backend",
        items: ["Fastify", "Zod", "TypeScript"],
      },
      {
        group: "Datos",
        items: ["PostgreSQL", "Prisma", "Redis"],
      },
      {
        group: "Calidad",
        items: ["Vitest"],
      },
    ],
    facts: [
      "Gestión de tickets y estados, con comentarios públicos e internos.",
      "Adjuntos en la conversación del ticket.",
      "Usuarios, permisos, clientes, proyectos y categorías.",
      "Políticas SLA en horario laboral e informes de tickets y cumplimiento.",
      "Notificaciones, workflows, auditoría y API keys.",
    ],
    shots: [
      {
        src: flowInicio,
        alt: "Inicio de FlowDesk con el resumen de tickets abiertos, en curso, en riesgo y fuera de SLA.",
      },
      {
        src: flowTickets,
        alt: "Listado de tickets de FlowDesk, ordenado por la API, con estado, prioridad y cliente.",
      },
      {
        src: flowInforme,
        alt: "Informe de FlowDesk con tickets por estado y prioridad, y el SLA de resolución.",
      },
    ],
  },
  {
    id: "auralis",
    name: "Auralis",
    kicker: "Clase en vivo",
    kind: "realtime",
    problem:
      "En una clase en directo, el chat no puede esperar a recargar la página y todo el mundo tiene que caer en la misma sesión.",
    built:
      "La interfaz entra a la única clase activa y muestra el video junto al chat. La API guarda usuarios, la clase y los mensajes, y los reparte con Socket.io.",
    assistance: "Asistencia de IA: apoyo puntual en tareas de refactorización.",
    links: [
      {
        label: "Interfaz",
        href: "https://github.com/CarlosBustos97/auralis-frontend",
      },
      {
        label: "API",
        href: "https://github.com/CarlosBustos97/auralis-backend",
      },
    ],
    stacks: [
      {
        group: "Frontend",
        items: ["React", "React Router", "Bootstrap", "Axios", "Socket.io"],
      },
      {
        group: "Backend",
        items: ["Express", "JWT", "Passport", "Socket.io"],
      },
      {
        group: "Datos",
        items: ["MongoDB", "Mongoose"],
      },
    ],
    facts: [
      "Entrada automática a la única clase activa.",
      "Video y chat en la misma vista.",
      "Identificación visual del moderador.",
      "Mensajes en tiempo real con Socket.io.",
    ],
    shots: [
      {
        src: auralisAcceso,
        alt: "Pantalla de acceso de Auralis, antes de entrar a la clase.",
      },
      {
        src: auralisClase,
        alt: "Clase en vivo de Auralis, con el video y el chat. El moderador lleva una etiqueta distinta.",
      },
    ],
  },
  {
    id: "nomina",
    name: "Legajo",
    kicker: "Datos de personal",
    kind: "backend",
    problem:
      "Hace falta guardar quién trabaja, en qué área y en qué lugar, sin calcular nóminas ni pagos.",
    built:
      "La aplicación lista empleados y permite crearlos o editarlos. El formulario de cargos asigna área, cargo y roles. El acceso a la aplicación requiere autenticación.",
    links: [
      {
        label: "Código",
        href: "https://github.com/CarlosBustos97/legajo",
      },
    ],
    stacks: [
      {
        group: "Backend",
        items: ["PHP", "Laravel 8"],
      },
      {
        group: "Datos",
        items: ["MySQL"],
      },
      {
        group: "Interfaz",
        items: ["Blade", "Bootstrap"],
      },
    ],
    facts: [
      "Listado, creación y edición de empleados.",
      "Asociación con país, departamento y ciudad.",
      "Asignación de área, cargo y rol a partir de catálogos cargados con seeders.",
      "Los cambios quedan en la tabla logs. Todavía no hay una pantalla para consultar ese historial.",
    ],
    shots: [
      {
        src: empleados,
        alt: "Listado de empleados de Legajo, con un registro de demostración.",
      },
      {
        src: empleadoFormulario,
        alt: "Formulario para crear un empleado, con país, departamento y ciudad.",
      },
      {
        src: cargos,
        alt: "Listado de cargos de Legajo, con el área y el rol del empleado de demostración.",
      },
    ],
  },
];

export const tour = [
  {
    id: "home",
    label: "Inicio",
    title: "El resumen sale del informe",
    body: "Si la cuenta puede ver informes, Inicio pide el resumen de tickets. Ahí están abiertos, en curso, esperando al cliente, resueltos, en riesgo y fuera de SLA. La pantalla Informes muestra el mismo resumen, con el desglose por prioridad. Las cifras de la captura son las de la base local.",
    image: flowInicio,
    alt: "Inicio de FlowDesk con el resumen real de la base local.",
  },
  {
    id: "list",
    label: "Tickets",
    title: "El listado lo ordena la API",
    body: "La tabla pide los tickets con búsqueda, estado y prioridad. El orden no lo decide la tabla: llegan los más recientes primero.",
    image: flowTickets,
    alt: "Listado de tickets de FlowDesk en la aplicación local.",
  },
  {
    id: "detail",
    label: "Detalle",
    title: "Un ticket y su estado",
    body: "El detalle muestra asunto, cliente, proyecto, categoría, responsable y la política SLA. Cambiar de estado solo ocurre si la API acepta la transición.",
    image: flowDetalle,
    alt: "Detalle de un ticket de FlowDesk, con estado, prioridad y política SLA.",
  },
  {
    id: "thread",
    label: "Conversación",
    title: "Comentarios, adjuntos y el plazo",
    body: "Hay notas públicas e internas, y se puede adjuntar un PDF, una imagen o un texto de hasta 10 MB. El detalle enseña el límite de resolución. No enseña si el ticket va en plazo, en riesgo o fuera: eso está en el informe.",
    image: flowConversacion,
    alt: "Conversación de un ticket, con una nota interna y el formulario para adjuntar un archivo.",
  },
  {
    id: "api",
    label: "API",
    title: "La interfaz no guarda la mesa",
    body: "Swagger documenta la API que usa el escritorio. La sesión, los permisos y los datos viven en Fastify, Prisma y PostgreSQL. La dirección que se ve en la captura es la del servidor local; no hay un despliegue público de la API.",
    image: flowApi,
    alt: "Documentación Swagger de la API de FlowDesk, con salud, autenticación y usuarios.",
  },
];
