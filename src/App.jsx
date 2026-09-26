import Header from './components/Header'
import Hero from './components/Hero'
import Servicos from './components/Servicos'
import Sobre from './components/Sobre'
import Doacao from './components/Doacao'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Servicos />
        <Sobre />
        <Doacao />
      </main>

      <Footer />
    </>
  )
}

export default App