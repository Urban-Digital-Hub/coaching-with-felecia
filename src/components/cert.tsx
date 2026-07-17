import { useState } from "react";
import COLOR from "../../constants/color";

// Import your certificate images
import cert1 from "/images/cert/army.jpeg";
import cert2 from "/images/cert/pc.jpeg";
import cert3 from "/images/cert/pc2.jpeg";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  image: string;
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
    title: "Professional Life Coach",
    issuer: "Transformation Academy",
    image: cert2,
  },
  {
    id: 3,
    title: "Goal Success Life Coach",
    issuer: "Transformation Academy",
    image: cert3,
  },
];

function Cert() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
     <section className="py-5" style={{ background: "#f8fafc" }}>
      <div className="container">
        <h2
          className="text-center fw-bold mb-3"
          style={{ color: COLOR.primary }}
        >
          Certifications
        </h2>

        <p
          className="text-center mx-auto mb-5"
          style={{ maxWidth: "650px", color: COLOR.secondary }}
        >
          A collection of certifications showcasing my continuous learning and
          professional achievements.
        </p>

        <div className="row g-4">
          {certifications.map((cert) => (
            <div className="col-md-6" key={cert.id}>
              <div
                className="card border-0 shadow h-100"
                style={{ borderRadius: "20px" }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="card-img-top"
                  style={{
                    height: "320px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body">
                  <h4
                    className="fw-bold"
                    style={{ color: COLOR.secondary }}
                  >
                    {cert.title}
                  </h4>

                  <p className="text-muted">
                    Issued by <strong>{cert.issuer}</strong>
                  </p>

                  <button
                    className="btn mt-2"
                    style={{
                      backgroundColor: COLOR.primary,
                      color: COLOR.white,
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

        {/* Bootstrap Modal */}
        {selectedCert && (
          <div
            className="modal fade show"
            style={{
              display: "block",
              backgroundColor: "rgba(0,0,0,0.7)",
            }}
            tabIndex={-1}
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="modal-dialog modal-xl modal-dialog-centered"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5
                    className="modal-title"
                    style={{ color: COLOR.secondary }}
                  >
                    {selectedCert.title}
                  </h5>

                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setSelectedCert(null)}
                  ></button>
                </div>

                <div className="modal-body text-center">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="img-fluid rounded"
                  />
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