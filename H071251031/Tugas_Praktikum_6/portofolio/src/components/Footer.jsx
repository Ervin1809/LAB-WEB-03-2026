const currentYear = new Date().getFullYear();

const quickLinks = [
  { id: 'footer-home', label: 'Home', href: '#hero' },
  { id: 'footer-about', label: 'About', href: '#about' },
  { id: 'footer-skills', label: 'Skills', href: '#skills' },
  { id: 'footer-gallery', label: 'Gallery', href: '#gallery' },
];

const socialLinks = [
  {
    id: 'footer-github',
    name: 'GitHub',
    href: 'https://github.com/aliefnarfan/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    id: 'footer-linkedin',
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muh-alief-nur-afanni-arfan-9b3453322/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    id: 'footer-email',
    name: 'Email',
    href: 'mailto:aliefnurarfan@gmail.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    id: 'footer-phone',
    name: 'Phone',
    href: 'tel:+6282220777312',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/10 relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-62.5 rounded-full opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200,164,94,0.3) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pb-12 border-b border-white/10">
          {/* Brand & bio */}
          <div className="md:col-span-1 space-y-4">
            <a
              href="#hero"
              className="inline-block text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity"
            >
              Muh. Alief Nur Afanni Arfan<span className="accent">.</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Informatics student &amp; creative technologist passionate about building beautiful,
              functional web applications and striking visual content.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  onClick={() => console.log(`Navigating to ${item.name}`)}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-[#0a0a0a] hover:bg-accent hover:border-accent transition-all duration-200"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-accent">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={() => console.log(`Footer link clicked: ${link.label}`)}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-accent">
              Get In Touch
            </h3>
            <p className="text-sm text-gray-400">
              Tertarik berkolaborasi atau memiliki pertanyaan seputar proyek?
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex items-center gap-2">
                <span className="text-accent">📍</span>
                <span>Makassar, Sulawesi Selatan, Indonesia</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-accent">✉️</span>
                <a
                  href="mailto:aliefnurarfan@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  aliefnurarfan@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {currentYear} Muh. Alief Nur Afanni Arfan. All rights reserved.
          </p>

          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              console.log('Scroll to top from Footer');
            }}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-y-0.5 transition-transform"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
