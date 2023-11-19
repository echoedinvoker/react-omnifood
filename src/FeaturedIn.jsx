function FeaturedIn() {
  return (
    <section className="py-24 pb-16">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="uppercase text-xl mb-8 text-center text-neutral-500 font-bold tracking-wide">as featured in</h2>
        <div className="flex justify-around ">
          {[
            { file: "techcrunch.png", desc: "TechCrunch logo" },
            { file: "business-insider.png", desc: "Business Insider logo" },
            { file: "the-new-york-times.png", desc: "The New York Times logo" },
            { file: "forbes.png", desc: "Forbes logo" },
            { file: "usa-today.png", desc: "USA Today logo" },
          ].map(item => <img
            src={item.file}
            alt={item.desc}
            className="h-8 brightness-0 opacity-50"
          />)}
        </div>
      </div>
    </section>
  )
}

export default FeaturedIn
