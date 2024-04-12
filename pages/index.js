import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import SectionHeading from '../components/section-heading'
import BestSeller from '../components/best-seller'
import ItemCard from '../components/item-card'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>STARBUKS KERALA - HOME</title>
          <meta property="og:title" content="STARBUKS KERALA - HOME" />
        </Head>
        <div className="home-navbar">
          <header
            data-role="Header"
            className="home-header max-width-container"
          >
            <Link href="/">
              <a>
                <img
                  alt="image"
                  src="/starbucks-logo-png-200w.png"
                  className="home-image"
                />
              </a>
            </Link>
            <div className="home-navbar1">
              <div className="home-container01"></div>
              <input
                type="text"
                placeholder="search"
                className="home-textinput input"
              />
              <div className="home-middle">
                <div className="home-left">
                  <Link href="/">
                    <a className="home-link1 navbar-link">HOME</a>
                  </Link>
                  <span className="navbar-link">GIFT</span>
                  <span className="navbar-link">ORDER</span>
                  <span className="navbar-link">PAY</span>
                  <span className="navbar-link">
                    <span>STORE</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home-icons">
                <img
                  alt="iconsbxscart3271299"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTIxLjgyMiA3LjQzMUMyMS42MzUgNy4xNjEgMjEuMzI4IDcgMjEgN0g3LjMzM0w2LjE3OSA0LjIzQzUuODY3IDMuNDgyIDUuMTQzIDMgNC4zMzMgM0gyVjVINC4zMzNMOS4wNzcgMTYuMzg1QzkuMjMyIDE2Ljc1NyA5LjU5NiAxNyAxMCAxN0gxOEMxOC40MTcgMTcgMTguNzkgMTYuNzQxIDE4LjkzNyAxNi4zNTJMMjEuOTM3IDguMzUyQzIyLjA1MiA4LjA0NCAyMi4wMDkgNy43IDIxLjgyMiA3LjQzMVonIGZpbGw9JyMxNjE2MTYnLz4KPHBhdGggZD0nTTEwLjUgMjFDMTEuMzI4NCAyMSAxMiAyMC4zMjg0IDEyIDE5LjVDMTIgMTguNjcxNiAxMS4zMjg0IDE4IDEwLjUgMThDOS42NzE1NyAxOCA5IDE4LjY3MTYgOSAxOS41QzkgMjAuMzI4NCA5LjY3MTU3IDIxIDEwLjUgMjFaJyBmaWxsPScjMTYxNjE2Jy8+CjxwYXRoIGQ9J00xNy41IDIxQzE4LjMyODQgMjEgMTkgMjAuMzI4NCAxOSAxOS41QzE5IDE4LjY3MTYgMTguMzI4NCAxOCAxNy41IDE4QzE2LjY3MTYgMTggMTYgMTguNjcxNiAxNiAxOS41QzE2IDIwLjMyODQgMTYuNjcxNiAyMSAxNy41IDIxWicgZmlsbD0nIzE2MTYxNicvPgo8L3N2Zz4K"
                  className="home-image1"
                />
                <img
                  alt="iconsbxsheartcircle3271300"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40ODYgMiAyIDYuNDg2IDIgMTJDMiAxNy41MTQgNi40ODYgMjIgMTIgMjJDMTcuNTE0IDIyIDIyIDE3LjUxNCAyMiAxMkMyMiA2LjQ4NiAxNy41MTQgMiAxMiAyWk0xNi4xODYgMTIuNzRMMTIgMTYuOTI2TDcuODE0IDEyLjc0QzYuNzI1IDExLjY1MiA2LjcyNSA5LjkyNyA3LjgxNCA4LjgzM0M4LjkwOCA3Ljc0NSAxMC42MzIgNy43NDUgMTEuNzIgOC44MzNMMTIgOS4xMTJMMTIuMjc5IDguODMzQzEzLjM2NyA3Ljc0NSAxNS4wOTIgNy43NDUgMTYuMTg1IDguODMzQzE3LjI3NCA5LjkyNyAxNy4yNzQgMTEuNjUxIDE2LjE4NiAxMi43NFonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg=="
                  className="home-image2"
                />
                <Link href="/dashboard">
                  <a className="home-link2">
                    <img
                      alt="AccountCircle3271301"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyQzIgMTcuNTIgNi40OCAyMiAxMiAyMkMxNy41MiAyMiAyMiAxNy41MiAyMiAxMkMyMiA2LjQ4IDE3LjUyIDIgMTIgMlpNMTIgNUMxMy42NiA1IDE1IDYuMzQgMTUgOEMxNSA5LjY2IDEzLjY2IDExIDEyIDExQzEwLjM0IDExIDkgOS42NiA5IDhDOSA2LjM0IDEwLjM0IDUgMTIgNVpNMTIgMTkuMkM5LjUgMTkuMiA3LjI5IDE3LjkyIDYgMTUuOThDNi4wMyAxMy45OSAxMCAxMi45IDEyIDEyLjlDMTMuOTkgMTIuOSAxNy45NyAxMy45OSAxOCAxNS45OEMxNi43MSAxNy45MiAxNC41IDE5LjIgMTIgMTkuMlonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg=="
                      className="home-image3"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div data-role="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-role="MobileMenu" className="home-mobile-menu">
              <div className="home-nav">
                <div className="home-container02">
                  <span className="home-logo-center">MOBILLIO</span>
                  <div
                    data-role="CloseMobileMenu"
                    className="home-close-mobile-menu"
                  >
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <div className="home-middle1">
                  <span className="home-text07">SHOP</span>
                  <span className="home-text08">LOOKBOOK</span>
                  <span className="home-text09">SPECIAL</span>
                  <span className="home-text10">ABOUT</span>
                  <span className="home-text11">BLOG</span>
                  <span className="home-text12">CONTACT</span>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div className="home-main">
          <div className="home-hero section-container">
            <div className="home-max-width max-width-container">
              <div className="home-hero1">
                <div className="home-container03">
                  <div className="home-info">
                    <img
                      alt="Rectangle43271305"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMicgaGVpZ2h0PSc1Micgdmlld0JveD0nMCAwIDIgNTInIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxyZWN0IHdpZHRoPScyJyBoZWlnaHQ9JzUyJyBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScwLjUnLz4KPC9zdmc+Cg=="
                      className="home-image4"
                    />
                    <span className="home-text13">
                      <span>SPEACIAL</span>
                      <br></br>
                      <span className="home-text16">OFFER</span>
                    </span>
                  </div>
                  <h1 className="home-text17 Heading-1">AVIL MILK CLASSIC</h1>
                  <div className="home-container04">
                    <span className="home-text18">FROM</span>
                    <span className="home-text19">$12</span>
                  </div>
                  <div className="home-btn-group">
                    <button className="home-button button">ORDER NOW</button>
                  </div>
                </div>
                <img
                  alt="image23271449"
                  src="/1000111337-500w.png"
                  className="home-image5"
                />
              </div>
            </div>
          </div>
          <div className="section-container column">
            <div className="home-max-width1 max-width-container">
              <SectionHeading
                heading="OUR BESTSELLERS"
                subtitle="Shop from our bestsellers list. The items most tastebuds love &lt;3"
              ></SectionHeading>
              <div className="home-cards-container">
                <BestSeller
                  categoryImg="/1000111356-1500w.png"
                  rootClassName="best-seller-root-class-name"
                ></BestSeller>
                <BestSeller
                  name="PAZHAM PORI"
                  categoryImg="/96a15c50e24a41c7e2e799422362aa48-1500w.jpg"
                  rootClassName="best-seller-root-class-name1"
                ></BestSeller>
                <BestSeller
                  name="PARIPPU VADA"
                  categoryImg="/d207474fb495466e25b2ee6923258bb3-1500w.jpg"
                ></BestSeller>
                <BestSeller
                  name="NEYYAPPAM"
                  categoryImg="/215d8e035970d56a04751405eeab67d5-1500w.jpg"
                ></BestSeller>
                <BestSeller
                  name="VANILLA LATTE"
                  categoryImg="/ef5e6c1e2eeaba5bffe38bd9223ab6c3-1500w.jpg"
                ></BestSeller>
                <BestSeller
                  name="PAAL SARBATH"
                  categoryImg="/picsart_24-04-06_17-43-18-856-1500w.jpg"
                ></BestSeller>
                <BestSeller
                  name="SAMOSA"
                  categoryImg="/f953748e4f7902878557195df301a227-1500w.jpg"
                ></BestSeller>
              </div>
            </div>
            <div className="home-banner"></div>
            <div className="home-container05 max-width-container">
              <div className="home-container06">
                <span className="home-text20">
                  *From 3/17-4/8, enjoy $4 off your Starbucks order of $20 or
                  more through the DoorDash app, excluding taxes and fees. Offer
                  valid for four (4) redemption per customer. Restrictions and
                  other taxes/fees/gratuity still apply. See DoorDash app for
                  details and location availability. Fees subject to change.
                  Menu limited. Restricted delivery area. Available at
                  participating locations only. All deliveries subject to
                  availability. Must have or create a valid DoorDash account
                  with valid form of accepted payment on file. No cash value.
                  Non-transferable. Your delivery order may be limited in any
                  one transaction to one hundred dollars ($100) before taxes,
                  tip, and fees. We may adjust this limit at any time at our
                  discretion. Prices for Starbucks® items purchased through
                  DoorDash may be higher than as marked or posted in stores. May
                  not be combined with other offers, discounts, or promotions.
                  See DoorDash terms and conditions at
                  help.doordash.com/consumers/s/article/offer-terms-conditions.
                </span>
                <img
                  alt="M3271427"
                  src="/starbucks-logo-png-200w.png"
                  className="home-svg"
                />
              </div>
            </div>
          </div>
          <div className="section-container">
            <div className="max-width-container">
              <SectionHeading
                heading="NOW TRENDING"
                subtitle="Explore our latest trending products."
              ></SectionHeading>
              <div className="home-gallery">
                <div className="home-left1">
                  <ItemCard
                    name="Samosa and chutney"
                    value="5"
                    imageSrc="/79e1eea4361f31fd5f31d0280a2e5a04-1500w.jpg"
                    rootClassName="rootClassName4"
                  ></ItemCard>
                </div>
                <div className="home-right">
                  <div className="home-top">
                    <div className="home-left2">
                      <ItemCard
                        name="Coconut dessert bars"
                        value="2"
                        imageSrc="/e3d05ed667ca3f9d29b8762b1bd9a94f-1500w.jpg"
                        rootClassName="rootClassName2"
                      ></ItemCard>
                    </div>
                    <div className="home-right1">
                      <ItemCard
                        name="Chicken cheese puffs"
                        value="4"
                        imageSrc="/8786e40517531ef5d430a689dc4139b3-1500w.jpg"
                        rootClassName="rootClassName3"
                      ></ItemCard>
                    </div>
                  </div>
                  <div className="home-bottom">
                    <div className="home-left3">
                      <ItemCard
                        name="Sharjah shake"
                        value="8"
                        imageSrc="/4c9fb9abc840994914e4d5b611135be8-1500w.jpg"
                        rootClassName="item-card-root-class-name1"
                      ></ItemCard>
                    </div>
                    <div className="home-right2">
                      <ItemCard
                        name="Sulaimani tea"
                        value="5"
                        imageSrc="/343665d7b25726f8fe933d4d3337aac6-1500w.jpg"
                        rootClassName="item-card-root-class-name6"
                      ></ItemCard>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-full-width-banner section-container">
            <div className="home-left4">
              <div className="home-content">
                <span className="home-text21">
                  <span className="home-text22">LIMITED TIME OFFER </span>
                  <br></br>
                </span>
                <span className="home-text24">
                  Get CARAMEL, JAVA CHIP AND VANILLA BEAN FOR $33
                </span>
              </div>
              <div className="home-btn button">
                <span className="home-text25">
                  <span>ORDER NOW</span>
                  <br></br>
                </span>
              </div>
            </div>
            <img
              alt="Rectangle13271410"
              src="/17fd2789f06c1bb528b6d0a876522319-1500w.jpg"
              className="home-image6"
            />
          </div>
          <div className="home-blog section-container"></div>
        </div>
        <div className="home-footer">
          <div className="home-max-width3 max-width-container">
            <footer className="home-footer1">
              <div className="home-container07">
                <h3 className="home-text28">
                  <span className="Heading-3">STARBUCKS KERALA</span>
                  <br></br>
                </h3>
                <span className="home-text31">
                  <span>ALANALLUR, PALAKKAD, KERALA</span>
                  <br></br>
                </span>
                <span className="home-text34">
                  <span>+91 8129984737</span>
                  <br></br>
                </span>
                <span className="home-text37">contact@starbuckskerala.com</span>
              </div>
              <div className="home-container08">
                <span className="home-text38">Company</span>
                <span className="home-text39">Shop</span>
                <span className="home-text40">Lookbook</span>
                <span className="home-text41">Specials</span>
                <span className="home-text42">About</span>
                <span className="home-text43"></span>
              </div>
              <div className="home-container09">
                <span className="home-text44">Resources</span>
                <span className="home-text45">Contact us</span>
                <span className="home-text46">Order</span>
                <span className="home-text47">Track your order</span>
                <span className="home-text48">Shipping &amp; Delivery</span>
              </div>
              <div className="home-links-container"></div>
            </footer>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            padding-top: 70px;
            flex-direction: column;
          }
          .home-navbar {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 1000;
            position: fixed;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-pallet-green);
          }
          .home-header {
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .home-image {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            text-decoration: none;
          }
          .home-navbar1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: space-between;
          }
          .home-container01 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-textinput {
            color: #4c4545;
            width: 100%;
            max-width: var(--dl-size-size-xxlarge);
            transition: 0.3s;
            border-color: var(--dl-color-gray-700);
            border-width: 1px;
            padding-left: var(--dl-space-space-threeunits);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-textinput:hover {
            border-color: var(--dl-color-pallet-yellow);
          }
          .home-middle {
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: center;
            flex-shrink: 1;
            border-color: transparent;
            justify-content: center;
          }
          .home-left {
            display: flex;
            grid-gap: 45px;
            position: relative;
            align-items: flex-start;
          }
          .home-link1 {
            text-decoration: none;
          }
          .home-icons {
            display: flex;
          }
          .home-image1 {
            width: 24px;
            height: 24px;
            margin: 0 24px 0 0;
            position: relative;
            box-sizing: border-box;
            object-fit: cover;
            border-color: transparent;
          }
          .home-image2 {
            width: 24px;
            height: 24px;
            margin: 0 24px 0 0;
            position: relative;
            box-sizing: border-box;
            object-fit: cover;
            border-color: transparent;
          }
          .home-link2 {
            display: contents;
          }
          .home-image3 {
            width: 24px;
            height: 24px;
            position: relative;
            box-sizing: border-box;
            object-fit: cover;
            border-color: transparent;
            text-decoration: none;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            padding: 32px;
            z-index: 100;
            position: absolute;
            transform: translateX(100%);
            transition: 0.3s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container02 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo-center {
            color: var(--dl-color-gray-black);
            height: auto;
            font-size: 24px;
            font-family: Jost;
            font-weight: 500;
            line-height: 20px;
            margin-left: var(--dl-space-space-fourunits);
            margin-right: var(--dl-space-space-fourunits);
            letter-spacing: 0.4em;
            text-decoration: none;
          }
          .home-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-middle1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 1;
            border-color: transparent;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-text07 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 13px;
            text-align: left;
            font-family: Jost;
            font-weight: 500;
            text-decoration: none;
          }
          .home-text08 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 13px;
            text-align: left;
            font-family: Jost;
            font-weight: 500;
            text-decoration: none;
          }
          .home-text09 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 13px;
            text-align: left;
            font-family: Jost;
            font-weight: 500;
            text-decoration: none;
          }
          .home-text10 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 13px;
            text-align: left;
            font-family: Jost;
            font-weight: 500;
            text-decoration: none;
          }
          .home-text11 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 13px;
            text-align: left;
            font-family: Jost;
            font-weight: 500;
            text-decoration: none;
          }
          .home-text12 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 13px;
            text-align: left;
            font-family: Jost;
            font-weight: 500;
            text-decoration: none;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-hero {
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
            background-color: var(--dl-color-pallet-green);
          }
          .home-max-width {
            max-width: 1032px;
          }
          .home-hero1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container03 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-info {
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: center;
            flex-shrink: 1;
            border-color: transparent;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-image4 {
            width: 2px;
            height: 52px;
            margin: 0 14px 0 0;
            position: relative;
            box-sizing: border-box;
            object-fit: cover;
            border-color: transparent;
            background-color: rgba(0, 0, 0, 0.5);
          }
          .home-text13 {
            color: var(--dl-color-gray-black50);
            font-size: 12px;
            text-align: left;
            font-family: 'Jost';
            font-weight: 600;
            line-height: 18px;
            text-transform: uppercase;
          }
          .home-text16 {
            color: #0b421a;
          }
          .home-text17 {
            max-width: 450px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container04 {
            display: flex;
            align-items: flex-end;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
          }
          .home-text18 {
            color: var(--dl-color-gray-black80);
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 20px;
            margin-right: 4px;
            letter-spacing: 0.1em;
          }
          .home-text19 {
            color: var(--dl-color-gray-black80);
          }
          .home-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-button {
            border-radius: var(--dl-radius-radius-radius8);
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
            border-bottom-left-radius: var(--dl-radius-radius-radius8);
            border-bottom-right-radius: var(--dl-radius-radius-radius8);
          }
          .home-image5 {
            width: 453px;
            position: relative;
            max-width: 579px;
            box-sizing: border-box;
            max-height: 579px;
            object-fit: cover;
            border-color: transparent;
          }
          .home-max-width1 {
            height: 329px;
          }
          .home-cards-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-twounits);
            flex-wrap: wrap;
            max-width: 1080px;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-banner {
            flex: 0 0 auto;
            width: 100%;
            height: 1px;
            display: flex;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            border-color: #0b421a;
            border-style: dashed;
            border-width: 2px;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-950);
          }
          .home-container05 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container06 {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 770px;
            box-sizing: border-box;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            flex-shrink: 1;
            border-color: transparent;
            flex-direction: column;
          }
          .home-text20 {
            color: var(--dl-color-gray-black80);
            width: 100%;
            height: auto;
            font-size: 16px;
            align-self: auto;
            font-style: normal;
            text-align: center;
            font-family: 'Jost';
            font-weight: 400px;
            line-height: 175%;
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-threeunits);
            text-decoration: none;
          }
          .home-svg {
            top: -30px;
            width: 199px;
            height: 200px;
            opacity: 0.15;
            position: absolute;
          }
          .home-gallery {
            width: 100%;
            display: flex;
            align-items: stretch;
          }
          .home-left1 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-right {
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          .home-top {
            flex: 1;
            width: 100%;
            display: flex;
            flex-direction: row;
          }
          .home-left2 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-right1 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-bottom {
            flex: 1;
            width: 100%;
            display: flex;
          }
          .home-left3 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-right2 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-full-width-banner {
            width: 100%;
            display: flex;
            align-items: stretch;
            padding-top: var(--dl-space-space-fourunits);
            justify-content: center;
          }
          .home-left4 {
            flex: 1;
            display: flex;
            align-self: stretch;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
            justify-content: center;
            background-color: #f3f0e6;
          }
          .home-content {
            margin: 0 0 40px 0;
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: center;
            flex-shrink: 1;
            border-color: transparent;
            flex-direction: column;
          }
          .home-text21 {
            color: rgb(0, 0, 0);
            height: auto;
            margin: 0 0 16px 0;
            font-size: 28px;
            align-self: auto;
            font-style: normal;
            text-align: left;
            font-family: 'Jost';
            font-weight: 500px;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text22 {
            color: #0b421a;
          }
          .home-text24 {
            color: rgba(0, 0, 0, 0.6);
            width: 267px;
            height: auto;
            font-size: 16px;
            align-self: auto;
            font-style: normal;
            text-align: center;
            font-family: 'Jost';
            font-weight: 400px;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-btn {
            cursor: pointer;
            display: flex;
            padding: 16px 24px;
            position: relative;
            box-sizing: border-box;
            transition: 0.3s;
            align-items: flex-start;
            flex-shrink: 1;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: #eac784;
          }
          .home-btn:hover {
            background-color: var(--dl-color-gray-white);
          }
          .home-text25 {
            color: rgb(0, 0, 0);
            height: auto;
            font-size: 16px;
            align-self: auto;
            font-style: normal;
            text-align: left;
            font-family: 'Jost';
            font-weight: 500px;
            line-height: 14px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-image6 {
            width: 60%;
            position: relative;
            box-sizing: border-box;
            object-fit: cover;
            border-color: transparent;
          }
          .home-blog {
            border: 2px dashed rgba(120, 120, 120, 0.4);
          }
          .home-footer {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-950);
            border-width: 1px;
            flex-direction: column;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-max-width3 {
            align-items: center;
            justify-content: center;
          }
          .home-footer1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: space-between;
          }
          .home-container07 {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text28 {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text31 {
            color: var(--dl-color-gray-black50);
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .home-text34 {
            color: var(--dl-color-gray-black50);
            margin-top: var(--dl-space-space-twounits);
          }
          .home-text37 {
            color: var(--dl-color-gray-black50);
            margin-top: 12px;
          }
          .home-container08 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text38 {
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 14px;
            margin-bottom: 44px;
          }
          .home-text39 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text40 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text41 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text42 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text43 {
            color: var(--dl-color-gray-black50);
          }
          .home-container09 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text44 {
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 14px;
            margin-bottom: 44px;
          }
          .home-text45 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text46 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text47 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text48 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-links-container {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            grid-gap: var(--dl-space-space-threeunits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          @media (max-width: 991px) {
            .home-container01 {
              display: none;
            }
            .home-left {
              display: none;
            }
            .home-icons {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-icon {
              width: 24px;
              height: 24px;
              display: flex;
            }
            .home-logo-center {
              margin-left: 0px;
            }
            .home-hero1 {
              flex-direction: column;
            }
            .home-container03 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-text17 {
              text-align: center;
            }
            .home-left1 {
              width: 100%;
            }
            .home-footer1 {
              flex-direction: column-reverse;
            }
            .home-links-container {
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-main {
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-hero {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-cards-container {
              grid-gap: var(--dl-space-space-unit);
            }
            .home-text20 {
              max-width: 770px;
            }
            .home-gallery {
              flex-direction: column;
            }
            .home-top {
              flex-direction: column;
            }
            .home-bottom {
              flex-direction: column;
            }
            .home-full-width-banner {
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-left4 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-content {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text24 {
              width: auto;
            }
            .home-image6 {
              width: 100%;
            }
            .home-footer1 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-links-container {
              margin-top: var(--dl-space-space-twounits);
              flex-direction: column;
              justify-content: space-between;
            }
          }
          @media (max-width: 479px) {
            .home-container {
              padding-top: 55px;
            }
            .home-header {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container03 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-left4 {
              width: auto;
            }
            .home-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .home-container08 {
              margin-right: var(--dl-space-space-unit);
            }
            .home-links-container {
              align-items: flex-start;
              flex-direction: column;
              justify-content: space-between;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
