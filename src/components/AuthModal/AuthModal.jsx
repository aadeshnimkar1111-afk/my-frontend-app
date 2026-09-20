import { useState } from 'react'
import { X } from 'lucide-react'
import './AuthModal.css'

function AuthModal({ onClose }) {
  const [tab, setTab] = useState('login')

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="auth-modal__close" aria-label="Close" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="auth-modal__tabs">
          <button
            className={`auth-modal__tab ${tab === 'login' ? 'is-active' : ''}`}
            onClick={() => setTab('login')}
          >
            Login
          </button>
          <button
            className={`auth-modal__tab ${tab === 'register' ? 'is-active' : ''}`}
            onClick={() => setTab('register')}
          >
            Register
          </button>
        </div>

        {tab === 'login' ? (
          <form className="auth-modal__form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Email
              <input type="email" placeholder="you@example.com" required />
            </label>
            <label>
              Password
              <input type="password" placeholder="••••••••" required />
            </label>
            <a href="/" className="auth-modal__forgot">Forgot password?</a>
            <button type="submit" className="auth-modal__submit">Login</button>
            <p className="auth-modal__switch">
              Don't have an account?{' '}
              <span onClick={() => setTab('register')}>Register</span>
            </p>
          </form>
        ) : (
          <form className="auth-modal__form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Full name
              <input type="text" placeholder="John Doe" required />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" required />
            </label>
            <label>
              Password
              <input type="password" placeholder="••••••••" required />
            </label>
            <button type="submit" className="auth-modal__submit">Create account</button>
            <p className="auth-modal__switch">
              Already have an account?{' '}
              <span onClick={() => setTab('login')}>Login</span>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

export default AuthModal
