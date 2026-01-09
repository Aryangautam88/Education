import React, { useEffect, useState } from "react";
import "./CourseHero.css";

const words = ["Product", "Team", "Future"];

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

  return (
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
          <button className="btn primary">View Programs</button>
          <button className="btn secondary">Start Learning</button>
        </div>

        {/* <div className="hero-features">
          <span>✔ Live market examples</span>
          <span>✔ Beginner to Pro roadmap</span>
          <span>✔ Lifetime access</span>
        </div> */}
      </div>
    </section>
    </div>
  );
};

export default CourseHero;
