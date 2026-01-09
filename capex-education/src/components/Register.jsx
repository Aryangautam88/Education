import { useState } from "react";
import "./Register.css";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        countryCode: "+91",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        agree: false,
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    /* 🔔 ERROR CARD */
    const showError = (msg) => {
        setError(msg);
        setTimeout(() => setError(""), 3000);
    };

    /* ✅ SUCCESS CARD + REDIRECT */
    const showSuccess = (msg) => {
        setSuccess(msg);
        setTimeout(() => {
            setSuccess("");
            window.location.href = "/login"; // 👈 redirect to login
        }, 1000);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {
            firstName,
            lastName,
            countryCode,
            phone,
            email,
            password,
            confirmPassword,
            agree,
        } = formData;

        if (
            !firstName ||
            !lastName ||
            !countryCode ||
            !phone ||
            !email ||
            !password ||
            !confirmPassword
        ) {
            return showError("All fields are required");
        }

        if (password.length < 8) {
            return showError("Password must be at least 8 characters long");
        }

        if (password !== confirmPassword) {
            return showError("Passwords do not match");
        }

        if (!agree) {
            return showError("Please accept Terms & Conditions");
        }

        try {
            setLoading(true);

            const res = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    countryCode,
                    phone,
                    email,
                    password,
                    confirmPassword,
                    agreedToTerms: agree,
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message);

            showSuccess("Account created successfully 🎉");
        } catch (err) {
            showError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-page">
            {/* 🔔 ERROR CARD */}
            {error && <div className="error-card">{error}</div>}

            {/* ✅ SUCCESS CARD */}
            {success && <div className="success-card">{success}</div>}

            <div className="register-card">
                <h2>Create Your Account</h2>
                <p className="subtitle">Start learning with KnowledgePulse</p>

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="row">
                        <select
                            name="countryCode"
                            value={formData.countryCode}
                            className="code"
                            onChange={handleChange}
                        >
                            <option value="+91">🇮🇳 +91 (India)</option>
                            <option value="+1">🇺🇸 +1 (USA)</option>
                            <option value="+44">🇬🇧 +44 (UK)</option>
                            <option value="+61">🇦🇺 +61 (Australia)</option>
                            <option value="+971">🇦🇪 +971 (UAE)</option>
                            <option value="+92">🇵🇰 +92 (Pakistan)</option>
                            <option value="+880">🇧🇩 +880 (Bangladesh)</option>
                        </select>

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            onChange={handleChange}
                        />
                    </div>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleChange}
                        required
                    />

                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                        />
                        <span
                            className="eye-icon"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </span>
                    </div>

                    <div className="password-wrapper">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={handleChange}
                        />
                        <span
                            className="eye-icon"
                            onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                            }
                        >
                            {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                        </span>
                    </div>

                    <label className="checkbox">
                        <input
                            type="checkbox"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleChange}
                        />
                        I agree to <span>Terms & Conditions</span>
                    </label>

                    <button type="submit" disabled={loading}>
                        {loading ? "Creating..." : "Create Account"}
                    </button>
                </form>

                <button className="google-btn">
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="google-icon"
                    />
                    Continue with Google
                </button>

                <p className="login-link-1">
                    Already have an account? <span>Login</span>
                </p>

                <p className="note">
                    This platform is for educational and informational purposes only.
                    Trading involves risk.
                </p>
            </div>
        </div>
    );
};

export default Register;
