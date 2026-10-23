const personalData = [
  { id: 1, label: 'Nama', value: 'Moh Varel Julianto' },
  { id: 2, label: 'Program Studi', value: 'Sistem Informasi' },
  { id: 3, label: 'Fakultas', value: 'FMIPA' },
  { id: 4, label: 'Universitas', value: 'Universitas Hasanuddin' },
  { id: 5, label: 'Minat', value: 'Teknologi dan pengembangan web' },
]

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-y border-white/5 bg-white/[0.025]"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-lime-400">
            Kenali saya
          </p>

          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Tentang <span className="text-lime-400">Saya</span>
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            Saya adalah mahasiswa Sistem Informasi yang sedang mengembangkan
            kemampuan di bidang teknologi. Saya senang mempelajari hal baru,
            bekerja sama dalam tim, dan membuat solusi digital yang bermanfaat.
            Portofolio ini menjadi tempat untuk memperkenalkan diri serta
            menampilkan kemampuan dan proses belajar saya.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6 sm:p-8">
          <h3 className="mb-5 text-lg font-bold">Data Diri</h3>

          <div className="space-y-4">
            {personalData.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[110px_1fr] gap-3 border-b border-white/10 pb-4 last:border-0"
              >
                <p className="text-sm text-slate-500">{item.label}</p>
                <p className="text-sm font-medium text-slate-200">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About