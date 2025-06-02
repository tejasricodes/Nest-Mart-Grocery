"use client";

import { useState } from "react";
import { Eye } from "lucide-react";

export default function Login({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password); // call parent function
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F2FCE4",
        padding: "16px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          padding: "32px",
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <div
            style={{
              backgroundColor: "#3BB77E",
              borderRadius: "8px",
              padding: "12px",
              display: "inline-block",
            }}
          >
            <img
              src="img/logo.svg?height=40&width=40"
              alt="Logo"
              style={{ height: "40px", width: "auto", display: "block" }}
            />
          </div>
        </div>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "600",
              color: "#3BB77E",
              marginBottom: "8px",
              margin: "0 0 8px 0",
            }}
          >
            Welcome Back
          </h2>
          <p
            style={{
              color: "#666666",
              fontSize: "14px",
              margin: "0",
            }}
          >
            Login to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div style={{ marginBottom: "16px" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                fontSize: "14px",
                color: "#333333",
                marginBottom: "4px",
              }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                height: "44px",
                border: "1px solid #e0e0e0",
                borderRadius: "4px",
                padding: "0 16px",
                fontSize: "16px",
                color: "#333333",
                outline: "none",
                boxSizing: "border-box",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#3BB77E")}
              onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
              required
            />
          </div>

          {/* Password Field */}
          <div style={{ marginBottom: "16px" }}>
            <label
              htmlFor="password"
              style={{
                display: "block",
                fontSize: "14px",
                color: "#333333",
                marginBottom: "4px",
              }}
            >
              Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  height: "44px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "4px",
                  padding: "0 48px 0 16px",
                  fontSize: "16px",
                  color: "#333333",
                  outline: "none",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#3BB77E")}
                onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "2px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "#f5f5f5",
                  height: "40px",
                  width: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "4px",
                  border: "none",
                  cursor: "pointer",
                  color: "#666666",
                }}
              >
                <Eye size={18} />
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "14px",
              marginBottom: "20px",
            }}
          >
            <label
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{
                  marginRight: "8px",
                  height: "16px",
                  width: "16px",
                }}
              />
              <span style={{ color: "#666666" }}>Remember me</span>
            </label>
            <a
              href="#"
              style={{
                color: "#3BB77E",
                textDecoration: "none",
              }}
              onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              height: "44px",
              backgroundColor: "#3BB77E",
              color: "white",
              fontSize: "16px",
              fontWeight: "500",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#35a571")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#3BB77E")}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
