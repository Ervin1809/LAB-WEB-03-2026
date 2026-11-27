const About = () => {
  const dataDiri = [
    { id: 1, label: 'Nama Lengkap', value: 'Muhammad Fauzan Zulfaqqar' },
    { id: 2, label: 'NIM', value: 'H071251088' },
    { id: 3, label: 'Program Studi', value: 'Sistem Informasi' },
    { id: 4, label: 'Email', value: 'mfzulfaqqar@gmail.com' },
    { id: 5, label: 'GitHub', value: 'mfzulfaqqar-stack' }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">Tentang Saya</h2>
        <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-slate-600 text-center mb-8 leading-relaxed">
            Saya berfokus pada perancangan antarmuka visual, arsitektur sistem perangkat lunak, hingga pengelolaan basis data. Pendekatan saya selalu mengutamakan struktur kode yang rapi dan penyelesaian masalah yang efisien.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dataDiri.map((item) => (
              <div key={item.id} className="border-b border-slate-200 py-2">
                <span className="block text-sm text-slate-400 font-medium">{item.label}</span>
                <span className="block text-lg text-slate-700 font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;