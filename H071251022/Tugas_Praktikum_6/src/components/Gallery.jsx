import foto1 from '../assets/gallery/Nanjak.jpeg'
import foto2 from '../assets/gallery/foto2.jpeg'
import foto3 from '../assets/gallery/foto3.jpeg'
import foto4 from '../assets/gallery/Tangkis.jpeg'


const daftarFoto = [
  { id: 1, src: foto1, judul: 'OTW Puncak' },
  { id: 2, src: foto2, judul: 'Event Film' },
  { id: 3, src: foto3, judul: 'Star-up' },
  { id: 4, src: foto4, judul: 'Badminton' },

]

function Gallery() {
  return (
    <section id="gallery" className="bg-sand/60 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
          Galeri <span className="text-clay">Foto</span>
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {daftarFoto.map((foto) => (
            <figure
              key={foto.id}
              className="group overflow-hidden rounded-3xl border-2 border-ink bg-cream"
            >
              <img
                src={foto.src}
                alt={foto.judul}
                className="aspect-[3/2] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="px-4 py-3 text-sm font-semibold">{foto.judul}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
