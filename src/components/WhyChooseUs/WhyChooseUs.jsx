import { BadgePercent, Building2, MonitorPlay, Route, Users, Wallet } from 'lucide-react'
import './WhyChooseUs.css'

const ADVANTAGES = [
  {
    icon: BadgePercent,
    title: 'Bottom Rate Guarantee',
    description: 'We guarantee the bottom rate or refund double the difference.',
  },
  {
    icon: MonitorPlay,
    title: 'Online Site Visit',
    description: "Visit projects from home with our Online Site Visit concept.",
  },
  {
    icon: Route,
    title: 'Free Site Visit',
    description: 'Free pickup & drop for unlimited site visits across the city.',
  },
  {
    icon: Users,
    title: 'No Brokerage Charges',
    description: 'Get a personalized RM managing everything from site visit to booking.',
  },
]

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="why-choose-us__eyebrow">
        <Building2 size={16} />
        ADVANTAGES
      </div>
      <h2 className="why-choose-us__title">Why Choose Us?</h2>
      <p className="why-choose-us__subtitle">Discover the key advantages of investing with us.</p>

      <div className="why-choose-us__grid">
        {ADVANTAGES.map(({ icon: Icon, title, description }) => (
          <div key={title} className="advantage-card">
            <span className="advantage-card__icon">
              <Icon size={28} />
            </span>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}

        <div className="advantage-card advantage-card--highlight">
          <span className="advantage-card__icon advantage-card__icon--light">
            <Wallet size={28} />
          </span>
          <p className="advantage-card__stat">375Cr+</p>
          <p className="advantage-card__stat-label">Brokerage Saved Till Now</p>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
