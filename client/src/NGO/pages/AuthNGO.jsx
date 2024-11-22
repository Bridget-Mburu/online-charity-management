import React, { useState } from 'react';
import Swal from "sweetalert2";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import "../styles/Auth.css"; // Ensure your CSS file is imported
import DefaultDashboard from "../../Default/components/DefaultDashboard";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import {
  FaEyeSlash,
  FaEye,
} from "react-icons/fa";


// Sample theme array (if needed)
const themes = [
  // Same theme array...
];

// Helper function to set theme dynamically
const setTheme = (theme) => {
  const root = document.querySelector(":root");
  root.style.setProperty("--background", theme.background);
  root.style.setProperty("--color", theme.color);
  root.style.setProperty("--primary-color", theme.primaryColor);
  root.style.setProperty("--glass-color", theme.glassColor || "rgba(255, 255, 255, 0.2)");
};

const AuthNGO = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmedPassword, setShowConfirmPassword] = useState(false)

  // Formik setup with validation schema using Yup
  const formik = useFormik({
    validationSchema: Yup.object().shape({
      role: Yup.string().required("Please select your role"),
      organization_name: Yup.string().required("Organization name is required"),
      organization_description: Yup.string().required("Description is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords must match")
        .required("Confirmation password is required"),
      organization_address: Yup.string().required("Address is required"),
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      phone: Yup.string().required("Phone number is required"),
    }),
    initialValues: {
      role: "",
      organization_name: "",
      organization_description: "",
      email: "",
      password: "",
      confirm_password: "",
      organization_address: "",
      first_name: "",
      last_name: "",
      phone: "",
    },
    onSubmit: async (values) => {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: values.role,
          organization_name: values.organization_name,
          organization_description: values.organization_description,
          email: values.email,
          password: values.password,
          confirm_password: values.confirm_password,
          organization_address: values.organization_address,
          first_name: values.first_name,
          last_name: values.last_name,
          phone: values.phone,
        }),
      });
      const data = await res.json();
      console.log(data);

      if (data?.access_token) {
        toast.success(data.message);
        localStorage.setItem("session", JSON.stringify(data));
        navigate("/ngo");
      } else {
        toast.error(data.message);
      }
    },
  });

  // Handle role selection and redirection
  const handleRole = (event) => {
    const selectedRole = event.target.value;
    formik.setFieldValue("role", selectedRole);

    if (selectedRole === "donor") {
      navigate("/register");
    }
  };

  return (
    <div className="auth-container">
      <DefaultDashboard />

      <div className="card-3d-wrap mx-auto">
        <div className="card-3d-wrapper">
          <div>
            <div className="center-wrap">
              <h4>Register</h4>
              <form onSubmit={formik.handleSubmit}>
                {/* Role Selection */}
                <select
                  name="role"
                  value={formik.values.role}
                  onChange={(e) => handleRole(e)}
                  onBlur={formik.handleBlur}
                >
                  <option value="" disabled>
                    Select Role
                  </option>
                  <option value="ngo">NGO</option>
                  <option value="donor">Donor</option>
                </select>
                {formik.touched.role && formik.errors.role && (
                  <div className="error">{formik.errors.role}</div>
                )}

                {/* Organization Name */}
                <input
                  type="text"
                  name="organization_name"
                  placeholder="Organization Name"
                  value={formik.values.organization_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.organization_name &&
                  formik.errors.organization_name && (
                    <div className="error">
                      {formik.errors.organization_name}
                    </div>
                  )}

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="error">{formik.errors.email}</div>
                )}

                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    helpertext={formik.errors.password}
                    color={formik.errors.password ? "failure" : undefined}
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      paddingRight: "50px",
                    }}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>

                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <input
                    type={showConfirmedPassword ? "text" : "password"}
                    name="confirm_password"
                    placeholder="confirmation Password"
                    value={formik.values.confirm_password}
                    onChange={formik.handleChange}
                    helpertext={formik.errors.confirm_password}
                    color={
                      formik.errors.confirm_password ? "failure" : undefined
                    }
                  />
                  <span
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmedPassword)
                    }
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      paddingRight: "50px",
                    }}
                  >
                    {showConfirmedPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>

                {/* Organization Address */}
                <input
                  type="text"
                  name="organization_address"
                  placeholder="Organization Address"
                  value={formik.values.organization_address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.organization_address &&
                  formik.errors.organization_address && (
                    <div className="error">
                      {formik.errors.organization_address}
                    </div>
                  )}

                {/* First Name */}
                <input
                  type="text"
                  name="first_name"
                  placeholder="Contact Person First Name"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.first_name && formik.errors.first_name && (
                  <div className="error">{formik.errors.first_name}</div>
                )}

                {/* Last Name */}
                <input
                  type="text"
                  name="last_name"
                  placeholder="Contact Person Last Name"
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.last_name && formik.errors.last_name && (
                  <div className="error">{formik.errors.last_name}</div>
                )}

                {/* Phone Number */}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div className="error">{formik.errors.phone}</div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  style={{ background: "maroon", width: "500px" }}
                >
                  Register
                </button>
              </form>

              <p>
                Already have an account? <Link to="/login">Log In</Link>
              </p>

              {/* Social Media Buttons */}
              <div className="social-btns">
                <button className="social-btn google">
                  <FaGoogle /> Google
                </button>
                <button className="social-btn facebook">
                  <FaFacebook /> Facebook
                </button>
                <button className="social-btn github">
                  <FaGithub /> GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Theme Buttons at the Bottom */}
      <div className="theme-btn-container">
        {themes.map((theme, index) => (
          <div
            key={index}
            className="theme-btn"
            onClick={() => setTheme(theme)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AuthNGO;
