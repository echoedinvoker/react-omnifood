function Gallery() {
  return (
    <div className="grid grid-cols-3 gap-5 p-5">
      {Array.from({ length: 12 }, (_, i) => <figure className="overflow-hidden">
        <img
          src={`gallery-${i + 1}.jpg`}
          alt="Gallery photo"
          key={i}
          className="hover:scale-110 transition-all duration-500"
        />
      </figure>
      )}
    </div>
  )
}

export default Gallery
