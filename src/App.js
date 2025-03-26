import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Layout, Menu, Button, Drawer } from "antd";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contacts";
import WavyBackground from "./pages/WavyBackground";
import './App.css'

const { Header, Content, Footer } = Layout;

const Navbar = () => {
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState(location.pathname);

  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location]);

  return (
    <Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#001529" }}>
      <div style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
        My Portfolio
      </div>

      <Menu theme="dark" mode="horizontal" selectedKeys={[selectedKey]} style={{ flex: 1, justifyContent: "center" }}>
        <Menu.Item key="/" onClick={() => setSelectedKey("/")}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/projects" onClick={() => setSelectedKey("/projects")}>
          <Link to="/projects">Projects</Link>
        </Menu.Item>
        <Menu.Item key="/contact" onClick={() => setSelectedKey("/contact")}>
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
      <WavyBackground />
        <Navbar />
        <Content style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center", background: "#f0f2f5" }}>
          Swetha Tanguturu © {new Date().getFullYear()}
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
