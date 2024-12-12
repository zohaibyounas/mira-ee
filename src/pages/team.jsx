import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Link from "next/link";
import CallToActionSection from "@components/sections/CallToAction";
import PartnersSection from "@components/sections/Partners";
import { useTranslate } from "../contexts/TranslateContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Team = () => {
  const { t, language } = useTranslate(); // Ensure you have access to i18n or equivalent
  const router = useRouter();
  const { id } = router.query; // Get the dynamic parameters
  const [teamData, setTeamData] = useState(null);
  const [error, setError] = useState(null);
  // console.log(id)

  // Avoid triggering fetch before the router is ready
  useEffect(() => {
    // if (!id) return; // Avoid running the fetch when id is not available
    
    const fetchServiceData = async () => {
      // console.log(`/api/TeamData/${id}?language=${language || 'en'}`)
      try {
        const res = await fetch(`/api/TeamData/${id}?language=${language || 'en'}`);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setTeamData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchServiceData();
  }, [id, language]); // Dependency on id and language

  if (!router.isReady || !teamData) {
    // Ensure this renders the same on both server and client
    return <div>Loading...</div>;  // You can show a loading state until the router is ready or data is fetched
  }

  // console.log(teamData[1]?.image)

  return (
    <Layouts header={2} footer={2} darkHeader>
      <PageBanner
        pageTitle={t("Our Team")}
        pageDesc={t("Meet our creative company family")}
      />

      {/* Onovo Team */}
      <section className="onovo-section gap-top-140 gap-bottom-140">
        <div className="container">
          {/* Team items */}
          <div className="row gap-row align-center">
            {teamData?.map((item, key) => (
              <div
                key={`team-item-${key}`}
                className="col-xs-12 col-sm-12 col-md-6 col-lg-4"
              >
                <div className="onovo-team-two">
                  <div className="onovo-team-two-item">
                    <div
                      className="image onovo-hover-3 onovo-hover-black-30"
                      data-onovo-overlay
                      data-onovo-scroll
                    >
                      <Link href={`/team/${item.id}`}>
                        <img src={item.image} alt={t(item.name)} />
                      </Link>
                      <div className="onovo-social-2">
                        <ul>
                          {item.social?.map((link, link_key) => (
                            <li key={`team-item-${key}-link-${link_key}`}>
                              <a
                                key={`teamsocial-item-${link_key}`}
                                className="onovo-social-link onovo-hover-2"
                                href={link.link}
                                title={t(link.title)}
                                target="_blank"
                              >
                                <i aria-hidden="true" className={link.icon} />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="desc">
                      <h5 className="title">
                        <Link href={`/team/${item.id}`} className="onovo-lnk">
                          <span data-splitting data-onovo-scroll>
                            {t(item.name)}
                          </span>
                        </Link>
                      </h5>
                      <div className="onovo-subtitle-1">
                        <span data-splitting data-onovo-scroll>
                          {t(item.role)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Button */}
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 align-center align-self-center">
              <Link
                className="onovo-btn-circle onovo-hover-2"
                href={"/contact"}
              >
                <i className="arrow">
                  <span />
                </i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection />

      <PartnersSection paddingTop />
    </Layouts>
  );
};
export default Team;

// export async function getStaticProps() {
//   const allTeam = getSortedTeamData();

//   return {
//     props: {
//       team: allTeam,
//     },
//   };
// }
