import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Button, Checkbox, Form, Input, message, Space } from "antd";

function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    fetch("http://localhost:3050/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usuario: email,
        clave: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="usuario"
        rules={[
          {
            type: "text",
            required: true,
            message: "Email no valido",
          },
        ]}
      >
        <Input onChange={setEmail} />
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
        <Input.Password onChange={setPassword} />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
export default App;
