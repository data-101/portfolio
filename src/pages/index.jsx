import React from "react"
import { Layout } from "antd"
import Header from "../components/PageLayout/Header"

import SidebarWrapper from "../components/PageLayout/Sidebar"
import AboutMe from "../components/PageFragments/HomePage/AboutMe"
import Skills from "../components/PageFragments/HomePage/SkillProgress"
import WorkExperience from "../components/PageFragments/HomePage/WorkExperience"

export default () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <>
          <AboutMe />
          <Skills />
          <WorkExperience />
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
)
