const skills = [
  'HTML & CSS',
  'JavaScript',
  'React & Vite',
  'Tailwind CSS',
  'Java',
  'Python',
]

function Skills() {
  return (
    <section id="keahlian" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
      <p className="section-eyebrow">02 / Yang saya pelajari</p>
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <h2 className="section-title">Technologies I've <span className="text-accent">learned.</span></h2>
        <p className="max-w-sm text-sm leading-7 text-slate-400">
          Beberapa kemampuan yang sedang saya pelajari dan kembangkan.
        </p>
      </div>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <li key={index} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-lime-300/40 hover:bg-lime-300/[0.06]">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-300/10 font-black text-accent">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="font-semibold text-slate-200">{skill}</span>
            <span className="ml-auto text-slate-600 transition group-hover:text-accent" aria-hidden="true">↗</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills