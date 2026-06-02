import COLOR from '../../constants/color'
import { FaHandsHelping, FaCheckCircle, FaHeartbeat, FaLeaf, FaShieldAlt, FaHeart, FaDumbbell, FaAppleAlt } from 'react-icons/fa'

function Coaching() {
  return (
    <section className="py-5" style={{ backgroundColor: '#f9f7f1', color: COLOR.scondary }}>
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-12 col-lg-7">
            <span className="badge rounded-pill px-3 py-2 mb-3 d-inline-flex align-items-center" style={{ backgroundColor: COLOR.primary, color: '#fff' }}>
              <FaHandsHelping className="me-2" style={{ color: '#fff' }} /> Coaching Programs
            </span>
            <h2 className="display-6 fw-bold mb-3">Coaching & Mentorship with Felecia</h2>
            <p className="lead mb-4">
              Where strong women learn to soften, breathe, and rebuild their lives from the inside out. You’ve spent years surviving, performing, and carrying more than anyone ever saw. Now it’s time to heal — emotionally, spiritually, and physically.
            </p>
            <p className="mb-4 text-muted">
              My coaching, mentorship, fitness, and nutrition programs are designed for women who are ready to break old patterns, regulate their nervous systems, reclaim their identity, and step into a life rooted in peace, strength, and intention. This is where your Tactical Pause begins.
            </p>
          </div>
          <div className="col-12 col-lg-5">
            <div className="rounded-4 overflow-hidden shadow-sm" style={{ background: 'linear-gradient(180deg, rgba(153,113,21,0.15), rgba(11,33,70,0.08))' }}>
              <img
                src="/images/person/38person.jpg"
                alt="Coaching with Felecia"
                className="img-fluid w-100 object-fit-cover"
              />
            </div>
          </div>
        </div>

        <div className="row g-4 mt-5">
          <div className="col-12 col-lg-6">
            <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#ffffff', border: `1px solid ${COLOR.primary}20` }}>
              <h3 className="mb-3"><FaHeartbeat className="me-2" style={{ color: COLOR.scondary }} />The Tactical Pause™ Mentorship</h3>
              <p className="text-muted">A 12-week emotional healing journey for women ready to stop surviving and start living.</p>
              <p className="fw-semibold mb-3">Investment: $1,800 paid in full or $650/month for 3 months</p>
              <ul className="mb-3" style={{ paddingLeft: '1.25rem' }}>
                <li className="d-flex align-items-start mb-2"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />The Five-Minute Perimeter</li>
                <li className="d-flex align-items-start mb-2"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />Emotional flashback awareness</li>
                <li className="d-flex align-items-start mb-2"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />How to slow urgency + intensity</li>
                <li className="d-flex align-items-start mb-2"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />How to build internal safety</li>
                <li className="d-flex align-items-start"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />How to lead yourself with clarity and compassion</li>
              </ul>
              <p className="mb-0 text-muted">Includes weekly 60-minute sessions, personalized healing assignments, journaling prompts, and Voxer/text support between sessions.</p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#ffffff', border: `1px solid ${COLOR.primary}20` }}>
              <h3 className="mb-3"><FaShieldAlt className="me-2" style={{ color: COLOR.scondary }} />1:1 Emotional Healing & Transformation Coaching</h3>
              <p className="text-muted">Private sessions for deep, personalized support through emotional triggers, identity shifts, boundaries, and the patterns that keep you stuck.</p>
              <p className="fw-semibold mb-3">Investment:</p>
              <ul className="mb-3" style={{ paddingLeft: '1.25rem' }}>
                <li className="d-flex align-items-start mb-2"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />$150 — Single 60-minute session</li>
                <li className="d-flex align-items-start mb-2"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />$400 — 3-Session Package</li>
                <li className="d-flex align-items-start"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />$750 — 6-Session Package</li>
              </ul>
              <p className="mb-0 text-muted">Focus areas include nervous-system grounding, inner child healing, releasing the “Not Enough” wound, rebuilding self-trust, and creating a new internal SOP.</p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="fw-bold mb-4">Specialized Coaching Tracks</h3>
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#ffffff', border: `1px solid ${COLOR.primary}20` }}>
                <h5 className="mb-3"><FaLeaf className="me-2" style={{ color: COLOR.scondary }} />Soft Life for Strong Women Coaching</h5>
                <p className="text-muted">For high-achieving women who don’t know how to rest.</p>
                <p className="fw-semibold mb-2">Investment: $200/session or $550 for 3 sessions</p>
                <ul style={{ paddingLeft: '1.25rem' }}>
                  <li className="d-flex align-items-start mb-2"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />Release hypervigilance</li>
                  <li className="d-flex align-items-start mb-2"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />Stop equating worth with performance</li>
                  <li className="d-flex align-items-start mb-2"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />Slow down without feeling unsafe</li>
                  <li className="d-flex align-items-start"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />Build a life rooted in ease</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#ffffff', border: `1px solid ${COLOR.primary}20` }}>
                <h5 className="mb-3"><FaHandsHelping className="me-2" style={{ color: COLOR.scondary }} />Motherhood After Survival Mode</h5>
                <p className="text-muted">For mothers navigating burnout, identity loss, or emotional overwhelm.</p>
                <p className="fw-semibold mb-2">Investment: $150/session or $400 for 3 sessions</p>
                <ul style={{ paddingLeft: '1.25rem' }}>
                  <li className="d-flex align-items-start mb-2"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />Postpartum emotional healing</li>
                  <li className="d-flex align-items-start mb-2"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />Identity rebuilding</li>
                  <li className="d-flex align-items-start mb-2"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />Nervous-system regulation</li>
                  <li className="d-flex align-items-start mb-2"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />Boundaries without guilt</li>
                  <li className="d-flex align-items-start"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />Releasing the pressure to be perfect</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#ffffff', border: `1px solid ${COLOR.primary}20` }}>
                <h5 className="mb-3"><FaHeart className="me-2" style={{ color: COLOR.scondary }} />Trauma-Informed Relationship Coaching</h5>
                <p className="text-muted">For women who love deeply but lose themselves in the process.</p>
                <p className="fw-semibold mb-2">Investment: $200/session or $550 for 3 sessions</p>
                <ul style={{ paddingLeft: '1.25rem' }}>
                  <li className="d-flex align-items-start mb-2"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />Emotional flashbacks</li>
                  <li className="d-flex align-items-start mb-2"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />Over functioning</li>
                  <li className="d-flex align-items-start mb-2"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />Abandonment triggers</li>
                  <li className="d-flex align-items-start mb-2"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />Communication patterns</li>
                  <li className="d-flex align-items-start"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />Building secure connection</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#ffffff', border: `1px solid ${COLOR.primary}20` }}>
                <h5 className="mb-3"><FaLeaf className="me-2" style={{ color: COLOR.scondary }} />Spiritual Grounding & Faith-Centered Mentorship</h5>
                <p className="text-muted">For women seeking emotional healing through faith, intuition, and spiritual alignment.</p>
                <p className="fw-semibold mb-2">Investment: $150/session</p>
                <ul style={{ paddingLeft: '1.25rem' }}>
                  <li className="d-flex align-items-start mb-2"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />Prayer + grounding rituals</li>
                  <li className="d-flex align-items-start mb-2"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />Identity + purpose work</li>
                  <li className="d-flex align-items-start mb-2"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />Soul-level journaling</li>
                  <li className="d-flex align-items-start"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />Spiritual alignment practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="fw-bold mb-4">Fitness & Wellness Coaching</h3>
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#ffffff', border: `1px solid ${COLOR.primary}20` }}>
                <h5 className="mb-3"><FaDumbbell className="me-2" style={{ color: COLOR.scondary }} />Fitness Coaching for Women Rebuilding Strength</h5>
                <p className="text-muted">For women healing from burnout, postpartum depletion, or emotional exhaustion.</p>
                <p className="fw-semibold mb-2">Investment:</p>
                <ul style={{ paddingLeft: '1.25rem' }}>
                  <li className="d-flex align-items-start mb-2"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />$125/session</li>
                  <li className="d-flex align-items-start mb-2"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />$350 — 4-Week Program</li>
                  <li className="d-flex align-items-start"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />$650 — 8-Week Program</li>
                </ul>
                <p className="mb-0 text-muted">Includes personalized workout plans, strength + mobility routines, low-impact options, weekly check-ins, and form guidance with accountability.</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#ffffff', border: `1px solid ${COLOR.primary}20` }}>
                <h5 className="mb-3"><FaAppleAlt className="me-2" style={{ color: COLOR.scondary }} />Nutrition Coaching for Emotional + Physical Wellness</h5>
                <p className="text-muted">For women who want to nourish their bodies without restriction or shame.</p>
                <p className="fw-semibold mb-2">Investment:</p>
                <ul style={{ paddingLeft: '1.25rem' }}>
                  <li className="d-flex align-items-start mb-2"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />$125/session</li>
                  <li className="d-flex align-items-start mb-2"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />$300 — 4-Week Nutrition Reset</li>
                  <li className="d-flex align-items-start"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} />$550 — 8-Week Nutrition Coaching</li>
                </ul>
                <p className="mb-0 text-muted">Includes a personalized nutrition plan, hormone + energy-supportive meals, postpartum-friendly nutrition, grocery lists, meal ideas, and weekly accountability.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 p-4 rounded-4" style={{ backgroundColor: COLOR.scondary, color: '#fff' }}>
          <h3 className="fw-bold mb-3">Workshops & Speaking</h3>
          <p className="mb-3">The Tactical Pause™ Workshops start at $500 per workshop. Topics include emotional resilience, nervous-system awareness, healing from burnout, boundaries + self-leadership, and the Tactical Pause method.</p>
          <p className="mb-0">The Healing Library is coming soon with journals, guided meditations, an emotional flashback checklist, the Tactical Pause grounding guide, and mini-courses.</p>
        </div>

        <div className="rounded-4 mt-5 p-5 text-center" style={{ backgroundColor: COLOR.primary, color: '#fff' }}>
          <h3 className="fw-bold mb-3">Ready to Begin?</h3>
          <p className="mb-4">Your healing doesn’t have to be dramatic. It just has to be intentional. Book a session, start your Tactical Pause, and come home to yourself.</p>
          <a className="btn btn-outline-light btn-lg" href="https://calendly.com/hammondf17" style={{ borderColor: '#fff' }}>
            Book a Session
          </a>
        </div>
      </div>
    </section>
  )
}

export default Coaching