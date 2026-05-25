import React from 'react'
import COLOR from '../../constants/color'
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="/images/logo.jpeg" alt="Logo" width="30" height="24" className="me-2" />
          Felicia
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: COLOR.scondary }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: COLOR.scondary }}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: COLOR.scondary }}>
                Services
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="moreDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: COLOR.scondary }}
              >
                More
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="moreDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    coaching Programs
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                   Fitness & Lifestyle
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Menstorship & Business </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Blog & Resources
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <button className="btn btn-primary ms-lg-3" style={{ backgroundColor: COLOR.primary, borderColor: COLOR.primary }}>
            Subscribe
          </button>
        </div>
      </div>
    </nav>
  )
}
