import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Features6 from '../components/features6'

const Page = (props) => {
  return (
    <>
      <div className="page-container1">
        <Head>
          <title>Page - Variable Courteous Fly</title>
          <meta property="og:title" content="Page - Variable Courteous Fly" />
        </Head>
        <Features6
          mainAction={
            <Fragment>
              <span className="page-text1">Work.ink Key</span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page-text2">Key System</span>
            </Fragment>
          }
          featureImageSrc="/luarmorlogo-1400w.jpeg"
          secondaryAction={
            <Fragment>
              <span className="page-text3">Linkvertise Key</span>
            </Fragment>
          }
          featureDescription={
            <Fragment>
              <span className="page-text4">
                Accessing our scripts requires a key, which you can obtain
                through our key system or by purchasing a Premium Key from our
                shop.
              </span>
            </Fragment>
          }
        ></Features6>
        <a href="https://play.teleporthq.io/signup" className="page-link">
          <div aria-label="Sign up to TeleportHQ" className="page-container2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="page-icon1"
            >
              <path
                d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
                fill="#B23ADE"
              ></path>
              <path
                d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
                fill="#FF5C5C"
              ></path>
              <path
                d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
                fill="#2874DE"
              ></path>
            </svg>
            <span className="page-text5">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .page-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page-text1 {
            display: inline-block;
          }
          .page-text2 {
            display: inline-block;
          }
          .page-text3 {
            display: inline-block;
          }
          .page-text4 {
            display: inline-block;
          }
          .page-link {
            display: contents;
          }
          .page-container2 {
            right: 50px;
            border: 1px solid #ffffff5c;
            bottom: 30px;
            display: flex;
            z-index: 22;
            position: fixed;
            box-shadow: 5px 5px 10px 0px rgba(31, 31, 31, 0.4);
            min-height: auto;
            align-items: center;
            padding-top: 8px;
            padding-left: 12px;
            border-radius: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            backdrop-filter: blur(6px);
            background-color: rgba(41, 41, 41, 0.41);
          }
          .page-icon1 {
            width: 24px;
            margin-right: 4px;
          }
          .page-text5 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
        `}
      </style>
    </>
  )
}

export default Page
