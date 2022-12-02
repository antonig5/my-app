import React, { useEffect, useContext, useState } from "react";
import userContext from "../../context/User/UserContext";
import { Link, Navigate } from "react-router-dom";
import "antd/dist/antd.css";
import "../../components/css/antd.css";
import Logo from "../../img/logo.png";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Form,
  Input,
  message,
  Typography,
  Col,
  Row,
  Image,
} from "antd";
const { Title } = Typography;

const Login = () => {
  const UserContext = useContext(userContext);
  const [valores, setValores] = useState({ username: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3040/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        usuario: valores.username,
        clave: valores.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.iderror == 2) {
          message.error(data.mensaje);
        } else {
          UserContext.getUsers(data);
        }
      });
  };

  if (UserContext.users.token) {
    return <Navigate to="/admin" />;
  }

  return (
    <>
      <Row>
        <Col span={12}>
          <Title style={{ fontSize: 100, marginLeft: 152, marginTop: 100 }}>
            LOGIN
          </Title>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onSubmitCapture={handleSubmit}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Usuario"
                value={valores.username}
                onChange={(e) =>
                  setValores({ ...valores, username: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Contraseña"
                value={valores.password}
                onChange={(e) =>
                  setValores({ ...valores, password: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item>
              <Link to="/reset">¿Olvidaste tu contraseña?</Link>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Iniciar Sesion
              </Button>
              O <a href="">registrate </a>
            </Form.Item>
          </Form>
        </Col>

        <Col span={12}>
          <Image width={666} src={Logo} />
        </Col>
      </Row>
    </>
  );
};
export default Login;
