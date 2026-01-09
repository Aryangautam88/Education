import { useState } from "react";
import "./Register.css";
import { FiEye, FiEyeOff } from "react-icons/fi";


const Register = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        countryCode: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        agree: false,
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

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
            !phone ||
            !email ||
            !password ||
            !confirmPassword
        ) {
            return setError("All fields are required");
        }

        if (password !== confirmPassword) {
            return setError("Passwords do not match");
        }

        if (!agree) {
            return setError("Please accept Terms & Conditions");
        }

        try {
            setLoading(true);

            const res = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    phone: `${countryCode}${phone}`,
                    email,
                    password,
                }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message);

            localStorage.setItem("token", data.token);
            alert("Account created successfully ✅");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    return (
        <div className="register-page">
            <div className="register-card">
                <h2>Create Your Account</h2>
                <p className="subtitle">Start learning with KnowledgePulse</p>

                {error && <p className="error">{error}</p>}

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
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <div className="password-wrapper">
                        <input
                            className="password"
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
                            className="confirmpassword"
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