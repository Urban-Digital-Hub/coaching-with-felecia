import COLOR from '../../constants/color'

const feedback = [
  {
    name: 'Ava Johnson',
    role: 'Wellness Seeker',
    quote: 'This experience changed the way I approach self-care. Every session feels personalized, calm, and genuinely supportive.',
    image: '/images/logo.jpeg',
  },
  {
    name: 'Marcus Lee',
    role: 'Creative Professional',
    quote: 'The team helped me find balance without losing momentum. The environment is elegant, modern, and truly uplifting.',
    image: '/images/logo.jpeg',
  },
  {
    name: 'Sofia Clarke',
    role: 'Mindfulness Explorer',
    quote: 'Their service is smooth and empathetic. I feel more confident and grounded after every session.',
    image: '/images/logo.jpeg',
  },
]

function Testimonial() {
  return (
    <section className="py-5" style={{ backgroundColor: '#f7f4ed', color: COLOR.secondary }}>
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-uppercase fw-bold mb-2" style={{ letterSpacing: '0.24em', color: COLOR.primary }}>
            Testimonials
          </p>
          <h2 className="display-6 fw-bold">What our clients say about us</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '620px' }}>
            Elegant and thoughtful service delivered in a premium, calming way. Hear from people who trust our process.
          </p>
        </div>

        <div className="row g-4">
          {feedback.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="h-100 p-4 rounded-4" style={{ backgroundColor: '#ffffff', boxShadow: '0 24px 60px rgba(11, 33, 70, 0.08)' }}>
                <p className="mb-4 text-muted">“{item.quote}”</p>
                <div className="d-flex align-items-center gap-3">
                  <div className="rounded-circle overflow-hidden" style={{ width: '60px', height: '60px', border: `2px solid ${COLOR.primary}` }}>
                    <img src={item.image} alt={item.name} className="w-100 h-100 object-fit-cover" />
                  </div>
                  <div>
                    <h5 className="mb-1" style={{ color: COLOR.secondary }}>{item.name}</h5>
                    <p className="mb-0 text-muted">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial