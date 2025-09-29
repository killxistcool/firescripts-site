import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer4 = (props) => {
  return (
    <>
      <footer className="footer4-footer7 thq-section-padding">
        <div className="footer4-max-width thq-section-max-width">
          <div className="footer4-content">
            <div className="footer4-links">
              <Link href="/contact">
                <a className="footer4-link thq-body-small">
                  {props.link4 ?? (
                    <Fragment>
                      <span className="footer4-text">Contact Us</span>
                    </Fragment>
                  )}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer4-footer7 {
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
          .footer4-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer4-content {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer4-links {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: flex-start;
          }
          .footer4-link {
            text-decoration: none;
          }
          .footer4-text {
            display: inline-block;
          }
          @media (max-width: 479px) {
            .footer4-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .footer4-links {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Footer4.defaultProps = {
  link4: undefined,
}

Footer4.propTypes = {
  link4: PropTypes.element,
}

export default Footer4
