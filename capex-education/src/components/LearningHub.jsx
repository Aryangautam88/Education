import React from "react";
import "./LearningHub.css";
import { FaBookOpen, FaChartLine, FaBrain, FaLightbulb } from "react-icons/fa";
import { FaFilePdf, FaVideo, FaBlog } from "react-icons/fa";


const LearningHub = () => {
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
      <button className="btn primary">Explore Learning Hub</button>
      <button className="btn secondary">Free Resources</button>
    </div>
  </div>
</section>
</div>



<section className="resources-section">
  <div className="resources-wrapper">

    <div className="resources-head">
      <h2>Free Learning Resources</h2>
      <p>
        Access valuable trading knowledge at no cost — PDFs, webinars and blogs designed
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


<section className="timeline-section">
      <h2 className="timeline-title">LEARNING HUB</h2>
      <p className="timeline-subtitle">
        Explore structured free trading education designed to build clarity, confidence, and discipline.
      </p>

      <div className="timeline">

        <div className="timeline-item top">
          <div className="chat-bubble">
            <h4>Beginner Guides</h4>
            <p>What is Forex, Currency pairs, Market basics</p>
          </div>
        </div>

        <div className="timeline-item bottom">
          <div className="chat-bubble">
            <h4>Market Education</h4>
            <p>Charts, Indicators, Timeframes</p>
          </div>
        </div>

        <div className="timeline-item top">
          <div className="chat-bubble">
            <h4>Mindset & Discipline</h4>
            <p>Psychology, Emotional control, Risk habits</p>
          </div>
        </div>

        <div className="timeline-item bottom">
          <div className="chat-bubble">
            <h4>Free PDFs</h4>
            <p>Checklists, Guides, Downloadable resources</p>
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
