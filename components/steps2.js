import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Steps2 = (props) => {
  return (
    <>
      <div
        id={props.steps2Id}
        className="steps2-container1 thq-section-padding"
      >
        <div className="steps2-max-width thq-section-max-width">
          <div className="steps2-container2 thq-grid-2">
            <div className="steps2-section-header">
              <h2 className="thq-heading-2">Getting Started</h2>
              <p className="thq-body-large">
                We dedicate ourselves to creating powerful scripts packed with
                functionality, ensuring you enjoy the best possible experience.
              </p>
              <div className="steps2-actions">
                <button className="thq-button-filled thq-button-animated steps2-button">
                  <span className="thq-body-small">Go to Loadstring</span>
                </button>
              </div>
            </div>
            <div className="steps2-container3">
              <div className="steps2-container4 thq-card">
                <h2 className="thq-heading-2">
                  {props.step1Title ?? (
                    <Fragment>
                      <span className="steps2-text27">Execute The Script</span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps2-text14 thq-body-small">
                  {props.step1Description ?? (
                    <Fragment>
                      <span className="steps2-text30">
                        Scroll down to find the loadstring.
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps2-text15 thq-heading-3">01</label>
              </div>
              <div className="steps2-container5 thq-card">
                <h2 className="thq-heading-2">
                  {props.step2Title ?? (
                    <Fragment>
                      <span className="steps2-text29">Get A Key</span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps2-text17 thq-body-small">
                  {props.step2Description ?? (
                    <Fragment>
                      <span className="steps2-text32">
                        Buy a key from our store, or get a free one from one of
                        the key systems below.
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps2-text18 thq-heading-3">02</label>
              </div>
              <div className="steps2-container6 thq-card">
                <h2 className="thq-heading-2">
                  {props.step3Title ?? (
                    <Fragment>
                      <span className="steps2-text28">Enter The key</span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps2-text20 thq-body-small">
                  {props.step3Description ?? (
                    <Fragment>
                      <span className="steps2-text26">
                        Enter the key in the verification tab that opens, once
                        you execute the script.
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps2-text21 thq-heading-3">03</label>
              </div>
              <div className="steps2-container7 thq-card">
                <h2 className="thq-heading-2">
                  {props.step4Title ?? (
                    <Fragment>
                      <span className="steps2-text25">Enjoy</span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps2-text23 thq-body-small">
                  {props.step4Description ?? (
                    <Fragment>
                      <span className="steps2-text31">
                        Unlock the script and enjoy a ton of features.
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps2-text24 thq-heading-3">04</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .steps2-container1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps2-max-width {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps2-container2 {
            align-items: start;
          }
          .steps2-section-header {
            gap: var(--dl-layout-space-oneandhalfunits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .steps2-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .steps2-container3 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .steps2-container4 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps2-text14 {
            text-align: center;
          }
          .steps2-text15 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container5 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps2-text17 {
            text-align: center;
          }
          .steps2-text18 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container6 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps2-text20 {
            text-align: center;
          }
          .steps2-text21 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container7 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps2-text23 {
            text-align: center;
          }
          .steps2-text24 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-text25 {
            display: inline-block;
          }
          .steps2-text26 {
            display: inline-block;
          }
          .steps2-text27 {
            display: inline-block;
          }
          .steps2-text28 {
            display: inline-block;
          }
          .steps2-text29 {
            display: inline-block;
          }
          .steps2-text30 {
            display: inline-block;
          }
          .steps2-text31 {
            display: inline-block;
          }
          .steps2-text32 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .steps2-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .steps2-section-header {
              position: static;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .steps2-actions {
              width: 100%;
              align-self: flex-start;
            }
            .steps2-container4 {
              width: 100%;
            }
            .steps2-container5 {
              width: 100%;
            }
            .steps2-container6 {
              width: 100%;
            }
            .steps2-container7 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .steps2-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Steps2.defaultProps = {
  step4Title: undefined,
  step3Description: undefined,
  steps2Id: '',
  step1Title: undefined,
  step3Title: undefined,
  step2Title: undefined,
  step1Description: undefined,
  step4Description: undefined,
  step2Description: undefined,
}

Steps2.propTypes = {
  step4Title: PropTypes.element,
  step3Description: PropTypes.element,
  steps2Id: PropTypes.string,
  step1Title: PropTypes.element,
  step3Title: PropTypes.element,
  step2Title: PropTypes.element,
  step1Description: PropTypes.element,
  step4Description: PropTypes.element,
  step2Description: PropTypes.element,
}

export default Steps2
