function CTA() {
  return (
    <section>
      <div className="max-w-6xl mx-auto mb-24 px-5">
        <div className="grid grid-cols-[2fr_1fr]
        bg-brand-500 h-96 rounded-2xl shadow-2xl overflow-hidden
          bg-gradient-to-br from-brand-200 to-brand-600">
          <div className="p-16 pt-12 text-brand-800">
            <h2 className="text-4xl font-bold tracking-tight mb-5">
              Get your first meal for free!
            </h2>
            <p className="mb-10">
              Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!
            </p>
            <form action="#">
              <div>
                <label htmlFor="full-name">Full name</label>
                <input id="full-name" type="text" placeholder="John Smith" required />
              </div>

              <div>
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" placeholder="me@example.com" required />
              </div>

              <div>
                <label htmlFor="select-where">Where did you hear from us?</label>
                <select id="select-where" required>
                  <option value="">Please choose one option:</option>
                  <option value="friends">Friends and family</option>
                  <option value="youtube">Youtube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="ad">Facebook ad</option>
                  <option value="others">Ohters</option>
                </select>
              </div>

              <button type="submit">Sign up now</button>
            </form>
          </div>
          <div className="support-image" role="img" aria-label="Woman enjoying food"></div>
        </div>
      </div>
    </section>
  )
}

export default CTA

