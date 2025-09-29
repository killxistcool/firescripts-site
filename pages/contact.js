import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar8 from '../components/navbar8'
import Contact14 from '../components/contact14'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container1">
        <Head>
          <title>Contact - Variable Courteous Fly</title>
          <meta
            property="og:title"
            content="Contact - Variable Courteous Fly"
          />
        </Head>
        <Link href="/">
          <a className="contact-link1">
            <Navbar8
              link1={
                <Fragment>
                  <span className="contact-text10">#home</span>
                </Fragment>
              }
              link2={
                <Fragment>
                  <span className="contact-text11">#services</span>
                </Fragment>
              }
              link3={
                <Fragment>
                  <span className="contact-text12">#purchase</span>
                </Fragment>
              }
              link4={
                <Fragment>
                  <span className="contact-text13">#contact</span>
                </Fragment>
              }
              page1={
                <Fragment>
                  <span className="contact-text14">Home</span>
                </Fragment>
              }
              page2={
                <Fragment>
                  <span className="contact-text15">Services</span>
                </Fragment>
              }
              page3={
                <Fragment>
                  <span className="contact-text16">About Us</span>
                </Fragment>
              }
              page4={
                <Fragment>
                  <span className="contact-text17">Contact</span>
                </Fragment>
              }
              action1={
                <Fragment>
                  <span className="contact-text18">Get Started</span>
                </Fragment>
              }
              action2={
                <Fragment>
                  <span className="contact-text19">Contact Us</span>
                </Fragment>
              }
              logoSrc="/niggascripterslogos-1500h.png"
              link1Url="/"
              link3Url="https://firescripts.sell.app"
              page1Description={
                <Fragment>
                  <span className="contact-text20">
                    Welcome to our Home page
                  </span>
                </Fragment>
              }
              page2Description={
                <Fragment>
                  <span className="contact-text21">Explore our Services</span>
                </Fragment>
              }
              page3Description={
                <Fragment>
                  <span className="contact-text22">Learn more About Us</span>
                </Fragment>
              }
              page4Description={
                <Fragment>
                  <span className="contact-text23">Get in touch with us</span>
                </Fragment>
              }
              className="contact-component1"
            ></Navbar8>
          </a>
        </Link>
        <Contact14
          email1={
            <Fragment>
              <span className="contact-text24">
                flawlesspurpleman@gmail.com
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="contact-text25">
                We are here to assist you. Reach out to us for any inquiries or
                support.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="contact-text26">Contact Us</span>
            </Fragment>
          }
        ></Contact14>
        <a href="https://play.teleporthq.io/signup" className="contact-link2">
          <div
            aria-label="Sign up to TeleportHQ"
            className="contact-container2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="contact-icon1"
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
            <span className="contact-text27">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .contact-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .contact-link1 {
            display: contents;
          }
          .contact-component1 {
            text-decoration: none;
          }
          .contact-text10 {
            display: inline-block;
          }
          .contact-text11 {
            display: inline-block;
          }
          .contact-text12 {
            display: inline-block;
          }
          .contact-text13 {
            display: inline-block;
          }
          .contact-text14 {
            display: inline-block;
          }
          .contact-text15 {
            display: inline-block;
          }
          .contact-text16 {
            display: inline-block;
          }
          .contact-text17 {
            display: inline-block;
          }
          .contact-text18 {
            display: inline-block;
          }
          .contact-text19 {
            display: inline-block;
          }
          .contact-text20 {
            display: inline-block;
          }
          .contact-text21 {
            display: inline-block;
          }
          .contact-text22 {
            display: inline-block;
          }
          .contact-text23 {
            display: inline-block;
          }
          .contact-text24 {
            display: inline-block;
          }
          .contact-text25 {
            display: inline-block;
          }
          .contact-text26 {
            display: inline-block;
          }
          .contact-link2 {
            display: contents;
          }
          .contact-container2 {
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
          .contact-icon1 {
            width: 24px;
            margin-right: 4px;
          }
          .contact-text27 {
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

export default Contact
