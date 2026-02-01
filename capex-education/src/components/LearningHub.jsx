import { useState } from "react";
import "./LearningHub.css";
import { FaBookOpen, FaChartLine, FaBrain, FaLightbulb } from "react-icons/fa";
import { FaFilePdf, FaVideo, FaBlog } from "react-icons/fa";
import {FaChalkboardTeacher, FaQuestionCircle, FaGraduationCap } from "react-icons/fa";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const steps = [
  {
    icon: <FaBookOpen />,
    title: "Download Beginner Guide",
    desc: "Start your journey with our free structured PDF.",
  },
  {
    icon: <FaVideo />,
    title: "Watch Webinar 1",
    desc: "Understand Forex market fundamentals clearly.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Watch Webinar 2",
    desc: "Learn trading psychology and strategies.",
  },
  {
    icon: <FaQuestionCircle />,
    title: "Attempt Beginner Quiz",
    desc: "Evaluate your understanding and track progress.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Upgrade to Full Course",
    desc: "Unlock complete professional learning access.",
  },
];

const testimonials = [
  { text: "Webinars cleared my basics. Everything was explained very clearly.", name: "Daniel Carter" },
  { text: "The free PDF was extremely helpful. Great for beginners.", name: "Sophia Williams" },
  { text: "Best free Forex content I’ve found online.", name: "Michael Thompson" },
  { text: "The learning path made everything easy to follow.", name: "Emily Johnson" },
  { text: "Very high quality content even in the free resources.", name: "James Anderson" },
  { text: "Perfect platform to start learning Forex seriously.", name: "Olivia Brown" },
  { text: "The webinars felt professional and structured.", name: "William Scott" },
  { text: "Amazing experience with the free materials.", name: "Isabella Moore" },
  { text: "I finally understood risk management clearly.", name: "Ethan Miller" },
];



