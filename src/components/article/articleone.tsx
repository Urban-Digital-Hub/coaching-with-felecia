// import COLOR from '../../constants/color'
import COLOR from '../../../constants/color'
import { Link } from 'react-router-dom'

function ArticleOne() {
  return (
    <div>
      {/* Hero */}
      <section
        className="py-5"
        style={{
          backgroundColor: '#f7f3ea',
          color: COLOR.secondary,
        }}
      >
        <div className="container">
          <div className="col-lg-8 mx-auto text-center">
            <Link
              to="/blog"
              className="text-decoration-none fw-semibold"
              style={{ color: COLOR.primary }}
            >
              ← Back to Blog
            </Link>

            <div className="mt-4">
              <span
                className="badge px-3 py-2 rounded-pill"
                style={{
                  backgroundColor: `${COLOR.primary}20`,
                  color: COLOR.primary,
                }}
              >
                Wellness
              </span>
            </div>

            <h1 className="display-5 fw-bold mt-4">
              Are You Living From Your Wounds or Your Wisdom?
            </h1>

            <p className="text-muted mt-3">
              July 15, 2026 • 6 min read • By Felecia Hammond
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-4 bg-white">
        <div className="container">
          <div className="col-lg-8 mx-auto">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200"
              alt="Wellness"
              className="img-fluid rounded-4 shadow-sm"
            //   style={{height: '100px'}}
            />
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="col-lg-8 mx-auto">

            <p
              className="lead"
              style={{
                lineHeight: "1.9",
                color: COLOR.secondary,
              }}
            >
              Life has a way of shaping us through both joyful and painful
              experiences. While those experiences help us grow, they can also
              leave emotional wounds that quietly influence how we think,
              communicate, and relate to others. The challenge is recognizing
              whether our decisions are coming from fear rooted in past pain or
              from the wisdom we've gained through healing.
            </p>

            <hr className="my-5" />

            <h2 className="fw-bold mb-3">Recognizing Emotional Wounds</h2>

            <p className="text-muted" style={{ lineHeight: "1.9" }}>
              Emotional wounds often appear in subtle ways. We may assume people
              will reject us before giving them a chance, seek constant
              reassurance, or struggle to trust even those who have shown us
              kindness. These reactions are usually not signs of weakness—they
              are signs that our hearts are still protecting themselves from
              previous hurt.
            </p>

            <ul className="mt-4" style={{ lineHeight: "2" }}>
              <li>Fear of rejection</li>
              <li>Difficulty trusting others</li>
              <li>Constant need for approval</li>
              <li>Overthinking conversations</li>
              <li>Feeling responsible for everyone's emotions</li>
            </ul>

            <blockquote
              className="my-5 p-4 rounded-4"
              style={{
                backgroundColor: "#f7f3ea",
                borderLeft: `5px solid ${COLOR.primary}`,
                fontStyle: "italic",
              }}
            >
              "Healing doesn't erase your past—it changes how your past
              influences your future."
            </blockquote>

            <h2 className="fw-bold mb-3">Choosing Wisdom Instead</h2>

            <p className="text-muted" style={{ lineHeight: "1.9" }}>
              Wisdom allows us to pause before reacting. Instead of letting fear
              make our decisions, wisdom encourages reflection, patience, and
              understanding. It reminds us that disagreement is not rejection,
              failure is not the end, and difficult emotions do not define who
              we are.
            </p>

            <p className="text-muted" style={{ lineHeight: "1.9" }}>
              As we continue to heal, we become more confident in ourselves. We
              communicate honestly, set healthy boundaries, forgive more freely,
              and build stronger relationships based on trust rather than fear.
            </p>

            <div
              className="p-4 rounded-4 my-5"
              style={{
                backgroundColor: `${COLOR.primary}10`,
              }}
            >
              <h4
                className="fw-bold mb-3"
                style={{ color: COLOR.primary }}
              >
                Key Takeaways
              </h4>

              <ul className="mb-0">
                <li>Healing is a journey, not a destination.</li>
                <li>Your past does not have to control your future.</li>
                <li>Healthy boundaries create healthy relationships.</li>
                <li>Wisdom responds with intention instead of fear.</li>
              </ul>
            </div>

            <h2 className="fw-bold mb-3">A Question Worth Asking</h2>

            <p className="text-muted" style={{ lineHeight: "1.9" }}>
              The next time you feel hurt, anxious, or defensive, pause for a
              moment and ask yourself:
            </p>

            <div
              className="text-center rounded-4 p-4 my-4"
              style={{
                backgroundColor: "#f7f3ea",
              }}
            >
              <h3
                className="fw-bold mb-0"
                style={{ color: COLOR.primary }}
              >
                "Am I responding from my wounds or from my wisdom?"
              </h3>
            </div>

            <p className="text-muted" style={{ lineHeight: "1.9" }}>
              The answer may not always be easy, but asking the question is the
              first step toward healing. Every small decision rooted in wisdom
              moves you closer to becoming the person you were created to be.
            </p>

          </div>
        </div>
      </section>
    </div>
  )
}

export default ArticleOne