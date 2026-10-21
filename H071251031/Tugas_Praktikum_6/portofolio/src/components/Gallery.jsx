import project01 from '../assets/gallery/project01.png';
import project11 from '../assets/gallery/project11.png';
import project21 from '../assets/gallery/project21.png';
import project31 from '../assets/gallery/project31.png';

const galleryItems = [
  {
    id: 'gallery-1',
    src: project01,
    alt: 'Mockup Proyek — Web Wisata Alam Lejja',
    title: 'Web Wisata Alam Lejja',
    category: 'Web Developer',
  },
  {
    id: 'gallery-2',
    src: project11,
    alt: 'Mockup Proyek — Rak Buku Alief',
    title: 'Rak Buku Alief',
    category: 'Web Developer',
  },
  {
    id: 'gallery-3',
    src: project21,
    alt: 'Mockup Proyek — Infografis TIX ID',
    title: 'Infografis TIX ID',
    category: 'Graphic Design',
  },
  {
    id: 'gallery-4',
    src: project31,
    alt: 'Mockup Proyek — Poster Coming Soon Event Organisasi',
    title: 'Poster Coming Soon Event',
    category: 'Graphic Design',
  },
];

function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#f5f5f0] relative overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #0a0a0a 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-medium tracking-widest uppercase">
            Portfolio Showcase
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 mb-4">
            <em>Projects</em>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            Koleksi karya terpilih yang memadukan estetika visual elegan, arsitektur kode
            modern, dan fungsionalitas pengguna yang optimal.
          </p>
        </div>

        {/* Gallery grid rendered with .map() */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {galleryItems.map((foto) => (
            <article
              key={foto.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-16/10 overflow-hidden">
                <img
                  src={foto.src}
                  alt={foto.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card body */}
              <div className="p-5 md:p-6">
                <span className="inline-block px-2.5 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-accent/10 text-accent mb-3">
                  {foto.category}
                </span>
                <h3 className="text-lg font-bold text-[#0a0a0a] leading-snug">
                  {foto.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
