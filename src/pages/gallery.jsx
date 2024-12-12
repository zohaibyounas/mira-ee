import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedProjectsData } from "@/src/lib/embedded-projects";

import PageBanner from "@components/PageBanner";

const ProjectsGrid = dynamic(() => import("@components/ProjectsGrid"), {
  ssr: false,
});

const Gallery = (props) => {
  return (
    <Layouts header={2}>
      <PageBanner
        pageTitle={"Our Projects"}
        pageDesc={
          "Creative studio at the intersection of art, designed technology."
        }
      />

      <ProjectsGrid projects={props.projects} layout={"grid"} galleryMode />
    </Layouts>
  );
};
export default Gallery;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects,
    },
  };
}
