import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features6 = (props) => {
  return (
    <>
      <div className="features6-layout216 thq-section-padding">
        <div className="features6-max-width thq-section-max-width thq-flex-row">
          <div className="thq-flex-column">
            <img
              alt={props.featureImageAlt}
              src={props.featureImageSrc}
              className="thq-img-ratio-4-3 features6-image1"
            />
          </div>
          <div className="thq-flex-column features6-content">
            <div className="features6-section-title thq-flex-column">
              <h2 className="thq-heading-2">
                {props.sectionTitle ?? (
                  <Fragment>
                    <span className="features6-text5">Powerful Features</span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.featureDescription ?? (
                  <Fragment>
                    <span className="features6-text4">
                      Our scripts and services are designed to boost your
                      productivity by providing tailored solutions for your
                      specific needs.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="features6-actions thq-flex-row">
              <a
                href="https://ads.luarmor.net/get_key?for=Fire_Hub_Key-sUMwDnOyEgea"
                target="_blank"
                rel="noreferrer noopener"
                className="features6-button1 thq-button-filled"
              >
                <span className="thq-body-small">
                  {props.mainAction ?? (
                    <Fragment>
                      <span className="features6-text6">
                        Choose a plan that suits your needs
                      </span>
                    </Fragment>
                  )}
                </span>
              </a>
              <a
                href="https://ads.luarmor.net/get_key?for=Fire_Hub_Key_Link_Vertise-XCwwBReJXQIA"
                target="_blank"
                rel="noreferrer noopener"
                className="features6-button2 thq-button-outline"
              >
                <span className="thq-body-small">
                  {props.secondaryAction ?? (
                    <Fragment>
                      <span className="features6-text3">
                        Experience seamless integration with our services
                      </span>
                    </Fragment>
                  )}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features6-layout216 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features6-max-width {
            gap: var(--dl-layout-space-threeunits);
          }
          .features6-section-title {
            align-items: flex-start;
          }
          .features6-actions {
            align-self: flex-start;
          }
          .features6-button1 {
            text-decoration: none;
          }
          .features6-button2 {
            text-decoration: none;
          }
          .features6-text3 {
            display: inline-block;
          }
          .features6-text4 {
            display: inline-block;
          }
          .features6-text5 {
            display: inline-block;
          }
          .features6-text6 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features6-layout216 {
              width: 100%;
            }
            .features6-max-width {
              flex-direction: column;
            }
            .features6-image1 {
              width: 100%;
            }
            .features6-content {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .features6-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .features6-actions {
              width: 100%;
              flex-wrap: wrap;
              margin-top: var(--dl-layout-space-unit);
            }
            .features6-button1 {
              width: 100%;
            }
            .features6-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features6.defaultProps = {
  secondaryAction: undefined,
  featureDescription: undefined,
  sectionTitle: undefined,
  featureImageSrc:
    'https://images.unsplash.com/photo-1628332208173-6fd87e648d99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTE4NTQ3MHw&ixlib=rb-4.1.0&q=80&w=1080',
  mainAction: undefined,
  featureImageAlt: 'Productivity Boost',
}

Features6.propTypes = {
  secondaryAction: PropTypes.element,
  featureDescription: PropTypes.element,
  sectionTitle: PropTypes.element,
  featureImageSrc: PropTypes.string,
  mainAction: PropTypes.element,
  featureImageAlt: PropTypes.string,
}

export default Features6
