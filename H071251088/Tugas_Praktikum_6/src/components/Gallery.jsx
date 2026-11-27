import img1 from '../assets/gallery/FinalisLDBI.jpg';
import img2 from '../assets/gallery/sweetStitch.jpg';
import img3 from '../assets/gallery/ecoCalc.jpg';
import img4 from '../assets/gallery/eduManage.jpg';

const Gallery = () => {
  const photos = [
    { id: 1, src: img1, title: 'Finalis LDBI 2023' },
    { id: 2, src: img2, title: 'SweetStitch Landing Page' },
    { id: 3, src: img3, title: 'EcoCalc CLI App' },
    { id: 4, src: img4, title: 'EduManage Dashboard' }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">Galeri & Portofolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((foto) => (
            <div key={foto.id} className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer">
              <img 
                src={foto.src} 
                alt={foto.title} 
                className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white text-lg font-semibold">{foto.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;