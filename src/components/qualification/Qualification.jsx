import React from "react";
import { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">School of books and life</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
          <div
            className={
              toggleState === 3
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(3)}
          >
            <i className="uil uil-award-alt qualification__icon"></i>
            Leadership
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">School</h3>
                <span className="qualification__subtitle">
                  Little Flower High School
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2007 - 2017
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
                <h3 className="qualification__title">Junior College</h3>
                <span className="qualification__subtitle">SR JR.College</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2017 - 2019
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Engineering College</h3>
                <span className="qualification__subtitle">
                  KJ Somaiya Institute of Technology
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              {/* <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div> */}

              {/* <div>
                <h3 className="qualification__title">Marketing Admin</h3>
                <span className="qualification__subtitle">
                  KJ Somaiya Institute of Technology
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div> */}
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Web Developer & Digital Marketer
                </h3>
                <span className="qualification__subtitle">HAM Tech</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jun 2021 - Feb 2022
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
                <h3 className="qualification__title">Sales Executive</h3>
                <span className="qualification__subtitle">Analytica</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jun 2022 - Jun 2022
                </div>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">
                  KJ Somaiya Institute of Technology
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}
          </div>
          <div
            className={
              toggleState === 3
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Volunteer</h3>
                <span className="qualification__subtitle">JB Charity</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - present
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
                <h3 className="qualification__title">Finance Secretary</h3>
                <span className="qualification__subtitle">IOT KJSIT</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> July 2021 - Feb 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Marketing Member</h3>
                <span className="qualification__subtitle">
                  Students' Council KJSIT
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Sept 2021 - Dec 2022
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
                <h3 className="qualification__title">Marketing Admin</h3>
                <span className="qualification__subtitle">IETE KJSIT</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jan 2022 - Jan 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
