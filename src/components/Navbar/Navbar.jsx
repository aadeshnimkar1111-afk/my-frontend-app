import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Search, Heart, User, Menu, Play, X } from 'lucide-react'
import mdnLogo from '../../assets/mdn-logo.png'
import AuthModal from '../AuthModal/AuthModal'
import MapModal from '../MapModal/MapModal'
import { useWishlist } from '../../context/WishlistContext'
import './Navbar.css'

const CITIES = ['Pune', 'Mumbai', 'Bangalore', 'Delhi NCR', 'Hyderabad']

const MENU_LINKS = [
  'Home',
  'About Us',
  'Contact Us',
  'Privacy Policy',
  'Disclaimer',
  'Careers',
]

function Navbar() {
  const [city, setCity] = useState('Pune')
  const [cityOpen, setCityOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [mapQuery, setMapQuery] = useState(null)
  const cityRef = useRef(null)
  const { wishlist } = useWishlist()

  function openMapFor(query) {
    const trimmed = query.trim()
    if (trimmed) setMapQuery(trimmed)
  }

  useEffect(() => {
    function handleClickOutside(e) {
      if (cityRef.current && !cityRef.current.contains(e.target)) {
        setCityOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="navbar">
      <a href="/" className="navbar__logo">
        <img src={mdnLogo} alt="MDN Salesforce" />
      </a>

      <button className="navbar__live-map" onClick={() => openMapFor(city)}>
        Live Map
      </button>

      <div className="navbar__search">
        <div className="navbar__city" ref={cityRef} onClick={() => setCityOpen(!cityOpen)}>
          <span>{city}</span>
          <ChevronDown size={16} />
          {cityOpen && (
            <ul className="navbar__city-dropdown">
              {CITIES.map((c) => (
                <li
                  key={c}
                  onClick={() => {
                    setCity(c)
                    setCityOpen(false)
                  }}
                >
                  {c}
                </li>
              ))}
            </ul>
          )}
        </div>

        <input
          type="text"
          placeholder="Search for Project, locality or builder"
          className="navbar__input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') openMapFor(searchText)
          }}
        />

        <button
          className="navbar__search-btn"
          aria-label="Search"
          onClick={() => openMapFor(searchText)}
        >
          <Search size={20} />
        </button>
      </div>

      <div className="navbar__actions">
        <button
          className="navbar__reels"
          onClick={() => document.getElementById('reels')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="navbar__reels-badge">NEW</span>
          <Play size={16} fill="currentColor" />
          <span className="navbar__label">Reels</span>
        </button>

        <button
          className={`navbar__icon-btn ${wishlist.length > 0 ? 'is-active' : ''}`}
          aria-label="Wishlist"
        >
          <Heart size={20} fill={wishlist.length > 0 ? 'currentColor' : 'none'} />
          {wishlist.length > 0 && <span className="navbar__notif-badge">{wishlist.length}</span>}
        </button>

        <button className="navbar__signin" onClick={() => setAuthOpen(true)}>
          <User size={16} />
          <span className="navbar__label">Sign in</span>
        </button>

        <button
          className="navbar__icon-btn"
          aria-label="Menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={22} />
        </button>
      </div>

      <div className={`navbar__drawer-overlay ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(false)} />

      <aside className={`navbar__drawer ${menuOpen ? 'is-open' : ''}`}>
        <div className="navbar__drawer-header">
          <img src={mdnLogo} alt="MDN Salesforce" />
          <button
            className="navbar__drawer-close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        <nav className="navbar__drawer-links">
          {MENU_LINKS.map((link, i) => (
            <a
              key={link}
              href="/"
              className={`navbar__drawer-link ${i === 0 ? 'is-active' : ''}`}
            >
              {link}
            </a>
          ))}
        </nav>
      </aside>

      {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
      {mapQuery && <MapModal query={mapQuery} onClose={() => setMapQuery(null)} />}
    </header>
  )
}

export default Navbar
