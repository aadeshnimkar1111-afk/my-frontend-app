import mdnLogo from '../../assets/mdn-logo.png'
import { DEVELOPERS } from '../../data/developers'
import OurOffices from '../OurOffices/OurOffices'
import './Footer.css'

const LOCALITIES = ['Hinjewadi', 'Wakad', 'Punawale', 'Kharadi', 'Tathawade', 'Charholi']

const USEFUL_LINKS = ['Sitemap', 'Contact Us', 'About Us', 'Careers']

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <img src={mdnLogo} alt="MDN Salesforce" className="footer__logo" />
          <p>RERA No. - </p>
          <p>C.I. Number: </p>
          <p>Write to us : </p>
        </div>

        <div className="footer__column">
          <h4>Top Localities In Pune</h4>
          {LOCALITIES.map((locality) => (
            <a href="/" key={locality}>
              Top Projects in {locality}
            </a>
          ))}
        </div>

        <div className="footer__column">
          <h4>Top Builders In Pune</h4>
          {DEVELOPERS.map((dev) => (
            <a href={`/developer/${dev.slug}`} key={dev.slug}>
              Top Projects by {dev.name}
            </a>
          ))}
        </div>

        <div className="footer__column">
          <h4>Useful Links</h4>
          {USEFUL_LINKS.map((link) => (
            <a href="/" key={link}>
              {link}
            </a>
          ))}
        </div>
      </div>

      <OurOffices />

      <div className="footer__bottom">
        &copy; {new Date().getFullYear()} MDN Salesforce. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
