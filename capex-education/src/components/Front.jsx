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
            "Order blocks",
            "Inducement & manipulation",
            "Advanced trade execution",
            "Session-based trading",
            "Psychology mastery",
            "Capital protection systems",
            "Consistency building",
        ],
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

            <section className="course-section">
                {/* HEADER */}
                <div className="course-header">
                    {/* LEFT */}
                    <div className="course-header-left">
                        <span>OUR COURSES</span>
                        <h2>Professional Trading Programs</h2>
                    </div>

                    {/* RIGHT */}
                    <div className="course-header-right">
                        <p>
                            Choose your path to trading mastery with industry-focused,
                            practical learning programs.
                        </p>
                    </div>
                </div>

                {/* CARDS */}
                <div className="course-grid">
                    {courses.map((course, i) => (
                        <div className="image-card" key={i}>

                            {/* LEVEL BADGE */}
                            <div
                                className={`course-level ${course.level.toLowerCase()}`}
                            >
                                {course.level}
                            </div>

                            <div className="card-overlay">
                                <div className="card-tags">
                                    <span>{course.duration}</span>
                                </div>

                                {/* BULLET POINTS */}
                                <ul className="course-points">
                                    {course.points.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>

                                <div className="card-footer">
                                    <button>View Course →</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </section>


        </>
    );
};

export default Front;