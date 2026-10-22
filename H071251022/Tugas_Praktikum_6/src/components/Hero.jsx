const sapaan = 'Halo, saya'
const nama = 'Muhammad Syahdan'
const deskripsi =
  'Mahasiswa Sistem Informasi Universitas Hasanuddin yang suka membangun tampilan web yang rapi, responsif, dan nyaman dipakai. Saat ini saya fokus belajar Web Development dan Software Engineering.'

function Hero() {
  const handleClick = () => {
    console.log('Tombol "About Me" diklik: menuju bagian Tentang')
    window.location.hash = '#about'
  }

  return (
    <section id="home" className="mx-auto max-w-6xl px-5 pt-12 pb-16 sm:pt-20 sm:pb-24">
      <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr] md:gap-14">
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="mb-3 inline-block rounded-full bg-sand px-4 py-1 text-sm font-semibold text-clay-dark">
            Mahasiswa Sistem Informasi
          </p>
          <h1 className="font-display text-4xl leading-tight font-extrabold sm:text-5xl lg:text-6xl">
            {sapaan} <span className="text-clay">{nama}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg md:mx-0">
            {deskripsi}
          </p>
          <button
            type="button"
            onClick={handleClick}
            className="mt-8 cursor-pointer rounded-full bg-clay px-7 py-3 font-semibold text-cream shadow-lg shadow-clay/30 transition hover:-translate-y-0.5 hover:bg-clay-dark"
          >
            Kenali Saya
          </button>
        </div>

        <div className="order-1 mx-auto w-56 sm:w-72 md:order-2 md:w-full md:max-w-sm">
          <div className="relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-clay/80 sm:translate-x-4 sm:translate-y-4" />
            <img
              src="/syahdan.jpeg"
              alt="Foto profil Muhammad Syahdan"
              className="relative aspect-square w-full rounded-[2rem] border-4 border-ink object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
