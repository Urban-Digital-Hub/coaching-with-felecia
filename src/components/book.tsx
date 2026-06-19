// import React from "react";
import book from "/images/book/book.jpg";
import COLOR from "../../constants/color";

function Book() {
  return (
    <section
      className="py-5"
      style={{
        background: "#ffff",
      }}
    >
      <div className="container">
        <p
          className="text-center mb-2"
          style={{
            color: COLOR.primary,
            fontWeight: "600",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Educational Resources
        </p>

        <h1
          className="text-center mb-5"
          style={{
            color: COLOR.secondary,
            fontWeight: "800",
          }}
        >
          Checkout My Books
        </h1>

        <div
          className="row align-items-center bg-white shadow-lg p-4 p-md-5"
          style={{
            borderRadius: "30px",
          }}
        >
          {/* Book Image */}
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <img
              src={book}
              alt="The Tactical Pause Book"
              className="img-fluid shadow"
              style={{
                maxHeight: "500px",
                borderRadius: "20px",
              }}
            />
          </div>

          {/* Book Details */}
          <div className="col-lg-7">
            <span
              className="badge mb-3"
              style={{
                backgroundColor: COLOR.primary,
                padding: "10px 18px",
                fontSize: "14px",
              }}
            >
              New Release
            </span>

            <h2
              style={{
                color: COLOR.secondary,
                fontWeight: "700",
                lineHeight: "1.4",
              }}
            >
              The Tactical Pause: From Army Officer Dreams to the Leadership
              of My Soul
            </h2>

            <p
              className="mt-4"
              style={{
                fontSize: "18px",
                color: "#666",
                lineHeight: "1.8",
              }}
            >
              An inspiring journey of purpose, leadership, resilience, and
              self-discovery. This book offers valuable lessons that will
              encourage readers to reflect, grow, and lead with authenticity.
            </p>

            <div className="my-4">
              <h4
                style={{
                  color: COLOR.primary,
                  fontWeight: "700",
                }}
              >
                A Must-Read For Everyone
              </h4>
            </div>

            <a
              href="https://a.co/d/0iK3pSfJ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg"
              style={{
                backgroundColor: COLOR.secondary,
                color: "#fff",
                borderRadius: "50px",
                padding: "14px 35px",
                fontWeight: "600",
              }}
            >
              Order on Amazon →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Book;