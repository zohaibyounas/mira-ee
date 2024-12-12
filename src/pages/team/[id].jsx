import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslate } from "@/src/contexts/TranslateContext";
import { useEffect, useState } from "react";

// import { getAllTeamIds, getTeamData } from "@library/team";
// import { getFeaturedProjectsData } from "@/src/lib/embedded-projects";
// import { getFeaturedServicesData } from "@/src/lib/embedded-services";

const TeamDetail = () => {
  const { t,language } = useTranslate(); // Ensure you have access to i18n or equivalent
  const router = useRouter();
  const { id } = router.query; // Get the dynamic parameters
  const [memberData, setMemberData] = useState(null);
  const [error, setError] = useState(null);
  // console.log(id)

  useEffect(() => {
    if (!id) return; // Avoid running the fetch when id is not available
    
    const fetchServiceData = async () => {
      try {
        const res = await fetch(`/api/MemberData/${id}?language=${language || 'en'}`);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setMemberData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchServiceData();
  }, [id, language]); // Dependency on id and language


  if (!router.isReady) {
    return <div>Loading...</div>;  // You can show a loading state until the router is ready
  }

  return (
    <Layouts header={2} footer={2} darkHeader>
      <PageBanner
        pageTitle={memberData?.name}
        pageDesc={t("Meet our creative company family")}
      />

      {/* Onovo Team Detail */}
      <section className="onovo-section gap-top-140 gap-bottom-140">
        <div className="container">
          {/* Team Card */}
          <div className="onovo-team-detail">
            <div className="row gap-140 gap-top-60 gap-bottom-0">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <img
                  loading="lazy"
                  src={memberData?.image}
                  className="team-detail-img"
                  alt={memberData?.name}
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center">
                <h2>
                  <span data-splitting data-onovo-scroll>
                    {memberData?.name}
                  </span>
                </h2>
                <h5>
                  <span data-splitting data-onovo-scroll>
                    {memberData?.role}
                  </span>
                </h5>
                {typeof memberData?.info != "undefined" && (
                  <div className="onovo-team-info">
                    <ul>
                      {memberData?.info.map((item, key) => (
                        <li key={`info-item-${key}`}>
                          <div className="title">
                            <span data-splitting data-onovo-scroll>
                              {item.label}
                            </span>
                          </div>
                          <div className="onovo-text">
                            <div data-splitting data-onovo-scroll>
                              <p>{item.value}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {typeof memberData?.social != "undefined" && (
                  <div className="onovo-social-1 mb-5">
                    <ul>
                      {memberData?.social.map((item, key) => (
                        <li key={`teamsocial-item-${key}`}>
                          <a
                            className="onovo-social-link onovo-hover-2"
                            href={item.link}
                            title={item.title}
                            target="_blank"
                          >
                            <i aria-hidden="true" className={item.icon} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {memberData?.contentHtml != "" && (
            <div className="onovo-text gap-top-140">
              <div dangerouslySetInnerHTML={{ __html: memberData?.contentHtml }} />
            </div>
          )}
        </div>
      </section>
    </Layouts>
  );
};
export default TeamDetail;

// export async function getStaticPaths() {
//   const paths = getAllTeamIds();

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const postData = await getTeamData(params.id);
//   // const projects = await getFeaturedProjectsData(postData.projects);
//   // const services = await getFeaturedServicesData(postData.services);

//   return {
//     props: {
//       postData
//     },
//   };
// }
