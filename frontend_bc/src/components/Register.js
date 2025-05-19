import React, { useState } from "react";
//import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../utils";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const RegisterUser = async (e) => {
    e.preventDefault();
    try {
       const response = await API.post("/register", { username, password });
      window.location.href = "https://20250519t201744-dot-e-13-450704.uc.r.appspot.com";
    } catch (error) {
      if (error.response) setMsg(error.response.data.msg);
      else setMsg("Gagal registrasi");
    }
  };

  return (
    <section className="hero is-fullheight is-fullwidth">
      <div className="hero-body">
        <form onSubmit={RegisterUser} className="box" style={{ width: "300px", margin: "auto" }}>
          <p style={{ color: "red", textAlign: "center" }}>{msg}</p>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ marginBottom: "10px" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ marginBottom: "10px" }}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </section>
  );
};

export default Register;
