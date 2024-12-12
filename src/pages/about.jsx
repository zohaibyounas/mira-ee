import { useEffect } from "react";
import dynamic from "next/dynamic";
import Layouts from "@layouts/Layouts";

import { getSortedTeamData } from "@library/team";
import { getSortedServicesData } from "@/src/lib/embedded-services";
import Data1 from "@data/sections/embedded-services.json";
import Data2 from "@data/sections/digital-services.json";
import CountUp from "react-countup";
import { circleText } from "@common/utilits";

import PageBanner from "@components/PageBanner";
import Team2Section from "@components/sections/Team2";
import PartnersSection from "@components/sections/Partners";
import Services4Section from "@components/sections/Services4";
import { useTranslate } from "../contexts/TranslateContext";

const HistorySlider = dynamic(() => import("@components/sliders/History"), {
  ssr: false,
});
const Testimonial2Slider = dynamic(
  () => import("@components/sliders/Testimonial2"),
  { ssr: false }
);

const About = (props) => {
  const { t, i18n } = useTranslate(); // Ensure you have access to `i18n` or equivalent
  const embeddedServices = i18n.t("embedded_services.items", { returnObjects: true });
  const digitalServices = i18n.t("digital_services.items", { returnObjects: true });
  

  useEffect(() => {
    circleText();
  }, []);

  const clickedVideoButton = (e) => {
    e.preventDefault();

    e.target.parentNode.classList.add("active");
    let videoIframe = e.target.parentNode.querySelector(".js-video-iframe");
    let videoUrl = videoIframe.dataset.src;
    videoIframe.setAttribute("src", videoUrl);
  };


  // const embeddedServices = t("embedded_services.items");


  // console.log( embeddedServices);


  return (
    <Layouts header={2} footer={2} darkHeader>
      <PageBanner
        pageTitle={t("about.page-title")}
        pageDesc={t("about.sub-title")}
      />

      {/* Onovo About */}
      <section className="onovo-section gap-top-140 gap-bottom-140">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              {/* Heading */}
              <div className="onovo-heading gap-bottom-60">
                <div className="onovo-subtitle-1">
                  <span> {t("about.welcome")} </span>
                </div>
                <h2 className="onovo-title-2">
                  <span>
                    {t("about.p1")} <br />
                    {t("about.p2")} <br />
                    {t("about.p3")} <br />
                    {t("about.p4")} <br />
                  </span>
                </h2>
                <div className="onovo-text">
                  <p>
                    {t("about.m1")}
                    <strong>
                      {t("about.m2")}
                    </strong>
                    ,
                    {t("about.m3")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 offset-lg-1 hide-on-mobile">
              {/* Image */}
              <img src="/images/onovo-about-logo.png" alt="" />
            </div>
          </div>

          {/* Numbers items */}
          <div className="row gap-row gap-bottom-100">
            {/*number-item*/}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="onovo-counter">
                <div
                  className="num onovo-text-white js-counter"
                  data-end-value="23"
                >
                  <CountUp
                    end="23"
                    duration={7}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </div>
                <div className="num-after onovo-text-white"> + </div>
                <div className="label"> {t("Team members")} </div>
              </div>
            </div>

            {/*number-item*/}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="onovo-counter">
                <div
                  className="num onovo-text-white js-counter"
                  data-end-value="50"
                >
                  <CountUp
                    end="50"
                    duration={7}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </div>
                <div className="num-after onovo-text-white"> + </div>
                <div className="label"> {t("Completed projects")} </div>
              </div>
            </div>

            {/*number-item*/}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="onovo-counter">
                <div
                  className="num onovo-text-white js-counter"
                  data-end-value="1"
                >
                  <CountUp
                    end="1"
                    duration={7}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </div>
                <div className="num-after onovo-text-white"> {t("M")} </div>
                <div className="label"> {t("Lines of code")} </div>
              </div>
            </div>
          </div>

          {/* Video */}
          {/* <div className="onovo-video" data-onovo-overlay data-onovo-scroll>
            <div
              className="image"
              onClick={(e) => clickedVideoButton(e)}
              style={{ backgroundImage: "url(/images/hero-digital-1.jpg)" }}
            />
            <iframe
              className="js-video-iframe"
              data-src="https://www.youtube.com/embed/Gu6z6kIukgg?showinfo=0&rel=0&autoplay=1"
            ></iframe>
            <div
              className="play onovo-circle-text"
              onClick={(e) => clickedVideoButton(e)}
            >
              <div className="arrow" />
              <div className="label onovo-text-black onovo-circle-text-label">
                {" "}
                Play Video - Play Video - Play Video -{" "}
              </div>
            </div>
          </div> */}

          {/* Description */}
          <div className="row gap-top-100">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <h5 className="text-uppercase">{t("about.our-mission")}</h5>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
              {t("about.mission")}
              <br /> <br />
            </div>
          </div>

          {/* Description */}
          <div className="row gap-top-60">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <h5 className="text-uppercase">{t("about.our-goal")}</h5>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
              {t("about.goal")}
            </div>
          </div>

          {/* Gallery */}
          {/* <div className="row gap-top-100">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <a href="/images/posts1.jpg" className="mfp-image">
                <img src="/images/posts1-1024x683.jpg" alt="" />
              </a>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 gap-top-60">
              <a href="/images/posts2.jpg" className="mfp-image">
                <img src="/images/posts2-1024x683.jpg" alt="" />
              </a>
            </div>
          </div> */}
        </div>
      </section>

      <Services4Section emb_services={embeddedServices} dig_services={digitalServices} />

      {/* <AwardsSection /> */}

      {/* <HistorySlider /> */}

      <Team2Section team={props.team} />

      {/* <Testimonial2Slider /> */}

      <PartnersSection />
    </Layouts>
  );
};
export default About;

export async function getStaticProps() {
  const allTeam = getSortedTeamData();
  const allServices = getSortedServicesData('en');

  return {
    props: {
      team: allTeam,
      emb_services: Data1.items,
      dig_services: Data2.items,
    },
  };
}
