const Skills = () => {
  const skills = [
    'HTML & CSS', 
    'Tailwind CSS', 
    'JavaScript / React', 
    'Python', 
    'PostgreSQL',
  ];

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">Keahlian</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white px-6 py-3 rounded-lg shadow-sm border border-slate-200 text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;