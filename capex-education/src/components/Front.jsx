import React from "react";
import "./Front.css";

const AnimatedHeading = ({ text }) => {
    return (
        <h1 className="animated-heading">
            {text.split(" ").map((word, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                    {word}&nbsp;
                </span>
            ))}
        </h1>
    );
};

const AnimatedParagraph = ({ text }) => {
    return (
        <p className="animated-para">
            {text.split(" ").map((word, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.06}s` }}>
                    {word}&nbsp;
                </span>
            ))}
        </p>
    );
};

const courses = [
    {
        icon: "📈",
        title: "Price Action (P.A)",
        level: "Intermediate",
        duration: "8 weeks",
        desc:
            "Master the art of reading raw price movements without indicators. Learn to identify market structure, support/resistance, and high-probability setups.",
        modules: "24 Modules",
    },
    {
        icon: "🧠",
        title: "Smart Money Concepts (S.M.C)",
        level: "Advanced",
        duration: "10 weeks",
        desc:
            "Understand institutional trading behavior, order blocks, liquidity pools, and market manipulation techniques used by professional traders.",
        modules: "32 Modules",
    },
    {
        icon: "🛡️",
        title: "Capital & Risk Training (C.R.T)",
        level: "Beginner to Advanced",
        duration: "6 weeks",
        desc:
            "Develop bulletproof risk management strategies, position sizing, and capital preservation techniques essential for long-term success.",
        modules: "18 Modules",
    },
];


const Front = () => {
    return (
        <>
            <section className="hero">
                <div className="hero-container">

                    <div className="hero-text">
                        <AnimatedHeading text="Master Forex Trading with Real World Strategies" />

                        <AnimatedParagraph
                            text="Transform your trading career with professional mentorship, proven  and comprehensive courses designed for serious traders."
                        />

                        <div className="btn-f">
                            <button>Get Started</button>
                        </div>
                    </div>

                    <div className="hero-image">
                        <img src="right_bg.png" alt="Forex Trader" />
                    </div>

                </div>
            </section>


            <section className="forex-wrapper">
                <div className="forex-container">

                    {/* LEFT CONTENT */}
                    <div className="forex-content">
                        <h2>New to Forex? Start Here</h2>
                        <p>
                            This short video explains what we do, how our learning approach works,
                            and how you can begin your Forex education journey with clarity and confidence.
                        </p>

                        <ul>
                            <li>Education-first approach</li>
                            <li>No signals or profit promises</li>
                            <li>Structured learning paths</li>
                            <li>Focus on risk & mindset</li>
                        </ul>

                        <button className="enroll-btn">Enroll Now</button>
                    </div>

                    {/* RIGHT VIDEO */}
                    <div className="video-card">
                        <div className="video-wrapper">
                            <iframe
                                src="trail.mp4"
                                title="Forex Introduction"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <span className="video-caption">Introduction video  ✔</span>
                    </div>

                </div>
            </section>

            <section className="courses-section">
                <div className="courses-header">
                    <h2>Professional Trading Courses</h2>
                    <p>
                        Choose your path to trading mastery with our comprehensive course
                        offerings
                    </p>
                </div>

                <div className="courses-grid">
                    {courses.map((course, i) => (
                        <div className="course-card" key={i}>
                            <div className="course-icon">{course.icon}</div>

                            <h3>{course.title}</h3>

                            <div className="course-tags">
                                <span>{course.level}</span>
                                <span>{course.duration}</span>
                            </div>

                            <p className="course-desc">{course.desc}</p>

                            <div className="course-footer">
                                <span>{course.modules}</span>
                                <button>View Course</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
};

export default Front;