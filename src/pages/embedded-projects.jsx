import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedProjectsData } from "@/src/lib/embedded-projects";

import PageBanner from "@components/PageBanner";

const ProjectsGrid = dynamic(() => import("@components/ProjectsGrid"), {
  ssr: false,
});
const EmbedHero4Slider = dynamic(() => import("@components/sliders/Embed-Hero4"), {
  ssr: false,
});
const Portfolio = (props) => {
  return (
    <Layouts noFooter>
      <>
        <EmbedHero4Slider />
      </>
    </Layouts>
  );
};
export default Portfolio;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects,
    },
  };
}
