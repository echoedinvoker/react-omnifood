import Nav from "./Nav"

function Header() {
  return (
    <header className="bg-brand-100 flex justify-between items-center h-16 px-10">
      <img 
        src="omnifood-logo.png" 
        alt="Omnifood logo" 
        className="h-5"
      />
      <Nav />
    </header>
  )
}

export default Header
