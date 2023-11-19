function Hero() {
  return (
    <section className="bg-brand-100 py-24 pt-12">
      <div className="grid grid-cols-2 max-w-6xl mx-auto items-center gap-24 px-5">
        <div>
          <h1 className="text-5xl font-bold tracking-tight mb-10">A healthy meal delivered to your door, every single day</h1>
          <p className="mb-16">The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.</p>
          <a href="#" className="bg-brand-500 text-neutral-50 font-bold tracking-wide uppercase py-3 px-6 rounded-md mr-7 
            inline-block hover:bg-brand-600 active:bg-brand-600 transition-all duration-300">Start eating well</a>
          <a href="#" className="bg-white text-neutral-500 py-3 px-6 rounded-md font-bold tracking-wide uppercase inline-block shadow-border">Learn more &darr;</a>
          <div className="flex items-center gap-5 mt-16">
            <div  className="flex">
              {Array.from({ length: 5 }, (_, i) => <img
                src={`customer-${i + 1}.jpg`}
                alt={`customer ${i + 1}`}
                className="w-12 h-12 rounded-full -mr-3 last:mr-0 border-[0.2rem] border-brand-100"
                key={i}
              />)}
            </div>
            <p className="text-lg font-medium"><strong className="text-brand-600 text-xl">250,000+</strong> meals last year!</p>
          </div>
        </div>
        <img src="hero.png" alt="Woman enjoying food, meals in storage container, and food bowls on a table" />
      </div>
    </section>
  )
}

export default Hero
