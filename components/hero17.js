import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero17 = (props) => {
  return (
    <>
      <div id={props.hero17Id} className="hero17-header78">
        <div className="hero17-column thq-section-max-width thq-section-padding">
          <div className="hero17-content1">
            <h1 className="hero17-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero17-text4">Welcome to Our Website</span>
                </Fragment>
              )}
            </h1>
            <p className="hero17-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero17-text3">
                    Discover the best products and services tailored just for
                    you.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="hero17-content2">
          <div className="hero17-row-container thq-mask-image-horizontal thq-animated-group-container-horizontal">
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero17-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero17-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero17-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero17-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero17-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="hero17-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
            <div className="hero17-strip2 thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero17-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero17-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero17-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero17-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero17-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt="Hero Image"
                src="/fischiesniggashaha-1500w.webp"
                className="hero17-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="hero17-container11">
            <Script
              html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
            ></Script>
          </div>
        </div>
        <div className="hero17-container12">
          <div className="hero17-container13">
            <Script
              html={`<style>
        @keyframes scroll-x {from {transform: translateX(0);}
to {transform: translateX(calc(-100% - 16px));}}@keyframes scroll-y {from {transform: translateY(0);}
to {transform: translateY(calc(-100% - 16px));}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="hero17-container14">
          <div className="hero17-container15">
            <Script
              html={`<style>
        @keyframes scroll-x {from {transform: translateX(0);}
to {transform: translateX(calc(-100% - 16px));}}@keyframes scroll-y {from {transform: translateY(0);}
to {transform: translateY(calc(-100% - 16px));}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="hero17-container16">
          <div className="hero17-container17">
            <Script
              html={`<style>
        @keyframes scroll-x {from {transform: translateX(0);}
to {transform: translateX(calc(-100% - 16px));}}@keyframes scroll-y {from {transform: translateY(0);}
to {transform: translateY(calc(-100% - 16px));}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="hero17-container18">
          <div className="hero17-container19">
            <Script
              html={`<style>
        @keyframes scroll-x {from {transform: translateX(0);}
to {transform: translateX(calc(-100% - 16px));}}@keyframes scroll-y {from {transform: translateY(0);}
to {transform: translateY(calc(-100% - 16px));}}
        </style> `}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero17-header78 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero17-column {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .hero17-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero17-text1 {
            text-align: center;
          }
          .hero17-text2 {
            text-align: center;
          }
          .hero17-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .hero17-row-container {
            width: 100%;
          }
          .hero17-placeholder-image10 {
            width: 709px;
            height: 400px;
          }
          .hero17-placeholder-image11 {
            width: 721px;
            height: 400px;
          }
          .hero17-placeholder-image12 {
            width: 758px;
            height: 400px;
          }
          .hero17-placeholder-image13 {
            width: 696px;
            height: 400px;
          }
          .hero17-placeholder-image14 {
            width: 591px;
            height: 400px;
          }
          .hero17-placeholder-image15 {
            width: 740px;
            height: 400px;
          }
          .hero17-strip2 {
            height: 480px;
          }
          .hero17-placeholder-image16 {
            width: 696px;
            height: 417px;
          }
          .hero17-placeholder-image17 {
            width: 696px;
            height: 417px;
          }
          .hero17-placeholder-image18 {
            width: 696px;
            height: 416px;
          }
          .hero17-placeholder-image19 {
            width: 696px;
            height: 416px;
          }
          .hero17-placeholder-image20 {
            width: 696px;
            height: 418px;
          }
          .hero17-placeholder-image21 {
            width: 696px;
            height: 467px;
          }
          .hero17-container11 {
            display: contents;
          }
          .hero17-container12 {
            display: none;
          }
          .hero17-container13 {
            display: contents;
          }
          .hero17-container14 {
            display: none;
          }
          .hero17-container15 {
            display: contents;
          }
          .hero17-container16 {
            display: none;
          }
          .hero17-container17 {
            display: contents;
          }
          .hero17-container18 {
            display: none;
          }
          .hero17-container19 {
            display: contents;
          }
          .hero17-text3 {
            display: inline-block;
          }
          .hero17-text4 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .hero17-content2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero17.defaultProps = {
  image2Src: '/fischiesniggashaha-1500w.webp',
  content1: undefined,
  heading1: undefined,
  image1Alt: 'Hero Image',
  image4Alt: 'Hero Image',
  image3Alt: 'Hero Image',
  hero17Id: '',
  image2Alt: 'Hero Image',
  image5Alt: 'Hero Image',
  image6Src: '/ps_logo%20(1)-1500w.webp',
  image3Src: '/gaymenintheforest-1500w.webp',
  image6Alt: 'Hero Image',
  image4Src: '/plantsvszombiescamnog-1500w.webp',
  image1Src: '/682dc61ae03c96d31eeb80e4_image_422-1500w.webp',
  image5Src: '/skidsrots-1500w.jpg',
}

Hero17.propTypes = {
  image2Src: PropTypes.string,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  image1Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  hero17Id: PropTypes.string,
  image2Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image3Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image1Src: PropTypes.string,
  image5Src: PropTypes.string,
}

export default Hero17
