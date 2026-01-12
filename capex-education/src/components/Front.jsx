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

const steps = [
    {
        step: "01",
        title: "Register Your Account",
        desc: "Create your free account and connect with our learning ecosystem.",
    },
    {
        step: "02",
        title: "Start Free Trial",
        desc: "Access free forex basics, market understanding & demo guidance.",
    },
    {
        step: "03",
        title: "Unlock Live Sessions",
        desc: "Pay a small fee & attend 2–4 live forex sessions every week.",
    },
    {
        step: "04",
        title: "Doubt Clearing & Guidance",
        desc: "Personal guidance, doubt clearance & risk management.",
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


            <section className="learning-steps">
                <h2 className="steps-heading">How Our Forex Learning Works</h2>

                <div className="steps-container">
                    {steps.map((item, index) => (
                        <div
                            className={`step-card ${index % 2 === 0 ? "left" : "right"}`}
                            key={index}
                        >
                            <div className="step-number">{item.step}</div>

                            <div className="step-content">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <section className="expert-section">
                <div className="expert-container">

                    {/* LEFT CONTENT */}
                    <div className="expert-left">
                        <span className="expert-badge">EXPERT GUIDANCE</span>
                        <h2>
                            Learn From <span>Trained Professionals</span> With Real Market Experience
                        </h2>
                        <p>
                            Our mentors are trained professionals with years of real forex market
                            experience. They don’t teach theory alone — they share practical
                            insights, mistakes, psychology & proven learning methods to help you
                            grow faster.
                        </p>

                        <ul className="expert-points">
                            <li> ✔ Experienced & trained mentors</li>
                            <li> ✔ Practical market-based learning</li>
                            <li> ✔ Faster & structured learning approach</li>
                            <li> ✔ Personal guidance & doubt support</li>
                        </ul>
                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="expert-right">
                        <div className="expert-card">
                            <h3>5+ Years</h3>
                            <p>Market Experience</p>
                        </div>

                        <div className="expert-card">
                            <h3>Live</h3>
                            <p>Market Examples</p>
                        </div>

                        <div className="expert-card">
                            <h3>1:1</h3>
                            <p>Doubt Support</p>
                        </div>

                        <div className="expert-card highlight">
                            <h3>Fast</h3>
                            <p>Learning Growth</p>
                        </div>
                    </div>

                </div>
            </section>


        </>
    );
};

export default Front;