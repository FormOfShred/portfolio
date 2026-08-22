import Footer from "./components/Footer"
import Header from "./components/Header"
import Masonry from "./components/Masonry"

function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center px-6 py-12 lg:px-12 lg:py-16">
        <Masonry />
      </div>
      <Footer />
    </div>
  )
}

export default App
