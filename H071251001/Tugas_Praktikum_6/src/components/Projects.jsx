import projectOne from '../assets/gallery/project1.jpeg'
import projectTwo from '../assets/gallery/project2.jpeg'
import projectThree from '../assets/gallery/project3.jpeg'

const projects = [
  {
    id: 1,
    title: 'KBS-Calculator',
    category: 'Python',
    description:
      'Aplikasi kalkulator berbasis Python untuk melakukan berbagai perhitungan melalui terminal.',
    image: projectOne,
  },
  {
    id: 2,
    title: 'Savio',
    category: 'Web Application',
    description:
      'Aplikasi pengelolaan keuangan untuk mencatat transaksi dan memantau alokasi dana.',
    image: projectTwo,
  },
  {
    id: 3,
    title: 'PawMate',
    category: 'Website',
    description:
      'Website layanan perawatan hewan peliharaan dengan tampilan yang menarik dan informatif.',
    image: projectThree,
  },
]

function Projects() {
  return (
    <section
      id="project"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24"
    >
      <div className="mb-12 text-center">
        <p className="section-eyebrow">04 / Karya Saya</p>

        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          My Projects<span className="text-accent">.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          Beberapa proyek yang telah saya kerjakan.
        </p>
      </div>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-accent/50"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
                {project.category}
              </p>

              <h3 className="text-xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
