import { useState } from 'react'
import { Zap, X } from 'lucide-react'
import './SignUpModal.css'

function SignUpModal({ initialPhone = '', onClose }) {
  const [phone, setPhone] = useState(initialPhone)
  const [submitted, setSubmitted] = useState(false)
  const isValid = phone.length === 10

  function handleContinue() {
    if (!isValid) return
    setSubmitted(true)
  }

  return (
    <div className="signup-modal-overlay" onClick={onClose}>
      <div className="signup-modal" onClick={(e) => e.stopPropagation()}>
        <button className="signup-modal__close" aria-label="Close" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="signup-modal__visual">
          <div className="signup-modal__bubble">
            Let's buy a<br />
            <em>home</em>
          </div>
          <svg viewBox="0 0 160 200" className="signup-modal__person">
            <circle cx="80" cy="60" r="38" fill="#ffe0b2" />
            <path d="M42,190 C42,140 58,110 80,110 C102,110 118,140 118,190 Z" fill="#0f172a" />
            <path d="M52,120 L108,120 L104,150 L56,150 Z" fill="#fff" />
          </svg>
        </div>

        <div className="signup-modal__panel">
          {!submitted ? (
            <>
              <h3>Login To Unlock Bottom Prices - Don't Overpay</h3>
              <p className="signup-modal__subtitle">Exclusive Deals & Free Site Visit</p>

              <div className="signup-modal__trust">
                <Zap size={15} fill="#f4b400" stroke="#f4b400" />
                Trusted By <strong>1 Lac+</strong> Home Buyers
              </div>

              <div className="signup-modal__phone">
                <span className="signup-modal__code">+91</span>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                />
              </div>

              <button
                className={`signup-modal__continue ${isValid ? 'is-active' : ''}`}
                onClick={handleContinue}
              >
                Continue
              </button>

              <p className="signup-modal__terms">
                By continuing, you agree to our <a href="/">Terms & Conditions</a>
              </p>
            </>
          ) : (
            <div className="signup-modal__confirm">
              <h3>Thanks for Signing Up!</h3>
              <p>
                Our team will call you shortly on <strong>+91 {phone}</strong> with exclusive
                deals and free site visit options.
              </p>
              <button className="signup-modal__continue is-active" onClick={onClose}>
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SignUpModal
