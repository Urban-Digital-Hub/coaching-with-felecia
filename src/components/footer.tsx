import COLOR from '../../constants/color'

function Footer() {
  return (
    <footer className="py-5" style={{ backgroundColor: COLOR.scondary, color: '#f1f3f8' }}>
      <div className="container">
        <div className="row gy-4 gy-lg-0">
          <div className="col-lg-4">
            <h5 className="mb-3" style={{ color: '#fff' }}>Felicia</h5>
            <p className="text- mb-4" style={{ maxWidth: '420px' }}>
              Crafted for modern wellness and elegant service design. We bring calm, clarity, and premium care to every experience.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#" className="text-white text-decoration-none d-flex align-items-center gap-2">
                <span style={{ width: '28px', height: '28px', backgroundColor: COLOR.primary, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.04c-5.5 0-9.95 4.45-9.95 9.95 0 4.4 2.87 8.14 6.84 9.45.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.54 1.03 1.54 1.03.9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.64-1.35-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0112 6.8c.85.01 1.71.11 2.51.33 1.9-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.41.1 2.66.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.35.3.67.9.67 1.82 0 1.31-.01 2.37-.01 2.7 0 .27.18.58.69.48A9.95 9.95 0 0022 12c0-5.5-4.45-9.96-9.95-9.96z" fill="#fff" />
                  </svg>
                </span>
                Instagram
              </a>
              <a href="#" className="text-white text-decoration-none d-flex align-items-center gap-2">
                <span style={{ width: '28px', height: '28px', backgroundColor: COLOR.primary, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.23 0H1.77C.79 0 0 .78 0 1.74v20.52C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.21 0 22.23 0zM7.08 20.45H3.54V9h3.54v11.45zM5.32 7.5a2.05 2.05 0 110-4.1 2.05 2.05 0 010 4.1zM20.45 20.45h-3.53v-5.64c0-1.35-.03-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98v5.74H9.8V9h3.39v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.35 4.24 5.4v6.84z" fill="#fff" />
                  </svg>
                </span>
                LinkedIn
              </a>
              <a href="#" className="text-white text-decoration-none d-flex align-items-center gap-2">
                <span style={{ width: '28px', height: '28px', backgroundColor: COLOR.primary, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.95 4.57a10.06 10.06 0 01-2.88.79A5.04 5.04 0 0023.33 3a10.18 10.18 0 01-3.22 1.23 5.1 5.1 0 00-8.68 4.65 14.46 14.46 0 01-10.5-5.32 5.02 5.02 0 001.58 6.82 5.02 5.02 0 01-2.31-.64v.07a5.1 5.1 0 004.09 5 5.11 5.11 0 01-2.3.09 5.1 5.1 0 004.77 3.55A10.24 10.24 0 010 19.54a14.44 14.44 0 007.84 2.29c9.41 0 14.55-7.78 14.55-14.53 0-.22-.01-.43-.02-.64A10.4 10.4 0 0024 4.56z" fill="#fff" />
                  </svg>
                </span>
                Twitter
              </a>
            </div>
          </div>

          <div className="col-lg-2">
            <h6 className="mb-3 text-white">Company</h6>
            <ul className="list-unstyled text-muted mb-0">
              <li className="mb-2 d-flex align-items-center gap-2">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: COLOR.primary }} />
                <a href="#" className="text-white text-decoration-none">About</a>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: COLOR.primary }} />
                <a href="#" className="text-white text-decoration-none">Services</a>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: COLOR.primary }} />
                <a href="#" className="text-white text-decoration-none">Contact</a>
              </li>
              <li className="d-flex align-items-center gap-2">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: COLOR.primary }} />
                <a href="#" className="text-white text-decoration-none">Blog</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h6 className="mb-3 text-white">Support</h6>
            <ul className="list-unstyled text-muted mb-0">
              <li className="mb-2 d-flex align-items-center gap-2">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: COLOR.primary }} />
                <a href="#" className="text-white text-decoration-none">FAQ</a>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: COLOR.primary }} />
                <a href="#" className="text-white text-decoration-none">Privacy</a>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: COLOR.primary }} />
                <a href="#" className="text-white text-decoration-none">Terms</a>
              </li>
              <li className="d-flex align-items-center gap-2">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: COLOR.primary }} />
                <a href="#" className="text-white text-decoration-none">Help Center</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h6 className="mb-3 text-white">Newsletter</h6>
            <p className="text-white">Stay in touch for new services and updates.</p>
            <form className="d-flex flex-column gap-3">
              <div className="input-group shadow-sm">
                <span className="input-group-text" style={{ backgroundColor: COLOR.primary, borderColor: COLOR.primary, color: '#fff' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#fff" />
                  </svg>
                </span>
                <input
                  type="email"
                  className="form-control bg-white border-0 text-white"
                  placeholder="Email address"
                  style={{ minHeight: '48px' }}
                />
              </div>
              <button type="submit" className="btn btn-outline-light rounded-pill py-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-top border-white-10 pt-4 mt-5 text-center text-white" style={{ color: '#ced4da' }}>
          © 2026 Felicia. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer