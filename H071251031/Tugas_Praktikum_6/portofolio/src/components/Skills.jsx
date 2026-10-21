const hardSkills = [
  'Frontend Development',
  'Graphic Design',
  'Responsive Layouts',
  'Database Management',
  'Version Control (Git)',
  'Exposure Triangle',
  'Visual Composition',
  'Color Grading',
];

const softSkills = [
  'Problem Solving',
  'Team Collaboration',
  'Critical Thinking',
  'Effective Communication',
  'Adaptability',
  'Time Management',
];

const techTools = [
  { id: 'tool-html5', name: 'HTML5', icon: 'devicon-html5-plain colored' },
  { id: 'tool-css3', name: 'CSS3', icon: 'devicon-css3-plain colored' },
  { id: 'tool-js', name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { id: 'tool-tailwind', name: 'Tailwind', icon: 'devicon-tailwindcss-original colored' },
  { id: 'tool-postgresql', name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
  { id: 'tool-git', name: 'Git', icon: 'devicon-git-plain colored' },
  { id: 'tool-vscode', name: 'VS Code', icon: 'devicon-vscode-plain colored' },
  { id: 'tool-figma', name: 'Figma', icon: 'devicon-figma-plain colored' },
  { id: 'tool-react', name: 'React', icon: 'devicon-react-original colored' },
  { id: 'tool-python', name: 'Python', icon: 'devicon-python-plain colored' },
  { id: 'tool-mysql', name: 'MySQL', icon: 'devicon-mysql-original colored' },
  { id: 'tool-github', name: 'GitHub', icon: 'devicon-github-original' },
  { id: 'tool-java', name: 'Java', icon: 'devicon-java-plain colored' },
  { id: 'tool-gradle', name: 'Gradle', icon: 'devicon-gradle-original colored' },
  { id: 'tool-canva', name: 'Canva', icon: 'devicon-canva-original colored' },
];

function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-medium tracking-widest uppercase">
            Background &amp; Arsenal
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2">
            <em>Education &amp; Skills</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column: Education + Skills */}
          <div className="space-y-10">
            {/* Education Card */}
            <div className="bg-[#f5f5f0] rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </span>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                  Formal Education
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">Hasanuddin University</h3>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-accent text-white">
                  B.Sc.
                </span>
                <span className="text-sm font-medium text-gray-700">Information Systems</span>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
                  </svg>
                  2025 — Present
                </span>
                <span className="flex items-center gap-1.5 text-accent font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                  GPA: 3.74 / 4.00
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Focusing on system integration, business process modeling, modern web
                engineering, database architecture, and user-centered UI/UX design.
              </p>
            </div>

            {/* Hard Skills */}
            <div>
              <h4 className="flex items-center gap-2 text-base font-semibold mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
                  </svg>
                </span>
                Hard Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {hardSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3.5 py-1.5 text-sm font-medium rounded-full bg-gray-100 text-gray-700 border border-gray-200 hover:border-accent hover:text-accent transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h4 className="flex items-center gap-2 text-base font-semibold mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-50 text-amber-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                  </svg>
                </span>
                Soft Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3.5 py-1.5 text-sm font-medium rounded-full bg-amber-50 text-amber-700 border border-amber-200 hover:border-accent hover:text-accent transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Tech & Tools */}
          <div>
            <div className="mb-8">
              <span className="text-accent text-sm font-medium tracking-widest uppercase">
                Arsenal
              </span>
              <h3 className="text-2xl font-bold mt-1 mb-3">Tech &amp; Tools</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                A curated set of technologies, frameworks, and tools I actively use to
                transform creative concepts into high-quality digital solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {techTools.map((tool) => (
                <div
                  key={tool.id}
                  className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 group cursor-default"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-3">
                    <i className={`${tool.icon} text-4xl group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-800 text-center tracking-tight">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
