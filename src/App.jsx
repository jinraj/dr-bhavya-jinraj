import {
  ArrowDown,
  ArrowUpRight,
  Menu,
  X,
  Leaf,
  Heart,
  Flower2,
  Sparkles,
  Sun,
  Phone,
  Mail,
  Camera,
} from "lucide-react";
import { useState } from "react";
import "./index.css";

const phoneDisplay = "8861323194";
const phoneLink = "+918861323194";
const email = "bhavyajinraj@gmail.com";
const base = import.meta.env.BASE_URL;

const services = [
  {
    number: "01",
    icon: Leaf,
    title: "Ayurveda",
    description:
      "Personalized Ayurvedic consultations focused on individual constitution, lifestyle and holistic wellbeing.",
  },
  {
    number: "02",
    icon: Sun,
    title: "Yoga & Wellness",
    description:
      "Yoga-based guidance and mindful lifestyle practices to support balance and everyday wellbeing.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Skin & Hair Care",
    description:
      "Personalized skin and hair care consultations with an emphasis on holistic and aesthetic wellness.",
  },
  {
    number: "04",
    icon: Heart,
    title: "Lifestyle Management",
    description:
      "Guidance on daily routines, nutrition awareness and sustainable lifestyle habits.",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Services", "#services"],
    ["Consultation", "#consultation"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="navbar">
      <a href="#home" className="brand" aria-label="Dr. Bhavya Jinraj, home">
        <span className="brand-icon" aria-hidden="true"><Leaf size={22} /></span>
        <span>
          <strong>DR. BHAVYA JINRAJ</strong>
          <small>AYURVEDA · YOGA · WELLNESS</small>
        </span>
      </a>

      <button
        className="mobile-menu"
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <nav id="primary-navigation" className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
        <a href="#consultation" className="nav-cta" onClick={() => setMenuOpen(false)}>
          Book Consultation <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-content">
        <span className="eyebrow">A MORE MINDFUL WAY TO WELLNESS</span>
        <h1 id="hero-title">
          Your journey to<br />
          <em>holistic wellness</em><br />
          begins here.
        </h1>
        <p className="hero-description">
          Thoughtful care rooted in Ayurveda, Yoga and holistic wellness — helping you embrace a healthier, more balanced way of living.
        </p>
        <div className="hero-actions">
          <a href="#consultation" className="button button-dark">
            Begin Your Consultation <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a href="#about" className="text-link">
            Discover my approach <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>
        <div className="hero-signature">
          <span className="signature-line" aria-hidden="true" />
          <span>Care that considers the whole you.</span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-image">
          <img src={`${base}images/ayurvedic-herbs.png`} alt="Ayurvedic herbs and botanicals" />
          <div className="image-caption"><span>01 / A HOLISTIC APPROACH</span></div>
        </div>
        <div className="hero-stamp" aria-label="Rooted in nature, inspired by wellness">
          <Leaf size={24} aria-hidden="true" />
          <span>ROOTED IN NATURE</span>
          <span>INSPIRED BY WELLNESS</span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section-padding" id="about" aria-labelledby="about-title">
      <div className="section-label"><span>01</span> &nbsp; GET TO KNOW YOUR DOCTOR</div>
      <div className="about-grid">
        <div className="about-image-wrap">
          <img className="about-image" src={`${base}images/bhavyajinraj.png`} alt="Dr. Bhavya Jinraj" />
          <div className="image-note">BAMS · MD (Yoga) Scholar</div>
        </div>
        <div className="about-content">
          <span className="eyebrow">ABOUT DR. BHAVYA</span>
          <h2 id="about-title">
            Wellness is not just about treating symptoms.
            <em> It’s about understanding you.</em>
          </h2>
          <p>
            Dr. Bhavya Jinraj is an Ayurveda and Yoga practitioner with an interest in holistic wellness, lifestyle management, and skin and hair care.
          </p>
          <p>
            Her approach brings together traditional Ayurvedic perspectives, yoga-based practices and personalized lifestyle guidance to support individual wellbeing.
          </p>
          <div className="doctor-credentials" aria-label="Qualifications">
            <div>
              <strong>BAMS</strong>
              <span>Bachelor of Ayurvedic Medicine and Surgery</span>
            </div>
            <div>
              <strong>MD (Yoga) Scholar</strong>
              <span>Yoga studies</span>
            </div>
            <div>
              <strong>Postgraduate diplomas</strong>
              <span>Skin Aesthetics · Obesity Management · Trichology</span>
            </div>
          </div>
          <a href="#consultation" className="text-link">
            Connect with Dr. Bhavya <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}


function PracticeStats() {
  return (
    <section className="practice-stats section-padding" aria-labelledby="practice-stats-title">
      <div className="practice-stats-heading">
        <span className="eyebrow">A PRACTICE ROOTED IN PERSONALIZED CARE</span>
        <h2 id="practice-stats-title">Experience and areas of focus.</h2>
      </div>
      <dl className="practice-stats-grid">
        <div className="practice-stat">
          <dd>8</dd>
          <dt>Years of experience</dt>
        </div>
        <div className="practice-stat">
          <dd>500+</dd>
          <dt>Consultations</dt>
          <span className="stat-note">Sample figure · replace with confirmed total</span>
        </div>
        <div className="practice-stat">
          <dd>3</dd>
          <dt>Postgraduate diplomas</dt>
        </div>
      </dl>
    </section>
  );
}

function Services() {
  return (
    <section className="services section-padding" id="services" aria-labelledby="services-title">
      <div className="services-heading">
        <div>
          <div className="section-label"><span>02</span> &nbsp; WHAT I OFFER</div>
          <h2 id="services-title">Care designed around<br /><em>your wellbeing.</em></h2>
        </div>
        <p>Every individual is different. Explore consultation areas that bring together traditional knowledge and personalized wellness guidance.</p>
      </div>
      <div className="service-grid">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article className="service-card" key={service.number}>
              <div className="service-top"><span>{service.number}</span><Icon size={27} strokeWidth={1.3} aria-hidden="true" /></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#consultation" aria-label={`Enquire about ${service.title}`}>
                Explore <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Consultation() {
  return (
    <section className="consultation" id="consultation" aria-labelledby="consultation-title">
      <div className="consultation-inner">
        <span className="eyebrow light-eyebrow">YOUR WELLNESS JOURNEY STARTS HERE</span>
        <h2 id="consultation-title">Take the first step<br />towards <em>feeling better.</em></h2>
        <p>Connect for a personalized consultation and explore a wellness approach that works with your lifestyle.</p>
        <a href={`https://wa.me/${phoneLink.slice(1)}`} target="_blank" rel="noreferrer" className="button button-light">
          Enquire on WhatsApp <ArrowUpRight size={17} aria-hidden="true" />
        </a>
        <span className="consultation-note">Online consultations and in-person appointments subject to availability.</span>
      </div>
      <div className="consultation-decoration" aria-hidden="true"><Flower2 size={180} strokeWidth={0.5} /></div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section-padding" id="contact" aria-labelledby="contact-title">
      <div className="section-label"><span>03</span> &nbsp; GET IN TOUCH</div>
      <div className="contact-grid">
        <div>
          <h2 id="contact-title">Let’s start a<br /><em>conversation.</em></h2>
          <p>Have questions or want to schedule a consultation? Get in touch.</p>
        </div>
        <div className="contact-details" aria-label="Contact options">
          <a href={`tel:${phoneLink}`}>
            <Phone size={19} aria-hidden="true" />
            <span><small>CALL</small>{phoneDisplay}</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a href={`https://wa.me/${phoneLink.slice(1)}`} target="_blank" rel="noreferrer">
            <Phone size={19} aria-hidden="true" />
            <span><small>WHATSAPP</small>Message Dr. Bhavya</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a href={`mailto:${email}`}>
            <Mail size={19} aria-hidden="true" />
            <span><small>EMAIL</small>{email}</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Visit Instagram to find Dr. Bhavya Jinraj">
            <Camera size={19} aria-hidden="true" />
            <span><small>INSTAGRAM</small>Find Dr. Bhavya Jinraj</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="footer">
      <a href="#home" className="brand footer-brand" aria-label="Dr. Bhavya Jinraj, back to home">
        <span className="brand-icon" aria-hidden="true"><Leaf size={21} /></span>
        <span><strong>DR. BHAVYA JINRAJ</strong><small>AYURVEDA · YOGA · WELLNESS</small></span>
      </a>
      <p>A mindful approach to holistic wellbeing.</p>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Dr. Bhavya Jinraj.</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <PracticeStats />
        <Services />
        <Consultation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
