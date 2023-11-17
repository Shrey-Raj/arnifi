import React from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";

import InstagramPostCard from "./InstagramPostCard";
import MyHeader from "./Header";
import RightSideBar from "./RightSidebar";

const { Header, Content, Footer, Sider } = Layout;

import {
  HomeOutlined,
  SearchOutlined,
  CompassOutlined,
  PlayCircleOutlined,
  MessageOutlined,
  BellOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const items = [
  { key: "1", icon: <HomeOutlined />, label: "Home" },
  { key: "2", icon: <SearchOutlined />, label: "Search" },
  { key: "3", icon: <CompassOutlined />, label: "Explore" },
  { key: "4", icon: <PlayCircleOutlined />, label: "Reels" },
  { key: "5", icon: <MessageOutlined />, label: "Messages" },
  { key: "6", icon: <BellOutlined />, label: "Notifications" },
  { key: "7", icon: <PlusOutlined />, label: "Create" },
];

import logo from "../img/logo.png";

const App = () => {
  return (
    <Layout hasSider className="layout-slider">
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          background: "rgb(240, 242, 243)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "64px",
            background: "rgb(240, 242, 243)",
            color: "#000",
          }}
        >
          <span className="logo-name">
            <img
              src={logo}
              style={{
                width: 100,
              }}
            />
          </span>
        </div>
        <Menu
          // theme="dark"
          style={{ background: "rgb(240, 242, 243)", fontSize: "1.2rem" , padding:"20px"}}
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>

      <Content className="content">
        <MyHeader />
        <InstagramPostCard />
      </Content>
      <RightSideBar />
    </Layout>
  );
};

export default App;
