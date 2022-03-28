import React, { useState } from "react";
import logo from "./../../images/logo-large.png";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";

function SignUp(props) {
  let navigate = useNavigate();
  const [capcha, setCapcha] = useState();
  const [details, setDetails] = useState({
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
    idnum: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    if (details.username !== "" && details.password !== "") {
      alert("Okkkkkkkkkkkk oke");
      navigate("/", { state: details });
    } else {
      alert("Failed!");
    }
  }

  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <h2>Đăng ký tài khoản GlobalCare</h2>
      <form onSubmit={handleSubmit}>
        <div className="App-text-input">
          <input
            onChange={(e) =>
              setDetails({ ...details, username: e.target.value })
            }
            type="text"
            name="usename"
            placeholder="Tên đăng nhập (*)"
          />
          <input
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            type="password"
            name="password"
            placeholder="Mật khẩu"
          />
        </div>
        <div className="App-text-input">
          <input
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            type="email"
            name="email"
            placeholder="example@email.com"
          />
        </div>
        <div className="App-text-input">
          <input
            onChange={(e) =>
              setDetails({ ...details, firstname: e.target.value })
            }
            type="text"
            name="firstname"
            placeholder="Họ (*)"
          />
          <input
            onChange={(e) =>
              setDetails({ ...details, lastname: e.target.value })
            }
            type="text"
            name="lastname"
            placeholder="Tên (*)"
          />
        </div>
        <div className="App-text-input">
          <input
            onChange={(e) => setDetails({ ...details, idnum: e.target.value })}
            type="text"
            name="code"
            placeholder="Chứng minh thư (*)"
          />
          <input
            type="text"
            name="numberPhone"
            placeholder="Số điện thoại (*)"
          />
        </div>
        <div className="captcha">
          <label> 3 + 5 =</label>
          <input
            onChange={(e) => setCapcha(e)}
            type="text"
            name="code"
            placeholder="Bạn không phải là robot?"
          />
        </div>
        <div className="btn-bottom">
          <Link to="/">
            <input type="button" id="cancel" value="Hủy" />
          </Link>
          <input type="submit" value="Đăng ký tài khoản" />
        </div>
      </form>
    </div>
  );
}

export default SignUp;
