import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="signup form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Create your account
                      </h5>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">Full Name</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">Email</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">Password</label>
                      </div>

                      <button className="btn btn-dark btn-lg btn-block">
                        Register
                      </button>
                      <p className="mt-4">
                        Already have an account?{" "}
                        <Link
                          to="/"
                          style={{ color: "#393f81", textDecoration: "none" }}
                        >
                          Sign In
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
