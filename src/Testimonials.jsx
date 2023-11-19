function Testimonials() {
  return (
    <div className="p-24">
      <div className="mb-20">
        <p className="text-brand-600 uppercase font-semibold tracking-wide">Testimonials</p>
        <h2 className="text-4xl font-bold tracking-tight">Once you try it, you can't go back</h2>
      </div>

      <div className="grid grid-cols-2 gap-y-16 gap-x-24">
        <figure>
          <img src="dave.jpg" alt="Photo of Dave" className="w-24 rounded-full mb-3" />
          <blockquote className="mb-3">
            Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.
          </blockquote>
          <p className="text-sm text-neutral-600">&mdash; Dave Bryson</p>
        </figure>
        <figure>
          <img src="ben.jpg" alt="Photo of Ben" className="w-24 rounded-full mb-3" />
          <blockquote className="mb-3">
            The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!
          </blockquote>
          <p className="text-sm text-neutral-600">&mdash; Ben Hadley</p>
        </figure>
        <figure>
          <img src="steve.jpg" alt="Photo of Steve" className="w-24 rounded-full mb-3" />
          <blockquote className="mb-3">
            Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!
          </blockquote>
          <p className="text-sm text-neutral-600">&mdash; Steve Miller</p>
        </figure>
        <figure>
          <img src="hannah.jpg" alt="Photo of Hannah" className="w-24 rounded-full mb-3" />
          <blockquote className="mb-3">
            I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.
          </blockquote>
          <p className="text-sm text-neutral-600">&mdash; Hannah Smith</p>
        </figure>
      </div>

    </div>
  )
}

export default Testimonials
