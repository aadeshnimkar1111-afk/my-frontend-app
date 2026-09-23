import { useState } from 'react'
import { Landmark, Scale } from 'lucide-react'
import SignUpModal from '../ReviewsSignup/SignUpModal'
import LegalScene from './LegalScene'
import './LegalConsultation.css'

function LegalConsultation() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="legal-consult">
      <div className="legal-consult__dots">
        {[...Array(16)].map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <div className="legal-consult__visual">
        <span className="legal-consult__badge legal-consult__badge--scale">
          <Scale size={22} />
        </span>
        <span className="legal-consult__badge legal-consult__badge--bank">
          <Landmark size={22} />
        </span>
        <LegalScene />
      </div>

      <div className="legal-consult__content">
        <h2>MDN Legal: Free Real Estate Legal Consultation</h2>
        <p>
          Get Expert Advice on RERA, Builder Refunds, Area Mismatch, Stuck Projects & More - at No
          Cost!
        </p>
        <div className="legal-consult__actions">
          <button className="legal-consult__cta" onClick={() => setModalOpen(true)}>
            Consult Now
          </button>
          <span className="legal-consult__free">100% Free</span>
        </div>
      </div>

      {modalOpen && <SignUpModal onClose={() => setModalOpen(false)} />}
    </section>
  )
}

export default LegalConsultation
