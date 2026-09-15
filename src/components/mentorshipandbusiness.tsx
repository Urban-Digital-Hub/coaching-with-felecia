import COLOR from '../../constants/color'
import {
  FaArrowRight,
  FaBriefcase,
  FaBullseye,
  FaCheckCircle,
  FaCompass,
  FaHandshake,
  FaLightbulb,
  FaRocket,
  FaUserCheck,
} from 'react-icons/fa'

const focusAreas = [
  {
    title: 'Mindset & Self-Leadership',
    description:
      'Develop the mindset required to navigate uncertainty, embrace growth, overcome limiting beliefs, and take ownership of your next level.',
  },
  {
    title: 'Business Clarity & Direction',
    description:
      'Gain greater clarity around your goals, priorities, strengths, opportunities, and the direction you want your business or professional journey to take.',
  },
  {
    title: 'Leadership Development',
    description:
      'Learn how to lead yourself and others with confidence, emotional intelligence, integrity, and intentionality.',
  },
  {
    title: 'Confidence & Decision-Making',
    description:
      'Strengthen your ability to make informed decisions, communicate your value, take calculated risks, and confidently pursue opportunities.',
  },
  {
    title: 'Accountability & Action',
    description:
      'Turn ideas into intentional action. Mentorship provides encouragement while also challenging you to follow through on the commitments you make to yourself.',
  },
  {
    title: 'Personal & Professional Growth',
    description:
      'Develop the habits, awareness, resilience, communication skills, and self-leadership qualities that support both career and business growth.',
  },
]

const mentorshipAudience = [
  'Aspiring entrepreneurs who have an idea but need clarity and direction.',
  'Small-business owners looking to grow with greater intention.',
  'Professionals preparing for their next career or leadership opportunity.',
  'Women navigating personal and professional transformation.',
  'Entrepreneurs struggling with confidence, consistency, or decision-making.',
  'Individuals who feel stuck and need an objective perspective.',
  'Business leaders seeking stronger leadership and emotional intelligence.',
  'Purpose-driven individuals who want their work to align with their values and vision.',
  'Anyone ready to stop simply surviving and start intentionally building.',
]

const expectations = [
  {
    title: 'Clarity',
    description: 'Identify what matters most and where your attention needs to go.',
  },
  {
    title: 'Perspective',
    description: 'Step back from the noise and look at your situation from a healthier, more strategic perspective.',
  },
  {
    title: 'Strategy',
    description: 'Explore practical approaches that can help you move from intention to execution.',
  },
  {
    title: 'Accountability',
    description: 'Create meaningful commitments and follow through on the actions that move you closer to your goals.',
  },
  {
    title: 'Encouragement',
    description: 'Have someone in your corner who can remind you of your potential when the journey becomes difficult.',
  },
  {
    title: 'Growth',
    description: 'Develop the personal and professional capacity required for your next chapter.',
  },
]

