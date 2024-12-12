import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import { useTranslate } from "../contexts/TranslateContext";

const Imprint = (props) => {
  const { t } = useTranslate();

  return (
    <Layouts header={2} footer={2} darkHeader>
      <PageBanner pageTitle={t("Imprint")} />

      <div className="container" style={{ padding: "20px" }}>
        <div className="content">
          <h3>{t("Postal address")}</h3>
          <p>{t("Mira Elektronikentwicklung UG (limited liability)")}</p>
          <p>{t("Waitzstraße 92")}</p>
          <p>{t("24118 Kiel")}</p>
          <p>{t("Email: raza.abbas@mira-ee.de")}</p>
          <p>{t("Phone")}</p>
          <p>{t("Commercial register number")}</p>
          <p>{t("Responsible for content")}</p>
          <p>
            {t("The European Commission")}          </p>
          <p>
            {t("We are prepared to participate")}
          </p>
          <p>
            {t("The responsible body is the General Consumer")}
          </p>
          <h3 style={{ marginTop: "2rem" }}>{t("Disclaimer")}</h3>
          <p>
            {t("As a content provider")}
          </p>
          <p>
            {t("The operator of the homepage")}
          </p>
          <h3 style={{ marginTop: "2rem" }}>{t("Image Material:")}</h3>
          <p>
            {t("Used hero image from")}
            <a target="_blank" href="https://unsplash.com/">
              <u>Unsplash</u>
            </a>
          </p>
          <p>{t("Others are our own images")}</p>
          <h3 style={{ marginTop: "2rem" }}>{t("Legal Notice:")}</h3>
          <p>
            {t("All texts, graphics and images")}
          </p>
          <p>
            {t("Raza Abbas is not responsible for")}
          </p>
          <h3 style={{ marginTop: "2rem" }}>{t("Liability for links:")}</h3>
          <p>
            {t("Our offer contains links")}
          </p>
        </div>
      </div>
    </Layouts>
  );
};

export default Imprint;
