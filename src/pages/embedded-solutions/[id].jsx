import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";
import appData from "@data/app.json";
import { Formik } from "formik";
import Data from "@data/sections/embedded-services.json";
// import {
//   getAllServicesIds,
//   getServiceData,
//   getSortedServicesData,
// } from "@/src/lib/embedded-services";
import { useRouter } from 'next/router';
import { useTranslate } from "@/src/contexts/TranslateContext";
import { useEffect, useState } from "react";



const ServiceDetail = () => {
  const [postData, setPostData] = useState(null);
  const [services, setServices] = useState(null);
  const [error, setError] = useState(null);
  const [res1, setRes] = useState(null)
  const router = useRouter();
  const { id } = router.query; // Get the dynamic parameters 

  const { t, i18n,language } = useTranslate(); // Ensure you have access to i18n or equivalent



  useEffect(() => {
    if (!id) return; // Avoid running the fetch when id is not available
    
    const fetchServiceData = async () => {
      try {
        const res = await fetch(`/api/EmbedServiceData/${id}?language=${language || 'en'}`, {
          method: 'GET', // Optional if the default method is GET
          cache: 'no-store'
        });
        
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setPostData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchServiceData();
  }, [id, language]); // Dependency on id and language

  useEffect(() => {
    if (!id) return; // Avoid running the fetch when id is not available
    
    const fetchServiceData = async () => {
      try {
        const res = await fetch(`/api/EmbedAllServices/${id}?language=${language || 'en'}`, {
          method: 'GET', // Optional if the default method is GET
          cache: 'no-store'
        });
        
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setServices(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchServiceData();
  }, [id, language]); // Dependency on id and language

  let prev_id,
    next_id,
    prev_key,
    next_key = 0;

  services?.forEach(function (item, key) {
    if (item.id == postData?.id) {
      prev_key = key - 1;
      next_key = key + 1;
    }
  });

  services?.forEach(function (item, key) {
    if (key == prev_key) {
      prev_id = item.id;
    }
    if (key == next_key) {
      next_id = item.id;
    }
  });

  if (!router.isReady) {
    return <div>Loading...</div>;  // You can show a loading state until the router is ready
  }

  const serviceTitles = services?.map(service => ({
    id: service.id,   // Store the service id
    title: service.title // Store the service title
  }));

  console.log(language, postData, services)


  return (
    <Layouts header={2} footer={2} darkHeader>
      <PageBanner pageTitle={postData?.title} pageDesc={postData?.short} />

      {/* Onovo Service Detail */}
      <section className="onovo-section gap-top-140">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              {/* Image */}
              <div className="gap-bottom-50">
                <img src={postData?.image} alt={postData?.title} />
              </div>

              {postData?.contentHtml != "" && (
                <div className="onovo-text">
                  <div
                    dangerouslySetInnerHTML={{ __html: postData?.contentHtml }}
                  />
                </div>
              )}

              {typeof postData?.additional != "undefined" && (
                <>
                  {postData?.additional.enabled == 1 && (
                    <div className="onovo-text gap-top-50">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: postData?.additional.content,
                        }}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              {/* Service menu */}
              <div className="onovo-service-item onovo-service-no-icon gap-bottom-40">
                <div className="onovo-service-item-inner onovo-hover-3 onovo-hover-black">
                  <h5 className="title">
                    <span data-splitting data-onovo-scroll>
                      {t("Services List")}
                    </span>
                  </h5>
                  <div className="list">
                    <ul>
                      {serviceTitles?.map((item, key) => (
                        <li key={`services-item-${key}`}>
                          <Link
                            className="onovo-lnk"
                            href={`/embedded-solutions/${item.id}`}
                          >
                            <span data-splitting data-onovo-scroll>
                              {item.title || id}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Onovo Form */}
              <div className="onovo-form-box onovo-text-white">
              <h5>{t("Send Us A Message")}</h5>
              <p>{t("Feel some love, to see what we can do....!")}</p>
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
                      errors.email = "Invalid email address";
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
                          status.innerHTML = "Thanks for your submission!";
                          form.reset();
                        } else {
                          response.json().then((data) => {
                            if (Object.hasOwn(data, "errors")) {
                              status.innerHTML = data["errors"]
                                .map((error) => error["message"])
                                .join(", ");
                            } else {
                              status.innerHTML =
                                "Oops! There was a problem submitting your form";
                            }
                          });
                        }
                      })
                      .catch((error) => {
                        status.innerHTML =
                          "Oops! There was a problem submitting your form";
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
                              size="40"
                              placeholder={t("Full Name")}
                              type="text"
                              name="name"
                              required="required"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
                            />
                          </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <input
                              size="40"
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
                              size="40"
                              placeholder={t("Phone Number")}
                              type="tel"
                              name="tel"
                              required="required"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.tel}
                            />
                          </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <textarea
                              cols="40"
                              rows="10"
                              placeholder={t("Message")}
                              name="message"
                              required="required"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.message}
                            />
                          </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <button
                              type="submit"
                              className="onovo-btn onovo-hover-btn btn--active"
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
          </div>
        </div>
      </section>

      {/* Onovo Navs */}
      <section className="onovo-section">
        <div className="container">
          {/* Navigation */}
          <div className="onovo-page-navigation">
            <div className="onovo-page-navigation-content">
              {prev_id != 0 && prev_id != undefined && (
                <Link
                  href={`/embedded-solutions/${prev_id}`}
                  className="page-navigation__prev"
                >
                  <span className="onovo-prev onovo-hover-2">
                    <i />
                  </span>
                </Link>
              )}
              <Link href="/embedded-solutions" className="page-navigation__posts">
                <i className="fas fa-th" />
              </Link>
              {next_id != 0 && next_id != undefined && (
                <Link
                  href={`/embedded-solutions/${next_id}`}
                  className="page-navigation__next"
                >
                  <span className="onovo-next onovo-hover-2">
                    <i />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layouts>
    // <div>
    //   {postData?.title}
    // </div>
  );
};
export default ServiceDetail;


// export async function getStaticPaths() {
//   const languages = ['en', 'de']; // Add more languages as needed
  
//   const allPaths = [];

//   // Loop over each language and generate paths
//   for (const language of languages) {
//     const paths = getAllServicesIds(language);
//     allPaths.push(...paths); // Combine the paths
//   }

//   return {
//     paths: allPaths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params, locale }) {
//   const language = locale || params.language || "en";  // Use locale or language from params, default to 'en'

//   console.log(locale,params.language)
  
//   const postData = await getServiceData(params.id, language);
//   const allServices = getSortedServicesData(language);
//   const serviceDetail = Data.items.find((item) => item.id === params.id);

  // return {
  //   props: {
  //     serviceDetail,
  //     postData,
  //     services: allServices,
  //     language, // Pass language to the page as a prop
  //   },
  // };
// }


