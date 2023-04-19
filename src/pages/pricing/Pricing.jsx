import React from "react";
import Style from "./Pricing.module.css";

function Pricing() {
  return (
    <div className={Style.cardscontainer}>
      <div className={Style.card1}>
        <h2>Day Pass</h2>
        <h3>$20/pass</h3>
        <ul style={{ color: "white" }}>
          <li>1 DayPass</li>
          <li>FreeGymAccess</li>
          <li>24Hour Access</li>
        </ul>
        <button style={{ padding: "10px 30px", fontWeight: "bold" }}>
          Get Started
        </button>
      </div>

      <div
        style={{ height: "600px", width: "540px", border: "2px solid white" }}
        className={Style.card2}
      >
        <h2>Month to Month</h2>
        <h3>$90/month</h3>
        <ul style={{ color: "black" }}>
          <li>$99 joinning Fee</li>
          <li>No contract</li>
          <li>Free Gym Access</li>
          <li>1 Group Class Included</li>
          <li>24 Hour Access</li>
        </ul>
        <button
          style={{
            backgroundColor: "green",
            padding: "20px 8rem",
            fontSize: "20px",
            color: "white",
          }}
        >
          Get Started
        </button>
      </div>

      <div className={Style.card3}>
        <h2 style={{ color: "white", fontSize: "70px" }}>Membership</h2>
        <h5 style={{ color: "yellowgreen" }}>
          From Punch Pass to Monthly or Annual
        </h5>
        <p style={{ color: "white", fontSize: "25px" }}>
          🤝Gym Membership Promotions Ideas to Get More Clients Introduce
          <br />A Refer-A-Friend Program To Encourage Member Referrals. ...
          <br />
          Calendar-Themed Promotions. ... Get Social. ... Hold a Community
          <br />
          Health Fair. ... Offer New Classes. ... Hire Trainers Who Truly Care
          <br />
          About The Clients. ... Get Fit at Work Challenge. ... Offer Birthday
          discounts.
        </p>
      </div>
    </div>
  );
}

export default Pricing;
