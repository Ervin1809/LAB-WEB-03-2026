const personalData = [
  { id: 1, label: 'Nama', value: 'Vivien' },
  { id: 2, label: 'Status', value: 'Mahasiswa' },
  { id: 3, label: 'Fokus', value: 'Pengembangan Web' },
  { id: 4, label: 'Domisili', value: 'Makassar' },
]

function About() {
  return (
    <section id="tentang" className="border-y border-white/5 bg-white/[0.025]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-24">
        <div>
          <p className="section-eyebrow">01 / Tentang saya</p>
          <h2 className="section-title">Kenali saya <span className="text-accent">lebih dekat.</span></h2>
        </div>
        <div>
          <p className="leading-8 text-slate-400">
            Saya adalah seorang mahasiswa yang memiliki ketertarikan pada teknologi,
            desain, dan pengembangan website. Saya senang mempelajari hal baru,
            mencoba ide kreatif, dan mengembangkan kemampuan melalui proyek kecil.
            Portofolio ini menjadi tempat untuk mendokumentasikan proses belajar
            dan karya yang saya buat.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3">
            {personalData.map((item) => (
              <div key={item.id} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <p className="text-xs text-slate-500">{item.label}</p>
                <p className="mt-2 break-words text-sm font-bold text-slate-100">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About