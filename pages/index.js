import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Team7 from '../components/team7'
import Footer4 from '../components/footer4'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Variable Courteous Fly</title>
          <meta property="og:title" content="Variable Courteous Fly" />
        </Head>
        <Navbar8
          link1={
            <Fragment>
              <span className="home-text100">#home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text101">#services</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text102">#purchase</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text103">#contact</span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="home-text104">Home</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="home-text105">Services</span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="home-text106">About Us</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="home-text107">Contact</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text108">Get Started</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text109">Contact Us</span>
            </Fragment>
          }
          logoSrc="/niggascripterslogos-1400w.png"
          link1Url="/"
          link3Url="https://firescripts.sell.app"
          page1Description={
            <Fragment>
              <span className="home-text110">Welcome to our Home page</span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="home-text111">Explore our Services</span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="home-text112">Learn more About Us</span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="home-text113">Get in touch with us</span>
            </Fragment>
          }
        ></Navbar8>
        <a href="#steps2" className="home-link1">
          <Hero17
            content1={
              <Fragment>
                <span className="home-text114">
                  Explore the top Roblox scripts made to elevate your game.
                </span>
              </Fragment>
            }
            heading1={
              <Fragment>
                <span className="home-text115">Welcome to Fire Scripts</span>
              </Fragment>
            }
            hero17Id="Hero17"
            image1Src="/682dc61ae03c96d31eeb80e4_image_422-1500w.webp"
            image2Src="/fischiesniggashaha-1500w.webp"
            image3Src="/plantsvszombiescamnog-1500w.webp"
            image4Src="/gaymenintheforest-1500w.webp"
            image7Src="/blackniggacathahahha-200h.webp"
            image8Src="/682dc61ae03c96d31eeb80e4_image_422-1500w.webp"
            className="home-component11"
          ></Hero17>
        </a>
        <Features24
          features24Id="Features24"
          feature1Title={
            <Fragment>
              <span className="home-text116">Premium Scripts</span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text117">Cheap Scripts</span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text118">Top Reviews</span>
            </Fragment>
          }
          feature1ImgSrc="/scriptprewiwuraamma-1400w.png"
          feature1Description={
            <Fragment>
              <span className="home-text119">
                Our scripts have a big variety of features for you to use.
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text120">
                Our scripts are very cheap and also have a free option
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text121">
                We proudly maintain a 5-star rating, with every customer
                satisfied.
              </span>
            </Fragment>
          }
        ></Features24>
        <CTA26
          action1={
            <Fragment>
              <span className="home-text122">Get a Key</span>
            </Fragment>
          }
          cTA26Id="CTA26"
          content1={
            <Fragment>
              <span className="home-text123">
                loadstring(game:HttpGet(&quot;https://raw.githubusercontent.com/Ninja974/Fire-Scripts.github.io/refs/heads/main/loaders/Universal.lua&quot;))()
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text124">Universal Script Loadstring</span>
            </Fragment>
          }
        ></CTA26>
        <Features25
          feature1Title={
            <Fragment>
              <span className="home-text125">Trusted Developers</span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text126">Easy Usage</span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text127">24/7 Support</span>
            </Fragment>
          }
          feature1ImgSrc="/niggascripterslogos-1400w.png"
          feature1Description={
            <Fragment>
              <span className="home-text128">
                Our trusted developers ensure you can script with confidence and
                ease.
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text129">
                Very easy to use and understand
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text130">
                Dedicated support team available round the clock
              </span>
            </Fragment>
          }
        ></Features25>
        <Pricing14
          plan1={
            <Fragment>
              <span className="home-text131">Bronze VIP</span>
            </Fragment>
          }
          plan2={
            <Fragment>
              <span className="home-text132">Silver VIP</span>
            </Fragment>
          }
          plan3={
            <Fragment>
              <span className="home-text133">Gold VIP</span>
            </Fragment>
          }
          plan11={
            <Fragment>
              <span className="home-text134">Basic plan</span>
            </Fragment>
          }
          plan21={
            <Fragment>
              <span className="home-text135">Business plan</span>
            </Fragment>
          }
          plan31={
            <Fragment>
              <span className="home-text136">Enterprise plan</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text137">
                Choose the perfect plan for you
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text138">
                <span>
                  Enjoy exclusive benefits with our subscription and unlock more
                  than just a key.
                </span>
                <br></br>
                <span>
                  Make sure to visit the store, to see the full description for
                  each Plan.
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text143">Fire Scripts Subscribtion</span>
            </Fragment>
          }
          plan1Price={
            <Fragment>
              <span className="home-text144">$1.99/month</span>
            </Fragment>
          }
          plan2Price={
            <Fragment>
              <span className="home-text145">$3.49/month</span>
            </Fragment>
          }
          plan3Price={
            <Fragment>
              <span className="home-text146">$4.99/month</span>
            </Fragment>
          }
          plan1Action={
            <Fragment>
              <span className="home-text147">Subscribe</span>
            </Fragment>
          }
          plan1Price1={
            <Fragment>
              <span className="home-text148">$200/yr</span>
            </Fragment>
          }
          plan2Action={
            <Fragment>
              <span className="home-text149">Subscribe</span>
            </Fragment>
          }
          plan2Price1={
            <Fragment>
              <span className="home-text150">$299/yr</span>
            </Fragment>
          }
          plan3Action={
            <Fragment>
              <span className="home-text151">Subscribe</span>
            </Fragment>
          }
          plan3Price1={
            <Fragment>
              <span className="home-text152">$499/yr</span>
            </Fragment>
          }
          plan1Action1={
            <Fragment>
              <span className="home-text153">Get started</span>
            </Fragment>
          }
          plan1Yearly1={
            <Fragment>
              <span className="home-text154">or $20 monthly</span>
            </Fragment>
          }
          plan2Action1={
            <Fragment>
              <span className="home-text155">Get started</span>
            </Fragment>
          }
          plan2Yearly1={
            <Fragment>
              <span className="home-text156">or $29 monthly</span>
            </Fragment>
          }
          plan3Action1={
            <Fragment>
              <span className="home-text157">Get started</span>
            </Fragment>
          }
          plan3Yearly1={
            <Fragment>
              <span className="home-text158">or $49 monthly</span>
            </Fragment>
          }
          plan1Feature1={
            <Fragment>
              <span className="home-text159">2 Week Premium Key</span>
            </Fragment>
          }
          plan1Feature2={
            <Fragment>
              <span className="home-text160">Early Access To All Scripts</span>
            </Fragment>
          }
          plan1Feature3={
            <Fragment>
              <span className="home-text161">
                Extra Features In Our Discord
              </span>
            </Fragment>
          }
          plan2Feature1={
            <Fragment>
              <span className="home-text162">1 Month Premium Key</span>
            </Fragment>
          }
          plan2Feature2={
            <Fragment>
              <span className="home-text163">
                10% Discount On Everything In The Shop
              </span>
            </Fragment>
          }
          plan2Feature3={
            <Fragment>
              <span className="home-text164">Early Access To All Scripts</span>
            </Fragment>
          }
          plan2Feature4={
            <Fragment>
              <span className="home-text165">
                Extra Features In Our Discord
              </span>
            </Fragment>
          }
          plan3Feature1={
            <Fragment>
              <span className="home-text166">2 Month Premium Key</span>
            </Fragment>
          }
          plan3Feature2={
            <Fragment>
              <span className="home-text167">
                20% Discount On Everything in The Shop
              </span>
            </Fragment>
          }
          plan3Feature3={
            <Fragment>
              <span className="home-text168">Early Access to All Scripts</span>
            </Fragment>
          }
          plan3Feature4={
            <Fragment>
              <span className="home-text169">2x Chance To Win Giveaways</span>
            </Fragment>
          }
          plan3Feature5={
            <Fragment>
              <span className="home-text170">
                Extra Features In Our Discord
              </span>
            </Fragment>
          }
          plan1Feature11={
            <Fragment>
              <span className="home-text171">Feature text goes here</span>
            </Fragment>
          }
          plan1Feature21={
            <Fragment>
              <span className="home-text172">Feature text goes here</span>
            </Fragment>
          }
          plan1Feature31={
            <Fragment>
              <span className="home-text173">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature11={
            <Fragment>
              <span className="home-text174">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature21={
            <Fragment>
              <span className="home-text175">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature31={
            <Fragment>
              <span className="home-text176">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature41={
            <Fragment>
              <span className="home-text177">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature11={
            <Fragment>
              <span className="home-text178">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature21={
            <Fragment>
              <span className="home-text179">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature31={
            <Fragment>
              <span className="home-text180">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature41={
            <Fragment>
              <span className="home-text181">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature51={
            <Fragment>
              <span className="home-text182">Feature text goes here</span>
            </Fragment>
          }
        ></Pricing14>
        <a href="#CTA26" className="home-link2">
          <Steps2
            steps2Id="Steps2"
            step1Title={
              <Fragment>
                <span className="home-text183">Execute The Script</span>
              </Fragment>
            }
            step2Title={
              <Fragment>
                <span className="home-text184">Get A Key</span>
              </Fragment>
            }
            step3Title={
              <Fragment>
                <span className="home-text185">Enter The key</span>
              </Fragment>
            }
            step4Title={
              <Fragment>
                <span className="home-text186">Enjoy</span>
              </Fragment>
            }
            step1Description={
              <Fragment>
                <span className="home-text187">
                  Scroll down to find the loadstring.
                </span>
              </Fragment>
            }
            step2Description={
              <Fragment>
                <span className="home-text188">
                  Buy a key from our store, or get a free one from one of the
                  key systems below.
                </span>
              </Fragment>
            }
            step3Description={
              <Fragment>
                <span className="home-text189">
                  Enter the key in the verification tab that opens, once you
                  execute the script.
                </span>
              </Fragment>
            }
            step4Description={
              <Fragment>
                <span className="home-text190">
                  Unlock the script and enjoy a ton of features.
                </span>
              </Fragment>
            }
            className="home-component16"
          ></Steps2>
        </a>
        <Testimonial17
          review1={
            <Fragment>
              <span className="home-text191">
                I vouch for Ninja and Flawless legit, fast, BEST customer
                service nicest people I&apos;ve ever met
              </span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="home-text192">
                i vouch for Ninja 100% legit and w customer service as well as
                staff Flawless 🔥
              </span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="home-text193">
                I vouch for Ninja and Flawless. They are legit, dont scam and
                have fair and good customer service and are kinda dumb and smart
                😂
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="home-text194">
                I vouch for Ninja, he&apos;s the most reliable seller I know
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text195">
                Below, you can find our top reviews from our customers.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text196">Reviews</span>
            </Fragment>
          }
          author1Src="/moonhahaha-200h.webp"
          author2Src="/wtfnoobscum-200h.webp"
          author3Src="/nightbub.png-200h.gif"
          author4Src="/gayniggqs-200h.webp"
          author1Name={
            <Fragment>
              <span className="home-text197">Moon</span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text198">G5</span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text199">Nightbubi</span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="home-text200">Harper</span>
            </Fragment>
          }
          author1Position={
            <Fragment>
              <span className="home-text201">Discord Member</span>
            </Fragment>
          }
          author2Position={
            <Fragment>
              <span className="home-text202">Discord Member</span>
            </Fragment>
          }
          author3Position={
            <Fragment>
              <span className="home-text203">Discord Member</span>
            </Fragment>
          }
          author4Position={
            <Fragment>
              <span className="home-text204">Discord Member</span>
            </Fragment>
          }
        ></Testimonial17>
        <Contact10
          content1={
            <Fragment>
              <span className="home-text205">
                As of right now, we have scripts for the following Roblox games:
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text206">Scripts</span>
            </Fragment>
          }
          location1={
            <Fragment>
              <span className="home-text207">Project Slayers</span>
            </Fragment>
          }
          location2={
            <Fragment>
              <span className="home-text208">Grow a Garden</span>
            </Fragment>
          }
          location1ImageSrc="/ps_logo%20(1)-1400w.webp"
          location2ImageSrc="/682dc61ae03c96d31eeb80e4_image_422-1500w.webp"
          location1Description={
            <Fragment>
              <span className="home-text209">Recently Updated</span>
            </Fragment>
          }
          location2Description={
            <Fragment>
              <span className="home-text210">
                <span>Recently Updated</span>
                <br></br>
              </span>
            </Fragment>
          }
        ></Contact10>
        <Team7
          member1={
            <Fragment>
              <span className="home-text213">Ninja</span>
            </Fragment>
          }
          member2={
            <Fragment>
              <span className="home-text214">Flawless</span>
            </Fragment>
          }
          member3={
            <Fragment>
              <span className="home-text215">Nightbubi</span>
            </Fragment>
          }
          member4={
            <Fragment>
              <span className="home-text216">deus</span>
            </Fragment>
          }
          member5={
            <Fragment>
              <span className="home-text217">IA</span>
            </Fragment>
          }
          member6={
            <Fragment>
              <span className="home-text218">???</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text219">
                Our team is dedicated to providing top-notch service and support
                to help you maximize productivity.
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text220">
                For support join our discord server at: discord.gg/firescipts
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text221">Meet Our Team</span>
            </Fragment>
          }
          member1Job={
            <Fragment>
              <span className="home-text222">Onwer</span>
            </Fragment>
          }
          member1Src="/gayninjiminji-1400w.webp"
          member2Job={
            <Fragment>
              <span className="home-text223">Community Manager</span>
            </Fragment>
          }
          member2Src="/flawlessyahahahhadaddy-1400w.png"
          member3Job={
            <Fragment>
              <span className="home-text224">Head Moderator</span>
            </Fragment>
          }
          member3Src="/nightbub.png-200h.gif"
          member4Job={
            <Fragment>
              <span className="home-text225">Trial Moderator</span>
            </Fragment>
          }
          member4Src="/fakebaszuckiniggas-1400w.webp"
          member5Job={
            <Fragment>
              <span className="home-text226">Trial Support</span>
            </Fragment>
          }
          member5Src="/blackniggacathahahha-200h.webp"
          member6Job={
            <Fragment>
              <span className="home-text227">???</span>
            </Fragment>
          }
          member1Content={
            <Fragment>
              <span className="home-text228">
                Ninja is the founder behind our company, driving innovation and
                growth.
              </span>
            </Fragment>
          }
          member2Content={
            <Fragment>
              <span className="home-text229">
                Flawless develops the scripts along side Ninja and also manages
                the entire Fire Scripts Community
              </span>
            </Fragment>
          }
          member3Content={
            <Fragment>
              <span className="home-text230">
                Nightubi moderates our Discord server to ensure a safe place for
                everyone.
              </span>
            </Fragment>
          }
          member4Content={
            <Fragment>
              <span className="home-text231">
                deus moderates our Discord server along side Nightbubi.
              </span>
            </Fragment>
          }
          member5Content={
            <Fragment>
              <span className="home-text232">
                IA helps users with problems through our ticket system.
              </span>
            </Fragment>
          }
          member6Content={
            <Fragment>
              <span className="home-text233">
                This staff member decided not to be shown here.
              </span>
            </Fragment>
          }
        ></Team7>
        <Link href="/contact">
          <a className="home-link3">
            <Footer4
              link4={
                <Fragment>
                  <span className="home-text234">Contact Us</span>
                </Fragment>
              }
              className="home-component20"
            ></Footer4>
          </a>
        </Link>
        <a href="https://play.teleporthq.io/signup" className="home-link4">
          <div aria-label="Sign up to TeleportHQ" className="home-container2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="home-icon1"
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
            <span className="home-text235">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text100 {
            display: inline-block;
          }
          .home-text101 {
            display: inline-block;
          }
          .home-text102 {
            display: inline-block;
          }
          .home-text103 {
            display: inline-block;
          }
          .home-text104 {
            display: inline-block;
          }
          .home-text105 {
            display: inline-block;
          }
          .home-text106 {
            display: inline-block;
          }
          .home-text107 {
            display: inline-block;
          }
          .home-text108 {
            display: inline-block;
          }
          .home-text109 {
            display: inline-block;
          }
          .home-text110 {
            display: inline-block;
          }
          .home-text111 {
            display: inline-block;
          }
          .home-text112 {
            display: inline-block;
          }
          .home-text113 {
            display: inline-block;
          }
          .home-link1 {
            display: contents;
          }
          .home-component11 {
            text-decoration: none;
          }
          .home-text114 {
            display: inline-block;
          }
          .home-text115 {
            display: inline-block;
          }
          .home-text116 {
            display: inline-block;
          }
          .home-text117 {
            display: inline-block;
          }
          .home-text118 {
            display: inline-block;
          }
          .home-text119 {
            display: inline-block;
          }
          .home-text120 {
            display: inline-block;
          }
          .home-text121 {
            display: inline-block;
          }
          .home-text122 {
            display: inline-block;
          }
          .home-text123 {
            display: inline-block;
          }
          .home-text124 {
            display: inline-block;
          }
          .home-text125 {
            display: inline-block;
          }
          .home-text126 {
            display: inline-block;
          }
          .home-text127 {
            display: inline-block;
          }
          .home-text128 {
            display: inline-block;
          }
          .home-text129 {
            display: inline-block;
          }
          .home-text130 {
            display: inline-block;
          }
          .home-text131 {
            display: inline-block;
          }
          .home-text132 {
            display: inline-block;
          }
          .home-text133 {
            display: inline-block;
          }
          .home-text134 {
            display: inline-block;
          }
          .home-text135 {
            display: inline-block;
          }
          .home-text136 {
            display: inline-block;
          }
          .home-text137 {
            display: inline-block;
          }
          .home-text138 {
            display: inline-block;
          }
          .home-text143 {
            display: inline-block;
          }
          .home-text144 {
            display: inline-block;
          }
          .home-text145 {
            display: inline-block;
          }
          .home-text146 {
            display: inline-block;
          }
          .home-text147 {
            display: inline-block;
          }
          .home-text148 {
            display: inline-block;
          }
          .home-text149 {
            display: inline-block;
          }
          .home-text150 {
            display: inline-block;
          }
          .home-text151 {
            display: inline-block;
          }
          .home-text152 {
            display: inline-block;
          }
          .home-text153 {
            display: inline-block;
          }
          .home-text154 {
            display: inline-block;
          }
          .home-text155 {
            display: inline-block;
          }
          .home-text156 {
            display: inline-block;
          }
          .home-text157 {
            display: inline-block;
          }
          .home-text158 {
            display: inline-block;
          }
          .home-text159 {
            display: inline-block;
          }
          .home-text160 {
            display: inline-block;
          }
          .home-text161 {
            display: inline-block;
          }
          .home-text162 {
            display: inline-block;
          }
          .home-text163 {
            display: inline-block;
          }
          .home-text164 {
            display: inline-block;
          }
          .home-text165 {
            display: inline-block;
          }
          .home-text166 {
            display: inline-block;
          }
          .home-text167 {
            display: inline-block;
          }
          .home-text168 {
            display: inline-block;
          }
          .home-text169 {
            display: inline-block;
          }
          .home-text170 {
            display: inline-block;
          }
          .home-text171 {
            display: inline-block;
          }
          .home-text172 {
            display: inline-block;
          }
          .home-text173 {
            display: inline-block;
          }
          .home-text174 {
            display: inline-block;
          }
          .home-text175 {
            display: inline-block;
          }
          .home-text176 {
            display: inline-block;
          }
          .home-text177 {
            display: inline-block;
          }
          .home-text178 {
            display: inline-block;
          }
          .home-text179 {
            display: inline-block;
          }
          .home-text180 {
            display: inline-block;
          }
          .home-text181 {
            display: inline-block;
          }
          .home-text182 {
            display: inline-block;
          }
          .home-link2 {
            display: contents;
          }
          .home-component16 {
            text-decoration: none;
          }
          .home-text183 {
            display: inline-block;
          }
          .home-text184 {
            display: inline-block;
          }
          .home-text185 {
            display: inline-block;
          }
          .home-text186 {
            display: inline-block;
          }
          .home-text187 {
            display: inline-block;
          }
          .home-text188 {
            display: inline-block;
          }
          .home-text189 {
            display: inline-block;
          }
          .home-text190 {
            display: inline-block;
          }
          .home-text191 {
            display: inline-block;
          }
          .home-text192 {
            display: inline-block;
          }
          .home-text193 {
            display: inline-block;
          }
          .home-text194 {
            display: inline-block;
          }
          .home-text195 {
            display: inline-block;
          }
          .home-text196 {
            display: inline-block;
          }
          .home-text197 {
            display: inline-block;
          }
          .home-text198 {
            display: inline-block;
          }
          .home-text199 {
            display: inline-block;
          }
          .home-text200 {
            display: inline-block;
          }
          .home-text201 {
            display: inline-block;
          }
          .home-text202 {
            display: inline-block;
          }
          .home-text203 {
            display: inline-block;
          }
          .home-text204 {
            display: inline-block;
          }
          .home-text205 {
            display: inline-block;
          }
          .home-text206 {
            display: inline-block;
          }
          .home-text207 {
            display: inline-block;
          }
          .home-text208 {
            display: inline-block;
          }
          .home-text209 {
            display: inline-block;
          }
          .home-text210 {
            display: inline-block;
          }
          .home-text213 {
            display: inline-block;
          }
          .home-text214 {
            display: inline-block;
          }
          .home-text215 {
            display: inline-block;
          }
          .home-text216 {
            display: inline-block;
          }
          .home-text217 {
            display: inline-block;
          }
          .home-text218 {
            display: inline-block;
          }
          .home-text219 {
            display: inline-block;
          }
          .home-text220 {
            display: inline-block;
          }
          .home-text221 {
            display: inline-block;
          }
          .home-text222 {
            display: inline-block;
          }
          .home-text223 {
            display: inline-block;
          }
          .home-text224 {
            display: inline-block;
          }
          .home-text225 {
            display: inline-block;
          }
          .home-text226 {
            display: inline-block;
          }
          .home-text227 {
            display: inline-block;
          }
          .home-text228 {
            display: inline-block;
          }
          .home-text229 {
            display: inline-block;
          }
          .home-text230 {
            display: inline-block;
          }
          .home-text231 {
            display: inline-block;
          }
          .home-text232 {
            display: inline-block;
          }
          .home-text233 {
            display: inline-block;
          }
          .home-link3 {
            display: contents;
          }
          .home-component20 {
            text-decoration: none;
          }
          .home-text234 {
            display: inline-block;
          }
          .home-link4 {
            display: contents;
          }
          .home-container2 {
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
          .home-icon1 {
            width: 24px;
            margin-right: 4px;
          }
          .home-text235 {
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

export default Home
