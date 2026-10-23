
const skills = [
  'HTML',
  'CSS',
  'JavaScript Dasar',
  'Kemren',
  'Ganteng',
  'Hebad',
]

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-lime-400">
          Yang sedang saya pelajari
        </p>

        <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
          Keahlian <span className="text-lime-400">Saya</span>
        </h2>

        <p className="mt-4 max-w-xl leading-7 text-slate-400">
          Beberapa keterampilan yang saya pelajari dan terus kembangkan selama
          kuliah.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900 p-5 transition hover:border-lime-400/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-400/10 font-bold text-lime-400">
                ✓
              </span>

              <span className="font-semibold text-slate-200">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
