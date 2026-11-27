const Hero = () => {
  return (
    <section className="pt-28 pb-16 px-4 bg-slate-50 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Halo, Saya <span className="text-blue-600">Muhammad Fauzan Zulfaqqar</span> 👋
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Mahasiswa Sistem Informasi Universitas Hasanuddin yang antusias dalam pengembangan web, rekayasa perangkat lunak, dan eksplorasi teknologi terbaru.
          </p>
          <button 
            onClick={() => console.log("Mari berkolaborasi! Pesan dari tombol Hero.")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Sapa Saya
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <img 
            src="/fauzan.jpg" 
            alt="Muhammad Fauzan Zulfaqqar" 
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;