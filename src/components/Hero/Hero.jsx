import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <h1 className="hero__title">Welcome to My App</h1>
      <p className="hero__subtitle">
        A simple starting point built with a component-based architecture.
      </p>
      <button className="hero__cta">Get Started</button>
    </section>
  )
}

export default Hero
