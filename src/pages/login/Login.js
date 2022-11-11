import React, { useEffect, useContext, useState } from "react";
import userContext from "../../context/User/UserContext";
import { Link, Navigate } from "react-router-dom";
import "antd/dist/antd.css";
import "../../index.css";
import { Button, Checkbox, Form, Input, message, Space } from "antd";
import FormItem from "antd/lib/form/FormItem";
import Admin from "../admin/Admin";

function Login(props) {
  const [valores, setValores] = useState({});

  const hola = (values) => {
    setValores(values);
  };

  console.log(valores);
  const error = () => {
    message.error(UserContext.users.mensaje);
  };

  const UserContext = useContext(userContext);
  useEffect(() => {}, []);

  if (UserContext.users.token) {
    return <Navigate to="/admin" />;
  } else {
    error();
  }

  return (
    <Form
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 8,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={hola}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="usuario"
        rules={[
          {
            type: "text",
            required: true,
            message: "Usuario no valido",
          },
        ]}
      >
        <Input id="usuario" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="clave"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password id="password" />
      </Form.Item>

      <FormItem
        wrapperCol={{
          offset: 4,
          span: 2,
        }}
      >
        <Link to="reset">Olvide mi contraseña</Link>
      </FormItem>

      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 8,
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
          onClick={() =>
            UserContext.getUsers(valores.usuario, valores.clave, valores.correo)
          }
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
export default Login;
