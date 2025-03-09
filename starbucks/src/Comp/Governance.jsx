import React from "react";
import { Link } from "react-router-dom";
import "./Governance.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Governance() {
  return (
    <div>
      <Navbar />
      <div className="container2">
        <div className="gov">
          <div className="gov-content">
            <h1>Corporate Governance</h1>
            <p>
              As part of the Starbucks mission we are committed to maintaining
              our uncompromising principles while we grow.
              <br />
              <br /> In this regard, our Board of Directors has adopted
              governance principles, committee charters and policies to lead
              Starbucks governance practices. Currently, our board has 10
              directors, a substantial majority of whom meet all of the
              independence requirements of NASDAQ® and the U.S. Securities and
              Exchange Commission.
            </p>
          </div>
          <div className="materials">
            <h3>Corporate Governance Materials</h3>
            <Link
              to="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-96471.pdf"
              target="_blank"
            >
              Starbucks Corporation Corporate Governance Principles and
              Practices for the Board of Directors (PDF 230K)
            </Link>
            <Link
              to="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72617.pdf"
              target="_blank"
            >
              Restated Articles of Incorporation of Starbucks Corporation (PDF
              16K)
            </Link>
            <Link
              to="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72618.pdf"
              target="_blank"
            >
              Amended and Restated Bylaws of Starbucks Corporation (PDF 165K)
            </Link>
            <Link
              to="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-82509.pdf"
              target="_blank"
            >
              Code of Ethics for CEO, COO, CFO and Finance Leaders (PDF 72K)
            </Link>
            <Link
              to="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-92889.pdf"
              target="_blank"
            >
              Starbucks Corporation Director Nominations Policy (PDF 204K)
            </Link>
            <Link
              to="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-96676.pdf"
              target="_blank"
            >
              Starbucks Corporation Procedure for Communicating Complaints and
              Concerns (PDF 226K)
            </Link>
          </div>
          <div className="materials">
            <h3>Board Committee Charters</h3>
            <Link
              to="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88345.pdf"
              target="_blank"
            >
              Starbucks Corporation Audit and Compliance Committee Charter (PDF
              184K)
            </Link>
            <Link
              to="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-94793.pdf"
              target="_blank"
            >
              Starbucks Corporation Audit and Compliance Committee Policy for
              Pre-Approval of Independent Auditor Services (PDF 176K)
            </Link>
            <Link
              to="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88355.pdf"
              target="_blank"
            >
              Starbucks Corporation Compensation and Management Development
              Committee Charter (PDF 157K)
            </Link>
            <Link
              to="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88353.pdf"
              target="_blank"
            >
              Starbucks Corporation Environmental, Partner, and Community Impact
              Committee Charter (PDF 129K)
            </Link>
            <Link
              to="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88354.pdf"
              target="_blank"
            >
              Starbucks Corporation Nominating and Corporate Governance
              Committee Charter (PDF 153K)
            </Link>
          </div>
          <div className="materials">
            <h3>Directors and Officers</h3>
            <Link
              to="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-95345.pdf"
              target="_blank"
            >
              Board of Directors Biographies (PDF)
            </Link>
            <Link
              to="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-94852.pdf"
              target="_blank"
            >
              Board Committees List (PDF)
            </Link>
            <Link className="gov-btn">
              Learn about Starbucks Senior Officers
            </Link>
          </div>
          <div className="gov-paragraph">
            <h3>Standards of Business Conduct</h3>
            <p>
              The Standards of Business Conduct booklet is a resource
              distributed to all partners to help them make appropriate
              decisions at work.
              <br />
              <br /> The Standards are a brief statement of some of the
              company’s expectations of how we are all to conduct Starbucks
              business, consistent with our Guiding Principles.{" "}
              <Link to="/about-us/business-ethics-and-compliance/">
                View all versions of the Standards of Business Conduct.
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />;
    </div>
  );
}

export default Governance;
