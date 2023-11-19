import CTA from "./CTA"
import FeaturedIn from "./FeaturedIn"
import Gallery from "./Gallery"
import Header from "./Header"
import Hero from "./Hero"
import Main from "./Main"
import Meals from "./Meals"
import Prices from "./Prices"
import Steps from "./Steps"
import Testimonials from "./Testimonials"

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <FeaturedIn />
        <Steps />
        <Meals />
        <div className="grid grid-cols-2 bg-brand-100 items-center">
          <Testimonials />
          <Gallery />
        </div>
        <Prices />
        <CTA />
      </Main>
    </>
  )
}

export default App

