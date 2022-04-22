import { lazy, Suspense, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import { slideData } from "./data";

import "./Login.scss";

const Slide = lazy(() => import("../../components/Slide/Slide"));
const Slider = lazy(() => import("../../components/Slider/Slider"));

const Login = () => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const { matches } = matchMedia("(min-width: 950.01px)");

  const onSubmit = e => e.preventDefault(); // Handle data fetching.

  return (
    <div className="login">
      <div className="wrapper">
        <div className="banner">
          <Suspense fallback="">
            {matches && (
              <Slider>
                {slideData.map((data, i) => (
                  <Slide {...data} key={`login-slide-${i}`} />
                ))}
              </Slider>
            )}
          </Suspense>
        </div>
        <div className="separator"></div>
        <form {...{ onSubmit }}>
          <div className="content-wrapper">
            <h2>SIGN IN</h2>

            <p>Hey! Nice to see you again.</p>

            <div className="inputs">
              <div className="input-wrapper">
                <input type="text" name="e-mail" id="e-mail" required />
                <label htmlFor="e-mail">E-Mail</label>
              </div>
              <div className="input-wrapper">
                <div
                  className="visibility"
                  onClick={() => setPasswordHidden(!passwordHidden)}
                >
                  {passwordHidden ? (
                    <BiHide className="hide" />
                  ) : (
                    <BiShowAlt className="show" />
                  )}
                </div>

                <input
                  type={passwordHidden ? "password" : "text"}
                  name="password"
                  id="password"
                  required
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="forgot">
                <span>Forgot password?</span>
              </div>
            </div>

            <button>Sign In</button>

            <div className="or">
              <div />
              <span>or</span>
              <div />
            </div>

            <div className="google-sign-in">
              <FcGoogle />
              <span>Sign in with Google</span>
            </div>

            <div className="register-redirect">
              Don't have an account? <Link to="/register">Register</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