const LearningHub = () => {
  
  const [start, setStart] = useState(0);

  const prev = () => {
    setStart((prev) => (prev - 3 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setStart((prev) => (prev + 3) % testimonials.length);
  };

  const visible = [
    testimonials[start],
    testimonials[(start + 1) % testimonials.length],
    testimonials[(start + 2) % testimonials.length],
  ];


  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  

  return (
    <div>
    <div className="learninghub-wrapper">
    <section className="learninghub">
  <div className="learninghub-overlay" />

  <div className="learninghub-content">
    {/* <p className="learninghub-tag">LEARNING HUB</p> */}

    <h1 className="learninghub-title">
      Learn Trading With <span>Clarity</span> & Structure
    </h1>

    <p className="learninghub-desc">
      The Learning Hub is your free knowledge space where you explore trading concepts,
      understand market behavior, and build strong foundations before entering live markets.
    </p>

    <div className="learninghub-features">
  <span><FaBookOpen /> Trading concepts made simple</span>
  <span><FaChartLine /> Real market breakdowns</span>
  <span><FaBrain /> Psychology & discipline training</span>
  <span><FaLightbulb /> Step-by-step learning path</span>
</div>


    <div className="learninghub-buttons">
      <button className="btn primary" onClick={() => scrollToSection("learning")}>Explore Learning Hub</button>
      <button className="btn secondary" onClick={() => scrollToSection("resources")}>Free Resources</button>
    </div>
  </div>
</section>
</div>



<section className="resources-section" id="resources">
  <div className="resources-wrapper">

    <div className="resources-head">
      <h2>Free Learning Resources</h2>
      <p>
        Access valuable trading knowledge at no cost PDFs, webinars and blogs designed
        to strengthen your foundation before entering live markets.
      </p>
    </div>

    <div className="resources-grid">

      <div className="resource-item">
        <h3><FaFilePdf className="resource-icon" /> Free PDFs</h3>
        <p>
          Download structured guides, beginner checklists and learning material to build strong fundamentals.
        </p>
        <span>Download Resources →</span>
      </div>

      <div className="resource-item">
        <h3><FaVideo className="resource-icon" /> Free Webinars</h3>
        <p>
          Every learner can attend up to two free live webinars covering market basics, psychology and strategies.
        </p>
        <span>View Upcoming Webinars →</span>
      </div>

      <div className="resource-item">
        <h3><FaBlog className="resource-icon" /> Trading Blogs</h3>
        <p>
          Explore educational articles on price action, risk management and real market breakdowns.
        </p>
        <span>Read Articles →</span>
      </div>

    </div>
  </div>
</section>





<section className="learning-split" id="learning">
      <div className="ls-container">

        {/* Left Side – Only Image */}
        <div className="ls-left">
          <img src="learn_trades.avif" alt="Learning" />
        </div>

        {/* Right Side – Heading + Text + Steps */}
        <div className="ls-right">
          <div className="ls-top">
            <h2>Your Guided Learning Journey</h2>
            <p>
              Follow a clear step-by-step path designed for beginners to build strong
              Forex foundations before moving to advanced trading.
            </p>
          </div>

          <div className="ls-steps">
            {steps.map((step, index) => (
              <div className="ls-step" key={index}>
                <div className="ls-icon">{step.icon}</div>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>




    <section className="learner-wall">
  <div className="lw-container">
    
    <div className="lw-header">
      <h2>Learner Wall</h2>
      <p>
        Real feedback from global learners who started their journey
        with our free learning resources
      </p>
    </div>

    <div className="lw-wrapper">

  <div className="lw-list">
    {visible.map((item, i) => (
      <div className="lw-item" key={i}>
        <FaQuoteLeft className="lw-quote" />
        <p className="lw-text">"{item.text}"</p>
        <span className="lw-name">— {item.name}</span>
      </div>
    ))}
  </div>

  <div className="lw-controls">
    <button className="lw-btn" onClick={prev}>
      <FaChevronLeft />
    </button>
    <button className="lw-btn" onClick={next}>
      <FaChevronRight />
    </button>
  </div>

</div>

  </div>
</section>





    <section className="blog-section">
      <div className="blog-wrapper">

        {/* Header */}
        <div className="blog-header">
          <h2>Latest Trading Insights</h2>
          <button className="blog-btn">See All Articles</button>
        </div>

        <div className="blog-layout">

          {/* LEFT SIDE */}
          <div className="blog-left">

            <div className="blog-card large">
              <img src="/blog.jpg" alt="Forex trading mindset" />
              <div className="blog-meta">08-11-2024 · Education</div>
              <h3>Why Most Beginners Fail in Forex Trading</h3>
              <p>
                Learn the most common psychological and strategic mistakes traders make and how to avoid them.
              </p>
            </div>

            <div className="blog-card large">
              <img src="/forextrade.jpg" alt="Risk management in trading" />
              <div className="blog-meta">10-11-2024 · Risk Management</div>
              <h3>Risk Management Rules Every Trader Must Follow</h3>
              <p>
                Discover proven techniques to protect your capital and build consistency in the market.
              </p>
            </div>

          </div>

        {/* RIGHT SIDE */}
<div className="blog-right">

{[
  {
    title: "How to Read Candlestick Charts",
    img: "/blog1.jpg",
  },
  {
    title: "Best Timeframe for Beginners",
    img: "/forextrade.jpg",
  },
  {
    title: "Price Action vs Indicators",
    img: "/price_action.jpg",
  },
  {
    title: "How to Control Trading Emotions",
    img: "/forex.jpg",
  },
].map((item, i) => (
  <div key={i} className="blog-mini">
    <img src={item.img} alt={item.title} />
    <div>
      <span>12-11-2024 · Learning</span>
      <h4>{item.title}</h4>
    </div>
  </div>
))}

</div>


        </div>
      </div>
    </section>


</div>


  );
};

export default LearningHub;
