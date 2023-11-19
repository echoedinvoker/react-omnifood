function Steps() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto mb-24 px-5">
        <p className="text-brand-600 uppercase font-semibold tracking-wide">How Omnifood works</p>
        <h2 className="text-4xl font-bold tracking-tight">Your daily dose of health in 3 simple steps</h2>
      </div>

      <div className="grid grid-cols-2 gap-y-24 gap-x-12 max-w-5xl mx-auto px-5 items-center">
        <div>
          <p className="step">01</p>
          <h3 className="h3">Tell us what you like</h3>
          <p>Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!</p>
        </div>
        <div className="flexbox duo-bg-circle">
          <img className="w-[35%]" src="app-screen-1.png" alt="app screen 1" />
        </div>
        <div className="flexbox duo-bg-circle">
          <img className="w-[35%]" src="app-screen-2.png" alt="app screen 2" />
        </div>
        <div>
          <p className="step">02</p>
          <h3 className="h3">Approve your weekly meal plan</h3>
          <p>Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.</p>
        </div>
        <div>
          <p className="step">03</p>
          <h3 className="h3">Receive meals at convenient time</h3>
          <p>Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!</p>
        </div>
        <div className="flexbox duo-bg-circle">
          <img className="w-[35%]" src="app-screen-3.png" alt="app screen 3" />
        </div>
      </div>
    </section>
  )
}

export default Steps
