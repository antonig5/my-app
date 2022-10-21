import React, { useEffect, useContext } from "react";
import userContext from "../../context/User/UserContext";
import "antd/dist/antd.css";
import "../../index.css";
import { Button, Checkbox, Form, Input, message, Space } from "antd";

function Login() {
  // const [email, setEmail] = useState({});
  //const [password, setPassword] = useState({});

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const UserContext = useContext(userContext);
  useEffect(() => {
    UserContext.getUsers();
  }, []);

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
        <Input />
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
        <Input.Password />
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
export default Login;
