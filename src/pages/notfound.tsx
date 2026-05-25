import React from 'react'
import { Link } from 'react-router-dom'
import COLOR from '../../constants/color'

function Notfound() {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '70vh', background: '#f8f9fa' }}>
      <div className="text-center p-4">
        <h1 style={{ fontSize: '6rem', marginBottom: '0.25rem', color: COLOR.scondary }}>404</h1>
        <h2 style={{ color: COLOR.scondary, marginBottom: '0.75rem' }}>Page Not Found</h2>
        <p className="lead text-muted">Sorry, we couldn't find the page you're looking for.</p>

        <div className="d-flex justify-content-center gap-2 mt-3">
          <Link to="/" className="btn btn-primary" style={{ backgroundColor: COLOR.primary, borderColor: COLOR.primary }}>
            Go Home
          </Link>
          <a href="#" className="btn btn-outline-secondary" style={{ color: COLOR.scondary }} onClick={(e) => e.preventDefault()}>
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}

export default Notfound