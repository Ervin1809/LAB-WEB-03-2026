
const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Tailwind CSS',
]

function Skills() {
  return (
    <section id="skills" className="bg-slate-800 px-6 py-20 text-white">
      <h2 className="mb-10 text-center text-3xl font-bold">Things I'm Learning</h2>

      <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="rounded-xl border border-cyan-400/30 bg-slate-900 px-6 py-4 text-cyan-300 transition hover:-translate-y-1 hover:border-cyan-400"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
