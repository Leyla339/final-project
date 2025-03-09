import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Rewards.css";
import Rew2 from "./Rew2.jsx";
import coffee1 from "./img/25.png";
import coffee2 from "./img/100.png";
import coffee3 from "./img/200.png";
import coffee4 from "./img/300.png";
import coffee5 from "./img/400.png";
// import fun from "./img/1-fun-freebies.jpg";
// import order from "./img/2-order-and-pay-ahead.jpg";
// import free from "./img/3-get-to-free-faster.jpg";
import A1 from "./img/1A.png";
import B1 from "./img/1B.png";
import A2 from "./img/2A.png";
import B2 from "./img/2B.png";
import delta from "./img/delta-skymiles.png";
import bank from "./img/bank-of-america.png";
import marriott from "./img/marriott-logo.png";
import Navbar from "./Navbar.jsx";

function Rewards() {
  const payMethodsRef = useRef(null);
  const deltaSkymilesNoteIdRef = useRef(null);
  const bankOfAmericaNoteIdRef = useRef(null);
  const marriottNoteIdRef = useRef(null);
  const deltaSkymilesTermsDescriptionIdRef = useRef(null);
  const bankOfAmericaTermDescriptionIdRef = useRef(null);
  const marriottTermsDescriptionIdRef = useRef(null);

  const scrollToPayMethods = (e) => {
    payMethodsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTodeltaSkymilesNoteId = (e) => {
    deltaSkymilesNoteIdRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const scrollTobankOfAmericaNoteId = (e) => {
    bankOfAmericaNoteIdRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const scrollTomarriottNoteId = (e) => {
    marriottNoteIdRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const scrollTodeltaSkymilesTermsDescriptionId = (e) => {
    deltaSkymilesTermsDescriptionIdRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const scrollTobankOfAmericaTermDescriptionId = (e) => {
    bankOfAmericaTermDescriptionIdRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const scrollTomarriottTermsDescriptionId = (e) => {
    marriottTermsDescriptionIdRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const rewards = {
    25: {
      image: coffee1,
      name: "Customize your drink",
      description:
        "Make your drink just right with an extra espresso shot or a dash of your favorite syrup.",
    },
    100: {
      image: coffee2,
      name: "Brewed hot or iced coffee or tea, bakery item, packaged snack and more",
      description:
        "Treat yourself to an iced coffee, buttery croissant, bag of chips and more.",
    },
    200: {
      image: coffee3,
      name: "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast",
      description:
        "Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.",
    },
    300: {
      image: coffee4,
      name: "Sandwich, protein box or at-home coffee",
      description:
        "Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.",
    },
    400: {
      image: coffee5,
      name: "Select Starbucks merchandise",
      description:
        "Take home a signature cup, drink tumbler or your choice of coffee merch up to $20. ",
    },
  };
  const [activeTab, setActiveTab] = useState(25);

  return (
    <div>
      <Navbar />
      <div className="reward-main">
        <div className="rewards1">
          <div className="container4">
            <h1>
              Starbucks<span>®</span>Rewards
            </h1>
          </div>
        </div>
        <div className="rewards2">
          <div className="container">
            <div className="rewards2-content">
              <h2>
                FREE COFFEE <br />
                IS A TAP AWAY
              </h2>
              <h3>Join now to start earning Rewards.</h3>
              <Link className="join-now" to="/account/create">
                Join now
              </Link>
              <h3>
                Or <Link to="/rewards/mobile-apps/">join in the app</Link> for
                the best experience
              </h3>
            </div>
          </div>
        </div>
        <div className="rewards3">
          <div className="rewards3-content">
            <h1>Getting started is easy</h1>
            <h2>Earn Stars and get rewarded in a few easy steps.</h2>
          </div>
          <div className="rewards3-cards">
            <div className="rewards3-card">
              <h1>1</h1>
              <h2>Create an account</h2>
              <p>
                To get started, <Link to="/account/create">join now</Link>.You
                can also{" "}
                <Link to="/rewards/mobile-apps/">Join in the app </Link> to get
                access to the full range of Starbucks<span>®</span> Rewards
                benefits.
              </p>
            </div>
            <div className="rewards3-card">
              <h1>2</h1>
              <h2>Order and pay how you’d like</h2>
              <p>
                Use cash, credit/debit card or save some time and pay right
                through the app. You’ll collect Stars all ways.{" "}
                <Link to="#waystopay" onClick={scrollToPayMethods}>
                  Learn how
                </Link>
              </p>
            </div>
            <div className="rewards3-card">
              <h1>3</h1>
              <h2>Earn Stars, get Rewards</h2>
              <p>
                As you earn Stars, you can redeem them for Rewards—like free
                food, drinks, and more. Start redeeming with as little as 25
                Stars!
              </p>
            </div>
          </div>
        </div>
        <div className="reward4">
          {" "}
          <h1>Get your favorites for free</h1>
          <div className="r-tabs">
            {Object.keys(rewards).map((key) => (
              <span
                key={key}
                className={activeTab === Number(key) ? "active" : ""}
                onClick={() => setActiveTab(Number(key))}
              >
                {key}
                <span className="star">★</span>
              </span>
            ))}
            <div
              className="underline"
              style={{
                left: `${
                  (Object.keys(rewards).map(Number).indexOf(activeTab) /
                    Object.keys(rewards).length) *
                  100
                }%`,
              }}
            />
          </div>
        </div>
        <div className="rewards4-content">
          <img src={rewards[activeTab].image} />
          <div className="r-cnt">
            <h1>{rewards[activeTab].name}</h1>
            <p>{rewards[activeTab].description}</p>
          </div>
        </div>
        <Rew2 />
        <div className="pay-methods-bg" ref={payMethodsRef}>
          <div className="container">
            <div className="pay-methods">
              <h1>Cash or card, you earn Stars</h1>
              <h2>
                No matter how you pay, you can earn Stars with your morning
                coffee. Those Stars add up to (really delicious) Rewards.
              </h2>
              <div className="pay-1">
                <div>
                  <h1>1★ per dollar</h1>
                  <h2>Pay as you go</h2>
                </div>
                <div className="pay1-cnt">
                  <img src={A1} />
                  <div className="pay1-text">
                    <h3>Scan and pay separately</h3>
                    <h4>Use cash or credit/debit card at the register.</h4>
                  </div>
                </div>
                <div className="pay1-cnt">
                  <img src={B1} />
                  <div className="pay1-text">
                    <h3>Save payment in the app</h3>
                    <h4>
                      Check-out faster by saving a credit/debit card or PayPal
                      to your account. You’ll be able to order ahead or scan and
                      pay at the register in one step.
                    </h4>
                  </div>
                </div>
              </div>
              <hr className="line" />
              <div className="pay-1">
                <div>
                  <h1>2★ per dollar</h1>
                  <h2>Add funds in the app</h2>
                </div>
                <div className="pay1-cnt">
                  <img src={A2} />
                  <div className="pay1-text">
                    <h3>Preload</h3>
                    <h4>
                      To save time and earn Stars twice as fast, add money to
                      your digital Starbucks Card using any payment option. Scan
                      and pay in one step or order ahead in the app.
                    </h4>
                  </div>
                </div>
                <div className="pay1-cnt">
                  <img src={B2} />
                  <div className="pay1-text">
                    <h3>Register your gift card</h3>
                    <h4>
                      Then use it to pay through the app. You can even
                      consolidate balances from multiple cards in one place.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="r-border">
          <div className="container">
            <div className="join-rewards">
              <div className="container4">
                <h1>Keep the Rewards Coming</h1>
                <h2>
                  The Rewards don't stop at your morning coffee. Join Starbucks®
                  Rewards and unlock perks from our partners, all while earning
                  more Stars.
                </h2>
                <div className="r-blocks">
                  <div className="r-block1">
                    <img src={delta} />
                    <p>
                      <Link> Link your Delta SkyMiles®</Link> and Starbucks®
                      Rewards accounts to earn miles on Starbucks Card reloads
                      of $25 or more, plus Double Stars on travel days.
                      <Link
                        to="#deltaSkymilesTermsDescriptionId"
                        className="desc-link"
                        onClick={scrollTodeltaSkymilesTermsDescriptionId}
                        ref={deltaSkymilesNoteIdRef}
                      >
                        ¹
                      </Link>
                    </p>
                  </div>
                  <div className="r-block1">
                    <img src={bank} />
                    <p>
                      <Link>Link your Bank of America</Link> eligible card and
                      Starbucks® Rewards account to earn 2% Cash Back and Bonus
                      Stars on qualifying Starbucks in-app purchases.
                      <Link
                        className="desc-link"
                        to="#bankOfAmericaTermDescriptionId"
                        onClick={scrollTobankOfAmericaTermDescriptionId}
                        ref={bankOfAmericaNoteIdRef}
                      >
                        ²
                      </Link>
                    </p>
                  </div>
                  <div className="r-block1">
                    <img src={marriott} />
                    <p>
                      {" "}
                      <Link>Link your Marriott Bonvoy®</Link> {""}
                      and Starbucks® Rewards accounts to earn Double Stars
                      during eligible stays, points during any Marriott Bonvoy
                      Week and more.
                      <Link
                        to="#marriottTermsDescriptionId"
                        className="desc-link"
                        onClick={scrollTomarriottTermsDescriptionId}
                        ref={marriottNoteIdRef}
                      >
                        ³
                      </Link>
                    </p>
                  </div>
                </div>
                <Link className="join-link">Join Starbucks Rewards</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="questions">
          <div className="container5">
            <h1>Questions?</h1>
            <p>
              We want to help in any way we can. You can ask your barista
              anytime or we’ve answered the most commonly asked terms{" "}
              <Link>right over here</Link>.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="rs-content">
            <p>At participating stores. Restrictions apply. </p>{" "}
            <p>
              ¹Excludes taxes and gratuities. At participating stores. Some
              restrictions apply. Flights purchased close to departure may not
              earn double Stars. Stars and miles may not be earned on purchases
              of alcohol, Starbucks Cards and Starbucks Card reloads. For
              details, visit <Link>deltastarbucks.com/terms</Link>.
              <Link
                to="#deltaSkymilesNoteId"
                className="icon-link"
                onClick={scrollTodeltaSkymilesNoteId}
                ref={deltaSkymilesTermsDescriptionIdRef}
              >
                ↩
              </Link>{" "}
            </p>
            <p>
              ²At participating stores only. Some restrictions apply. Linked
              Card members will earn 2% Cash Back on the full purchase price of
              every Qualifying Purchase. Extra Star offer excludes taxes and
              tips. Stars may not be earned on purchases of alcohol or on
              reloads of Starbucks Cards that are not registered. For details,
              visit <Link>Terms and Conditions</Link>. Bank of America, N.A.
              Member FDIC.{" "}
              <Link
                to="#bankOfAmericaNoteId"
                className="icon-link"
                onClick={scrollTobankOfAmericaNoteId}
                ref={bankOfAmericaTermDescriptionIdRef}
              >
                ↩
              </Link>{" "}
            </p>
            <p>
              {" "}
              ³Individuals must link loyalty program accounts to participate in
              offer. Members with linked accounts will earn: (a) double
              Starbucks Rewards Stars on Qualifying Starbucks Transactions
              during Eligible Stays at Participating Marriott Bonvoy Hotels,
              excluding stays at Homes & Villas by Marriott Bonvoy and The
              Ritz-Carlton Yacht Collection, and (b) earn 100 Marriott Bonvoy
              Points upon completion of 3 Qualifying Starbucks Transactions
              during Marriott Bonvoy Week. Qualifying Starbucks Transactions
              must be made at U.S. participating Starbucks stores and exclude
              purchases of alcoholic beverages, Starbucks Card eGifts and
              physical Starbucks gift. To earn Double Stars, the applicable stay
              must qualify as an Eligible Stay at a Participating Marriott
              Bonvoy® Hotel under offer terms and conditions. Other restrictions
              and exclusions apply. For full offer terms and conditions, visit{" "}
              <Link>Starbucks.com/MarriottBonvoy</Link>. Marriott Bonvoy® and
              its affiliated brands and hotels are the registered trademarks
              and/or service marks of Marriott International, Inc. and its
              affiliates. Used under license from Marriott International, Inc.
              <Link
                to="#marriottNoteId"
                className="icon-link"
                onClick={scrollTomarriottNoteId}
                ref={marriottTermsDescriptionIdRef}
              >
                ↩
              </Link>
            </p>
          </div>

          <div className="r-end">
            <div className="r-end1">
              <h1>Earning Stars</h1>
              <p>
                <div className="break">
                  Stars cannot be earned on purchases of alcohol, Starbucks
                  Cards or Starbucks Card reloads.
                </div>{" "}
                <div className="break">
                  Earn 1 Star per $1 spent when you scan your member barcode in
                  the app, then pay with cash, credit/debit cards or mobile
                  wallets at participating stores. You can also earn 1 Star per
                  $1 spent when you link a payment method and pay directly
                  through the app.
                </div>{" "}
                Earn 2 Stars per $1 spent when you load funds and pay with your
                digital Starbucks Card in the app. You can also earn 2 Stars per
                $1 spent when you pay in-person at a participating store with
                your registered physical Starbucks Card or scan your member
                barcode in the app, and then use any physical Starbucks Card
                (regardless of whether it is registered) to complete the
                purchase.
              </p>
              <h1>Benefits</h1>
              <p>
                Free refills available during same in-store visit only. To
                qualify for the Birthday Reward, you must have made at least one
                Star-earning transaction.
              </p>
            </div>
            <div className="r-end2">
              <h1>Terms of Use</h1>
              <p>
                For full program details visit{" "}
                <Link>starbucks.com/rewards/terms</Link>. <br /> Starbucks®
                Rewards benefits are available at participating Starbucks
                stores. Not all stores have the ability to honor Rewards at this
                time. Visit the Starbucks Store Locator and search for locations
                honoring “Redeem Rewards”.
              </p>
              <h1>Redeeming Rewards</h1>
              <p>
                Rewards cannot be redeemed for alcoholic beverages or
                multi-serve items. You pay the difference for any beverage
                customization over $1 and/or merchandise item over $20. Not all
                stores honor tiered Rewards. Select stores redeem 200 Stars for
                free food or drink items only.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Rewards;
