import React, { useEffect, useState } from "react";
import "./CourseHero.css";
import { FiCheckCircle } from "react-icons/fi";
import { FaChartLine, FaUserGraduate, FaCertificate, FaUsers } from "react-icons/fa";
import {
  FaGraduationCap,
  FaShieldAlt,
  FaBook,
  FaClock,
  FaUserTie,
  FaSlidersH,
  FaBrain,
  FaBalanceScale,
} from "react-icons/fa";

const words = ["Skills", "Mindset", "Future"];




const CourseHero = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 120);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 80);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(!isDeleting);
        if (!isDeleting) return;
        setWordIndex((wordIndex + 1) % words.length);
      }, 1200);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  const courses = [
    {
        level: "Beginner",
        duration: "8 weeks",
        points: [
            "Forex market basics",
            "How charts work",
            "Understanding candlesticks",
            "Basic support & resistance",
            "Risk management fundamentals",
        ],
    },
    {
        level: "Intermediate",
        duration: "10 weeks",
        points: [
            "Market structure",
            "Liquidity concepts",
            "Supply & demand zones",
            "Trend & range identification",
            "Entry & exit strategies",
            "Multiple timeframe analysis",
            "Trade journaling",
            "Risk–reward optimization",
        ],
    },
    {
        level: "Advanced",
        duration: "6 weeks",
        points: [
            "Smart money concepts",
            "Institutional order flow",
            "Liquidity grabs",
            "Inducement & manipulation",
            "Advanced trade execution",
            "Session-based trading",
            "Psychology mastery",
            "Capital protection systems",
            "Consistency building",
        ],
    },
];

const features = [
  { title: "Free Forex Courses", desc: "Learn the foundations of trading with structured beginner-friendly content.", icon: <FaBook /> },
  { title: "Profitable Education", desc: "Understand how professional traders approach the markets.", icon: <FaChartLine /> },
  { title: "Safe Trading Training", desc: "Learn risk-first strategies before real capital exposure.", icon: <FaShieldAlt /> },
  { title: "Complete Curriculum", desc: "From technical analysis to trading psychology everything covered.", icon: <FaGraduationCap /> },
  { title: "Interactive Classes", desc: "Quizzes, lessons and practical examples to strengthen learning.", icon: <FaUsers /> },

  { title: "Expert Mentors", desc: "Learn directly from experienced professional traders.", icon: <FaUserTie /> },
  { title: "Learn At Your Pace", desc: "No pressure. Progress comfortably with lifetime access.", icon: <FaClock /> },
  { title: "Personalized Learning", desc: "Choose topics based on your trading goals.", icon: <FaSlidersH /> },
  { title: "Psychology Training", desc: "Build discipline, confidence and emotional control.", icon: <FaBrain /> },
  { title: "Risk & Leverage Control", desc: "Protect capital using smart risk management techniques.", icon: <FaBalanceScale /> },
];


