
import foto1 from '../assets/gallery/foto1.jpeg'
import foto2 from '../assets/gallery/foto2.jpeg'
import foto3 from '../assets/gallery/foto3.jpeg'
import foto4 from '../assets/gallery/foto4.jpeg'

const foto = [
  { id: 1, judul: 'Somewhere in Jogja', gambar: foto1 },
  { id: 2, judul: 'Train Ride', gambar: foto2 },
  { id: 3, judul: 'Little Interests', gambar: foto3 },
  { id: 4, judul: 'Memories to Keep', gambar: foto4 },
]

function Gallery() {
  return (
    <section id="gallery" className="bg-slate-900 px-6 py-20 text-white">
      <h2 className="mb-10 text-center text-3xl font-bold">My Gallery</h2>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {foto.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-xl bg-slate-800">
            <img
              src={item.gambar}
              alt={item.judul}
              className="h-56 w-full object-cover transition duration-300 hover:scale-105"
            />
            <p className="p-4 text-center font-medium">{item.judul}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
