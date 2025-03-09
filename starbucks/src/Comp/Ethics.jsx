import React from "react";
import { Link } from "react-router-dom";
import "./Ethics.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Ethics() {
  return (
    <div>
      <Navbar />
      <div className="container2">
        <div className="ethics">
          <div className="ethics-content">
            <h1>Ethics & Compliance</h1>
            <p>
              We believe that conducting business ethically and striving to do
              the right thing are vital to the success of the company.
              <br />
              <br />
              Starbucks Ethics & Compliance supports our mission and values and
              helps protect our culture and our reputation by fostering a
              culture that is committed to ethical leadership and conducting
              business with integrity by providing resources that help partners
              make ethical decisions at work.
              <br />
              <br />
              We do this by advising and enabling leaders to drive ethical
              business practices, partnering with the business to ensure
              effective legal risk management and encouraging partners to speak
              up if they have questions or concerns.
              <br />
              <br /> The majority of reports we receive involve employee
              relations issues. This trend is consistent with other companies –
              retail or otherwise – that provide alternative reporting
              mechanisms as part of a comprehensive ethics and compliance
              program.
            </p>
          </div>
          <div className="standarts">
            <h2>Standards of Business Conduct</h2>
            <p>
              As a global company, we are subject to the highest standards of
              ethical conduct and behavior. The Standards of Business Conduct
              help us make decisions in our daily work and demonstrate that we
              take our legal and ethical responsibilities seriously.
            </p>
          </div>
          <div className="pdf">
            <h3>Downloadable PDFs</h3>
            <Link
              to="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-95141.pdf"
              target="_blank"
            >
              English (PDF 896K)
            </Link>
            <Link
              to="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-95142.pdf"
              target="_blank"
            >
              Simplified Chinese (PDF 21.9MB)
            </Link>
            <Link
              to="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-95139.pdf"
              target="_blank"
            >
              French Canadian (PDF 923K)
            </Link>
            <Link
              to="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-95140.pdf"
              target="_blank"
            >
              French (PDF 6.2MB)
            </Link>
            <Link
              to="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-95138.pdf"
              target="_blank"
            >
              German (PDF 6.1MB)
            </Link>
            <Link
              to="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-95135.pdf"
              target="_blank"
            >
              Spanish (PDF 917K)
            </Link>
            <Link
              to="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-95136.pdf"
              target="_blank"
            >
              Japanese (PDF 21.5MB)
            </Link>
            <Link
              to="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-95137.pdf"
              target="_blank"
            >
              Italian (PDF 922K)
            </Link>
          </div>
        </div>
      </div>
      <Footer />;
    </div>
  );
}

export default Ethics;
