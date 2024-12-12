import Data from "@data/sections/do-you-know.json";
import Link from "next/link";
import { useEffect } from "react";

import { servicesHover } from "@common/utilits";
import { useTranslate } from "@/src/contexts/TranslateContext";

const DoYouKnowSection = ({ paddingtop = false }) => {
  const { t } = useTranslate();

  useEffect(() => {
    servicesHover();
  }, []);

  return (
    <>
      <section
        className={`onovo-section ${
          paddingtop ? "gap-top-140" : "gap-top-20"
        } gap-bottom-140`}
      >
        <div className="container-xl">
          <h3 className="text-center">{t("Do you know that?")}</h3>
          {/* Do you know items */}
          <div className="row">
            {Data.items.map((item, key) => (
              <div
                key={`services-item-${key}`}
                className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center"
              >
                <div
                  className={
                    key == 1
                      ? "onovo-service-grid-item onovo-hover-1 active active--default"
                      : "onovo-service-grid-item onovo-hover-1"
                  }
                >
                  <div className="image">
                    <img
                      decoding="async"
                      src={item.image}
                      alt={t(item.title)}
                    />
                  </div>
                  <h5 className="onovo-title-3">
                    <span>{t(item.title)}</span>
                  </h5>
                  <div className="onovo-text">
                    <div>
                      <p className="text-service">{t(item.text)}</p>
                    </div>
                  </div>
                  <div className="onovo-bubble">
                    <div className="bubble-1" />
                    <div className="bubble-2" />
                    <div className="bubble-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DoYouKnowSection;
