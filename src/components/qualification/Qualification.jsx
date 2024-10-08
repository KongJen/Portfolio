import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">my personal journey </span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 0
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(0)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 0
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Bachelor's Degree Computer Engineering
                </h3>
                <span className="qualification__subtitle">
                  Thailand - KMUTT
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020-Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span> */}
              </div>

              <div>
                <h3 className="qualification__title">High School</h3>
                <span className="qualification__subtitle">
                  Thailand - PCSHS
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2014-2020
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Font-end (Intern)</h3>
                <span className="qualification__subtitle">
                  HiddenGem - Bangkok
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024-2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  App Development (Project)
                </h3>
                <span className="qualification__subtitle">KMUTT - Bangkok</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023-2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Web Development (Project)
                </h3>
                <span className="qualification__subtitle">KMUTT - Bangkok</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022-2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
