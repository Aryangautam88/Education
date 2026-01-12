import "./Webinar.css";

const Webinar = () => {
    return (

        <div>
            <section className="webinar-wrapper">
                <div className="webinar-container">

                    {/* LEFT CONTENT */}
                    <div className="webinar-left">
                        <span className="webinar-tag">LIVE WEBINAR</span>

                        <h1>
                            Master Forex Trading <br />
                            with Real World Strategies
                        </h1>

                        <p>
                            Transform your trading career with professional mentorship,
                            proven strategies and structured learning designed for
                            serious traders.
                        </p>

                        <button className="webinar-cta">Get Started</button>
                    </div>

                    {/* RIGHT IMAGE PLACEHOLDER */}
                    <div className="webinar-right">
                        {/* <img src="bgman.png" alt="" /> */}
                    </div>

                </div>
            </section>


            <section className="webinar-flow-wrapper">
                <div className="webinar-flow-container">

                    {/* TOP CONTENT */}
                    <div className="webinar-flow-head">
                        <h2>How Our Live Webinar Sessions Work</h2>
                        <p>
                            Our webinars are designed to give you real market exposure,
                            practical understanding and live interaction with expert mentors.
                            Every session focuses on clarity, strategy and disciplined learning.
                        </p>
                    </div>

                    {/* MAIN CONTENT */}
                    <div className="webinar-flow-content">

                        {/* LEFT – VIDEO */}
                        <div className="webinar-video-card">
                            <div className="video-placeholder">
                                ▶
                            </div>
                            <p className="video-caption">
                                Watch how our live forex webinars are conducted
                            </p>
                        </div>

                        {/* RIGHT – INFO CARDS */}
                        <div className="webinar-info-cards">

                            <div className="info-card">
                                <h4>Live Market Explanation</h4>
                                <p>
                                    Mentors explain real-time charts, entries and exits during
                                    live market hours with complete logic.
                                </p>
                            </div>

                            <div className="info-card">
                                <h4>Interactive Q&A</h4>
                                <p>
                                    Ask your doubts during the session and get instant clarification
                                    directly from experienced traders.
                                </p>
                            </div>

                            <div className="info-card">
                                <h4>Strategy + Risk Management</h4>
                                <p>
                                    Learn proper risk management, position sizing and psychology
                                    to trade safely and consistently.
                                </p>
                            </div>

                            <div className="info-card highlight">
                                <h4>Session Recording Access</h4>
                                <p>
                                    Missed a session? Get access to recorded webinars so you never
                                    miss important concepts.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Webinar;
