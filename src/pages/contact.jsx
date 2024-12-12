import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Accordion from "react-bootstrap/Accordion";
import appData from "@data/app.json";
import { Formik } from "formik";
import { useTranslate } from "../contexts/TranslateContext";

const Contact = () => {
  const { t } = useTranslate();

  const faqData = {
    title: t("Client’s FAQ"),
    subtitle: t("Solving Business Problems <br>is An Everyday"),
    items: [
      {
        title: t("Secure Management and Workforce?"),
        text: t(
          "Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Etiam ante ex fermentum litora aorquper conuauris ine odi. Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Et iam ante ex fermentum litora aorquper conuauris ine odi."
        ),
        Faqs: [
          {
            title: t(
              "Q1. What measures do you have in place to ensure the security of our data and information?"
            ),
            text: t(
              "We employ a multi-layered approach to data security, including encryption, access controls, and regular security audits. Our systems are designed to meet or exceed industry standards for data protection."
            ),
          },
          {
            title: t(
              "Q2. How do you ensure that our sensitive information is protected from unauthorized access?"
            ),
            text: t(
              "We utilize advanced authentication methods, such as two-factor authentication to restrict access to sensitive information. Additionally, our security protocols are continuously monitored and updated to address emerging threats."
            ),
          },
          {
            title: t(
              "Q3. Can you provide details about your company's security protocols and certifications?"
            ),
            text: t(
              "We adhere to rigorous security protocols based on industry best practices and standards, such as ISO 27001 and SOC 2. Our commitment to security is further demonstrated through our certifications and compliance with relevant regulatory requirements."
            ),
          },
          {
            title: t("Q4. How do you handle security breaches or incidents?"),
            text: t(
              "In the event of a security breach or incident, we have established incident response procedures to swiftly mitigate the threat and minimize the impact on our clients. Our dedicated team of security experts conducts thorough investigations and implements remediation measures to prevent future occurrences."
            ),
          },
          {
            title: t(
              "Q5. What steps do you take to ensure the safety and security of our employees and contractors?"
            ),
            text: t(
              "Employee and contractor safety is paramount to us. We provide comprehensive training on security awareness and emergency response procedures. Additionally, we conduct regular assessments of workplace safety and security measures to identify and address any vulnerabilities."
            ),
          },
          {
            title: t(
              "Q6. How often do you conduct security audits and assessments?"
            ),
            text: t(
              "We conduct regular security audits and assessments to evaluate the effectiveness of our security controls and identify areas for improvement. These audits are conducted by both internal teams and third-party security experts to ensure impartiality and thoroughness."
            ),
          },
          {
            title: t(
              "Q7. What role does employee training play in maintaining a secure work environment?"
            ),
            text: t(
              "Employee training is integral to maintaining a secure work environment. We provide ongoing training and awareness programs to educate employees about cybersecurity best practices, data handling procedures, and potential security threats."
            ),
          },
          {
            title: t(
              "Q8. How do you address physical security concerns at our facilities or workplaces?"
            ),
            text: t(
              "We implement comprehensive physical security measures, including access controls, surveillance systems, and perimeter security, to protect our facilities and workplaces. Our security personnel are trained to respond effectively to any security incidents or breaches."
            ),
          },
          {
            title: t(
              "Q9. Can you explain your approach to risk management and mitigation?"
            ),
            text: t(
              "Our approach to risk management involves identifying potential security risks, assessing their likelihood and potential impact, and implementing proactive measures to mitigate or eliminate these risks. We regularly review and update our risk management strategies to adapt to evolving threats."
            ),
          },
          {
            title: t(
              "Q10. What type of background checks or screening processes do you implement for your workforce?"
            ),
            text: t(
              "We conduct thorough background checks and screening processes for all employees and contractors, including criminal background checks, employment verification, and reference checks. These measures help ensure the integrity and trustworthiness of our workforce."
            ),
          },
        ],
      },
      {
        title: t("Project management and Tracking"),
        text: t(
          "Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Etiam ante ex fermentum litora aorquper conuauris ine odi. Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Et iam ante ex fermentum litora aorquper conuauris ine odi."
        ),
        Faqs: [
          {
            title: t("Q1. Which project management tools do you use?"),
            text: t(
              "We primarily use JIRA for project management, but we're also open to exploring other tools based on project requirements."
            ),
          },
          {
            title: t("Q2. How do you ensure effective project communication?"),
            text: t(
              "We maintain open channels of communication through regular meetings, emails, and collaboration tools like Slack or Microsoft Teams."
            ),
          },
          {
            title: t("Q3. What's your approach to project tracking?"),
            text: t(
              "We use a combination of Gantt charts, task boards, and progress reports to track project milestones and ensure timely delivery."
            ),
          },
          {
            title: t("Q4. How do you handle project deadlines?"),
            text: t(
              "We set realistic deadlines and regularly monitor progress to identify potential delays early. If needed, we adjust resources or scope to meet deadlines."
            ),
          },
          {
            title: t("Q5. What measures do you take to manage project risks?"),
            text: t(
              "We conduct risk assessments at the start of the project and develop mitigation strategies. Throughout the project, we monitor risks and take proactive measures to address them."
            ),
          },
          {
            title: t("Q6. How do you allocate resources for projects?"),
            text: t(
              "Resource allocation is based on project requirements, team availability, and skillsets. We strive for optimal resource utilization to maximize project efficiency."
            ),
          },
          {
            title: t("Q7. Can you describe your project planning process?"),
            text: t(
              "Our project planning process involves defining project goals, creating a project timeline, identifying tasks and dependencies, and assigning responsibilities."
            ),
          },
          {
            title: t("Q8. What metrics do you use to measure project success?"),
            text: t(
              "We use metrics such as project completion time, budget adherence, stakeholder satisfaction, and quality of deliverables to gauge project success."
            ),
          },
          {
            title: t("Q9. How do you adapt to changes during a project?"),
            text: t(
              "We maintain flexibility in our project plans and are prepared to adjust timelines, resources, or scope as needed to accommodate changes and maintain project momentum."
            ),
          },
          {
            title: t(
              "Q10. What role does collaboration play in project management?"
            ),
            text: t(
              "Collaboration is essential for successful project management as it fosters teamwork, facilitates communication, and enables efficient problem-solving and decision-making. We prioritize collaboration among team members and stakeholders throughout the project lifecycle."
            ),
          },
        ],
      },
    ],
  };

  return (
    <Layouts header={2} darkHeader>
      <PageBanner
        pageTitle={t("Contact Us")}
        pageDesc={t(
          "Have ideas for your business? Let’s build something awesome together"
        )}
      />

      {/* Onovo Contact Info */}
      <section className="onovo-section gap-top-140">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
              {/* Heading */}
              <div className="onovo-text gap-bottom-40">
                <h4>{t("Send Us A Message")}</h4>
                {t(
                  "Then let us know about it and we can see what we can do to help"
                )}
              </div>

              {/* Form */}
              <div className="onovo-form">
                <Formik
                  initialValues={{ email: "", name: "", tel: "", message: "" }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = "Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = t("Invalid email address");
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    const form = document.getElementById("contactForm");
                    const status = document.getElementById("contactFormStatus");
                    const data = new FormData();

                    data.append("name", values.name);
                    data.append("tel", values.tel);
                    data.append("email", values.email);
                    data.append("message", values.message);

                    fetch(form.action, {
                      method: "POST",
                      body: data,
                      headers: {
                        Accept: "application/json",
                      },
                    })
                      .then((response) => {
                        if (response.ok) {
                          status.innerHTML = t("Thanks for your submission!");
                          form.reset();
                        } else {
                          response.json().then((data) => {
                            if (Object.hasOwn(data, "errors")) {
                              status.innerHTML = data["errors"]
                                .map((error) => error["message"])
                                .join(", ");
                            } else {
                              status.innerHTML = t(
                                "Oops! There was a problem submitting your form"
                              );
                            }
                          });
                        }
                      })
                      .catch((error) => {
                        status.innerHTML = t(
                          "Oops! There was a problem submitting your form"
                        );
                      });

                    setSubmitting(false);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                    <form
                      onSubmit={handleSubmit}
                      id="contactForm"
                      action={appData.settings.formspreeURL}
                      className="cform"
                      method="post"
                    >
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <input
                              placeholder={t("Full Name")}
                              type="text"
                              name="name"
                              required="required"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={t(values.name)}
                            />
                          </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <input
                              placeholder={t("Email Address")}
                              type="email"
                              name="email"
                              required="required"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                            />
                          </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <input
                              placeholder={t("Phone Number")}
                              type="tel"
                              name="tel"
                              required="required"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={t(values.tel)}
                            />
                          </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <textarea
                              placeholder={t("Message")}
                              name="message"
                              required="required"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={t(values.message)}
                            />
                          </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <button
                              type="submit"
                              className="onovo-btn onovo-hover-btn"
                            >
                              <span>{t("Send Message")}</span>
                            </button>
                          </p>
                        </div>
                      </div>

                      <div
                        className="form-status alert-success"
                        id="contactFormStatus"
                      />
                    </form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
              {/* Contact Info */}
              <div className="onovo-contact-info onovo-text-white">
                <ul>
                  <li>
                    <h5>{t("Contact Info")}</h5>
                    <a
                      href="tel:+10204302973"
                      className="onovo-lnk lnk--white"
                      target="_blank"
                    >
                      +49 1522 6426128
                    </a>
                    <br />
                    <a
                      href="mailto:username@domain.com"
                      className="onovo-lnk lnk--white"
                      target="_blank"
                    >
                      info@mira-dev.de
                    </a>

                    <div
                      className="onovo-social-1 onovo-social-active"
                      style={{ marginTop: "10px" }}
                    >
                      <ul>
                        {appData.social.map((item, key) => (
                          <li key={`contact-social-item-${key}`}>
                            <a
                              href={item.link}
                              target="_blank"
                              className="onovo-social-link onovo-hover-2"
                              title={item.title}
                            >
                              <i className={`icon ${item.icon}`} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                  <li>
                    <h5>{t("Kiel")}</h5>
                    <div>{t("Waitzstraße 92 24118 Kiel")}</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onovo Faq */}
      <section className="onovo-section gap-top-140">
        <div className="container">
          {/* Heading */}
          <div className="onovo-heading align-center gap-bottom-40">
            <div className="onovo-subtitle-1">
              <span>{t(faqData.title)}</span>
            </div>
            <h2 className="onovo-title-2">
              <span dangerouslySetInnerHTML={{ __html: t(faqData.subtitle) }} />
            </h2>
          </div>

          {/* Faq items */}
          <div className="onovo-faq-items">
            <Accordion defaultActiveKey="faq-acc-0">
              {faqData.items.map((item, key) => (
                <Accordion.Item
                  key={`faq-item-${key}`}
                  eventKey={`faq-acc-${key}`}
                >
                  <div
                    key={`faq-item-${key}`}
                    className="onovo-faq-item onovo-collapse-item"
                  >
                    <Accordion.Header>
                      <h5 className="title onovo-collapse-btn">
                        <span>{t(item.title)}</span>
                        <i className="arrow" />
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      {item.Faqs.map((q, key) => {
                        return (
                          <div className="onovo-text">
                            <h6>{t(q.title)}</h6>
                            <p>{t(q.text)}</p>
                          </div>
                        );
                      })}
                    </Accordion.Body>
                  </div>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Contact;
