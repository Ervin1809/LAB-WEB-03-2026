const paragraf =
  'Saya Muhammad Syahdan, mahasiswa Sistem Informasi di Universitas Hasanuddin. Saya tertarik pada dunia pengembangan web, mulai dari merancang tampilan di Figma sampai menghidupkannya dengan HTML, CSS, dan JavaScript. Kini saya sedang memperdalam pemrograman berorientasi objek dan membangun kebiasaan menulis kode yang bersih serta terstruktur.'

const dataDiri = [
  { id: 1, label: 'Nama', nilai: 'Muhammad Syahdan' },
  { id: 2, label: 'Program Studi', nilai: 'Sistem Informasi' },
  { id: 3, label: 'Kampus', nilai: 'Universitas Hasanuddin' },
  { id: 4, label: 'Angkatan', nilai: '2025' },
  { id: 5, label: 'Semester', nilai: '3' },
  { id: 6, label: 'Fokus', nilai: 'Web Development & Software Engineering' },
]

function About() {
  return (
    <section id="about" className="bg-sand/60 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
          Tentang <span className="text-clay">Saya</span>
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-12">
          <p className="text-base leading-relaxed text-ink/80 sm:text-lg">{paragraf}</p>

          <dl className="divide-y divide-ink/10 rounded-3xl border-2 border-ink bg-cream p-2 shadow-[6px_6px_0_0_var(--color-ink)]">
            {dataDiri.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-0.5 px-4 py-3 sm:flex-row sm:items-baseline sm:gap-4"
              >
                <dt className="text-sm font-semibold text-clay-dark sm:w-36 sm:shrink-0">
                  {item.label}
                </dt>
                <dd className="font-medium">{item.nilai}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About
