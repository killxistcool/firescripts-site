import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Team7 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="team7-max-width thq-section-max-width">
          <div className="team7-section-title">
            <span className="thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="team7-text45">
                    Our team is dedicated to providing top-notch service and
                    support to help you maximize productivity.
                  </span>
                </Fragment>
              )}
            </span>
            <div className="team7-content1">
              <h2 className="team7-text11 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="team7-text35">Meet Our Team</span>
                  </Fragment>
                )}
              </h2>
              <p className="team7-text12 thq-body-large">
                {props.content2 ?? (
                  <Fragment>
                    <span className="team7-text48">
                      For support join our discord server at:
                      discord.gg/firescipts
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="team7-content2">
            <div className="team7-card1">
              <img
                alt={props.member1Alt}
                src={props.member1Src}
                className="team7-placeholder-image1 thq-img-ratio-1-1 thq-img-round"
              />
              <div className="team7-content3">
                <div className="team7-title1">
                  <span className="team7-text13 thq-body-small">
                    {props.member1 ?? (
                      <Fragment>
                        <span className="team7-text42">Ninja</span>
                      </Fragment>
                    )}
                  </span>
                  <span className="team7-text14 thq-body-small">
                    {props.member1Job ?? (
                      <Fragment>
                        <span className="team7-text31">Onwer</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <span className="thq-body-small">
                  {props.member1Content ?? (
                    <Fragment>
                      <span className="team7-text39">
                        Ninja is the founder behind our company, driving
                        innovation and growth.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="team7-social-icons1"></div>
            </div>
            <div className="team7-card2">
              <img
                alt={props.member2Alt}
                src={props.member2Src}
                className="team7-placeholder-image2 thq-img-ratio-1-1 thq-img-round"
              />
              <div className="team7-content4">
                <div className="team7-title2">
                  <span className="team7-text16 thq-body-small">
                    {props.member2 ?? (
                      <Fragment>
                        <span className="team7-text46">Flawless</span>
                      </Fragment>
                    )}
                  </span>
                  <span className="team7-text17 thq-body-small">
                    {props.member2Job ?? (
                      <Fragment>
                        <span className="team7-text32">Community Manager</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <span className="thq-body-small">
                  {props.member2Content ?? (
                    <Fragment>
                      <span className="team7-text44">
                        Flawless develops the scripts along side Ninja and also
                        manages the entire Fire Scripts Community
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="team7-social-icons2"></div>
            </div>
            <div className="team7-card3">
              <img
                alt={props.member3Alt}
                src={props.member3Src}
                className="team7-placeholder-image3 thq-img-ratio-1-1 thq-img-round"
              />
              <div className="team7-content5">
                <div className="team7-title3">
                  <span className="team7-text19 thq-body-small">
                    {props.member3 ?? (
                      <Fragment>
                        <span className="team7-text41">Nightbubi</span>
                      </Fragment>
                    )}
                  </span>
                  <span className="team7-text20 thq-body-small">
                    {props.member3Job ?? (
                      <Fragment>
                        <span className="team7-text47">Head Moderator</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <span className="thq-body-small">
                  {props.member3Content ?? (
                    <Fragment>
                      <span className="team7-text40">
                        Nightubi moderates our Discord server to ensure a safe
                        place for everyone.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="team7-social-icons3"></div>
            </div>
            <div className="team7-card4">
              <img
                alt={props.member4Alt}
                src={props.member4Src}
                className="team7-placeholder-image4 thq-img-ratio-1-1 thq-img-round"
              />
              <div className="team7-content6">
                <div className="team7-title4">
                  <span className="team7-text22 thq-body-small">
                    {props.member4 ?? (
                      <Fragment>
                        <span className="team7-text34">deus</span>
                      </Fragment>
                    )}
                  </span>
                  <span className="team7-text23 thq-body-small">
                    {props.member4Job ?? (
                      <Fragment>
                        <span className="team7-text33">Trial Moderator</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <span className="thq-body-small">
                  {props.member4Content ?? (
                    <Fragment>
                      <span className="team7-text36">
                        deus moderates our Discord server along side Nightbubi.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="team7-social-icons4"></div>
            </div>
            <div className="team7-card5">
              <img
                alt={props.member5Alt}
                src={props.member5Src}
                className="team7-placeholder-image5 thq-img-ratio-1-1 thq-img-round"
              />
              <div className="team7-content7">
                <div className="team7-title5">
                  <span className="team7-text25 thq-body-small">
                    {props.member5 ?? (
                      <Fragment>
                        <span className="team7-text38">IA</span>
                      </Fragment>
                    )}
                  </span>
                  <span className="team7-text26 thq-body-small">
                    {props.member5Job ?? (
                      <Fragment>
                        <span className="team7-text50">Trial Support</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <span className="thq-body-small">
                  {props.member5Content ?? (
                    <Fragment>
                      <span className="team7-text43">
                        IA helps users with problems through our ticket system.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="team7-social-icons5"></div>
            </div>
            <div className="team7-card6">
              <img
                alt={props.member6Alt}
                src={props.member6Src}
                className="team7-placeholder-image6 thq-img-ratio-1-1 thq-img-round"
              />
              <div className="team7-content8">
                <div className="team7-title6">
                  <span className="team7-text28 thq-body-small">
                    {props.member6 ?? (
                      <Fragment>
                        <span className="team7-text51">???</span>
                      </Fragment>
                    )}
                  </span>
                  <span className="team7-text29 thq-body-small">
                    {props.member6Job ?? (
                      <Fragment>
                        <span className="team7-text37">???</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <span className="thq-body-small">
                  {props.member6Content ?? (
                    <Fragment>
                      <span className="team7-text49">
                        This staff member decided not to be shown here.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .team7-max-width {
            gap: var(--dl-layout-space-fiveunits);
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-section-title {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team7-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team7-text11 {
            align-self: flex-start;
          }
          .team7-text12 {
            align-self: flex-start;
          }
          .team7-content2 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: grid;
            align-items: center;
            justify-content: center;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
          .team7-card1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-placeholder-image1 {
            width: 80px;
            height: 80px;
          }
          .team7-content3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-title1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-text13 {
            font-style: normal;
            font-weight: 600;
          }
          .team7-text14 {
            text-align: center;
          }
          .team7-social-icons1 {
            gap: var(--dl-layout-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .team7-card2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-placeholder-image2 {
            width: 80px;
            height: 80px;
          }
          .team7-content4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team7-title2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-text16 {
            font-style: normal;
            font-weight: 600;
          }
          .team7-text17 {
            text-align: center;
          }
          .team7-social-icons2 {
            gap: var(--dl-layout-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .team7-card3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-placeholder-image3 {
            width: 80px;
            height: 80px;
          }
          .team7-content5 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team7-title3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-text19 {
            font-style: normal;
            font-weight: 600;
          }
          .team7-text20 {
            text-align: center;
          }
          .team7-social-icons3 {
            gap: var(--dl-layout-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .team7-card4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-placeholder-image4 {
            width: 80px;
            height: 80px;
          }
          .team7-content6 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team7-title4 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-text22 {
            font-style: normal;
            font-weight: 600;
          }
          .team7-text23 {
            text-align: center;
          }
          .team7-social-icons4 {
            gap: var(--dl-layout-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .team7-card5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-placeholder-image5 {
            width: 80px;
            height: 80px;
          }
          .team7-content7 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team7-title5 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-text25 {
            font-style: normal;
            font-weight: 600;
          }
          .team7-text26 {
            text-align: center;
          }
          .team7-social-icons5 {
            gap: var(--dl-layout-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .team7-card6 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-placeholder-image6 {
            width: 80px;
            height: 80px;
          }
          .team7-content8 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team7-title6 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .team7-text28 {
            font-style: normal;
            font-weight: 600;
          }
          .team7-text29 {
            text-align: center;
          }
          .team7-text31 {
            display: inline-block;
          }
          .team7-text32 {
            display: inline-block;
          }
          .team7-text33 {
            display: inline-block;
          }
          .team7-text34 {
            display: inline-block;
          }
          .team7-text35 {
            display: inline-block;
          }
          .team7-text36 {
            display: inline-block;
          }
          .team7-text37 {
            display: inline-block;
          }
          .team7-text38 {
            display: inline-block;
          }
          .team7-text39 {
            display: inline-block;
          }
          .team7-text40 {
            display: inline-block;
          }
          .team7-text41 {
            display: inline-block;
          }
          .team7-text42 {
            display: inline-block;
          }
          .team7-text43 {
            display: inline-block;
          }
          .team7-text44 {
            display: inline-block;
          }
          .team7-text45 {
            display: inline-block;
          }
          .team7-text46 {
            display: inline-block;
          }
          .team7-text47 {
            display: inline-block;
          }
          .team7-text48 {
            display: inline-block;
          }
          .team7-text49 {
            display: inline-block;
          }
          .team7-text50 {
            display: inline-block;
          }
          .team7-text51 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Team7.defaultProps = {
  member1Job: undefined,
  member4Src:
    'https://images.unsplash.com/photo-1626448877021-88bc0c053728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTE4MDQxMHw&ixlib=rb-4.1.0&q=80&w=1080',
  member2Job: undefined,
  member6Src:
    'https://images.unsplash.com/photo-1608155686393-8fdd966d784d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTE4MDQxMXw&ixlib=rb-4.1.0&q=80&w=1080',
  member4Job: undefined,
  member4: undefined,
  member3Alt: 'Image of Alex Johnson, Head of Customer Support',
  heading1: undefined,
  member5Alt: 'Image of Mike Wilson, Security Specialist',
  member4Content: undefined,
  member4Alt: 'Image of Sarah Brown, Marketing Director',
  member6Job: undefined,
  member5: undefined,
  member1Alt: 'Image of John Doe, CEO',
  member1Content: undefined,
  member3Content: undefined,
  member1Src:
    'https://images.unsplash.com/photo-1486649567693-aaa9b2e59385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTE4MDQxMXw&ixlib=rb-4.1.0&q=80&w=1080',
  member2Src:
    'https://images.unsplash.com/photo-1542452376175-82b6fb643412?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTE4MDQxMXw&ixlib=rb-4.1.0&q=80&w=1080',
  member3: undefined,
  member1: undefined,
  member5Content: undefined,
  member2Content: undefined,
  content1: undefined,
  member2: undefined,
  member3Job: undefined,
  content2: undefined,
  member3Src:
    'https://images.unsplash.com/photo-1652129950700-8517fe5d068d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTE4MDQxMHw&ixlib=rb-4.1.0&q=80&w=1080',
  member6Content: undefined,
  member5Src:
    'https://images.unsplash.com/photo-1571816119607-57e48af1caa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1OTE4MDQxMHw&ixlib=rb-4.1.0&q=80&w=1080',
  member2Alt: 'Image of Jane Smith, CTO',
  member6Alt: 'Image of Emily Davis, Product Manager',
  member5Job: undefined,
  member6: undefined,
}

Team7.propTypes = {
  member1Job: PropTypes.element,
  member4Src: PropTypes.string,
  member2Job: PropTypes.element,
  member6Src: PropTypes.string,
  member4Job: PropTypes.element,
  member4: PropTypes.element,
  member3Alt: PropTypes.string,
  heading1: PropTypes.element,
  member5Alt: PropTypes.string,
  member4Content: PropTypes.element,
  member4Alt: PropTypes.string,
  member6Job: PropTypes.element,
  member5: PropTypes.element,
  member1Alt: PropTypes.string,
  member1Content: PropTypes.element,
  member3Content: PropTypes.element,
  member1Src: PropTypes.string,
  member2Src: PropTypes.string,
  member3: PropTypes.element,
  member1: PropTypes.element,
  member5Content: PropTypes.element,
  member2Content: PropTypes.element,
  content1: PropTypes.element,
  member2: PropTypes.element,
  member3Job: PropTypes.element,
  content2: PropTypes.element,
  member3Src: PropTypes.string,
  member6Content: PropTypes.element,
  member5Src: PropTypes.string,
  member2Alt: PropTypes.string,
  member6Alt: PropTypes.string,
  member5Job: PropTypes.element,
  member6: PropTypes.element,
}

export default Team7
