import { useState } from "react";
import { FaAward } from "react-icons/fa";
import COLOR from "../../constants/color";

// Import your certificate images
import cert1 from "/images/cert/army.jpeg";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  image?: string;
  date?: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Military Training Certificate",
    issuer: "U.S. Army",
    image: cert1,
  },
  {
    id: 2,
    title: "Certified Happiness Life Coach",
    issuer: "Transformation Academy",
    date: "July 17, 2026",
  },
  {
    id: 3,
    title: "Bachelor of Science in Finance",
    issuer: "Rasmussen University",
    date: "December 14, 2024",
  },
  {
    id: 4,
    title: "Sexual Assault Advocate Certification Program",
    issuer: "Department of Defense",
    date: "August 31, 2023",
  },
  {
    id: 5,
    title: "Professional Life Coach Certification",
    issuer: "Transformation Academy",
    date: "April 9, 2026",
  },
  {
    id: 6,
    title: "Life Purpose Coach Certification",
    issuer: "Transformation Academy",
    date: "April 9, 2026",
  },
  {
    id: 7,
    title: "Goal Success Life Coach Certification",
    issuer: "Transformation Academy",
    date: "April 9, 2026",
  },
];

function Cert() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section
      className="py-5"
      style={{
        background: "#f8fafc",
      }}
    >
      <div className="container">
        <h2
          className="text-center fw-bold mb-3"
          style={{ color: COLOR.primary }}
        >
          Certifications
        </h2>

        <p
          className="text-center mx-auto mb-5"
          style={{
            maxWidth: "650px",
            color: COLOR.secondary,
          }}
        >
          A collection of certifications showcasing my continuous learning,
          professional achievements, and dedication to lifelong growth.
        </p>

        <div className="row g-4">
          {certifications.map((cert) => (
            <div className="col-lg-4 col-md-6" key={cert.id}>
              <div
                className="card border-0 shadow-sm h-100"
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  transition: "0.35s ease",
                }}
              >
                {/* IMAGE OR PLACEHOLDER */}
                <div
                  style={{
                    height: "280px",
                    overflow: "hidden",
                  }}
                >
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-100 h-100"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      className="d-flex flex-column justify-content-center align-items-center text-center h-100 p-4"
                      style={{
                        background: `linear-gradient(135deg, ${COLOR.secondary}, ${COLOR.primary})`,
                        color: "#fff",
                      }}
                    >
                      <div
                        className="d-flex justify-content-center align-items-center mb-4"
                        style={{
                          width: 90,
                          height: 90,
                          borderRadius: "50%",
                          background: "rgba(255,255,255,.15)",
                          backdropFilter: "blur(12px)",
                          border: "1px solid rgba(255,255,255,.25)",
                        }}
                      >
                        <FaAward size={42} />
                      </div>

                      <h5 className="fw-bold">{cert.title}</h5>

                      <p className="mb-2 opacity-75">{cert.issuer}</p>

                      {cert.date && (
                        <small className="opacity-75">{cert.date}</small>
                      )}

                      {/* <span
                        className="mt-4 px-3 py-2 rounded-pill"
                        style={{
                          background: "rgba(255,255,255,.15)",
                          border: "1px solid rgba(255,255,255,.2)",
                        }}
                      >
                        Certificate Preview
                      </span> */}
                    </div>
                  )}
                </div>

                {/* CARD BODY */}
                <div className="card-body d-flex flex-column">
                  <h5
                    className="fw-bold"
                    style={{
                      color: COLOR.secondary,
                    }}
                  >
                    {cert.title}
                  </h5>

                  <p className="text-muted mb-1">
                    <strong>{cert.issuer}</strong>
                  </p>

                  {cert.date && (
                    <small className="text-secondary mb-3">
                      Issued {cert.date}
                    </small>
                  )}

                  <button
                    className="btn mt-auto"
                    style={{
                      background: COLOR.primary,
                      color: "#fff",
                      borderRadius: "10px",
                    }}
                    onClick={() => setSelectedCert(cert)}
                  >
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedCert && (
          <div
            className="modal fade show"
            style={{
              display: "block",
              background: "rgba(0,0,0,.75)",
            }}
            tabIndex={-1}
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="modal-dialog modal-xl modal-dialog-centered"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="modal-content border-0"
                style={{
                  borderRadius: "20px",
                }}
              >
                <div className="modal-header">
                  <h4
                    className="fw-bold"
                    style={{
                      color: COLOR.secondary,
                    }}
                  >
                    {selectedCert.title}
                  </h4>

                  <button
                    className="btn-close"
                    onClick={() => setSelectedCert(null)}
                  />
                </div>

                <div className="modal-body text-center">
                  {selectedCert.image ? (
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="img-fluid rounded shadow"
                    />
                  ) : (
                    <div
                      className="d-flex flex-column justify-content-center align-items-center"
                      style={{
                        minHeight: "500px",
                        borderRadius: "20px",
                        background: `linear-gradient(135deg, ${COLOR.secondary}, ${COLOR.primary})`,
                        color: "#fff",
                      }}
                    >
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{
                          width: 120,
                          height: 120,
                          borderRadius: "50%",
                          background: "rgba(255,255,255,.15)",
                          border: "1px solid rgba(255,255,255,.2)",
                        }}
                      >
                        <FaAward size={60} />
                      </div>

                      <h2 className="fw-bold mt-4">
                        {selectedCert.title}
                      </h2>

                      <h5 className="opacity-75 mt-2">
                        {selectedCert.issuer}
                      </h5>

                      {selectedCert.date && (
                        <p className="mt-2 opacity-75">
                          Issued {selectedCert.date}
                        </p>
                      )}

                      {/* <div
                        className="mt-4 px-4 py-2 rounded-pill"
                        style={{
                          background: "rgba(255,255,255,.15)",
                          border: "1px solid rgba(255,255,255,.2)",
                        }}
                      >
                        Certificate Image Coming Soon
                      </div> */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cert;