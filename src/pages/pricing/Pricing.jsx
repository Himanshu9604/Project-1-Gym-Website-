import React, { useState } from "react";
import Style from "./Pricing.module.css";
import { userLoginDataCon } from "../login_page/Login";
import Swal from "sweetalert2";

function Pricing({ name, dataFromLogin }) {
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [allDataof, setAllDataof] = useState(
    JSON.parse(localStorage.getItem("subscription"))
  );

  function handleSubmission(price) {
    if (name == "") {
      alert("Please login first on clicking join us button");
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Subscribe!",
      }).then((result) => {
        if (result.isConfirmed) {
          if (allDataof) {
            localStorage.setItem(
              "subscription",
              JSON.stringify([
                ...allDataof,
                {
                  EmailId: userLoginDataCon,
                  price: price,
                  subscribed: isSubscribed,
                },
              ])
            );
            dataFromLogin(name, price);
            console.log(userLoginDataCon);
          } else {
            localStorage.setItem(
              "subscription",
              JSON.stringify([
                {
                  EmailId: userLoginDataCon,
                  price: price,
                  subscribed: isSubscribed,
                },
              ])
            );
            // console.log(userLoginDataCon, "DATA");
          }
        }
      });
      // }
    }
    // console.log(userLoginDataCon);
  }

  return (
    <div>
      <h1>Welcome to Pricing Section</h1>
      <div className={Style.primgtop}>
        <iframe
          className={Style.fullscreenIframes}
          height="440"
          src="https://www.youtube.com/embed/fWRHwQbXr7U"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className={Style.cardscontainer}>
        <div className={Style.card1}>
          <h2>Day Pass</h2>
          <h3>$20/pass</h3>
          <ul style={{ color: "white" }}>
            <li>1 DayPass</li>
            <li>FreeGymAccess</li>
            <li>24Hour Access</li>
          </ul>
          <button
            style={{ padding: "10px 30px", fontWeight: "bold" }}
            onClick={() => handleSubmission(20)}
          >
            Subscribe
          </button>
        </div>

        <div
          style={{ height: "500px", width: "540px", border: "2px solid white" }}
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
            onClick={() => handleSubmission(90)}
          >
            Subscribe
          </button>
        </div>

        <div className={Style.card3}>
          <h2 style={{ color: "white", fontSize: "50px" }}>Membership</h2>
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
        <hr />
        <h1 style={{ textAlign: "center", fontSize: "65px" }}>
          {" "}
          🤩Our Seasonal Offers{" "}
        </h1>
        <div className={Style.primg}>
          <img
            height="670px"
            width="430px"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/body-building-design-template-66fb2473ea57cd57caee85f31deccb9a.jpg?ts=1659411801"
          />
          <img
            height="570px"
            width="330px"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-%7C-gym-%7C-sports-center-advert-design-template-ef2594f255b94272dde629a5e376b7fd.jpg?ts=1641542396"
          />

          <img
            height="570px"
            width="430px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAtWEdD84fAJ-PpkpGaDLLFSZC8AoDJAB_Rg&usqp=CAU"
          />
          <img
            height="570px"
            width="430px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdaSjX62AP7TqKLp5k7_oXeZafTCqGpA1Wvw&usqp=CAU"
          />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
