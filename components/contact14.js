import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Contact14 = (props) => {
  return (
    <>
      <div className="contact14-contact20 thq-section-padding">
        <div className="contact14-max-width thq-section-max-width">
          <div className="contact14-content1">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact14-contact-info">
              <div className="contact14-content2">
                <h3 className="contact14-text1 thq-heading-3">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="contact14-text4">Contact Us</span>
                    </Fragment>
                  )}
                </h3>
                <p className="contact14-text2 thq-body-large">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="contact14-text3">
                        We are here to assist you. Reach out to us for any
                        inquiries or support.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <span className="contact14-email thq-body-small">
                {props.email1 ?? (
                  <Fragment>
                    <span className="contact14-text5">
                      flawlesspurpleman@gmail.com
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact14-contact20 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-direction: column;
          }
          .contact14-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .contact14-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact14-contact-info {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-content2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-text1 {
            align-self: stretch;
            text-align: center;
          }
          .contact14-text2 {
            text-align: center;
          }
          .contact14-email {
            text-align: center;
          }
          .contact14-text3 {
            display: inline-block;
          }
          .contact14-text4 {
            display: inline-block;
          }
          .contact14-text5 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .contact14-max-width {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Contact14.defaultProps = {
  content1: undefined,
  heading1: undefined,
  email1: undefined,
}

Contact14.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
  email1: PropTypes.element,
}

export default Contact14
