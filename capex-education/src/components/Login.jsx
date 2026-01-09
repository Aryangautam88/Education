import { useState } from "react";
import "./Login.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      localStorage.setItem("token", data.token);
    } catch (err) {
      setError("Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  return (
    <div className="login-page">

      {/* BACKGROUND */}
      <picture className="login-bg">
        <source media="(max-width: 768px)" srcSet="/phone_bg.png" />
        <img src="/laptop_bg.png" alt="background" />
      </picture>

      {/* CARD */}
      <div className="login-card split-card">

        {/* LEFT SIDE (IMAGE) */}
        <div className="card-left">
          <img
            src="/login.png"
            alt="Illustration"
          />
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="card-right">
          <img src="/logo.png" alt="KnowledgePulse" className="login-logo" />

          <h2>Welcome Back 👋</h2>
          <p className="subtitle">
            Sign in to continue your learning journey
          </p>

          {error && <p className="error-text">{error}</p>}

          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className={`eye ${showPassword ? "active" : ""}`}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
            </div>

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <a href="/forgot-password" className="forgot">
            Forgot password?
          </a>

          <button className="google-btn" onClick={handleGoogleLogin}>
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
            />
            Continue with Google
          </button>

          <p className="disclaimer">
            All content is for educational purposes only.<br />
            Forex trading involves risk.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
