import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  SettingOutlined,
  QuestionOutlined,
  BellTwoTone,
  PoweroffOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  Drawer,
  Avatar,
  Card,
  Button,
  Popover,
  Tabs,
  Badge,
} from "antd";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<NavLink to="/">Admin</NavLink>, "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];
const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              alignContent: "end",
            }}
          >
            <div>
              <Avatar
                onClick={showDrawer}
                size="large"
                icon={<UserOutlined />}
                style={{ cursor: "pointer" }}
              />

              <Drawer
                placement="right"
                onClose={onClose}
                open={open}
                bodyStyle={{ background: "#021528", overflow: "hidden" }}
              >
                <Avatar
                  icon={<UserOutlined />}
                  size={150}
                  style={{
                    position: "absolute",
                    zIndex: 3,
                    marginLeft: "5.5rem",
                  }}
                />
                <Card
                  style={{
                    width: 330,
                    background: "#2c90ff",
                    height: 200,
                    marginTop: "2rem",
                    borderColor: "#2c90ff",
                  }}
                >
                  <p style={{ marginTop: "8rem", marginLeft: "4.5rem" }}>
                    Nombre del Usuario
                  </p>
                </Card>
                <Button
                  style={{
                    marginTop: "5rem",
                    backgroundColor: "#134C8B",
                    borderColor: "#134C8B",
                    width: 330,
                    textAlign: "start",
                  }}
                  icon={<SettingOutlined />}
                  size={"large"}
                >
                  Configuracion
                </Button>
                <Button
                  style={{
                    marginTop: "26px",
                    backgroundColor: "#134C8B",
                    borderColor: "#134C8B",
                    width: 330,
                    textAlign: "start",
                  }}
                  icon={<QuestionOutlined />}
                  size={"large"}
                >
                  ¿Necesitas ayuda?
                </Button>
                <div
                  style={{
                    color: "#2c90ff",
                    textAlign: "start",
                    marginTop: "5rem",
                  }}
                >
                  <Button
                    icon={
                      <PoweroffOutlined
                        style={{
                          marginRight: "5px",
                        }}
                      />
                    }
                    onClick={() => navigate("/")}
                    style={{
                      backgroundColor: "#021528",
                      color: "#2c90ff",
                      borderColor: "#021528",
                    }}
                  >
                    Salir
                  </Button>

                  <hr />
                  <p>Ultima conexion:</p>
                </div>
              </Drawer>

              <Popover
                placement="bottom"
                content={
                  <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab="Tab 1" key="1">
                      Content of Tab Pane 1
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Tab 2" key="2">
                      Content of Tab Pane 2
                    </Tabs.TabPane>
                  </Tabs>
                }
                trigger="click"
              >
                <Badge dot>
                  <BellTwoTone
                    style={{
                      marginLeft: "40px",
                      fontSize: 30,
                      cursor: "pointer",
                      top: "5px",
                      position: "relative",
                    }}
                  />
                </Badge>
              </Popover>
            </div>
          </Header>

          <Footer
            style={{
              textAlign: "center",
            }}
          ></Footer>
        </Layout>
      </Layout>
    </>
  );
};
export default Navbar;
