import React from 'react';
import logo from '../wetf_logo.png';

export default function Header(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="WETF Logo"
            />
          </a>
          <a className="navbar-brand" href="#">
            WETF The Jazz Station
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Donate
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Schedule
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Profiles
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="container ms-auto justify-content-end p-0">
              <div className="row">
                <div className="text-primary fs-5 fw-semibold col-6 ms-auto">
                  Listen Live
                </div>
              </div>
              <div className="row">
                <audio controls="true" preload="none" className="col-6 ms-auto">
                  <source
                    src="https://ssl-proxy.icastcenter.com/get.php?type=Icecast&amp;server=199.180.72.2&amp;port=9007&amp;mount=/stream&amp;data=mp3"
                    type="audio/mp3"
                  ></source>
                </audio>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
