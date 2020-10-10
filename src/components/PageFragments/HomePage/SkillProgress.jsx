import React from "react"
import { Row, Col } from "antd"
import ProgressBar from "../../Progress"

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={90} text="Spring Boot" />
        <ProgressBar percent={80} text="Spring Batch" />
        <ProgressBar percent={75} text="React" />
        <ProgressBar percent={80} text="GCP" />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={70} text="Python" />
        <ProgressBar percent={90} text="Postgres" />
        <ProgressBar percent={78} text="Kubernetes" />
        <ProgressBar percent={65} text="JavaScript" />
      </Col>
    </Row>
  </div>
)

export default SkillsProgress
