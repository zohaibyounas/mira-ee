import Layouts from "@layouts/Layouts";
import Accordion from "react-bootstrap/Accordion";

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";
import PartnersSection from "@components/sections/Partners";

const FAQ = () => {
  const Content = {
    items: [
      {
        heading:
          "What measures do you have in place to ensure the security of our data and information?",
        content:
          "We employ a multi-layered approach to data security, including encryption, access controls, and regular security audits. Our systems are designed to meet or exceed industry standards for data protection.",
      },
      {
        heading:
          "How do you ensure that our sensitive information is protected from unauthorized access?",
        content:
          "We utilize advanced authentication methods, such as  two-factor authentication to restrict access to sensitive information. Additionally, our security protocols are continuously monitored and updated to address emerging threats.",
      },
      {
        heading:
          "3.Can you provide details about your company's security protocols and certifications?",
        content:
          "Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Etiam ante ex fermentum litora aorquper conuauris ine odi. Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Et iam ante ex fermentum litora aorquper conuauris ine odi.",
      },
      {
        heading: "Figures and data representative of an organization's?",
        content:
          "Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Etiam ante ex fermentum litora aorquper conuauris ine odi. Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Et iam ante ex fermentum litora aorquper conuauris ine odi.",
      },
    ],
  };

  return (
    <Layouts header={2} footer={2} darkHeader>
      <PageBanner
        pageTitle={"Client’s FAQ"}
        pageDesc={"Solving business problems is an everyday."}
      />

      {/* Onovo Faq */}
      <section className="onovo-section gap-top-140 gap-bottom-140">
        <div className="container">
          {/* Faq items */}
          <Accordion>
            <div className="onovo-faq-items">
              {Content.items.map((item, key) => (
                <Accordion.Item
                  key={`faq-item-${key}`}
                  eventKey={`faq-acc-${key}`}
                >
                  <div className="onovo-faq-item onovo-collapse-item">
                    <Accordion.Header>
                      <h5 className="title onovo-collapse-btn">
                        <span>{item.heading}</span>
                        <i className="arrow" />
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="onovo-text">
                        <div
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                      </div>
                    </Accordion.Body>
                  </div>
                </Accordion.Item>
              ))}
            </div>
          </Accordion>
        </div>
      </section>

      <CallToActionSection />

      <PartnersSection paddingTop />
    </Layouts>
  );
};
export default FAQ;
