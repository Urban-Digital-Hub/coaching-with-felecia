
// import COLOR from '../../constants/color'
import COLOR from '../../../constants/color'
import { Link } from 'react-router-dom'

function ArticleTwo() {
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
                Personal Growth
              </span>
            </div>

            <h1 className="display-5 fw-bold mt-4">
              Healing the Past Without Living in It
            </h1>

            <p className="text-muted mt-3">
              July 15, 2026 • 5 min read • By Felecia Hammond
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-4 bg-white">
        <div className="container">
          <div className="col-lg-8 mx-auto">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200"
              alt="Healing and Growth"
              className="img-fluid rounded-4 shadow-sm"
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
              Your past matters. It has shaped your beliefs, influenced your
              decisions, and contributed to the person you are today. But
              healing does not mean staying stuck in yesterday's pain. Healing
              means understanding the past so you can fully embrace the future.
            </p>

            <hr className="my-5" />

            <h2 className="fw-bold mb-3">
              The Difference Between Remembering and Reliving
            </h2>

            <p className="text-muted" style={{ lineHeight: "1.9" }}>
              Many people unknowingly relive old experiences through present-day
              reactions. A disagreement feels like rejection. Constructive
              feedback feels like criticism. Someone needing space feels like
              abandonment. When unresolved wounds remain active, the past can
              feel more real than the present.
            </p>

            <blockquote
              className="my-5 p-4 rounded-4"
              style={{
                backgroundColor: "#f7f3ea",
                borderLeft: `5px solid ${COLOR.primary}`,
                fontStyle: "italic",
              }}
            >
              "Healing is not forgetting your past. It is learning to live
              beyond it."
            </blockquote>

            <h2 className="fw-bold mb-3">
              Healing Begins With Recognition
            </h2>

            <p className="text-muted" style={{ lineHeight: "1.9" }}>
              Transformation starts when you recognize the connection between
              your experiences and your reactions. Awareness helps you identify
              the beliefs and fears that quietly influence your choices every
              day.
            </p>

            <p className="fw-semibold mb-3">
              Ask yourself:
            </p>

            <ul style={{ lineHeight: "2" }}>
              <li>What situations trigger me most?</li>
              <li>What beliefs am I carrying about myself?</li>
              <li>What fears continue to influence my decisions?</li>
              <li>What story am I telling myself about my worth?</li>
            </ul>

            <p className="text-muted mt-3" style={{ lineHeight: "1.9" }}>
              Awareness creates the foundation for healing. Once you understand
              what is influencing your reactions, you can begin making healthier
              choices.
            </p>

            <h2 className="fw-bold mt-5 mb-3">
              Becoming the Author of Your Next Chapter
            </h2>

            <p className="text-muted" style={{ lineHeight: "1.9" }}>
              Many people spend years trying to change their circumstances while
              ignoring the beliefs driving their behavior. Real growth happens
              when we choose to rewrite the internal story we tell ourselves.
            </p>

            <div
              className="p-4 rounded-4 my-4"
              style={{
                backgroundColor: `${COLOR.primary}10`,
              }}
            >
              <h5 className="fw-bold mb-3" style={{ color: COLOR.primary }}>
                Replace Limiting Beliefs
              </h5>

              <p className="mb-2">
                <strong>Instead of:</strong> "I am not enough."
              </p>

              <p className="mb-4">
                <strong>Choose:</strong> "I am worthy of love, growth, and
                success."
              </p>

              <p className="mb-2">
                <strong>Instead of:</strong> "I must earn acceptance."
              </p>

              <p className="mb-0">
                <strong>Choose:</strong> "I can receive acceptance as I am."
              </p>
            </div>

            <h2 className="fw-bold mt-5 mb-3">
              The Value of Coaching and Mentorship
            </h2>

            <p className="text-muted" style={{ lineHeight: "1.9" }}>
              A skilled coach helps you identify limiting beliefs, develop
              healthier perspectives, and create practical steps toward personal
              transformation. Coaching provides encouragement, accountability,
              and guidance as you continue your healing journey.
            </p>

            <div
              className="text-center rounded-4 p-4 my-5"
              style={{
                backgroundColor: "#f7f3ea",
              }}
            >
              <h3
                className="fw-bold mb-3"
                style={{ color: COLOR.primary }}
              >
                Remember This
              </h3>

              <p className="mb-0" style={{ fontSize: "1.1rem" }}>
                Healing is not about becoming someone else. It is about becoming
                the healthiest version of who you already are.
              </p>
            </div>

            <p className="text-muted" style={{ lineHeight: "1.9" }}>
              Your story is still being written. The past may have shaped the
              chapters behind you, but it does not have to determine the
              chapters ahead. Every day is an opportunity to choose growth,
              embrace hope, and step confidently into the future. The future
              belongs to the person you are becoming.
            </p>

          </div>
        </div>
      </section>
    </div>
  )
}

export default ArticleTwo;
