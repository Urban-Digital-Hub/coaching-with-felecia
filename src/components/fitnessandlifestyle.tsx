import COLOR from '../../constants/color'
import { FaDumbbell, FaLeaf, FaCheckCircle, FaHeart, FaArrowRight, FaClipboardCheck, FaHandsHelping, FaLightbulb, FaShieldAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const promiseIcons = {
  Care: FaHandsHelping,
  Expertise: FaLightbulb,
  Accountability: FaClipboardCheck,
  Compassion: FaHeart,
  'Trauma-informed guidance': FaShieldAlt,
  'A pace that honors your nervous system': FaLeaf,
}

function FitnessandLifestyle() {
  return (
    <section className="py-5" style={{ backgroundColor: '#f7f2e8', color: COLOR.secondary }}>
      <div className="container">
        <div className="row gx-5 align-items-center mb-5">
          <div className="col-12 col-lg-6">
            <span className="badge rounded-pill px-4 py-2 mb-3 d-inline-flex align-items-center" style={{ backgroundColor: COLOR.primary, color: '#fff' }}>
              <FaDumbbell className="me-2" style={{ color: '#fff' }} />Fitness + Nutrition Coaching
            </span>
            <h2 className="display-5 fw-bold mb-4" style={{ letterSpacing: '-0.03em' }}>
              Elegant coaching that supports strength, nourishment, and nervous-system safety.
            </h2>
            <p className="text-muted fs-6 mb-4">
              Your body deserves to feel strong, nourished, and safe. This coaching is designed with care, expertise, accountability, and compassion — aligned to your healing journey.
            </p>

            <div className="rounded-4 p-4" style={{ backgroundColor: '#fff', border: `1px solid ${COLOR.primary}15`, boxShadow: '0 24px 60px rgba(11, 33, 70, 0.06)' }}>
              <div className="d-flex align-items-start gap-3 mb-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px', backgroundColor: COLOR.primary, color: '#fff' }}>
                  <FaCheckCircle />
                </div>
                <div>
                  <h5 className="mb-1">Structured support</h5>
                  <p className="mb-0 text-muted">Weekly check-ins and evolving plans so every step feels intentional.</p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px', backgroundColor: COLOR.primary, color: '#fff' }}>
                  <FaLeaf />
                </div>
                <div>
                  <h5 className="mb-1">Nourishing movement</h5>
                  <p className="mb-0 text-muted">Strength and mobility that honor your nervous system and support resilience.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="rounded-4 overflow-hidden shadow-sm" style={{ background: 'linear-gradient(180deg, rgba(153,113,21,0.14), rgba(255,255,255,0.82))' }}>
              <img
                src="/images/person/35person.jpg"
                alt="Fitness coaching support"
                className="img-fluid w-100 object-fit-cover"
              />
            </div>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-12 col-md-6">
            <div className="p-5 rounded-5 h-100" style={{ backgroundColor: '#fff', border: `1px solid ${COLOR.primary}15`, boxShadow: '0 20px 45px rgba(11, 33, 70, 0.04)' }}>
              <h3 className="mb-4 d-flex align-items-center" style={{ color: COLOR.secondary }}>
                <FaDumbbell className="me-3" style={{ color: COLOR.secondary }} />Fitness Coaching
              </h3>
              <ul className="list-unstyled mb-0" style={{ paddingLeft: 0 }}>
                {[
                  'Personalized Workout Plan designed around your goals, schedule, and current fitness level.',
                  'Weekly Check-Ins to review progress, adjust your plan, and celebrate your wins.',
                  'Form Guidance with cues and corrections to keep you safe and confident.',
                  'Nervous-System–Friendly Movement that supports emotional regulation, not stress activation.',
                ].map((item) => (
                  <li key={item} className="d-flex align-items-start mb-3">
                    <FaCheckCircle className="flex-shrink-0 mt-1 me-3" style={{ color: COLOR.primary }} />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="p-5 rounded-5 h-100" style={{ backgroundColor: '#fff', border: `1px solid ${COLOR.primary}15`, boxShadow: '0 20px 45px rgba(11, 33, 70, 0.04)' }}>
              <h3 className="mb-4 d-flex align-items-center" style={{ color: COLOR.secondary }}>
                <FaLeaf className="me-3" style={{ color: COLOR.secondary }} />Nutrition Coaching
              </h3>
              <ul className="list-unstyled mb-0" style={{ paddingLeft: 0 }}>
                {[
                  'Personalized Nutrition Plan created to support energy, hormones, mood, and overall wellness.',
                  'Weekly Accountability with gentle check-ins that help you stay consistent without pressure.',
                  'Grocery Lists + Meal Ideas with simple nourishing options that fit your lifestyle.',
                  'No Restriction, No Shame — nourishment is the focus, not punishment.',
                ].map((item) => (
                  <li key={item} className="d-flex align-items-start mb-3">
                    <FaCheckCircle className="flex-shrink-0 mt-1 me-3" style={{ color: COLOR.primary }} />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-12 col-lg-8">
            <div className="p-5 rounded-5 h-100" style={{ backgroundColor: '#fff', border: `1px solid ${COLOR.primary}15`, boxShadow: '0 20px 45px rgba(11, 33, 70, 0.04)' }}>
              <h3 className="mb-4 d-flex align-items-center" style={{ color: COLOR.secondary }}>
                <FaClipboardCheck className="me-3" style={{ color: COLOR.secondary }} />My Promise to You
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
                <h3 className="fw-bold">Let’s Begin</h3>
              </div>
              <p className="mb-4 text-white-75">
                Your first workout, nutrition plan, or check-in will be sent after your intake form is complete. I’m proud of you for choosing this journey.
              </p>
              <Link className="btn btn-light btn-lg rounded-pill" to="/client-intake" style={{ color: COLOR.secondary }}>
                Start Your Intake
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FitnessandLifestyle