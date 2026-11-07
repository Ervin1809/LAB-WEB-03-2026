import galleryOne from '../assets/gallery/kucing.jpeg'
import galleryTwo from '../assets/gallery/varel.jpeg'
import galleryThree from '../assets/gallery/wanitaxvarel.jpeg'
import galleryFour from '../assets/gallery/wanitake2xvarel.jpeg'

const photos = [
  {
    id: 1,
    title: 'Kucingnya varel',
    category: 'kucing',
    image: galleryOne,
  },    
  {
    id: 2,
    title: 'Varel ganteng',
    category: 'siganteng',
    image: galleryTwo,
  },
  {
    id: 3,
    title: 'Wanitax varel',
    category: 'sicantik',
    image: galleryThree,
  },
  {
    id: 4,
    title: 'Wanita Keduax Varel',
    category: 'sicantik 2',
    image: galleryFour,
  },
]

function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 border-y border-white/5 bg-white/[0.025]"
    >
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-lime-400">
          Pilihan karya
        </p>

        <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
          Galeri <span className="text-lime-400">Saya</span>
        </h2>

        <p className="mt-4 max-w-xl leading-7 text-slate-400">
          Galeri nya varel ganteng
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((foto) => (
            <article
              key={foto.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900"
            >
              <img
                src={foto.image}
                alt={foto.title}
                className="aspect-[4/3] w-full object-cover"
              />

              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-lime-400">
                  {foto.category}
                </p>

                <h3 className="mt-2 font-bold text-white">{foto.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery