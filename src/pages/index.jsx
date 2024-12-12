import React from "react";
import { useEffect } from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@/src/lib/embedded-projects";
import { getSortedTeamData } from "@library/team";

import { circleText } from "@common/utilits";

//import HeroSection from "@components/sections/Hero";
import ServicesSection from "@components/sections/Embed-Services";
import AboutSection from "@components/sections/About";
import ShowcaseSection from "@components/sections/Showcase";
import TeamSection from "@components/sections/Team";
import VideoSection from "@components/sections/Video";
import CountersSection from "@components/sections/Counters";
import CallToActionSection from "@components/sections/CallToAction";
import LatestPostsSection from "@components/sections/LatestPosts";
import PartnersSection from "@components/sections/Partners";

const HeroSection = dynamic(() => import("@components/sliders/Hero2"), {
  ssr: false,
});
const TickerSlider = dynamic(() => import("@/src/components/sliders/DoYouKnow"), {
  ssr: false,
});
const TestimonialSlider = dynamic(
  () => import("@components/sliders/Testimonial"),
  { ssr: false }
);

const Home1 = (props) => {
  useEffect(() => {
    circleText();
  }, []);

  return (
    <Layouts header={2} footer={2} darkHeader>
      <>
        <HeroSection />
        <AboutSection />
        {/* <ServicesSection /> */}
        <TickerSlider />
        {/* <ShowcaseSection projects={props.projects} /> */}
        <TeamSection team={props.team} />
        <TestimonialSlider />
        {/* <VideoSection /> */}
        {/* <CountersSection /> */}
        <CallToActionSection />
        {/* <LatestPostsSection posts={props.posts} /> */}
        <PartnersSection />
      </>
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  const allProjects = getSortedProjectsData();
  const allTeam = getSortedTeamData();

  return {
    props: {
      posts: allPosts,
      projects: allProjects,
      team: allTeam,
    },
  };
}
