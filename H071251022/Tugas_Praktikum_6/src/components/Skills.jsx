const keahlian = [
  'HTML',
  'CSS',
  'Python',
  'Java',
  'Git & GitHub',
  'VS Code',
]

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
        Keahlian <span className="text-clay">Saya</span>
      </h2>
      <p className="mt-3 max-w-xl text-ink/70">
        Teknologi dan alat yang saya gunakan untuk belajar dan mengerjakan proyek.
      </p>

      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-3">
        {keahlian.map((skill, index) => (
          <li
            key={index}
            className="flex items-center gap-3 rounded-2xl border-2 border-ink bg-cream px-4 py-4 font-semibold transition hover:-translate-y-1 hover:bg-clay hover:text-cream"
          >
            <span className="font-display text-sm text-clay-dark">0{index + 1}</span>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
