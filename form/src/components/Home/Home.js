import React, { useState } from "react";
import logo from "./../../images/logo-large.png";
import "./Home.css";
import { Link, useLocation } from "react-router-dom";

function Home(props) {
  const [details, setDetails] = useState({ username: "", password: "" });
  const { state } = useLocation();
  const [user, setUser] = useState({ usernames: "test", passwords: "1" });

  function handleSubmit(e) {
    e.preventDefault();
    if (details.username !== "" && details.password !== "") {
      if (state.username !== "" && state.password !== "") {
        if (
          details.username === state.username &&
          details.password === state.password
        ) {
          alert("complete");
        } else if (
          details.username === user.usernames &&
          details.password === user.passwords
        ) {
          alert("complete");
        } else {
          alert("fail");
        }
      } else {
        if (
          details.username === user.usernames &&
          details.password === user.passwords
        ) {
          alert("complete");
        } else {
          alert("fail");
        }
      }
    } else {
      alert("Chưa nhập pass or username");
    }
  }
  return (
    <div className="App">
      <img src={logo} alt="logo"></img>
      <h2>Đăng Nhập</h2>
      <p>Sử dụng tài khoản GlobalCare</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setDetails({ ...details, username: e.target.value })}
          type="text"
          name="usename"
          placeholder="Tên đăng nhập"
        ></input>

        <input
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          type="password"
          name="password"
          placeholder="Mật khẩu"
        ></input>
        <div>
          <a className="App-link" href="#">
            Quên mật khẩu ?
          </a>
        </div>
        <div className="bottom">
          <Link to="./SignUp">Đăng ký tài khoản</Link>
          <input className="btn" type="submit" value="Tiếp theo"></input>
        </div>
      </form>
    </div>
  );
}

export default Home;
