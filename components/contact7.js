import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Contact7 = (props) => {
  return (
    <>
      <div className="contact7-container1 thq-section-padding">
        <div className="contact7-max-width thq-section-max-width">
          <div className="contact7-content1 thq-flex-row">
            <div className="contact7-content2">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact7-text17">Contact Us</span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact7-text19">
                      For general inquiries and support, please contact us at
                      headquarters.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="contact7-content3 thq-flex-row">
            <div className="contact7-container2">
              <img
                alt={props.location1ImgAlt}
                src={props.location1ImgSrc}
                className="contact7-image1 thq-img-ratio-16-9"
              />
              <h3 className="contact7-text12 thq-heading-3">
                {props.location1 ?? (
                  <Fragment>
                    <span className="contact7-text21">Headquarters</span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-large">
                {props.location1Description ?? (
                  <Fragment>
                    <span className="contact7-text18">
                      123 Main Street, City Name, Country
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="contact7-container3">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-button-flat thq-body-small"
                >
                  Get directions
                </a>
              </div>
            </div>
            <div className="contact7-container4">
              <img
                alt={props.location2ImgAlt}
                src={props.location2ImgSrc}
                className="contact7-image2 thq-img-ratio-16-9"
              />
              <h3 className="contact7-text14 thq-heading-3">
                {props.location2 ?? (
                  <Fragment>
                    <span className="contact7-text16">Support Center</span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-large">
                {props.location2Description ?? (
                  <Fragment>
                    <span className="contact7-text20">
                      456 Support Street, City Name, Country
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="contact7-container5">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-button-flat thq-body-small"
                >
                  Get directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact7-container1 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact7-max-width {
            align-self: center;
          }
          .contact7-content1 {
            width: 100%;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: center;
          }
          .contact7-content2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact7-content3 {
            width: 100%;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact7-container2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact7-image1 {
            object-fit: cover;
          }
          .contact7-text12 {
            text-align: center;
          }
          .contact7-container3 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .contact7-container4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact7-image2 {
            object-fit: cover;
          }
          .contact7-text14 {
            text-align: center;
          }
          .contact7-container5 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .contact7-text16 {
            display: inline-block;
          }
          .contact7-text17 {
            display: inline-block;
          }
          .contact7-text18 {
            display: inline-block;
          }
          .contact7-text19 {
            display: inline-block;
          }
          .contact7-text20 {
            display: inline-block;
          }
          .contact7-text21 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .contact7-content3 {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .contact7-content1 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .contact7-image1 {
              width: 100%;
            }
            .contact7-image2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Contact7.defaultProps = {
  location2ImgSrc:
    'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTE3NzkyM3w&ixlib=rb-4.1.0&q=80&w=1080',
  location1ImgAlt: 'Headquarters Image',
  location1ImgSrc:
    'https://images.unsplash.com/photo-1738854869537-454e7e63a33b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTE3NzkyMnw&ixlib=rb-4.1.0&q=80&w=1080',
  location2: undefined,
  heading1: undefined,
  location1Description: undefined,
  location2ImgAlt: 'Support Center Image',
  content1: undefined,
  location2Description: undefined,
  location1: undefined,
}

Contact7.propTypes = {
  location2ImgSrc: PropTypes.string,
  location1ImgAlt: PropTypes.string,
  location1ImgSrc: PropTypes.string,
  location2: PropTypes.element,
  heading1: PropTypes.element,
  location1Description: PropTypes.element,
  location2ImgAlt: PropTypes.string,
  content1: PropTypes.element,
  location2Description: PropTypes.element,
  location1: PropTypes.element,
}

export default Contact7
