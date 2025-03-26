import React from "react";
import { motion } from "framer-motion";
import { Card, Row, Col, Button, Tag } from "antd";

const projects = [
  {
    title: "Credit Transfer System",
    client: "Eastern Illinois University",
    description: "Developed a dynamic credit transfer web app, improving processing efficiency by 40% and boosting student conversion rates by 25%.",
    technologies: ["React.js", "Next.js", "Prisma", "MongoDB", "OAuth2"],
    link: "#",
  },
  {
    title: "Mercedes DuKE Platform Migration",
    client: "IBM - Mercedes",
    description: "Migrated a legacy system to a modern React.js platform, reducing API response times by 15% and increasing user satisfaction by 25%.",
    technologies: ["React.js", "Redux", "Spring Boot", "Microservices", "AWS"],
    link: "#",
  },
  {
    title: "Admin Dashboard & UI Components",
    client: "IBM - Mercedes",
    description: "Developed reusable UI components and dashboards using React, Material UI, and TypeScript, improving developer efficiency and workflow by 30%.",
    technologies: ["React.js", "Material UI", "TypeScript", "Styled Components"],
    link: "#",
  },
  {
    title: "Banking UI Enhancement",
    client: "Accenture",
    description: "Designed a responsive banking UI, improving customer engagement by 15% and ensuring brand consistency for NatWest Group.",
    technologies: ["React.js", "Bootstrap", "AEM", "Node.js", "MongoDB"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ padding: "20px" }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>My Projects</h2>
      <Row gutter={[16, 16]} justify="center">
        {projects.map((project, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card
              title={project.title}
              bordered={true}
              style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", borderRadius: "10px" }}
            >
              <p><strong>Client:</strong> {project.client}</p>
              <p>{project.description}</p>
              <div style={{ marginBottom: "10px" }}>
                {project.technologies.map((tech, i) => (
                  <Tag key={i} color="blue" style={{ marginBottom: "5px" }}>{tech}</Tag>
                ))}
              </div>
              <Button type="primary" href={project.link} target="_blank">View Project</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
};

export default Projects;
