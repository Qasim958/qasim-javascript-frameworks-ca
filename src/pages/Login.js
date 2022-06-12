import React, { useState } from "react";
import Nav from "./../components/Nav";
import Footer from "./../components/Footer";
import axios from "axios";
import { BASE_ADMIN_URL, SIGNIN_USER_API } from "../Api";
import { useNavigate } from "react-router-dom";

export const axiosAdminClient = axios.create({
  baseURL: BASE_ADMIN_URL,
});
export function messageBox(message, field, color) {
  document.getElementById(
    field
  ).innerHTML = `<span style=" color:${color}; font-size:1.4rem;margin:1rem; ">${message}</span>`;
}
export function validateValueLng(data, charLng) {
  return data.trim().length >= charLng ? true : false;
}
export function validatEmail(data, charLng) {
  const validateEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return data.trim().length > charLng &&
    validateEmail.test(String(data).toLowerCase())
    ? true
    : false;
}
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function signinUser() {
    if (validateSigninUserForm(email, password)) {
      const result = await validateUserSigninCredential(email, password);
      if (result) {
        navigate("/admin");
      }
    }
  }
  const validateSigninUserForm = () => {
    if (!validatEmail(email, 0)) {
      messageBox("Enter valid email address", "emailMsg", "red");
      return false;
    } else {
      messageBox(" ", "emailMsg", "green");
    }

    if (!validateValueLng(password, 8)) {
      messageBox(
        "Password Should be more than 8 characters",
        "passwordMsg",
        "red"
      );
      return false;
    } else {
      messageBox(" ", "passwordMsg", "green");
    }
    return true;
  };

  async function validateUserSigninCredential(email, password) {
    try {
      const response = await axiosAdminClient.post(SIGNIN_USER_API, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password: password.trim(),
        }),
      });
      const result = await response.json();

      if (result.error == undefined) {
        localStorage.setItem("signin", result.jwt);
        return true;
      }
    } catch (error) {
      messageBox("Email or Password is incorrect", "signinMsg", "red");
    }

    return false;
  }

  return (
    <div>
      <Nav active={null} />
      <main>
        <section className="productsSection">
          <div className="sectionHeading">
            <h3>Signin</h3>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              signinUser();
            }}
          >
            <div id="signinMsg"></div>
            <div className="form-group">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  e.preventDefault();
                  setEmail(e.target.value);
                }}
              />
              <div id="emailMsg"></div>
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                placeholder="Password"
                onChange={(e) => {
                  e.preventDefault();
                  setPassword(e.target.value);
                }}
              />
              <div id="passwordMsg"></div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
