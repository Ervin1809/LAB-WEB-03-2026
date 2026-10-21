
const dataDiri = [
  { id: 1, label: 'Nama', nilai: 'Muslimah Ayu Hafizhah' },
  { id: 2, label: 'Jurusan', nilai: 'Information Systems student' },
  { id: 3, label: 'Universitas', nilai: 'Universitas Hasanuddin' },
  { id: 4, label: 'Hobi', nilai: 'Listening Music, guitar, movie nights ' },
]

function About() {
  return (
    <section id="about" className="bg-slate-900 px-6 py-20 text-white">
      <h2 className="mb-4 text-center text-3xl font-bold">About Me</h2>

      <p className="mx-auto mb-10 max-w-2xl text-center leading-relaxed text-slate-300">
        Belajar banyak hal baru, mulai dari ngoding sampai explore hal-hal yang sebelumnya belum pernah dicoba. Masih banyak bingungnya, but that's part of the process.
      </p>

      <div className="mx-auto max-w-xl space-y-4">
        {dataDiri.map((item) => (
          <div
            key={item.id}
            className="flex justify-between gap-4 rounded-lg bg-slate-800 p-4"
          >
            <span className="font-semibold text-cyan-400">{item.label}</span>
            <span className="text-right text-slate-300">{item.nilai}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
