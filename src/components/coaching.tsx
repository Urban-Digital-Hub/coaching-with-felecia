import COLOR from '../../constants/color'
import { FaHandsHelping, FaCheckCircle, FaHeartbeat, FaLeaf, FaShieldAlt, FaHeart, FaClipboardCheck, FaLightbulb, FaArrowRight } from 'react-icons/fa'

const promiseIcons = {
  Care: FaHandsHelping,
  Expertise: FaLightbulb,
  Accountability: FaClipboardCheck,
  Compassion: FaHeart,
  'Trauma-informed guidance': FaShieldAlt,
  'A pace that honors your nervous system': FaLeaf,
}

function Coaching() {
  return (
    <section className="py-5" style={{ backgroundColor: '#f7f2e8', color: COLOR.scondary }}>
      <div className="container">
        <div className="row gx-5 align-items-center mb-5">
          <div className="col-12 col-lg-6">
            <span className="badge rounded-pill px-4 py-2 mb-3 d-inline-flex align-items-center" style={{ backgroundColor: COLOR.primary, color: '#fff' }}>
              <FaHandsHelping className="me-2" style={{ color: '#fff' }} />Coaching Programs
            </span>
            <h2 className="display-5 fw-bold mb-4" style={{ letterSpacing: '-0.03em' }}>
              Coaching & Mentorship with Felecia
            </h2>
            <p className="text-muted fs-6 mb-4">
              Where strong women learn to soften, breathe, and rebuild their lives from the inside out. You’ve spent years surviving, performing, and carrying more than anyone ever saw. Now it’s time to heal — emotionally, spiritually, and physically.
            </p>
            <div className="rounded-4 p-4" style={{ backgroundColor: '#fff', border: `1px solid ${COLOR.primary}15`, boxShadow: '0 24px 60px rgba(11, 33, 70, 0.06)' }}>
              <div className="d-flex align-items-start gap-3 mb-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px', backgroundColor: COLOR.primary, color: '#fff' }}>
                  <FaHeartbeat />
                </div>
                <div>
                  <h5 className="mb-1">Signature healing</h5>
                  <p className="mb-0 text-muted">A coaching experience rooted in emotional resilience, nervous-system safety, and personal clarity.</p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px', backgroundColor: COLOR.primary, color: '#fff' }}>
                  <FaLeaf />
                </div>
                <div>
                  <h5 className="mb-1">Intentional support</h5>
                  <p className="mb-0 text-muted">Practical guidance that fits your life, your pace, and your nervous-system needs.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="rounded-4 overflow-hidden shadow-sm" style={{ background: 'linear-gradient(180deg, rgba(153,113,21,0.14), rgba(255,255,255,0.82))' }}>
              <img
                src="/images/person/38person.jpg"
                alt="Coaching with Felecia"
                className="img-fluid w-100 object-fit-cover"
              />
            </div>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-12 col-md-6">
            <div className="p-5 rounded-5 h-100" style={{ backgroundColor: '#fff', border: `1px solid ${COLOR.primary}15`, boxShadow: '0 20px 45px rgba(11, 33, 70, 0.04)' }}>
              <h3 className="mb-4 d-flex align-items-center" style={{ color: COLOR.scondary }}>
                <FaHeartbeat className="me-3" style={{ color: COLOR.scondary }} />The Tactical Pause™ Mentorship
              </h3>
              <p className="text-muted mb-3">A 12-week emotional healing journey for women ready to stop surviving and start living.</p>
              <p className="fw-semibold mb-4">Investment: $1,800 paid in full or $650/month for 3 months</p>
              <ul className="list-unstyled mb-0" style={{ paddingLeft: 0 }}>
                {[
                  'The Five-Minute Perimeter',
                  'Emotional flashback awareness',
                  'How to slow urgency + intensity',
                  'How to build internal safety',
                  'How to lead yourself with clarity and compassion',
                ].map((item) => (
                  <li key={item} className="d-flex align-items-start mb-3">
                    <FaCheckCircle className="flex-shrink-0 mt-1 me-3" style={{ color: COLOR.primary }} />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 mb-0 text-muted">Includes weekly 60-minute sessions, personalized healing assignments, journaling prompts, and Voxer/text support between sessions.</p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="p-5 rounded-5 h-100" style={{ backgroundColor: '#fff', border: `1px solid ${COLOR.primary}15`, boxShadow: '0 20px 45px rgba(11, 33, 70, 0.04)' }}>
              <h3 className="mb-4 d-flex align-items-center" style={{ color: COLOR.scondary }}>
                <FaShieldAlt className="me-3" style={{ color: COLOR.scondary }} />1:1 Emotional Healing & Transformation Coaching
              </h3>
              <p className="text-muted mb-3">Private sessions for deep, personalized support through emotional triggers, identity shifts, boundaries, and the patterns that keep you stuck.</p>
              <p className="fw-semibold mb-4">Investment:</p>
              <ul className="list-unstyled mb-0" style={{ paddingLeft: 0 }}>
                {['$150 — Single 60-minute session', '$400 — 3-Session Package', '$750 — 6-Session Package'].map((item) => (
                  <li key={item} className="d-flex align-items-start mb-3">
                    <FaCheckCircle className="flex-shrink-0 mt-1 me-3" style={{ color: COLOR.primary }} />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 mb-0 text-muted">Focus areas include nervous-system grounding, inner child healing, releasing the “Not Enough” wound, rebuilding self-trust, and creating a new internal SOP.</p>
            </div>
          </div>
        </div>

        <div className="row g-4 mb-5">
          {[
            {
              title: 'Soft Life for Strong Women Coaching',
              icon: FaLeaf,
              description: 'For high-achieving women who don’t know how to rest.',
              investment: 'Investment: $200/session or $550 for 3 sessions',
              bullets: ['Release hypervigilance', 'Stop equating worth with performance', 'Slow down without feeling unsafe', 'Build a life rooted in ease'],
            },
            {
              title: 'Motherhood After Survival Mode',
              icon: FaHandsHelping,
              description: 'For mothers navigating burnout, identity loss, or emotional overwhelm.',
              investment: 'Investment: $150/session or $400 for 3 sessions',
              bullets: ['Postpartum emotional healing', 'Identity rebuilding', 'Nervous-system regulation', 'Boundaries without guilt', 'Releasing the pressure to be perfect'],
            },
            {
              title: 'Trauma-Informed Relationship Coaching',
              icon: FaHeart,
              description: 'For women who love deeply but lose themselves in the process.',
              investment: 'Investment: $200/session or $550 for 3 sessions',
              bullets: ['Emotional flashbacks', 'Over functioning', 'Abandonment triggers', 'Communication patterns', 'Building secure connection'],
            },
            {
              title: 'Spiritual Grounding & Faith-Centered Mentorship',
              icon: FaLeaf,
              description: 'For women seeking emotional healing through faith, intuition, and spiritual alignment.',
              investment: 'Investment: $150/session',
              bullets: ['Prayer + grounding rituals', 'Identity + purpose work', 'Soul-level journaling', 'Spiritual alignment practices'],
            },
          ].map((track) => {
            const Icon = track.icon
            return (
              <div key={track.title} className="col-12 col-md-6">
                <div className="p-5 rounded-5 h-100" style={{ backgroundColor: '#fff', border: `1px solid ${COLOR.primary}15`, boxShadow: '0 20px 45px rgba(11, 33, 70, 0.04)' }}>
                  <h5 className="mb-3 d-flex align-items-center" style={{ color: COLOR.scondary }}>
                    <Icon className="me-3" style={{ color: COLOR.scondary }} />{track.title}
                  </h5>
                  <p className="text-muted mb-3">{track.description}</p>
                  <p className="fw-semibold mb-3">{track.investment}</p>
                  <ul className="list-unstyled mb-0" style={{ paddingLeft: 0 }}>
                    {track.bullets.map((bullet) => (
                      <li key={bullet} className="d-flex align-items-start mb-3">
                        <FaCheckCircle className="flex-shrink-0 mt-1 me-3" style={{ color: COLOR.primary }} />
                        <span className="text-muted">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        <div className="row g-4 align-items-stretch mb-5">
          <div className="col-12 col-lg-8">
            <div className="p-5 rounded-5 h-100" style={{ backgroundColor: '#fff', border: `1px solid ${COLOR.primary}15`, boxShadow: '0 20px 45px rgba(11, 33, 70, 0.04)' }}>
              <h3 className="mb-4 d-flex align-items-center" style={{ color: COLOR.scondary }}>
                <FaClipboardCheck className="me-3" style={{ color: COLOR.scondary }} />My Promise to You
              </h3>
              <p className="text-muted mb-4">
                I will support you with care, expertise, accountability, compassion, trauma-informed guidance, and a pace that honors your nervous system.
              </p>
              <div className="row g-3">
                {['Care', 'Expertise', 'Accountability', 'Compassion', 'Trauma-informed guidance', 'A pace that honors your nervous system'].map((item) => {
                  const Icon = promiseIcons[item as keyof typeof promiseIcons]
                  return (
                    <div key={item} className="col-12 col-sm-6">
                      <div className="p-3 rounded-4 d-flex align-items-center" style={{ backgroundColor: '#f9f7f1', border: `1px solid ${COLOR.primary}10` }}>
                        <Icon className="me-3" style={{ color: COLOR.primary, minWidth: '22px' }} />
                        <span className="text-muted">{item}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="p-5 rounded-5 h-100 text-center" style={{ backgroundColor: COLOR.primary, color: '#fff', boxShadow: '0 24px 60px rgba(11, 33, 70, 0.14)' }}>
              <div className="mb-4">
                <div className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', backgroundColor: '#fff', color: COLOR.primary }}>
                  <FaArrowRight />
                </div>
                <h3 className="fw-bold">Ready to Begin</h3>
              </div>
              <p className="mb-4 text-white-75">
                Your healing doesn’t have to be dramatic. It just has to be intentional. Book a session, start your Tactical Pause, and come home to yourself.
              </p>
              <a className="btn btn-light btn-lg rounded-pill" href="https://calendly.com/hammondf17" style={{ color: COLOR.scondary }}>
                Book a Session
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Coaching