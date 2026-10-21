const personalData = [
  { id: 'about-name', label: 'Name', value: 'Muh. Alief Nur Afanni Arfan' },
  { id: 'about-university', label: 'University', value: 'Hasanuddin University' },
  { id: 'about-major', label: 'Major', value: 'Information Systems (B.Sc.)' },
  { id: 'about-gpa', label: 'GPA', value: '3.74 / 4.00' },
  { id: 'about-period', label: 'Period', value: '2025 — Present' },
  { id: 'about-location', label: 'Location', value: 'Makassar, South Sulawesi' },
  { id: 'about-email', label: 'Email', value: 'aliefnurarfan@gmail.com' },
  { id: 'about-phone', label: 'Phone', value: '+62 822-2077-7312' },
];

function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#f5f5f0] relative overflow-hidden">
      {/* Dot pattern decoration */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #0a0a0a 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16">
          <em>Persona</em>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio paragraph */}
          <div>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 text-justify">
              Information Systems student at Hasanuddin University with a strong passion for
              digital product creation and visual media. Skilled in web development, UI/UX
              design, graphic design, and photography, developed through academic projects,
              developer workshops, and hands-on practice. Proficient in HTML, CSS, JavaScript,
              Tailwind, Canva, Figma, and modern development tools, and adept at leveraging
              AI tools to enhance workflow efficiency. A creative and detail-oriented
              individual with strong problem-solving skills, committed to delivering functional
              and aesthetically impactful digital experiences.
            </p>

            {/* Social links + CV preview button */}
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="https://github.com/aliefnarfan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0a0a0a] text-white hover:bg-accent transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/muh-alief-nur-afanni-arfan-9b3453322/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0a0a0a] text-white hover:bg-accent transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Preview CV button — opens native <dialog> modal, no useState */}
              <button
                id="btn-preview-cv"
                onClick={() => {
                  document.getElementById('cv-modal').showModal();
                  console.log('CV modal opened');
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0a0a] text-white text-sm font-semibold hover:bg-accent transition-colors duration-200 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
                Preview CV
              </button>
            </div>

            {/* ===== CV Modal — native <dialog>, zero React state ===== */}
            <dialog
              id="cv-modal"
              onClick={(e) => {
                // Close when clicking the backdrop (outside the inner box)
                if (e.target === e.currentTarget) {
                  e.currentTarget.close();
                  console.log('CV modal closed via backdrop');
                }
              }}
              style={{
                padding: 0,
                border: 'none',
                borderRadius: '1rem',
                background: 'transparent',
                maxWidth: '90vw',
                width: '900px',
                maxHeight: '90vh',
              }}
            >
              {/* Inner container */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col" style={{ height: '88vh', maxHeight: '700px' }}>
                {/* Modal header */}
                <div className="flex items-center justify-between px-5 py-3.5 bg-[#0a0a0a] shrink-0">
                  <div className="flex items-center gap-2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                    <span className="text-sm font-semibold">CV — Muh. Alief Nur Afanni Arfan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* Download button */}
                    <a
                      href="/cv_alief.pdf"
                      download="CV_Alief_Nur_Arfan.pdf"
                      onClick={() => console.log('CV downloaded')}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-[#0a0a0a] text-xs font-semibold hover:bg-accent-hover transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                      </svg>
                      Download
                    </a>
                    {/* Close button */}
                    <button
                      id="btn-close-cv-modal"
                      onClick={() => {
                        document.getElementById('cv-modal').close();
                        console.log('CV modal closed');
                      }}
                      className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
                      aria-label="Tutup modal CV"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* PDF iframe */}
                <iframe
                  src="/cv_alief.pdf"
                  title="CV Muh. Alief Nur Afanni Arfan"
                  className="w-full flex-1 border-0"
                />
              </div>
            </dialog>
          </div>

          {/* Personal data rendered with .map() */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-semibold mb-6 text-[#0a0a0a]">Personal Info</h3>
            <div className="space-y-4">
              {personalData.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-2 border-b border-gray-100 last:border-b-0"
                >
                  <span className="text-sm font-medium text-gray-400 sm:w-28 shrink-0 uppercase tracking-wide">
                    {item.label}
                  </span>
                  <span className="text-sm md:text-base text-[#0a0a0a] font-medium">
                    {item.value}
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

export default About;
