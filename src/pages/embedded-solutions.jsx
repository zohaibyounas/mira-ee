import { useState } from "react";

import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Link from "next/link";

import { getSortedServicesData } from "@/src/lib/embedded-services";
import Data from "@data/sections/embedded-services.json";
import Services2Section from "@components/sections/Services2";
import CountersSection from "@components/sections/Counters";
import VideoSection from "@components/sections/Video";
import CallToActionSection from "@components/sections/CallToAction";
import PartnersSection from "@components/sections/Partners";
import ServicesSection from "../components/sections/Embed-Services";
import { useTranslate } from "../contexts/TranslateContext";
// import { useRouter } from 'next/router';
const Emb_Services = (props) => {
  const { t, i18n } = useTranslate(); // Ensure you have access to `i18n` or equivalent
  const embeddedServices = i18n.t("embedded_services.items", { returnObjects: true });
  // console.log(embeddedServices)
  // const router = useRouter();
  // const { id } = router.query; // Get the dynamic parameters
  // console.log("router:",router)
  return (
    <Layouts header={2} footer={2} darkHeader>
      <PageBanner
        pageTitle={t("Our Services")}
        pageDesc={t("Our values and vaulted us to the top of our industry.")}
      />

      <ServicesSection paddingtop />

      <CountersSection />

      {/* <VideoSection /> */}

      {/* Onovo Services */}
      <section className="onovo-section gap-top-140 gap-bottom-140">
        <div className="container">
          {/* Heading */}
          <div className="onovo-heading gap-bottom-40">
            <div className="onovo-subtitle-1">
              <span>{t("What we do")}</span>
            </div>
            <h2 className="onovo-title-2">
              <span>{t("We’re a full-service agency")}</span>
            </h2>
          </div>

          {/* Services items */}
          <div className="onovo-services-list">
            {embeddedServices.map((item, key) => (
              <div
                key={`services-item-${key}`}
                className="onovo-service-item-list"
              >
                <Link href={`/services/${item.id}`}>
                  <div className="onovo-service-item-list-inner">
                    <div className="image onovo-hover-1">
                      <img src={item.image} alt={t(item.title)} />
                    </div>
                    <div className="num">
                      <span> 0{key + 1}. </span>
                    </div>
                    <h5 className="title">
                      <span>{t(item.title)}</span>
                    </h5>
                    <div className="onovo-text">
                      <div>
                        <p>{t(item.text)}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToActionSection />

      <PartnersSection paddingTop />
    </Layouts>
  );
};
export default Emb_Services;

export async function getStaticProps() {
  const allServices = getSortedServicesData('en');

  return {
    props: {
      services: Data.items,
    },
  };
}
