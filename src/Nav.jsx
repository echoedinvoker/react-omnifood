function Nav() {
  const length = 5
  return (
    <nav>
      <ul className="flex gap-4 uppercase font-semibold items-center">
        {Array.from({ length }, (_, i) => <li key={i}>
          <a
            href="#"
            className={`transition-all duration-300 hover:text-brand-600 active:text-brand-600 inline-block ${i === length - 1
              ? 'text-neutral-50 bg-brand-500 py-2 px-3 rounded-md hover:text-neutral-50 active:text-neutral-50 hover:bg-brand-600 active:bg-brand-600'
              : ''}`}
          >
            {`section ${i + 1}`}
          </a>
        </li>
        )}
      </ul>
    </nav>
  )
}

export default Nav
