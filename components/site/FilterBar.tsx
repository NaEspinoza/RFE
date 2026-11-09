const CATEGORIES = ['Todos', 'Perfumes', 'Maquillaje', 'Skincare']

export function FilterBar({
  active,
  onChange,
}: {
  active: string
  onChange: (category: string) => void
}) {
  return (
    <div className="filters" role="tablist">
      {CATEGORIES.map((item) => (
        <button
          key={item}
          className={active === item ? 'active' : ''}
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
