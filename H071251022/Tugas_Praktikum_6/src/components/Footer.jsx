const namaPemilik = 'Muhammad Syahdan'
const tahun = new Date().getFullYear()

function Footer() {
  return (
    <footer className="bg-ink py-8 text-center text-sm text-cream/80">
      <p>
        &copy; {tahun} {namaPemilik}. Hak cipta dilindungi.
      </p>
    </footer>
  )
}

export default Footer
