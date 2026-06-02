import COLOR from '../../constants/color'
import { FiCheckCircle, FiMail, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function FormMessage() {
  const [isHovering, setIsHovering] = useState(false)

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: `linear-gradient(135deg, ${COLOR.scondary}05 0%, ${COLOR.primary}05 100%)`,
    padding: '20px',
  }

  const cardStyle: React.CSSProperties = {
    backgroundColor: COLOR.white,
    borderRadius: '20px',
    padding: '60px 40px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '500px',
    animation: 'slideUp 0.6s ease-out',
  }

  const iconContainerStyle: React.CSSProperties = {
    marginBottom: '30px',
    display: 'flex',
    justifyContent: 'center',                                                                                                                                                                                                                                                                                                                     
    animation: 'bounce 0.8s ease-out',
  }

  const iconStyle: React.CSSProperties = {
    fontSize: '80px',
    color: COLOR.primary,
    filter: 'drop-shadow(0 10px 20px rgba(153, 115, 21, 0.15))',
  }

  // const decorativeIconStyle: React.CSSProperties = {
  //   fontSize: '100px',
  //   color: COLOR.primary,
  //   opacity: 0.1,
  //   position: 'absolute',
  //   pointerEvents: 'none',
  // }

  const titleStyle: React.CSSProperties = {
    fontSize: '32px',
    fontWeight: '700',
    color: COLOR.scondary,
    marginBottom: '15px',
    fontFamily: 'inherit',
  }

  const subtitleStyle: React.CSSProperties = {
    fontSize: '18px',
    color: '#666',
    marginBottom: '20px',
    lineHeight: '1.6',
    fontFamily: 'inherit',
  }

  const descriptionStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#888',
    marginBottom: '40px',
    lineHeight: '1.8',
    fontFamily: 'inherit',
  }

  const buttonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: isHovering ? COLOR.scondary : COLOR.primary,
    color: COLOR.white,
    padding: '15px 35px',
    borderRadius: '50px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    transform: isHovering ? 'translateY(-2px)' : 'translateY(0)',
    boxShadow: isHovering ? `0 15px 35px rgba(11, 33, 70, 0.3)` : `0 8px 20px rgba(153, 115, 21, 0.2)`,
    fontFamily: 'inherit',
  }

  const mailIconStyle: React.CSSProperties = {
    position: 'absolute',
    fontSize: '120px',
    opacity: 0.08,
    pointerEvents: 'none',
  }

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>

      <div style={containerStyle}>
        <div style={{ position: 'relative' }}>
          <FiMail style={{ ...mailIconStyle, top: '-20px', left: '-30px' }} />
          <FiMail style={{ ...mailIconStyle, bottom: '-40px', right: '-40px' }} />

          <div style={cardStyle}>
            <div style={iconContainerStyle}>
              <FiCheckCircle style={iconStyle} />
            </div>

            <h1 style={titleStyle}>Thank You!</h1>

            <p style={subtitleStyle}>Message Received Successfully</p>

            <p style={descriptionStyle}>
              Thank you for reaching out to us. We've received your message and will get back to you as soon as possible. We appreciate your interest!
            </p>

            <Link
              to="/"
              style={buttonStyle}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Back to Home
              <FiArrowRight style={{ fontSize: '18px' }} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormMessage