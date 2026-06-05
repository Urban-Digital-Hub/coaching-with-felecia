import COLOR from "../../constants/color";
export default function TermsModule() {
  return (
    <div className="container py-5">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold" style={{ color: COLOR.secondary }}>
           CLIENT AGREEMENT & COACHING CONTRACT
        </h1>
        <p className="text-muted fs-5">
          A clear, compassionate agreement that protects your time, energy, and the integrity of our work together.
        </p>
        <hr style={{ borderColor: COLOR.primary, opacity: 0.4 }} />
      </div>

      {/* Section Card */}
      <div className="card shadow-sm mb-4 border-0">
        <div className="card-body">
          <h4 className="fw-bold" style={{ color: COLOR.primary }}>1. PARTIES</h4>
          <p>
            <strong>Coach:</strong> Felecia Hammond — Emotional Healing Coach, Mentor, Wellness Practitioner
          </p>
          <p>
            <strong>Client:</strong> The individual booking coaching, mentorship, fitness, or nutrition services.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="card shadow-sm mb-4 border-0">
        <div className="card-body">
          <h4 className="fw-bold" style={{ color: COLOR.primary }}>2. NATURE OF SERVICES</h4>

          <p>
            The Coach provides emotional healing coaching, mentorship, nervous-system support,
            trauma-informed relationship coaching, spiritual grounding, fitness coaching,
            nutrition coaching, workshops, and wellness education.
          </p>

          <div className="alert alert-warning mt-3">
            <strong>Important:</strong> The Coach does NOT provide therapy, diagnosis, medical treatment, or crisis services.
          </div>
        </div>
      </div>

      {/* Confidentiality */}
      <div className="card shadow-sm mb-4 border-0">
        <div className="card-body">
          <h4 className="fw-bold" style={{ color: COLOR.primary }}>3. CONFIDENTIALITY</h4>
          <p>
            All information shared is confidential unless required by law, risk of harm exists,
            or written consent is given.
          </p>
        </div>
      </div>

      {/* Responsibilities */}
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h4 className="fw-bold" style={{ color: COLOR.primary }}>
                4. CLIENT RESPONSIBILITIES
              </h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Attend sessions on time</li>
                <li className="list-group-item">Communicate honestly</li>
                <li className="list-group-item">Complete assignments</li>
                <li className="list-group-item">Take responsibility for wellbeing</li>
                <li className="list-group-item">Seek external help when needed</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h4 className="fw-bold" style={{ color: COLOR.primary }}>
                5. COACH RESPONSIBILITIES
              </h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Trauma-informed support</li>
                <li className="list-group-item">Confidentiality</li>
                <li className="list-group-item">Guidance & accountability</li>
                <li className="list-group-item">Prepared sessions</li>
                <li className="list-group-item">Ethical boundaries</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Payment */}
      <div className="card shadow-sm mt-4 border-0">
        <div className="card-body">
          <h4 className="fw-bold" style={{ color: COLOR.primary }}>
            6. PAYMENT & CANCELLATION
          </h4>

          <p>
            Payments are due at booking and are non-refundable. Sessions require 24-hour notice for rescheduling.
            Late cancellations and no-shows are non-refundable.
          </p>

          <div className="alert alert-danger">
            Failure to complete payment plans may result in paused or terminated services.
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="card shadow-sm mt-4 border-0">
        <div className="card-body">
          <h4 className="fw-bold" style={{ color: COLOR.primary }}>
            7. RESULTS DISCLAIMER
          </h4>
          <p>
            No guaranteed emotional, physical, or financial outcomes. Results depend on personal effort,
            consistency, and circumstances.
          </p>
        </div>
      </div>

      {/* Agreement */}
      <div className="text-center mt-5 p-4 rounded"
        style={{ backgroundColor: COLOR.secondary, color: COLOR.white }}>
        <h4 className="fw-bold">Agreement</h4>
        <p className="mb-0">
          By booking services, you agree to these terms and enter this coaching relationship voluntarily.
        </p>
      </div>
    </div>
  );
}