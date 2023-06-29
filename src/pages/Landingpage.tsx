import { Layout } from "../components/Layout";

import "../asset/css/style.css";
import app1 from "../asset/image/app1.png";
import app2 from "../asset/image/app2.png";
import app3 from "../asset/image/app3.png";
import app4 from "../asset/image/app4.png";

export const Landingpage = () => {
  return (
    <Layout>
      {/* big screen */}
      <section className="hidden home-img md:flex md:flex-col items-center md:pt-[73px]">
        <p className="font-mont text-2xl md:font-bold text-[#F6F6F6]">
          Food app
        </p>
        <h1 className="text-white md:font-bold mt-[17px] text-center font-pop text-[58px]">
          Why stay hungry when <br /> you can order form Bella Onojie
        </h1>
        <p className="font-mont md:text-2xl md:font-medium text-white mt-[27px]">
          Download the bella onoje’s food app now on
        </p>
        <div className="flex flex-col md:flex-row mt-[54px]">
          <button className="auth-btn">Login</button>
          <button className="auth-btn">Register</button>
        </div>
      </section>
      {/* mobile */}
      <section className="mt-16 md:hidden flex flex-col text-center items-center">
        <h1 className="font-mont text-xs font-bold text-[#737373]">Food app</h1>
        <h1 className="text-[#252B42] mt-10 text-4xl font-mont font-bold">
          Why stay hungry when you can order form Bella Onojie
        </h1>
        <p className="text-[#737373] mt-8 text-2xl font-mont font-medium">
          Download the bella onoje’s food app now on{" "}
        </p>
        <div className="flex flex-col mt-12">
          <button className="bg-pc outline-none border rounded-3xl py-[16px] px-[52px] text-white">
            Login
          </button>
          <button className="mt-5 bg-transparent rounded-3xl text-pc outline-none py-[16px] px-[52px] border border-pc">
            Register
          </button>
        </div>
      </section>

      <div className="mt-10 flex justify-center md:mt-[-100px]">
        <img src={app1} alt="" />
      </div>
      <hr className="hidden md:block mt-32 mx-[238px] bg-hr" />

      <section className="mt-70 mx-10 md:mx-44">
        <h1 className="bg-dark font-mont text-center text-2xl md:text-44px font-semibold md:font-pop">
          How the app works
        </h1>
        <hr className="mt-12 mx-0 bg-hr md:hidden" />

        <div className="mt-[65px] text-center md:text-left flex flex-col-reverse md:items-center md:flex-row md:mt-32">
          <img src={app2} className="mt-10 md:mt-0 md:mr-44" alt="" />
          <div>
            <h1 className="text-pc text-2xl font-mont font-bold">
              Create an account
            </h1>
            <p className="text-center md:text-left mt-10 md:mt-[17px] text-4xl text-[#252B42] font-mont font-bold">
              Create/login to an existing account to get started
            </p>
            <p className="mt-12 md:mt-6 text-[#737373] text-center font-medium text-2xl font-mont md:text-left">
              An account is created with your email and a desired password
            </p>
          </div>
        </div>

        <div className="mt-[44px] text-center md:text-left flex flex-col md:flex-row md:justify-between items-center md:mt-[78px]">
          <div className="md:mr-44">
            <h1 className="mt-14 md:mt-0 text-pc text-2xl font-mont font-bold">
              Explore varieties
            </h1>
            <p className="text-center md:text-left mt-10 md:mt-[17px] text-4xl text-[#252B42] font-mont font-bold">
              Shop for your favorites meal as e dey hot.
            </p>
            <p className="mt-12 md:mt-6 text-[#737373] text-center font-medium text-2xl font-mont md:text-left">
              Shop for your favorite meals or drinks and enjoy while doing it.
            </p>
          </div>
          <img className="mt-10 md:mt-0" src={app3} alt="" />
        </div>

        <div className="mt-[31px] flex flex-col-reverse md:flex-row md:justify-between items-center md:mt-[78px]">
          <img className="mt-10 md:mt-0 md:mr-44" src={app4} alt="" />
          <div className="text-center md:text-left">
            <h1 className="mt-14 md:mt-0 text-pc text-2xl font-mont font-bold">
              Checkout
            </h1>
            <p className="text-center md:text-left mt-10 md:mt-[17px] text-4xl text-[#252B42] font-mont font-bold">
              When you done check out and get it delivered.
            </p>
            <p className="mt-12 md:mt-6 text-[#737373] text-center font-medium text-2xl font-mont md:text-left">
              When you done check out and get it delivered with ease.
            </p>
          </div>
        </div>
      </section>

      {/* big screen */}
      <section className="hidden mt-36 home-img2 md:flex md:flex-col items-center md:pt-[145px]">
        <h1 className="font-mont text-4xl md:font-bold text-white">
          Download the app now.
        </h1>
        <p className="text-white md:font-medium mt-[20px] text-center font-pop text-2xl">
          Available on your favorite store. Start your premium experience now
        </p>
        <p className="font-mont md:text-2xl md:font-medium text-white mt-[27px]">
          Download the bella onoje’s food app now on
        </p>
        <div className="flex flex-col md:flex-row mt-[60px]">
          <button className="auth-btn">Login</button>
          <button className="auth-btn">Register</button>
        </div>
      </section>

      {/* mobile */}
      <section className="mt-14 flex flex-col items-center text-center py-[110px] px-6 md:hidden bg-darkBlue">
        <h1 className="text-white font-mont font-bold text-4xl">
          Download the app now.
        </h1>
        <p className="text-[#BDBDBD] mt-5 text-2xl font-mont font-medium">
          Most calendars are designed for teams.{" "}
        </p>
        <div className="flex flex-row mt-12">
          <button className="py-4 mr-4 px-7 bg-pc font-mont font-bold text-base text-white rounded-lg border-none outline-0">
            Login
          </button>
          <button className="text-white font-mont border border-white font-bold text-base rounded-lg outline-none py-[16px] px-[45px]">
            Register
          </button>
        </div>
      </section>
    </Layout>
  );
};
