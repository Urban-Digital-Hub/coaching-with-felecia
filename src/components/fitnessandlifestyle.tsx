import COLOR from '../../constants/color'
import { FaDumbbell, FaLeaf, FaCheckCircle, FaHeart, FaArrowRight, FaClipboardCheck, FaHandsHelping, FaLightbulb, FaShieldAlt } from 'react-icons/fa'

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
    <section className="py-5" style={{ backgroundColor: '#fff8f0', color: COLOR.scondary }}>
      <div className="container">
        <div className="row align-items-center gy-4 mb-5">
          <div className="col-12 col-lg-7">
            <span className="badge rounded-pill px-3 py-2 mb-3 d-inline-flex align-items-center" style={{ backgroundColor: COLOR.primary, color: '#fff' }}>
              <FaDumbbell className="me-2" />Fitness Coaching
            </span>
            <h2 className="display-6 fw-bold mb-3">Fitness Coaching — What’s Included</h2>
            <p className="lead text-muted mb-4">
              Your body deserves to feel strong, nourished, and safe. This coaching is built to support your healing journey with care, expertise, accountability, and compassion.
            </p>
          </div>
          <div className="col-12 col-lg-5">
            <div className="rounded-4 overflow-hidden shadow-sm" style={{ background: 'linear-gradient(180deg, rgba(153,113,21,0.12), rgba(11,33,70,0.08))' }}>
              <img
                src="/images/person/35person.jpg"
                alt="Fitness coaching support"
                className="img-fluid w-100 object-fit-cover"
              />
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#ffffff', border: `1px solid ${COLOR.primary}20` }}>
              <h3 className="mb-3"><FaDumbbell className="me-2" style={{ color: COLOR.scondary }} />Fitness Coaching</h3>
              <ul style={{ paddingLeft: '1.25rem' }}>
                <li className="mb-2 d-flex align-items-start"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} /><span><strong>Personalized Workout Plan</strong> designed around your goals, schedule, and current fitness level.</span></li>
                <li className="mb-2 d-flex align-items-start"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} /><span><strong>Weekly Check-Ins</strong> to review progress, adjust your plan, and celebrate your wins.</span></li>
                <li className="mb-2 d-flex align-items-start"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} /><span><strong>Form Guidance</strong> with cues and corrections to keep you safe and confident.</span></li>
                <li className="mb-0 d-flex align-items-start"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} /><span><strong>Nervous-System–Friendly Movement</strong> so workouts support emotional regulation, not stress activation.</span></li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#ffffff', border: `1px solid ${COLOR.primary}20` }}>
              <h3 className="mb-3"><FaLeaf className="me-2" style={{ color: COLOR.scondary }} />Nutrition Coaching</h3>
              <ul style={{ paddingLeft: '1.25rem' }}>
                <li className="mb-2 d-flex align-items-start"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} /><span><strong>Personalized Nutrition Plan</strong> created to support energy, hormones, mood, and overall wellness.</span></li>
                <li className="mb-2 d-flex align-items-start"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} /><span><strong>Weekly Accountability</strong> with gentle check-ins that help you stay consistent without pressure.</span></li>
                <li className="mb-2 d-flex align-items-start"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} /><span><strong>Grocery Lists + Meal Ideas</strong> with simple nourishing options that fit your lifestyle.</span></li>
                <li className="mb-0 d-flex align-items-start"><FaCheckCircle className="flex-shrink-0 mt-1 me-2" style={{ color: COLOR.scondary }} /><span><strong>No Restriction, No Shame</strong> — nourishment is the focus, not punishment.</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-5">
          <div className="col-12 col-lg-8">
            <div className="p-4 rounded-4" style={{ backgroundColor: '#ffffff', border: `1px solid ${COLOR.primary}20` }}>
              <h3 className="mb-3"><FaClipboardCheck className="me-2" style={{ color: COLOR.scondary }} />My Promise to You</h3>
              <p className="text-muted mb-3">I will support you with care, expertise, accountability, compassion, trauma-informed guidance, and a pace that honors your nervous system.</p>
              <div className="row g-3">
                {['Care', 'Expertise', 'Accountability', 'Compassion', 'Trauma-informed guidance', 'A pace that honors your nervous system'].map((item) => {
                  const Icon = promiseIcons[item as keyof typeof promiseIcons]
                  return (
                    <div key={item} className="col-12 col-sm-6">
                      <div className="p-3 rounded-4 d-flex align-items-center" style={{ backgroundColor: '#f9f7f1', border: `1px solid ${COLOR.primary}10` }}>
                        <Icon className="me-2" style={{ color: COLOR.scondary }} />
                        <span>{item}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="p-4 rounded-4 h-100 text-center" style={{ backgroundColor: COLOR.primary, color: '#fff' }}>
              <h3 className="mb-3"><FaArrowRight className="me-2" style={{ color: '#fff' }} />Let’s Begin</h3>
              <p>Your first workout, nutrition plan, or check-in will be sent after your intake form is complete.</p>
              <p className="mb-4">I’m proud of you for choosing this journey. Your Tactical Pause includes your body, too — and this is where that healing begins.</p>
              <a className="btn btn-outline-light" href="/contact" style={{ borderColor: '#fff' }}>
                Start Your Intake
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FitnessandLifestyle