import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { Main } from "./StyledHome";
function Home() {
  const [phone, setPhone] = useState("");
  return (
    <Main>
      <section className="container-xxl">
        <div className="intro-sec">
          <h1>
            SaaSy Software Development Team Acquisition Services, Now At Your
            Fingertips
          </h1>
          <p>
            Grow your SaaS business exponentially with a talented software
            development team that consistently meets your target market’s
            demands. Get in touch with We Want SaaS today.
          </p>
          <div className="boxes">
            <div className="box">
              <img
                src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/stacks/node.svg"
                alt=""
              />{" "}
              Node
            </div>
            <div className="box">
              <img
                src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/stacks/typescript.svg"
                alt=""
              />{" "}
              TypeScript
            </div>
            <div className="box">
              <img
                src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/stacks/react.svg"
                alt=""
              />{" "}
              React Js
            </div>
            <div className="box">
              <img
                src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/stacks/angular.svg"
                alt=""
              />{" "}
              Angular Js
            </div>
            <div className="box">
              <img
                src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/stacks/vue.svg"
                alt=""
              />{" "}
              Vue Js
            </div>
            <div className="box">
              <img
                src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/stacks/graph.svg"
                alt=""
              />{" "}
              GraphQL
            </div>
            <div className="box">
              <img
                src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/stacks/laravel.svg"
                alt=""
              />{" "}
              Laravel
            </div>
            <div className="box">
              <img
                src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/stacks/djangoproject-icon.svg"
                alt=""
              />{" "}
              DJango
            </div>
          </div>
        </div>
        <div className="form-sec">
          <h2>Let get Started with Your Query</h2>
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <div className="num">
              {" "}
              <span>Phone Number</span>
              <PhoneInput
                placeholder="0301-2342354"
                country={"pk"}
                value={phone}
                className="phone"
                onChange={(phone) => setPhone(phone)}
                inputStyle={{
                  border: "none",
                  boxShadow: "none",
                  margin: "30px",
                  width: "80px",
                }}
                buttonStyle={{ border: "none", boxShadow: "none" }}
              />{" "}
            </div>
            <span className="mt-2">
              Enter Phone Number with Country Code (e.g. +971)
            </span>
            <div className="res">
              <span>Title</span>
              <div>Need resource for</div>
              <input className="res-input" type="text" />
            </div>
            <input type="text" placeholder="Company Name" />
            <div className="type">
              <span>Type</span>Software Development
            </div>
            <textarea type="text" placeholder="Provide Details" />
            <p className="mt-2">
              We will call you ASAP or you can schedule a{" "}
              <span className="text-primary fw-bold">Call</span>
            </p>
            <input type="submit" value="Post Query" />
          </form>
        </div>
      </section>
    </Main>
  );
}

export default Home;