const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};




  return (
    <div>
    <div className="course-page-wrapper">
    <section className="course-hero">
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title">
          Build Better <span className="typing">{text}</span>
          <span className="cursor">|</span>
        </h1>

        <p className="hero-subtitle">
          Master Forex trading with structured learning programs focused on
          <strong> price action, risk management, discipline</strong> and
          real-world market execution.
        </p>

        <div className="hero-features">
          <span>✔ Live market examples</span>
          <span>✔ Beginner to Pro roadmap</span>
          <span>✔ Lifetime access</span>
        </div>

        <div className="hero-buttons">
  <button
    className="btn primary"
    onClick={() => scrollToSection("programs")}
  >
    View Programs
  </button>

  <button
    className="btn secondary"
    onClick={() => scrollToSection("learning")}
  >
    Start Learning
  </button>
</div>


      </div>
    </section>
    </div>

    <section className="learning-model" id="learning">
      <div className="learning-container">

        <h2 className="learning-title">
          How Learning Works Here
        </h2>

        <p className="learning-subtitle">
        A structured trading education platform focused on knowledge, clarity, and responsible market understanding.
        </p>

        <div className="learning-grid">

          {/* CARD 1 */}
          <div className="learning-card">
            <span className="step-label">FREE ACCESS</span>
            <h3>Foundation Learning</h3>
            <p>
              Start your Forex journey with structured introductory material.
            </p>
            <ul>
              <li>
                <FiCheckCircle className="check-icon" />
                Free beginner PDF guide
              </li>
              <li>
                <FiCheckCircle className="check-icon" />
                Recorded concept-based sessions
              </li>
              <li>
                <FiCheckCircle className="check-icon" />
                Free live webinar access
              </li>
              <li>
                <FiCheckCircle className="check-icon" />
                Market basics & terminology
              </li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div className="learning-card highlighted">
            <span className="step-label">PAID PROGRAM</span>
            <h3>Structured Learning Path</h3>
            <p>
              Step-by-step curriculum designed for serious learners.
            </p>
            <ul>
              <li>
                <FiCheckCircle className="check-icon" />
                Complete Forex education roadmap
              </li>
              <li>
                <FiCheckCircle className="check-icon" />
                Risk management focused learning
              </li>
              <li>
                <FiCheckCircle className="check-icon" />
                Chart reading & market logic
              </li>
              <li>
                <FiCheckCircle className="check-icon" />
                No signals, only skill-building
              </li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="learning-card">
            <span className="step-label">MENTORSHIP</span>
            <h3>Guided Progress</h3>
            <p>
              Learn with clarity, discipline, and accountability.
            </p>
            <ul>
              <li>
                <FiCheckCircle className="check-icon" />
                Live doubt-solving sessions
              </li>
              <li>
                <FiCheckCircle className="check-icon" />
                Personal learning guidance
              </li>
              <li>
                <FiCheckCircle className="check-icon" />
                Webinar interaction with mentors
              </li>
              <li>
                <FiCheckCircle className="check-icon" />
                Focus on consistency & mindset
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>


    <section className="programs-section" id="programs">
  {/* HEADER */}
  <div className="programs-header">

    {/* LEFT */}
    <div className="programs-header-left">
      <span>OUR PROGRAMS</span>
      <h2>Professional Trading Programs</h2>
    </div>

    {/* RIGHT */}
    <div className="programs-header-right">
      <p>
        Choose your path to trading mastery with industry-focused,
        practical learning programs.
      </p>
    </div>
  </div>

  {/* CARDS */}
  <div className="programs-grid">
    {courses.map((course, i) => (
      <div className="program-card" key={i}>

        {/* LEVEL BADGE */}
        <div
          className={`program-level ${course.level.toLowerCase()}`}
        >
          {course.level}
        </div>

        <div className="program-overlay">
          <div className="program-tags">
            <span>{course.duration}</span>
          </div>

          {/* BULLET POINTS */}
          <ul className="program-points">
            {course.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>

          <div className="program-footer">
            <button className="program-btn">View Program →</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>



    <section className="features-section">
      <div className="features-header">
        <p className="features-tag">WHY LEARN WITH US</p>
        <h2>Build profitable trading skills faster</h2>
        <p className="features-subtext">
          Learn practical Forex trading with structured mentorship, real market examples,
          and strategies designed for consistent growth.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <FaChartLine className="feature-icon" />
          <h3>Master Price Action</h3>
          <p>Learn professional chart reading, smart money concepts and market structure.</p>
        </div>

        <div className="feature-card">
          <FaUserGraduate className="feature-icon" />
          <h3>Mentorship Support</h3>
          <p>Get guided by experienced traders with live sessions and doubt solving.</p>
        </div>

        <div className="feature-card">
          <FaCertificate className="feature-icon" />
          <h3>Certification</h3>
          <p>Earn a verified certificate after completing your trading journey.</p>
        </div>

        <div className="feature-card">
          <FaUsers className="feature-icon" />
          <h3>Trader Community</h3>
          <p>Join a private community of disciplined traders for growth and accountability.</p>
        </div>
      </div>
    </section>

    <section className="academy-section">
      <div className="academy-header">
        <h2>What Makes Our Trading Academy Different?</h2>
        <p>
          Designed for serious learners who want practical, structured and
          professional trading education.
        </p>
      </div>

      <div className="academy-grid">
        {features.map((item, i) => (
          <div className="academy-item" key={i}>
            <div className="academy-icon">{item.icon}</div>
            <div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    </div>
  );
};

export default CourseHero;
