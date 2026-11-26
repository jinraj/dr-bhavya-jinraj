
import {
  ArrowUpRight,
  Menu,
  X,
  Leaf,
  Heart,
  Flower2,
  Sparkles,
  Sun,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { useState } from "react";
import "./index.css";

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
      <a href="#home" className="brand">
        <span className="brand-icon"><Leaf size={22} /></span>
        <span>
          <strong>BHAVYA JINRAJ</strong>
          <small>AYURVEDA · YOGA · WELLNESS</small>
        </span>
      </a>

      <button
        className="mobile-menu"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
        <a
          href="#consultation"
          className="nav-cta"
          onClick={() => setMenuOpen(false)}
        >
          Book Consultation <ArrowUpRight size={16} />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="eyebrow">
          <span className="eyebrow-line" />
          A MORE MINDFUL WAY TO WELLNESS
        </span>

        <h1>
          Your journey to
          <br />
          <em>holistic wellness</em>
          <br />
          begins here.
        </h1>

        <p className="hero-description">
          Thoughtful care rooted in Ayurveda, Yoga and holistic
          wellness — helping you embrace a healthier, more
          balanced way of living.
        </p>

        <div className="hero-actions">
          <a href="#consultation" className="button button-dark">
            Begin Your Consultation <ArrowUpRight size={17} />
          </a>
          <a href="#about" className="text-link">
            Discover my approach <span>↓</span>
          </a>
        </div>

        <div className="hero-signature">
          <span className="signature-line" />
          <span>Care that considers the whole you.</span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-image">
          <div className="image-caption">
            <span>01 / A HOLISTIC APPROACH</span>
            <span>Mind · Body · Balance</span>
          </div>
        </div>
        <div className="hero-stamp">
          <Leaf size={24} />
          <span>ROOTED IN NATURE</span>
          <span>INSPIRED BY WELLNESS</span>
        </div>
      </div>

      <div className="hero-bottom">
        <span>AYURVEDA</span>
        <span>YOGA</span>
        <span>HOLISTIC WELLNESS</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="section-label">
        <span>01</span> &nbsp; GET TO KNOW YOUR DOCTOR
      </div>

      <div className="about-grid">
        <div className="about-image-wrap">
          <div className="about-image" role="img"
            aria-label="Botanical wellness portrait placeholder" />
          <div className="image-note">
            A PERSONALIZED APPROACH TO WELLBEING
          </div>
        </div>

        <div className="about-content">
          <span className="eyebrow">ABOUT DR. BHAVYA</span>
          <h2>
            Wellness is not just about treating symptoms.
            <em> It's about understanding you.</em>
          </h2>

          <p>
            Dr. Bhavya Jinraj is an Ayurveda and Yoga
            practitioner with an interest in holistic wellness,
            lifestyle management, skin and hair care.
          </p>

          <p>
            Her approach brings together traditional Ayurvedic
            perspectives, yoga-based practices and personalized
            lifestyle guidance to support individual wellbeing.
          </p>

          <div className="doctor-credentials">
            <div>
              <strong>BAMS</strong>
              <span>Bachelor of Ayurvedic Medicine and Surgery</span>
            </div>
            <div>
              <strong>MD (Yoga) Scholar</strong>
              <span>Yoga studies</span>
            </div>
          </div>

          <a href="#consultation" className="text-link">
            Connect with Dr. Bhavya <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services section-padding" id="services">
      <div className="services-heading">
        <div>
          <div className="section-label">
            <span>02</span> &nbsp; WHAT I OFFER
          </div>
          <h2>
            Care designed around
            <br />
            <em>your wellbeing.</em>
          </h2>
        </div>

        <p>
          Every individual is different. Explore consultation
          areas that bring together traditional knowledge and
          personalized wellness guidance.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span>{service.number}</span>
                <Icon size={27} strokeWidth={1.3} />
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <a href="#consultation" aria-label={`Enquire about ${service.title}`}>
                Explore <ArrowUpRight size={16} />
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
    <section className="consultation" id="consultation">
      <div className="consultation-inner">
        <span className="eyebrow light-eyebrow">
          YOUR WELLNESS JOURNEY STARTS HERE
        </span>

        <h2>
          Take the first step
          <br />
          towards <em>feeling better.</em>
        </h2>

        <p>
          Connect for a personalized consultation and explore
          a wellness approach that works with your lifestyle.
        </p>

        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noreferrer"
          className="button button-light"
        >
          Enquire on WhatsApp <ArrowUpRight size={17} />
        </a>

        <span className="consultation-note">
          Online consultations and in-person appointments
          subject to availability.
        </span>
      </div>
      <div className="consultation-decoration">
        <Flower2 size={180} strokeWidth={0.5} />
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section-padding" id="contact">
      <div className="section-label">
        <span>03</span> &nbsp; GET IN TOUCH
      </div>

      <div className="contact-grid">
        <div>
          <h2>
            Let's start a
            <br />
            <em>conversation.</em>
          </h2>
          <p>
            Have questions or want to schedule a consultation?
            Get in touch.
          </p>
        </div>

        <div className="contact-details">
          <a href="tel:+91XXXXXXXXXX">
            <Phone size={19} />
            <span>
              <small>CALL / WHATSAPP</small>
              Add contact number
            </span>
            <ArrowUpRight size={17} />
          </a>

          <a href="mailto:YOUR_EMAIL@example.com">
            <Mail size={19} />
            <span>
              <small>EMAIL</small>
              Add email address
            </span>
            <ArrowUpRight size={17} />
          </a>

          <div className="contact-location">
            <MapPin size={19} />
            <span>
              <small>LOCATION</small>
              Bengaluru, Karnataka
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="footer">
      <a href="#home" className="brand footer-brand">
        <span className="brand-icon"><Leaf size={21} /></span>
        <span>
          <strong>BHAVYA JINRAJ</strong>
          <small>AYURVEDA · YOGA · WELLNESS</small>
        </span>
      </a>

      <p>
        A mindful approach to holistic wellbeing.
      </p>

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
        <Services />
        <Consultation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
