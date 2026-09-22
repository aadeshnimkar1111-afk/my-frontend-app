import { ChevronDown } from 'lucide-react'
import './FilterDropdown.css'

function FilterDropdown({ label, options, selected, onChange, isOpen, onToggle }) {
  function toggleOption(id) {
    onChange(selected.includes(id) ? selected.filter((s) => s !== id) : [...selected, id])
  }

  return (
    <div className="filter-dropdown">
      <button
        className={`filter-dropdown__trigger ${selected.length > 0 ? 'is-active' : ''}`}
        onClick={onToggle}
      >
        {label}
        {selected.length > 0 && <span className="filter-dropdown__count">{selected.length}</span>}
        <ChevronDown size={14} />
      </button>

      {isOpen && (
        <div className="filter-dropdown__panel">
          {options.length === 0 && <p className="filter-dropdown__empty">No options</p>}
          {options.map((opt) => (
            <label key={opt.id} className="filter-dropdown__option">
              <input
                type="checkbox"
                checked={selected.includes(opt.id)}
                onChange={() => toggleOption(opt.id)}
              />
              {opt.label}
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

export default FilterDropdown
