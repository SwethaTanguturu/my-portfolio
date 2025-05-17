import React from "react";
import { motion } from "framer-motion";
import { Card, Button, Avatar } from "antd";
import { LinkedinOutlined, GithubOutlined, MailOutlined } from "@ant-design/icons";
import profile from '../images/profile.jpg'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", textAlign: "center" }}
    >
      {/* Profile Card */}
      <Card
        style={{
          padding: "20px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
        }}
      >
        {/* Profile Avatar */}
        <Avatar
          size={100}
          src={profile}
          style={{ marginBottom: 20 }}
        />

        {/* Name & Title */}
        <h1 style={{ marginBottom: "10px" }}>Swetha Tanguturu</h1>
        <p style={{ fontSize: "16px", color: "#666" }}>
          Full-Stack Developer | React.js | Node.js | AWS | UI/UX
        </p>
        <p>I am a passionate Full-Stack Developer with over 6 years of experience crafting scalable, user-centric web applications. I specialize in React.js and Node.js, with a strong foundation in Spring Boot, AWS, and modern front-end architecture.

          I love building clean, accessible, and performant interfaces that not only work beautifully but also solve real problems. Whether it's engineering secure APIs, integrating cloud solutions, or optimizing UI/UX, I thrive at the intersection of design and technology.

          I'm someone who enjoys collaboration, values clean code, and always stays curious. Let's build something impactful together!</p>

        <Button
          type="primary"
          size="large"
          style={{ marginTop: "15px", borderRadius: "5px" }}
          href="/#/projects"
        >
          View My Work
        </Button>

        {/* Social Media Icons */}
        <div style={{ marginTop: "20px", fontSize: "24px" }}>
          <a href="https://www.linkedin.com/in/tanguturu-swetha-888b3a90" target="_blank" rel="noopener noreferrer" style={{ marginRight: 15 }} color="#1677ff">
            <LinkedinOutlined />
          </a>
          <a href="https://github.com/SwethaTanguturu" target="_blank" rel="noopener noreferrer" style={{ marginRight: 15 }}>
            <GithubOutlined />
          </a>
          <a href="mailto:swethatanguturu95@gmail.com">
            <MailOutlined />
          </a>
        </div>
      </Card>
    </motion.div>
  );
};

export default Home;
