function Meals() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto mb-24 px-5">
        <p className="text-brand-600 uppercase font-semibold tracking-wide">Sample meals</p>
        <h2 className="text-4xl font-bold tracking-tight">Omnifood AI chooses from 5,000+ recipes</h2>
      </div>

      <div className="max-w-5xl mx-auto px-5 grid grid-cols-3 gap-12 mb-10">
        <div className="meal-shadow rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:meal-shadow-up">
          <img src="meal-1.jpg" alt="Japanese Gyozas" />
          <div className="py-10 px-6">
            <div className="flex gap-1 mb-2">
              <span className="bg-green-700 py-1 px-2 text-xs text-white tracking-wider 
              font-medium uppercase inline-block rounded-full">Vegetarian</span>
            </div>
            <p className="text-xl font-semibold mb-5">Japanese Gyozas</p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <span className="flex items-center text-2xl text-brand-600">
                  <ion-icon name="flame-outline"></ion-icon>
                </span>
                <span><strong>650</strong> calories</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex items-center text-2xl text-brand-600">
                  <ion-icon name="restaurant-outline"></ion-icon>
                </span>
                <span>NutriScore &reg; <strong>74</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex items-center text-2xl text-brand-600">
                  <ion-icon name="star-outline"></ion-icon>
                </span>
                <span><strong>4.9</strong> rating (<strong>537</strong>)</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="meal-shadow rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:meal-shadow-up">
          <img src="meal-2.jpg" alt="Avocado Salad" />
          <div className="py-10 px-6">
            <div className="flex gap-1 mb-2">
              <span className="bg-red-700 py-1 px-2 text-xs text-white tracking-wider 
              font-medium uppercase inline-block rounded-full">Vegan</span>
              <span className="bg-blue-700 py-1 px-2 text-xs text-white tracking-wider 
              font-medium uppercase inline-block rounded-full">Paleo</span>
            </div>
            <p className="text-xl font-semibold mb-5">Meal 2: Avocado Salad</p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <span className="flex items-center text-2xl text-brand-600">
                  <ion-icon name="flame-outline"></ion-icon>
                </span>
                <span><strong>400</strong> calories</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex items-center text-2xl text-brand-600">
                  <ion-icon name="restaurant-outline"></ion-icon>
                </span>
                <span>NutriScore &reg; <strong>92</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex items-center text-2xl text-brand-600">
                  <ion-icon name="star-outline"></ion-icon>
                </span>
                <span><strong>4.8</strong> rating (<strong>441</strong>)</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="h3">Works with any diet</h3>
          <ul className="flex flex-col gap-2.5">
            <li className="flex items-center gap-3"><span className="text-brand-600 text-3xl flex items-center"><ion-icon name="checkmark-outline"></ion-icon></span><span>Vegetarian</span></li>
            <li className="flex items-center gap-3"><span className="text-brand-600 text-3xl flex items-center"><ion-icon name="checkmark-outline"></ion-icon></span><span>Vegan</span></li>
            <li className="flex items-center gap-3"><span className="text-brand-600 text-3xl flex items-center"><ion-icon name="checkmark-outline"></ion-icon></span><span>Pescatarian</span></li>
            <li className="flex items-center gap-3"><span className="text-brand-600 text-3xl flex items-center"><ion-icon name="checkmark-outline"></ion-icon></span><span>Gluten-free</span></li>
            <li className="flex items-center gap-3"><span className="text-brand-600 text-3xl flex items-center"><ion-icon name="checkmark-outline"></ion-icon></span><span>Lactose-free</span></li>
            <li className="flex items-center gap-3"><span className="text-brand-600 text-3xl flex items-center"><ion-icon name="checkmark-outline"></ion-icon></span><span>Keto</span></li>
            <li className="flex items-center gap-3"><span className="text-brand-600 text-3xl flex items-center"><ion-icon name="checkmark-outline"></ion-icon></span><span>Paleo</span></li>
            <li className="flex items-center gap-3"><span className="text-brand-600 text-3xl flex items-center"><ion-icon name="checkmark-outline"></ion-icon></span><span>Low FODMAP</span> </li>
            <li className="flex items-center gap-3"><span className="text-brand-600 text-3xl flex items-center"><ion-icon name="checkmark-outline"></ion-icon></span><span>Kid-friendly</span></li>
          </ul>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-5 text-brand-500 text-center">
        <a href="#" className="border-b border-current pb-[1px] transition-all duration-500
          hover:text-brand-600 active:text-brand-600 hover:border-transparent active:border-transparent">See all recipes &rarr;</a>
      </div>
    </section>
  )
}

export default Meals
