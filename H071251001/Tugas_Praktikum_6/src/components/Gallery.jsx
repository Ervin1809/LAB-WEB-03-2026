
import galleryOne from '../assets/gallery/foto2.jpeg'
import galleryTwo from '../assets/gallery/foto3.jpeg'
import galleryThree from '../assets/gallery/foto4.jpeg'
import galleryFour from '../assets/gallery/foto5.jpeg'

const photos = [
  { id: 1, src: galleryOne, title: 'Area Kampus', category: '01 / Campus Life' },
  { id: 2, src: galleryTwo, title: 'Aktivitas Belajar', category: '02 / Daily Life' },
  { id: 3, src: galleryThree, title: 'Meja Belajar', category: '03 / My Space' },
  { id: 4, src: galleryFour, title: 'Travelling', category: '04 / Adventure' },
]

function Gallery() {
  return (
    <section id="galeri" className="border-t border-white/5 bg-white/[0.025]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <p className="section-eyebrow">03 / Galeri</p>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <h2 className="section-title">Potongan <span className="text-accent">cerita.</span></h2>
          <p className="max-w-sm text-sm leading-7 text-slate-400">
            Documenter foto, aktivitas, yang saya lakukan.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((foto) => (
            <figure key={foto.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
              <div className="overflow-hidden">
                <img
                  src={foto.src}
                  alt={foto.title}
                  className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-4">
                <p className="text-xs text-accent">{foto.category}</p>
                <h3 className="mt-2 font-bold text-slate-100">{foto.title}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery