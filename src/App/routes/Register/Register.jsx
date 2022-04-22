import { lazy, Suspense, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import { slideData } from "./data";

import "./Register.scss";

const Slide = lazy(() => import("../../components/Slide/Slide"));
const Slider = lazy(() => import("../../components/Slider/Slider"));

const Login = () => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const { matches } = matchMedia("(min-width: 950.01px)");

  const onSubmit = e => e.preventDefault(); // Handle data fetching.

  return (
    <div className="register">
      <div className="wrapper">
        <div className="banner">
          <Suspense fallback="">
            {matches && (
              <Slider>
                {slideData.map((data, i) => (
                  <Slide {...data} key={`register-slide-${i}`} />
                ))}
              </Slider>
            )}
          </Suspense>
        </div>
        <div className="separator"></div>
        <form {...{ onSubmit }}>
          <div className="content-wrapper">
            <h2>REGISTER</h2>
            <p> Want to join us? Fill out the form. </p>

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
              <div className="input-wrapper">
                <input
                  type={passwordHidden ? "password" : "text"}
                  name="confirm-password"
                  id="confirm-password"
                  required
                />
                <label htmlFor="confirm-password">Confirm password</label>
              </div>
            </div>

            <button>Register</button>

            <div className="or">
              <div />
              <span>or</span>
              <div />
            </div>

            <div className="google-sign-in">
              <FcGoogle />
              <span>Register with Google</span>
            </div>

            <div className="sign-in-redirect">
              Already have an account? <Link to="/sign-in">Sign In</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