function MentorshipandBusiness() {
  return (
    <section className="py-5" style={{ backgroundColor: '#f7f2e8', color: COLOR.secondary }}>
      <div className="container">
        <div className="row gx-5 align-items-center mb-5">
          <div className="col-12 col-lg-7" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800" data-aos-easing="ease-out" data-aos-once="false">
            <span
              className="badge rounded-pill px-4 py-2 mb-3 d-inline-flex align-items-center"
              style={{ backgroundColor: COLOR.primary, color: '#fff' }}
            >
              <FaBriefcase className="me-2" />
              Mentorship & Business
            </span>

            <h1 className="display-5 fw-bold mb-4" style={{ letterSpacing: '-0.03em', color: COLOR.secondary }}>
              Grow With Purpose. Lead With Confidence. Build With Intention.
            </h1>

            <p className="fs-6 mb-4 text-muted">
              Building a business is more than creating a product, making sales, or establishing a brand. It is a journey of becoming the person who is capable of carrying the vision you have been entrusted with.
            </p>

            <p className="fs-6 mb-4 text-muted">
              At <strong style={{ color: COLOR.secondary }}>Coaching &amp; Mentorship with Felecia</strong>, I believe that meaningful business growth begins from within. Your mindset, emotional intelligence, leadership capacity, decision-making, confidence, and ability to navigate challenges all influence the way you build and lead.
            </p>

            <p className="fs-6 mb-0 text-muted">
              My <strong style={{ color: COLOR.secondary }}>Mentorship &amp; Business</strong> experience is designed for individuals who are ready to move beyond simply having a dream and begin building a life, career, or business with clarity, confidence, and intentionality.
            </p>
          </div>

          <div className="col-12 col-lg-5" data-aos="fade-left" data-aos-delay="200" data-aos-duration="800" data-aos-easing="ease-out" data-aos-once="false">
            <div
              className="rounded-4 p-4 h-100"
              style={{
                background: 'linear-gradient(180deg, rgba(153,113,21,0.12), rgba(255,255,255,0.85))',
                border: `1px solid ${COLOR.primary}25`,
                boxShadow: '0 24px 60px rgba(11, 33, 70, 0.06)',
              }}
            >
              <div className="d-flex align-items-center mb-3">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: '48px', height: '48px', backgroundColor: COLOR.primary, color: '#fff' }}
                >
                  <FaRocket />
                </div>
                <div>
                  <h5 className="mb-0" style={{ color: COLOR.secondary }}>Business growth starts within.</h5>
                </div>
              </div>

              <p className="text-muted mb-3">
                Whether you are starting from the ground up, growing an existing business, transitioning into a new professional chapter, or trying to reconnect with your purpose, mentorship provides a space where you can gain perspective, develop practical strategies, ask difficult questions, and move forward with greater confidence.
              </p>

              <div className="rounded-4 p-3" style={{ backgroundColor: '#fff', border: `1px solid ${COLOR.primary}15` }}>
                <p className="mb-2 fw-semibold" style={{ color: COLOR.secondary }}>My approach</p>
                <p className="mb-0 text-muted">
                  Business success and personal growth are connected. You can be ambitious and still need support, and that is not a weakness — it is wisdom.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-12" data-aos="fade-up" data-aos-delay="150" data-aos-duration="800" data-aos-easing="ease-out" data-aos-once="false">
            <div className="rounded-5 p-4 p-md-5" style={{ backgroundColor: '#fff', border: `1px solid ${COLOR.primary}15`, boxShadow: '0 20px 45px rgba(11, 33, 70, 0.04)' }}>
              <h3 className="mb-4" style={{ color: COLOR.secondary }}>You Don’t Have to Build Alone</h3>
              <p className="text-muted mb-3">
                Entrepreneurship and professional growth can sometimes feel isolating. There are decisions to make, opportunities to evaluate, setbacks to overcome, and moments when you may question whether you are on the right path.
              </p>
              <p className="text-muted mb-3">
                The right mentor can help you see what you may not be able to see on your own. Mentorship creates an environment for honest conversations, strategic thinking, accountability, encouragement, and personal development. It gives you the opportunity to learn from experience while developing your own voice, leadership style, and approach to business.
              </p>
              <p className="mb-0 text-muted">
                There is no shame in needing guidance. In fact, knowing when to seek wisdom is itself a sign of growth.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <div className="d-flex align-items-center mb-4">
            <FaLightbulb className="me-3" style={{ color: COLOR.primary, fontSize: '1.5rem' }} />
            <h3 className="mb-0" style={{ color: COLOR.secondary }}>What Our Mentorship Focuses On</h3>
          </div>

          <div className="row g-4">
            {focusAreas.map((item) => (
              <div key={item.title} className="col-12 col-md-6 col-lg-4">
                <div className="h-100 rounded-4 p-4" style={{ backgroundColor: '#fff', border: `1px solid ${COLOR.primary}15`, boxShadow: '0 16px 38px rgba(11, 33, 70, 0.04)' }}>
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: '38px', height: '38px', backgroundColor: COLOR.primary, color: '#fff' }}
                    >
                      <FaCheckCircle size={16} />
                    </div>
                    <h5 className="mb-0" style={{ color: COLOR.secondary }}>{item.title}</h5>
                  </div>
                  <p className="mb-0 text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="row g-4 align-items-stretch mb-5">
          <div className="col-12" data-aos="zoom-in" data-aos-delay="150" data-aos-duration="900" data-aos-easing="ease-out" data-aos-once="false">
            <div className="rounded-5 p-4 p-md-5" style={{ backgroundColor: COLOR.secondary, color: '#fff', boxShadow: '0 24px 60px rgba(11, 33, 70, 0.12)' }}>
              <div className="d-flex align-items-center mb-3">
                <FaBullseye className="me-3" style={{ color: '#fff', fontSize: '1.5rem' }} />
                <h3 className="mb-0" style={{ color: '#fff' }}>Your Business Can Grow as You Grow</h3>
              </div>

              <p className="fs-5 mb-3" style={{ color: '#f8efe1' }}>
                One of the most important principles behind our mentorship philosophy is simple:
              </p>

              <p className="fw-bold fs-4 mb-4" style={{ color: '#fff' }}>
                You cannot consistently build beyond the capacity you have developed within yourself.
              </p>

              <p className="mb-0 text-white-75">
                As your business grows, so must your ability to lead it. Growth may require you to become more disciplined. More courageous. More organized. More emotionally intelligent. More decisive. More willing to delegate. More comfortable with visibility. More intentional about boundaries. Sometimes the next breakthrough is not another strategy. Sometimes it is a mindset shift. Sometimes it is learning to trust yourself again.
              </p>
            </div>
          </div>
        </div>

        <div className="row gy-5 mb-5">
          <div className="col-12">
            <div className="d-flex align-items-center mb-4">
              <FaCompass className="me-3" style={{ color: COLOR.primary, fontSize: '1.5rem' }} />
              <h3 className="mb-0" style={{ color: COLOR.secondary }}>Page Two — From Vision to Action</h3>
            </div>
          </div>

          <div className="col-12 col-lg-7" data-aos="fade-right" data-aos-delay="100" data-aos-duration="800" data-aos-easing="ease-out" data-aos-once="false">
            <div className="rounded-5 p-4 p-md-5 h-100" style={{ backgroundColor: '#fff', border: `1px solid ${COLOR.primary}15` }}>
              <h4 className="mb-3" style={{ color: COLOR.secondary }}>Turn Your Vision Into a Strategy You Can Act On</h4>
              <p className="text-muted mb-3">
                A vision without action remains an idea. My mentorship experience helps you move from thinking about what could be possible to intentionally working toward what you want to create.
              </p>
              <p className="text-muted mb-3">
                Together, we can explore where you are now, where you want to go, what may be standing in your way, and what practical steps can help you move forward.
              </p>
              <p className="mb-0 text-muted">
                The goal is not to give you a one-size-fits-all formula. Your journey is unique. Your experiences are unique. Your business is unique. Your definition of success is unique.
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-5" data-aos="fade-left" data-aos-delay="200" data-aos-duration="800" data-aos-easing="ease-out" data-aos-once="false">
            <div className="rounded-5 p-4 p-md-5 h-100" style={{ backgroundColor: '#f9f5ee', border: `1px solid ${COLOR.primary}15` }}>
              <h4 className="mb-3" style={{ color: COLOR.secondary }}>Who Is This Mentorship For?</h4>
              <ul className="list-unstyled mb-0">
                {mentorshipAudience.map((item) => (
                  <li key={item} className="d-flex align-items-start mb-3">
                    <FaUserCheck className="flex-shrink-0 mt-1 me-3" style={{ color: COLOR.primary }} />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <div className="d-flex align-items-center mb-4">
            <FaHandshake className="me-3" style={{ color: COLOR.primary, fontSize: '1.5rem' }} />
            <h3 className="mb-0" style={{ color: COLOR.secondary }}>What You Can Expect</h3>
          </div>

          <div className="row g-4">
            {expectations.map((item, index) => (
              <div key={item.title} className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={100 + index * 100} data-aos-duration="800" data-aos-easing="ease-out" data-aos-once="false">
                <div className="h-100 rounded-4 p-4" style={{ backgroundColor: '#fff', border: `1px solid ${COLOR.primary}15`, boxShadow: '0 16px 38px rgba(11, 33, 70, 0.04)' }}>
                  <h5 className="mb-3" style={{ color: COLOR.secondary }}>{item.title}</h5>
                  <p className="mb-0 text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="row g-4 align-items-center mb-5">
          <div className="col-12 col-lg-7" data-aos="fade-right" data-aos-delay="100" data-aos-duration="800" data-aos-easing="ease-out" data-aos-once="false">
            <div className="rounded-5 p-4 p-md-5" style={{ backgroundColor: '#fff', border: `1px solid ${COLOR.primary}15` }}>
              <h3 className="mb-4" style={{ color: COLOR.secondary }}>Build a Business That Supports the Life You Want</h3>
              <p className="text-muted mb-3">
                Success should not require you to lose yourself. Your business should not consume your identity. Your ambition should not require you to abandon your well-being. And growth should not mean constantly operating from exhaustion.
              </p>
              <p className="text-muted mb-4">
                I believe in building with intention—creating businesses, careers, and lives that reflect your values, strengths, purpose, and priorities.
              </p>

              <div className="rounded-4 p-4" style={{ backgroundColor: '#f9f5ee', border: `1px solid ${COLOR.primary}15` }}>
                <p className="mb-2 fw-semibold" style={{ color: COLOR.secondary }}>What am I building?</p>
                <p className="mb-2 fw-semibold" style={{ color: COLOR.secondary }}>Why am I building it?</p>
                <p className="mb-2 fw-semibold" style={{ color: COLOR.secondary }}>Who am I becoming while I build it?</p>
                <p className="mb-2 fw-semibold" style={{ color: COLOR.secondary }}>What kind of life do I want this business to support?</p>
                <p className="mb-0 fw-semibold" style={{ color: COLOR.secondary }}>What needs to change for me to move forward?</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-5" data-aos="fade-left" data-aos-delay="200" data-aos-duration="800" data-aos-easing="ease-out" data-aos-once="false">
            <div className="rounded-5 p-4 p-md-5 text-center" style={{ backgroundColor: COLOR.primary, color: '#fff', boxShadow: '0 24px 60px rgba(11, 33, 70, 0.14)' }}>
              <div className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '64px', height: '64px', backgroundColor: '#fff', color: COLOR.primary }}>
                <FaArrowRight />
              </div>
              <h3 className="mb-3 fw-bold">Ready to Grow?</h3>
              <p className="mb-4 text-white-75">
                If you are ready to gain clarity, strengthen your leadership, develop your confidence, and take intentional action toward your personal or professional goals, let’s begin the conversation.
              </p>
              <a className="btn btn-light btn-lg rounded-pill px-4" href="https://calendly.com/hammondf17" style={{ color: COLOR.secondary }}>
                Book a Mentorship Session Today
              </a>
            </div>
          </div>
        </div>

        <div className="text-center rounded-5 p-4 p-md-5" data-aos="fade-up" data-aos-delay="150" data-aos-duration="800" data-aos-easing="ease-out" data-aos-once="false" style={{ backgroundColor: '#fff', border: `1px solid ${COLOR.primary}15` }}>
          <p className="mb-2" style={{ color: COLOR.secondary, fontWeight: 700 }}>Your growth deserves intention.</p>
          <p className="mb-2" style={{ color: COLOR.secondary, fontWeight: 700 }}>Your vision deserves action.</p>
          <p className="mb-3" style={{ color: COLOR.secondary, fontWeight: 700 }}>Your next chapter deserves support.</p>
          <p className="mb-0 text-muted">
            Let’s turn where you are into a foundation for where you are going.
          </p>
        </div>
      </div>
    </section>
  )
}

export default MentorshipandBusiness