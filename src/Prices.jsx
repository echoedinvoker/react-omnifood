function Prices() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto mb-24 px-5">
        <p className="text-brand-600 uppercase font-semibold tracking-wide">
          Pricing
        </p>
        <h2 className="text-4xl font-bold tracking-tight">
          Eating well without breaking the bank
        </h2>
      </div>

      {/* <div className="max-w-6xl mx-auto grid grid-cols-2 gap-24 px-5 mb-24"> */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-24 px-5 mb-12">
        <div className="border border-neutral-200 rounded-lg p-12 w-3/4 justify-self-end">
          <header className="text-center mb-10">
            <p className="text-neutral-500 uppercase font-semibold tracking-wide mb-6">Starter</p>
            <p className="text-6xl font-semibold"><span className="text-2xl mr-1">$</span>399</p>
            <p className="text-neutral-500">per month. That's just $13 per meal!</p>
          </header>
          <ul className="flex flex-col gap-2.5 mb-10">
            <li className="flex items-center gap-3"><span className="text-neutral-500 text-3xl flex items-center"><ion-icon name="checkmark-outline"></ion-icon></span><span>1 meal per day</span></li>
            <li className="flex items-center gap-3"><span className="text-neutral-500 text-3xl flex items-center"><ion-icon name="checkmark-outline"></ion-icon></span><span>Order from 11am to 9pm</span></li>
            <li className="flex items-center gap-3"><span className="text-neutral-500 text-3xl flex items-center"><ion-icon name="checkmark-outline"></ion-icon></span><span>Delivery is free</span></li>
            <li className="flex items-center gap-3"><span className="text-neutral-500 text-3xl flex items-center"><ion-icon name="close-outline"></ion-icon></span></li>
          </ul>
          <div className="text-center">
            <a href="#" className="border border-neutral-400 hover:border-neutral-500 active:border-neutral-500 text-neutral-500 font-bold tracking-wide py-3 px-6 rounded-md
            inline-block hover:text-neutral-600 active:text-neutral-600 transition-all duration-300">Start eating well</a>
          </div>
        </div>
        <div className="bg-brand-100 rounded-lg p-12 w-3/4 relative overflow-hidden
          after:content-['best_value'] after:text-neutral-800 after:bg-yellow-500 after:uppercase after:font-bold
          after:px-16 after:py-1 after:absolute after:top-[7%] after:-right-[18%] after:rotate-45">
          <header className="text-center mb-10">
            <p className="text-brand-600 uppercase font-semibold tracking-wide mb-6">Complete</p>
            <p className="text-6xl font-semibold"><span className="text-2xl mr-1">$</span>649</p>
            <p className="text-neutral-500">per month. That's just $11 per meal!</p>
          </header>
          <ul className="flex flex-col gap-2.5 mb-10">
            <li className="flex items-center gap-3"><span className="text-brand-600 text-3xl flex items-center"><ion-icon name="checkmark-outline"></ion-icon></span><span>2 meal per day</span></li>
            <li className="flex items-center gap-3"><span className="text-brand-600 text-3xl flex items-center"><ion-icon name="checkmark-outline"></ion-icon></span><span>Order 24/7</span></li>
            <li className="flex items-center gap-3"><span className="text-brand-600 text-3xl flex items-center"><ion-icon name="checkmark-outline"></ion-icon></span><span>Delivery is free</span></li>
            <li className="flex items-center gap-3"><span className="text-brand-600 text-3xl flex items-center"><ion-icon name="checkmark-outline"></ion-icon></span><span>Access to latest recipes</span></li>
          </ul>
          <div className="text-center">
            <a href="#" className="bg-brand-500 text-neutral-50 font-bold tracking-wide py-3 px-6 rounded-md
            inline-block hover:bg-brand-600 active:bg-brand-600 transition-all duration-300">Start eating well</a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 text-center mb-24 italic text-neutral-500">
        <aside>
          Prices include all applicable taxes. Users can cancel at any time. Both plans includes the following:
        </aside>
      </div>

      <div className="max-w-6xl mx-auto px-5 grid grid-cols-4 gap-14">
        <div>
          <div className="text-3xl text-brand-600 bg-brand-100 flex items-center justify-center w-14 h-14 rounded-full p-2 mb-7">
            <ion-icon name="infinite-outline"></ion-icon>
          </div>
          <p className="h4">Never cook again!</p>
          <p>Our subscriptions cover 365 days per year, even including major holidays.</p>
        </div>
        <div>
          <div className="text-3xl text-brand-600 bg-brand-100 flex items-center justify-center w-14 h-14 rounded-full p-2 mb-7">
            <ion-icon name="nutrition-outline"></ion-icon>
          </div>
          <p className="h4">Local and organic</p>
          <p>Our cooks only use local, fresh, and organic products to prepare your meals.</p>
        </div>
        <div>
          <div className="text-3xl text-brand-600 bg-brand-100 flex items-center justify-center w-14 h-14 rounded-full p-2 mb-7">
            <ion-icon name="leaf-outline"></ion-icon>
          </div>
          <p className="h4">No waste</p>
          <p>All our partners only use reusable containers to package all your meals.</p>
        </div>
        <div>
          <div className="text-3xl text-brand-600 bg-brand-100 flex items-center justify-center w-14 h-14 rounded-full p-2 mb-7">
            <ion-icon name="pause-outline"></ion-icon>
          </div>
          <p className="h4">Pause anytime</p>
          <p>Going on vacation? Just pause your subscription, and we refund unused days.</p>
        </div>
      </div>
    </section>
  )
}

export default Prices
