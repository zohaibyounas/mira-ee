import Link from "next/link";
import appData from "@data/app.json";
import { useEffect } from "react";
import ImageView from "@components/ImageView";
import { footerSticky } from "@common/utilits";
import { useTranslate } from "@/src/contexts/TranslateContext";

const Footer2 = () => {
  const { t } = useTranslate();

  useEffect(() => {
    footerSticky();
  }, []);

  return (
    <>
      {/* Footer */}
      <footer className="onovo-footer footer--white">
        <div className="footer--default">
          <div className="container">
            <div className="row gap-bottom-40">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* Heading */}
                <div className="onovo-heading">
                  <h2 className="onovo-title-2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: t(
                          "Let’s Chat! Let’s Build Something <br /> Awesome Together"
                        ),
                      }}
                    />
                  </h2>
                  <p>
                    <Link
                      href="/contact"
                      className="onovo-footer-lnk onovo-lnk lnk--revert"
                    >
                      {t("Lets Start Project")}
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="row gap-bottom-40">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2">
                {/* Logo */}
                <div
                  className="onovo-f-logo gap-bottom-40"
                  style={{ maxWidth: "70px" }}
                >
                  <Link href="/">
                    <img
                      src={appData.footer.logo.image}
                      alt={t(appData.footer.logo.alt)}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                {/* Description */}
                <div className="onovo-text">
                  {t(
                    "From the moment our company was founded, we have helped our clients find exceptional solutions"
                  )}
                  <strong>{t("for their businesses")}</strong>.
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 offset-lg-1">
                {/* Description */}
                <div className="onovo-text">
                  <ul className="onovo-footer-menu">
                    <li>
                      <Link href="/about">
                        <span className="onovo-lnk">{t("About Us")}</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/embedded-services">
                        <span className="onovo-lnk">{t("Embedded Solutions")}</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/digital-services">
                        <span className="onovo-lnk">{t("Digital Solutions")}</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/embedded-projects">
                        <span className="onovo-lnk">{t("Embedded Projects")}</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/digital-projects">
                        <span className="onovo-lnk">{t("Digital Projects")}</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <span className="onovo-lnk">{t("Contact Us")}</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/imprint">
                        <span className="onovo-lnk">{t("Imprint")}</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacyPolicy">
                        <span className="onovo-lnk">{t("Privacy Policy")}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2">
                {/* Description */}
                <div className="onovo-text">
                  {t("Waitzstraße 92 24118 Kiel")}
                  <p>
                    <a
                      className="onovo-lnk"
                      href="tel:+4915226426128"
                      target="blank"
                    >
                      +49 1522 6426128
                    </a>
                    <br />
                    <a
                      className="onovo-lnk"
                      href="mailto:info@mira-ee.de"
                      target="blank"
                    >
                      info@mira-ee.de
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center">
                {/* Copyright */}
                <div className="copyright">
                  <div
                    dangerouslySetInnerHTML={{ __html: t(appData.footer.copy) }}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-right">
                {/* Social*/}
                <div className="onovo-social-1 onovo-social-active">
                  <ul>
                    {appData.social.map((item, key) => (
                      <li key={`fsocial-item-${key}`}>
                        <a
                          className="onovo-social-link onovo-hover-2"
                          href={item.link}
                          title={t(item.title)}
                          target="_blank"
                        >
                          <i className={item.icon} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ImageView />
    </>
  );
};
export default Footer2;
