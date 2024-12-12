import { useTranslate } from "@/src/contexts/TranslateContext";
import Data from "@data/sections/partners.json";

const PartnersSection = ({ paddingTop }) => {
  const { t } = useTranslate();

  return (
    <>
      {/* Onovo Brands */}
      <section
        className={
          paddingTop ? "onovo-section gap-top-140" : "onovo-section gap-top-140"
        }
      >
        <div className="container">
          {/* Heading */}
          <div className="onovo-heading gap-bottom-40">
            <div className="onovo-subtitle-1">
              <span dangerouslySetInnerHTML={{ __html: t(Data.subtitle) }} />
            </div>
            <h2 className="onovo-title-2" style={{fontSize: '40px'}}>
              <span dangerouslySetInnerHTML={{ __html: t(Data.title) }} />
            </h2>
          </div>

          {/* Brands items */}
          <div className="row gap-row justify-content-center">
            {Data.items.map((item, key) => (
              <div
                key={`partners-item-${key}`}
                className="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3"
              >
                <div
                  className="onovo-brands onovo-hover-3 onovo-hover-label"
                  data-onovo-overlay
                  data-onovo-scroll
                >
                  <a target="_blank" href={item.link}>
                    <span className="image">
                      <img
                        decoding="async"
                        src={item.image}
                        width="285"
                        height="200"
                        alt={t(item.alt)}
                      />
                    </span>
                    <span className="label onovo-white-black">
                      {t("Visit Website")}
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersSection;
